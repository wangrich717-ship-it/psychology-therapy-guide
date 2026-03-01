// ===== 测试逻辑 =====
class TherapyQuiz {
  constructor() {
    this.currentQ = 0;
    this.answers = [];
    this.scores = {};
    this.started = false;

    // 初始化分数
    Object.keys(SCHOOLS).forEach(k => this.scores[k] = 0);
  }

  start() {
    this.started = true;
    this.currentQ = 0;
    this.answers = [];
    Object.keys(SCHOOLS).forEach(k => this.scores[k] = 0);

    document.getElementById('quiz-intro').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';
    document.querySelector('.quiz-progress').classList.add('visible');
    document.getElementById('quiz-result').classList.remove('active');

    this.renderQuestion();
    this.updateProgress();
  }

  renderQuestion() {
    const q = QUIZ_QUESTIONS[this.currentQ];
    const container = document.getElementById('quiz-questions');

    container.innerHTML = `
      <div class="quiz-card active" id="q-card">
        <div class="quiz-q-num">问题 ${this.currentQ + 1} / ${QUIZ_QUESTIONS.length}</div>
        <div class="quiz-q-text">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option ${this.answers[this.currentQ] === i ? 'selected' : ''}"
                    onclick="quiz.selectOption(${i})" data-index="${i}">
              ${opt.text}
            </button>
          `).join('')}
        </div>
        <div class="quiz-nav">
          <button class="btn-ghost" onclick="quiz.prev()" ${this.currentQ === 0 ? 'style="visibility:hidden"' : ''}>
            ← 上一题
          </button>
          <button class="btn btn-primary" id="next-btn"
                  onclick="quiz.next()"
                  ${this.answers[this.currentQ] === undefined ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>
            ${this.currentQ === QUIZ_QUESTIONS.length - 1 ? '查看结果 ✨' : '下一题 →'}
          </button>
        </div>
      </div>
    `;
  }

  selectOption(index) {
    this.answers[this.currentQ] = index;

    // 更新UI
    document.querySelectorAll('.quiz-option').forEach((el, i) => {
      el.classList.toggle('selected', i === index);
    });

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.style.opacity = '1';
      nextBtn.style.cursor = 'pointer';
    }
  }

  prev() {
    if (this.currentQ > 0) {
      this.currentQ--;
      this.renderQuestion();
      this.updateProgress();
    }
  }

  next() {
    if (this.answers[this.currentQ] === undefined) return;

    // 记录分数
    const q = QUIZ_QUESTIONS[this.currentQ];
    const selectedOpt = q.options[this.answers[this.currentQ]];
    Object.entries(selectedOpt.scores).forEach(([school, score]) => {
      this.scores[school] = (this.scores[school] || 0) + score;
    });

    if (this.currentQ < QUIZ_QUESTIONS.length - 1) {
      this.currentQ++;
      this.renderQuestion();
      this.updateProgress();
    } else {
      this.showResult();
    }
  }

  updateProgress() {
    const pct = ((this.currentQ) / QUIZ_QUESTIONS.length * 100).toFixed(0);
    document.getElementById('progress-text').textContent = `${this.currentQ + 1} / ${QUIZ_QUESTIONS.length}`;
    document.getElementById('progress-fill').style.width = `${pct}%`;
  }

  showResult() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.querySelector('.quiz-progress').classList.remove('visible');

    // 排序
    const sorted = Object.entries(this.scores)
      .sort((a, b) => b[1] - a[1])
      .filter(([_, s]) => s > 0);

    const topSchool = SCHOOLS[sorted[0][0]];
    const maxScore = sorted[0][1];

    // 建立结果HTML
    const resultEl = document.getElementById('quiz-result');
    resultEl.innerHTML = `
      <div class="result-header fade-in visible" style="border-top: 5px solid ${topSchool.color}">
        <span class="result-emoji">${topSchool.icon}</span>
        <div class="result-label">最适合你的疗愈方向</div>
        <div class="result-name">${topSchool.name}</div>
        <div class="result-subtitle">${topSchool.subtitle}</div>
        <div class="result-overview">${topSchool.overview}</div>
      </div>

      <div class="result-scores fade-in visible">
        <div class="scores-title">📊 你的匹配度分析</div>
        ${sorted.slice(0, 5).map(([id, score]) => {
          const s = SCHOOLS[id];
          const pct = Math.round(score / maxScore * 100);
          return `
            <div class="score-bar-item">
              <div class="score-bar-header">
                <span class="score-bar-name">${s.icon} ${s.name}</span>
                <span class="score-bar-val">${pct}%</span>
              </div>
              <div class="score-bar-bg">
                <div class="score-bar-fill" style="background:${s.color}" data-width="${pct}"></div>
              </div>
            </div>
          `;
        }).join('')}
        <p style="font-size:0.82rem;color:var(--text-muted);margin-top:1rem">
          ℹ️ 匹配度仅供参考，实际疗效取决于多种因素。建议与专业咨询师共同探讨适合你的方向。
        </p>
      </div>

      <div class="result-detail-card fade-in visible">
        <div class="result-detail-title">🌟 为什么适合你？</div>
        <div class="philosophy-box" style="border-left-color:${topSchool.color}">
          ${topSchool.philosophy}
        </div>
      </div>

      <div class="result-detail-card fade-in visible">
        <div class="result-detail-title">🔍 这种疗法如何工作？</div>
        <ul class="list-check" style="--modal-color:${topSchool.color}">
          ${topSchool.howItWorks.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <div class="result-detail-card fade-in visible">
        <div class="result-detail-title">⏱️ 需要多长时间？</div>
        <div class="duration-cards">
          ${Object.entries(topSchool.duration).map(([_, text]) => `
            <div class="duration-item">${text}</div>
          `).join('')}
        </div>
        <p class="duration-note">${topSchool.durationNote}</p>
      </div>

      <div class="result-detail-card fade-in visible">
        <div class="two-col">
          <div class="advantage-box">
            <div class="box-title">✅ 优势</div>
            <ul class="list-simple">
              ${topSchool.advantages.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
          <div class="disadvantage-box">
            <div class="box-title">⚠️ 局限</div>
            <ul class="list-simple">
              ${topSchool.disadvantages.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      ${sorted.length > 1 ? `
      <div class="result-detail-card fade-in visible">
        <div class="result-detail-title">💡 你也可以了解</div>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.5rem">
          ${sorted.slice(1, 4).map(([id]) => {
            const s = SCHOOLS[id];
            return `
              <button onclick="openModal('${id}')"
                      style="display:flex;align-items:center;gap:8px;padding:10px 18px;
                             border-radius:100px;border:2px solid ${s.color};
                             background:transparent;color:${s.color};
                             font-family:var(--font-body);font-size:0.9rem;
                             cursor:pointer;font-weight:500;
                             transition:all 0.3s"
                      onmouseover="this.style.background='${s.color}';this.style.color='white'"
                      onmouseout="this.style.background='transparent';this.style.color='${s.color}'">
                ${s.icon} ${s.name}
              </button>
            `;
          }).join('')}
        </div>
      </div>
      ` : ''}

      <div class="result-actions fade-in visible">
        <button class="btn btn-outline" onclick="quiz.restart()">重新测试</button>
        <button class="btn btn-primary" onclick="openModal('${topSchool.id}')">
          深入了解 ${topSchool.name}
        </button>
      </div>
    `;

    resultEl.classList.add('active');

    // 动画进度条
    setTimeout(() => {
      document.querySelectorAll('.score-bar-fill').forEach(el => {
        el.style.width = el.dataset.width + '%';
      });
    }, 300);

    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  restart() {
    Object.keys(SCHOOLS).forEach(k => this.scores[k] = 0);
    this.answers = [];
    this.currentQ = 0;

    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('quiz-intro').style.display = 'block';
    document.getElementById('quiz-questions').style.display = 'none';
    document.querySelector('.quiz-progress').classList.remove('visible');

    document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
  }
}

let quiz;

// ===== 模态框逻辑 =====
function openModal(schoolId) {
  const school = SCHOOLS[schoolId];
  if (!school) return;

  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');

  // 设置CSS变量
  modal.style.setProperty('--modal-color', school.color);

  modal.innerHTML = `
    <div class="modal-header" style="background:${school.gradient}">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <span class="modal-icon">${school.icon}</span>
      <div class="modal-title">${school.name}</div>
      <div class="modal-subtitle">${school.subtitle}</div>
    </div>
    <div class="modal-body">

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">什么是${school.name}？</div>
        <p style="color:var(--text-body);line-height:1.85;font-size:0.97rem">${school.overview}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">核心理念</div>
        <div class="philosophy-box" style="border-left-color:${school.color}">${school.philosophy}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">如何工作？</div>
        <ul class="list-check" style="--modal-color:${school.color}">
          ${school.howItWorks.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">适合哪些来访者？</div>
        <ul class="list-check" style="--modal-color:${school.color}">
          ${school.suitableFor.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">治疗时长</div>
        <div class="duration-cards">
          ${Object.entries(school.duration).map(([_, text]) => `
            <div class="duration-item">${text}</div>
          `).join('')}
        </div>
        <p class="duration-note">${school.durationNote}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">优势与局限</div>
        <div class="two-col">
          <div class="advantage-box">
            <div class="box-title">✅ 优势</div>
            <ul class="list-simple">
              ${school.advantages.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
          <div class="disadvantage-box">
            <div class="box-title">⚠️ 局限</div>
            <ul class="list-simple">
              ${school.disadvantages.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title" style="--modal-color:${school.color}">代表人物</div>
        <div class="rep-list">
          ${school.representative.map(r => `<span class="rep-tag">${r}</span>`).join('')}
        </div>
      </div>

      <div class="quote-box">${school.quote}</div>

    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== 滚动动画 =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  quiz = new TherapyQuiz();

  // 渲染流派卡片
  const grid = document.getElementById('schools-grid');
  if (grid) {
    Object.values(SCHOOLS).forEach((school, i) => {
      const card = document.createElement('div');
      card.className = 'school-card fade-in';
      card.style.setProperty('--card-gradient', school.gradient);
      card.style.animationDelay = `${i * 0.05}s`;
      card.onclick = () => openModal(school.id);

      const suitTags = school.suitableFor.slice(0, 3);
      card.innerHTML = `
        <span class="card-icon">${school.icon}</span>
        <div class="card-name">${school.name}</div>
        <div class="card-subtitle">${school.subtitle}</div>
        <div class="card-tags">
          ${suitTags.map(t => `<span class="tag">${t.length > 12 ? t.slice(0, 12) + '…' : t}</span>`).join('')}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // 点击遮罩关闭
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // Escape键关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // 导航高亮
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.section === current);
    });
  });

  // 滚动动画
  initScrollAnimations();
});

// 平滑滚动函数
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
