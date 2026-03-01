// ===== 测试逻辑（quiz.html 专用） =====

let currentQ = 0;
let answers = [];
let scores = {};

function initScores() {
  Object.keys(SCHOOLS).forEach(k => scores[k] = 0);
}

function startQuiz() {
  initScores();
  currentQ = 0;
  answers = [];

  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-progress').style.display = 'block';
  document.getElementById('quiz-questions').style.display = 'block';
  document.getElementById('quiz-result').classList.remove('active');

  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  const q = QUIZ_QUESTIONS[currentQ];
  const container = document.getElementById('quiz-questions');

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-q-num">问题 ${currentQ + 1} / ${QUIZ_QUESTIONS.length}</div>
      <div class="quiz-q-text">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option ${answers[currentQ] === i ? 'selected' : ''}"
                  onclick="selectOption(${i})">
            ${opt.text}
          </button>
        `).join('')}
      </div>
      <div class="quiz-nav">
        <button class="btn-ghost" onclick="prevQuestion()" ${currentQ === 0 ? 'style="visibility:hidden"' : ''}>
          ${icon('chevronLeft', 16)} 上一题
        </button>
        <button class="btn btn-primary" id="next-btn"
                onclick="nextQuestion()"
                ${answers[currentQ] === undefined ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>
          ${currentQ === QUIZ_QUESTIONS.length - 1
            ? `查看结果 ${icon('sparkles', 16)}`
            : `下一题 ${icon('chevronRight', 16)}`}
        </button>
      </div>
    </div>
  `;
}

function selectOption(index) {
  answers[currentQ] = index;
  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
  const btn = document.getElementById('next-btn');
  if (btn) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function nextQuestion() {
  if (answers[currentQ] === undefined) return;

  // 累计得分
  const q = QUIZ_QUESTIONS[currentQ];
  const selected = q.options[answers[currentQ]];
  Object.entries(selected.scores).forEach(([school, score]) => {
    scores[school] = (scores[school] || 0) + score;
  });

  if (currentQ < QUIZ_QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResult();
  }
}

function updateProgress() {
  const pct = Math.round(currentQ / QUIZ_QUESTIONS.length * 100);
  document.getElementById('progress-text').textContent = `${currentQ + 1} / ${QUIZ_QUESTIONS.length}`;
  document.getElementById('progress-fill').style.width = `${pct}%`;
}

function showResult() {
  document.getElementById('quiz-questions').style.display = 'none';
  document.getElementById('quiz-progress').style.display = 'none';

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .filter(([_, s]) => s > 0);

  if (sorted.length === 0) {
    document.getElementById('quiz-result').innerHTML = '<p style="text-align:center;padding:3rem">请完成所有题目后再查看结果。</p>';
    document.getElementById('quiz-result').classList.add('active');
    return;
  }

  const topId = sorted[0][0];
  const topSchool = SCHOOLS[topId];
  const maxScore = sorted[0][1];

  const resultEl = document.getElementById('quiz-result');
  resultEl.innerHTML = `
    <!-- 主结果 -->
    <div class="result-header" style="border-top:5px solid ${topSchool.color}">
      <div class="result-school-icon" style="background:${topSchool.gradient}">
        <span style="color:white">${icon(topSchool.icon, 36)}</span>
      </div>
      <div class="result-label">最适合你的疗愈方向</div>
      <div class="result-name">${topSchool.name}</div>
      <div class="result-subtitle">${topSchool.subtitle}</div>
      <div class="result-overview">${topSchool.overview}</div>
    </div>

    <!-- 匹配度分析 -->
    <div class="result-scores">
      <div class="scores-title">
        ${icon('barChart', 20)} 你的匹配度分析（前5名）
      </div>
      ${sorted.slice(0, 5).map(([id, score]) => {
        const s = SCHOOLS[id];
        const pct = Math.round(score / maxScore * 100);
        return `
          <div class="score-bar-item">
            <div class="score-bar-header">
              <span class="score-bar-name">${icon(s.icon, 16)} ${s.name}</span>
              <span class="score-bar-val">${pct}%</span>
            </div>
            <div class="score-bar-bg">
              <div class="score-bar-fill" style="background:${s.color}" data-width="${pct}"></div>
            </div>
          </div>
        `;
      }).join('')}
      <p style="font-size:0.82rem;color:var(--text-muted);margin-top:1rem;line-height:1.7">
        ${icon('alertTriangle', 14)} 匹配度仅供参考，实际疗效取决于多种因素，尤其是治疗关系的质量。建议与专业咨询师共同探讨适合你的方向。
      </p>
    </div>

    <!-- 核心理念 -->
    <div class="result-detail-card">
      <div class="result-detail-title">
        ${icon('lightbulb', 20)} 为什么可能适合你？
      </div>
      <div class="philosophy-box" style="border-left-color:${topSchool.color}">
        ${topSchool.philosophy}
      </div>
    </div>

    <!-- 如何工作 -->
    <div class="result-detail-card">
      <div class="result-detail-title">
        ${icon('layers', 20)} 这种疗法如何工作？
      </div>
      <ul class="list-check">
        ${topSchool.howItWorks.map(h => `
          <li>
            <span style="color:${topSchool.color};flex-shrink:0;margin-top:2px">${icon('check', 16)}</span>
            ${h}
          </li>
        `).join('')}
      </ul>
    </div>

    <!-- 时长 -->
    <div class="result-detail-card">
      <div class="result-detail-title">
        ${icon('clock', 20)} 大概需要多久？
      </div>
      <div class="duration-cards">
        ${Object.values(topSchool.duration).map(text => `<div class="duration-item">${text}</div>`).join('')}
      </div>
      <p class="duration-note">${topSchool.durationNote}</p>
    </div>

    <!-- 优劣势 -->
    <div class="result-detail-card">
      <div class="two-col">
        <div class="advantage-box">
          <div class="box-title">${icon('checkCircle', 16)} 优势</div>
          <ul class="list-simple">
            ${topSchool.advantages.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>
        <div class="disadvantage-box">
          <div class="box-title">${icon('alertTriangle', 16)} 局限</div>
          <ul class="list-simple">
            ${topSchool.disadvantages.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- 推荐书目 -->
    <div class="result-detail-card">
      <div class="result-detail-title">
        ${icon('bookOpen', 20)} 推荐书目
      </div>
      <div class="books-grid">
        ${topSchool.books.map(b => `
          <div class="book-item">
            <div class="book-title">${b.title}</div>
            <div class="book-author">${b.author}</div>
            <div class="book-desc">${b.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 其他高匹配流派 -->
    ${sorted.length > 1 ? `
    <div class="result-detail-card">
      <div class="result-detail-title">
        ${icon('share2', 20)} 你也可以了解这些流派
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.25rem">
        ${sorted.slice(1, 4).map(([id]) => {
          const s = SCHOOLS[id];
          return `
            <button onclick="openDetailModal('${id}')"
                    style="display:flex;align-items:center;gap:8px;padding:10px 18px;
                           border-radius:100px;border:2px solid ${s.color};
                           background:transparent;color:${s.color};
                           font-family:var(--font-body);font-size:0.9rem;
                           cursor:pointer;font-weight:500;transition:all 0.3s"
                    onmouseover="this.style.background='${s.color}';this.style.color='white'"
                    onmouseout="this.style.background='transparent';this.style.color='${s.color}'">
              <span>${icon(s.icon, 16)}</span> ${s.name}
            </button>
          `;
        }).join('')}
      </div>
    </div>
    ` : ''}

    <!-- 引用 -->
    <div class="result-detail-card" style="margin-bottom:0">
      <div class="quote-box">${topSchool.quote}</div>
    </div>

    <!-- 操作按钮 -->
    <div class="result-actions" style="margin-top:2rem">
      <button class="btn btn-outline" onclick="restartQuiz()">
        ${icon('refreshCw', 16)} 重新测试
      </button>
      <button class="btn btn-primary" onclick="openDetailModal('${topId}')">
        深入了解 ${topSchool.name}
      </button>
      <a href="index.html" class="btn btn-ghost" style="border:2px solid var(--border)">
        ${icon('arrowRight', 16)} 浏览全部流派
      </a>
    </div>
  `;

  resultEl.classList.add('active');

  // 动画进度条
  setTimeout(() => {
    document.querySelectorAll('.score-bar-fill').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 400);

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartQuiz() {
  initScores();
  answers = [];
  currentQ = 0;

  document.getElementById('quiz-result').classList.remove('active');
  document.getElementById('quiz-result').innerHTML = '';
  document.getElementById('quiz-start').style.display = 'block';
  document.getElementById('quiz-progress').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'none';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 流派详情模态框 =====
function openDetailModal(schoolId) {
  const school = SCHOOLS[schoolId];
  if (!school) return;
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');

  modal.innerHTML = `
    <div class="modal-header" style="background:${school.gradient}">
      <button class="modal-close" onclick="closeModal()" aria-label="关闭">
        ${icon('xIcon', 18)}
      </button>
      <div class="modal-icon-wrap">
        <span style="color:white">${icon(school.icon, 32)}</span>
      </div>
      <div class="modal-title">${school.name}</div>
      <div class="modal-subtitle">${school.subtitle}</div>
    </div>
    <div class="modal-body">

      <div class="modal-section">
        <div class="modal-section-title">
          <span class="title-bar" style="background:${school.color}"></span>
          什么是${school.name}？
        </div>
        <p style="color:var(--text-body);line-height:1.9;font-size:0.97rem">${school.overview}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <span class="title-bar" style="background:${school.color}"></span>
          核心理念
        </div>
        <div class="philosophy-box" style="border-left-color:${school.color}">${school.philosophy}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <span class="title-bar" style="background:${school.color}"></span>
          如何工作？
        </div>
        <ul class="list-check">
          ${school.howItWorks.map(h => `
            <li>
              <span class="check-icon" style="color:${school.color}">${icon('check', 16)}</span>
              ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <span class="title-bar" style="background:${school.color}"></span>
          治疗时长
        </div>
        <div class="duration-cards">
          ${Object.values(school.duration).map(text => `<div class="duration-item">${text}</div>`).join('')}
        </div>
        <p class="duration-note">${school.durationNote}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <span class="title-bar" style="background:${school.color}"></span>
          优势与局限
        </div>
        <div class="two-col">
          <div class="advantage-box">
            <div class="box-title">${icon('checkCircle', 16)} 优势</div>
            <ul class="list-simple">
              ${school.advantages.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
          <div class="disadvantage-box">
            <div class="box-title">${icon('alertTriangle', 16)} 局限</div>
            <ul class="list-simple">
              ${school.disadvantages.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <span class="title-bar" style="background:${school.color}"></span>
          <span style="color:${school.color}">${icon('bookOpen', 18)}</span>
          推荐书目
        </div>
        <div class="books-grid">
          ${school.books.map(b => `
            <div class="book-item">
              <div class="book-title">${b.title}</div>
              <div class="book-author">${b.author}</div>
              <div class="book-desc">${b.desc}</div>
            </div>
          `).join('')}
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

// 遮罩点击关闭
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-overlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
