// 心理咨询流派数据
const SCHOOLS = {
  psychodynamic: {
    id: 'psychodynamic',
    name: '精神动力学疗法',
    subtitle: '探索潜意识的深层根源',
    icon: 'waves',
    color: '#5B7BA8',
    gradient: 'linear-gradient(135deg, #5B7BA8, #7A9FC8)',
    overview: '精神动力学疗法源于弗洛伊德的精神分析，由埃里克森、温尼科特、科胡特等人不断发展演进。它相信我们当下的痛苦，往往根植于过去未被充分处理的经历与无意识的心理冲突。治疗不是修补症状，而是帮助你真正理解自己"为什么会这样"。',
    philosophy: '你的内心是一片深海。表面的波浪是你的行为与情绪，而深处的洋流——那些童年的经历、被压抑的感受、重复的关系模式——才是真正驱动你的力量。当你能够看见并理解这些深流，改变就自然而然地发生了。',
    howItWorks: [
      '通过自由联想、梦的分析等方式，探索无意识内容',
      '识别并理解重复出现的关系模式（移情与反移情）',
      '追溯童年经历如何塑造了现在的你，以及内化的客体关系',
      '将无意识的冲突带入意识层面，获得真正的心理领悟',
      '在安全的治疗关系中，重新体验和修复早期的关系创伤',
      '理解防御机制的作用，学会更健康的内在调节方式'
    ],
    suitableFor: [
      '反复在关系中遇到相似困境，却不知道为什么',
      '不明原因的长期情绪低落或内心空虚感',
      '童年有创伤、忽视或复杂的家庭背景',
      '对自己"为什么总是这样"感到困惑和无力',
      '人格层面的深层困扰，而非单一症状',
      '有强烈的自我探索动机和心理好奇心'
    ],
    duration: {
      short: '短程动力学：16-24次（约4-6个月）',
      standard: '标准疗程：1-3年，每周1-2次',
      long: '深度分析：3年以上，适合人格重构'
    },
    durationNote: '精神动力学治疗通常需要较长时间，因为它触及的是人格的深层结构，而非症状表面。但经过验证的短程版本同样有效，适合有明确目标的来访者。',
    advantages: [
      '带来深刻持久的人格改变，而非仅仅缓解症状',
      '帮助你真正理解自己，减少"为什么我总是这样"的困惑',
      '对复杂的、长期的心理问题效果显著',
      '改善人际关系的深层模式，影响广泛而持久',
      '提升自我觉察能力，形成终身受益的内省能力'
    ],
    disadvantages: [
      '需要较长时间才能看到效果，需要相当的耐心',
      '对急性危机或需要立即解决具体问题者，可能不是首选',
      '费用较高（长程治疗累计成本较大）',
      '需要较强的自我反思能力和语言表达能力',
      '过程中可能出现情绪波动，需要有一定的心理承受能力'
    ],
    representative: ['西格蒙德·弗洛伊德', '卡尔·荣格', '唐纳德·温尼科特', '梅拉妮·克莱因', '海因茨·科胡特（自体心理学）', '彼得·福纳吉（依恋理论）'],
    quote: '"哪里有本我，哪里就该有自我。" —— 西格蒙德·弗洛伊德',
    books: [
      { title: '《天才儿童的悲剧》', author: 'Alice Miller（爱丽丝·米勒）', desc: '探讨童年情感忽视如何在成年后持续影响我们，文字温柔而深刻' },
      { title: '《依恋》三部曲', author: 'John Bowlby（约翰·鲍尔比）', desc: '依恋理论奠基之作，理解亲密关系模式的必读经典' },
      { title: '《人格障碍的诊断与治疗》', author: 'Otto Kernberg（科恩伯格）', desc: '理解边缘与自恋人格的精神动力学视角，专业但值得一读' },
      { title: '《心理治疗师的问诊室》', author: 'Irvin Yalom（欧文·亚隆）', desc: '亚隆以小说形式呈现真实治疗历程，充满温度与洞见，适合所有人阅读' }
    ]
  },

  cbt: {
    id: 'cbt',
    name: '认知行为疗法（CBT）',
    subtitle: '改变思维，改变感受，改变行为',
    icon: 'layers',
    color: '#3D8A6E',
    gradient: 'linear-gradient(135deg, #3D8A6E, #5CAE8C)',
    overview: 'CBT是目前全球最广泛使用、研究证据最充分的心理治疗方法之一。它的核心理念是：不是事件本身让我们痛苦，而是我们对事件的解读方式。通过识别和改变认知扭曲，配合行为改变，我们可以系统地改善情绪和生活功能。',
    philosophy: '你的感受来自你的想法。当你在地铁上看到有人皱眉，你是觉得"他在生我的气"还是"他可能只是累了"？不同的解读，带来完全不同的感受。CBT教你成为自己思维的侦探——用证据来检验想法，而非被想法控制。',
    howItWorks: [
      '识别自动思维：那些一闪而过却强烈影响情绪的想法',
      '认知重构：用苏格拉底式提问检验这些想法是否有事实依据',
      '识别核心信念：深层的"我不够好""世界是危险的"等基本假设',
      '行为实验：在现实中检验和改变认知，打破回避循环',
      '暴露疗法：系统地、逐步地面对恐惧情境，重建安全感',
      '家庭作业：将课堂上的改变落实到日常真实生活中'
    ],
    suitableFor: [
      '焦虑障碍（广泛性焦虑、社交焦虑、恐慌症）',
      '抑郁症（轻至中度效果尤为显著）',
      '强迫症（OCD）',
      '特定恐惧症及广场恐惧',
      '进食障碍与身体意象问题',
      '偏好结构化、有明确目标的治疗方式'
    ],
    duration: {
      short: '聚焦症状：8-16次（2-4个月）',
      standard: '标准疗程：16-20次（4-5个月）',
      long: '复杂案例或人格议题：20-40次'
    },
    durationNote: 'CBT是相对短程、高效的治疗方法。多数明确问题可以在几个月内取得可量化的明显改善，是循证证据最强的疗法之一。',
    advantages: [
      '有海量科学研究支持，疗效经过严格临床验证',
      '相对短程高效，改变来得较为直接',
      '提供实用的技能和工具，治疗结束后仍可持续使用',
      '结构清晰，目标明确，来访者全程清楚知道在做什么',
      '对焦虑和抑郁的研究证据在所有疗法中最为充分'
    ],
    disadvantages: [
      '对深层人格问题或复杂早年创伤，可能不够深入',
      '需要来访者积极配合，认真完成家庭作业',
      '有时显得较为"技术性"，部分来访者感觉缺少人情温度',
      '主要聚焦当下，可能忽视深层的早年经历',
      '对某些复杂人格障碍或治疗动机低的来访者，效果有限'
    ],
    representative: ['阿伦·贝克（CBT创始人）', '阿尔伯特·艾利斯（理性情绪行为疗法）', '唐纳德·梅肯鲍姆（认知行为矫正）'],
    quote: '"人不是被事物所困扰，而是被对事物的看法所困扰。" —— 爱比克泰德（CBT思想之源）',
    books: [
      { title: '《伯恩斯新情绪疗法》', author: 'David Burns（大卫·伯恩斯）', desc: '全球销量超过500万册的CBT入门书，通俗易懂，自助效果突出，是入门首选' },
      { title: '《认知疗法：基础与应用》', author: 'Aaron Beck（阿伦·贝克）', desc: 'CBT创始人的权威著作，系统介绍认知疗法理论与实践' },
      { title: '《走出抑郁》', author: 'Mark Williams 等', desc: '基于正念认知疗法（MBCT），帮助防止抑郁复发，科学又温暖' },
      { title: '《焦虑症的家庭认知行为治疗》', author: 'Philip Kendall', desc: '聚焦具体操作，适合了解CBT如何在实践中一步步展开' }
    ]
  },

  humanistic: {
    id: 'humanistic',
    name: '人本主义疗法',
    subtitle: '相信你内在的成长力量',
    icon: 'sprout',
    color: '#A06840',
    gradient: 'linear-gradient(135deg, #A06840, #C4895A)',
    overview: '人本主义疗法由卡尔·罗杰斯创立，相信每个人都有向善、向好的内在潜能。治疗师不是专家或权威，而是一个真诚的同行者。在无条件积极关注的温暖氛围中，你可以放下防御，真正成为自己，找回被遮蔽的内在声音。',
    philosophy: '"每个人内心都有一粒种子，渴望生长。治疗不是修理你，而是给你阳光和水，让你自己开花。" 你不需要被改造，你需要被看见、被理解、被真正接纳——正是这种被接纳的体验，让真正的改变成为可能。',
    howItWorks: [
      '治疗师提供三个核心条件：真诚一致、无条件积极关注、共情理解',
      '来访者在高度安全的关系中自由探索自己的感受和想法',
      '通过被真正"看见"的体验，重建自尊和自我价值感',
      '聚焦此时此刻的内在体验，而非诊断和技术干预',
      '帮助来访者找回与自身真实感受的连接，不再与自己疏离',
      '澄清和发展来访者自己的价值观，而非接受外部标准'
    ],
    suitableFor: [
      '自我价值感低，习惯性贬低或否定自己',
      '长期压抑真实感受，不敢或不知道如何做自己',
      '渴望被真正理解和接纳，感到孤独',
      '在关系中总是讨好他人、失去自我',
      '寻找生命意义和方向，经历身份认同的困惑',
      '经历重大人生转折（失业、离婚、失去亲人）'
    ],
    duration: {
      short: '无固定框架，以来访者节奏为主',
      standard: '通常数月到1-2年不等',
      long: '深度成长工作可以持续更长时间'
    },
    durationNote: '人本主义治疗没有固定的时间框架，以来访者的内在节奏为准。关系的质量比疗程的长短更为重要，来访者拥有决定何时结束的自主权。',
    advantages: [
      '高度尊重来访者的自主性、独特性和自我决定权',
      '温暖、平等的治疗关系本身就具有深刻的疗愈力量',
      '不贴标签、不病理化，接纳来访者本来的样子',
      '帮助建立真实的自我认同，而非表演性的改变',
      '适用范围极广，几乎对所有人都有普遍的益处'
    ],
    disadvantages: [
      '对特定症状（如严重OCD、恐慌症发作）缺乏针对性干预技术',
      '进展可能较慢，不适合需要快速解决特定问题的来访者',
      '效果难以量化，系统性研究证据相对少于CBT',
      '对于危机状态（如急性自杀风险），需要结合更结构化的方法'
    ],
    representative: ['卡尔·罗杰斯（以人为中心疗法）', '亚伯拉罕·马斯洛（需求层次）', '罗洛·梅（存在主义-人本）', '尤金·根德林（聚焦疗法）'],
    quote: '"好奇怪，当我接纳了自己，我就可以改变了。" —— 卡尔·罗杰斯',
    books: [
      { title: '《成为一个人》', author: 'Carl Rogers（卡尔·罗杰斯）', desc: '人本主义的奠基之作，罗杰斯亲述治疗理念，读来如沐春风' },
      { title: '《存在主义心理治疗》', author: 'Irvin Yalom（欧文·亚隆）', desc: '从存在视角理解人的困境，亚隆的思想与人本主义高度共鸣，感人至深' },
      { title: '《聚焦》', author: 'Eugene Gendlin（根德林）', desc: '教你如何倾听身体内部的感受，找到改变的源头，简单而深刻' },
      { title: '《当尼采哭泣》', author: 'Irvin Yalom', desc: '以小说形式探讨心理治疗与人的成长，适合所有对人本关怀感兴趣的读者' }
    ]
  },

  act: {
    id: 'act',
    name: '接纳与承诺疗法（ACT）',
    subtitle: '接纳痛苦，活出价值',
    icon: 'compass',
    color: '#7063A8',
    gradient: 'linear-gradient(135deg, #7063A8, #9080C8)',
    overview: 'ACT是认知行为疗法的"第三浪潮"之一，由史蒂文·海斯创立。它的革命性在于：不试图消除痛苦，而是改变你与痛苦的关系。当你不再与内心的黑暗死磕，腾出了双手，你才能真正去追求你认为有意义的生活。',
    philosophy: '痛苦是生命的一部分，不是需要被消灭的敌人。ACT不问"怎样才能不痛"，而问"即使有痛，你最想活出怎样的人生？"这是一种根本性的态度转变——从控制感受，到带着感受前行。',
    howItWorks: [
      '正念觉察：以开放、好奇的态度观察当下的内心体验，不评判',
      '认知解离：与想法保持距离（"我有一个想法：我不够好"，而非"我不够好"）',
      '接纳：允许不舒服的感受自然存在，不做无效的内心挣扎',
      '以己为景：发展稳定的"观察自我"，不被想法和情绪淹没',
      '价值澄清：探索和明确对你真正重要的生命方向是什么',
      '承诺行动：即使有恐惧和痛苦，仍朝着价值方向采取行动'
    ],
    suitableFor: [
      '慢性疼痛或长期病症伴随的心理困扰',
      '与焦虑、抑郁长期"作战"却收效甚微，感到疲惫',
      '总是"等到状态好了再……"而不断错过生活',
      '对人生意义和方向感到迷失，活得没有活力',
      '完美主义导致的行动瘫痪和拖延',
      '慢性创伤后的心理重建'
    ],
    duration: {
      short: '聚焦技能训练：8-16次',
      standard: '标准疗程：20-24次',
      long: '深度价值探索：根据复杂程度延长'
    },
    durationNote: '对于明确的心理灵活性训练，ACT可以相对短程有效；对于更深层的价值探索和生活重建，可能需要更长时间持续。',
    advantages: [
      '不以"消除症状"为目标，减少来访者的自我批判和压力',
      '对慢性问题和传统CBT效果不佳的案例特别有帮助',
      '培养长期的心理韧性和灵活性，不只是解决眼前问题',
      '与正念整合，有充分的现代神经科学研究支持',
      '帮助来访者找到生命意义，改善整体生活质量'
    ],
    disadvantages: [
      '"接纳痛苦"的理念有时难以被来访者接受，初期阻力较大',
      '需要一定的抽象思维能力和坚持正念练习的意愿',
      '对于需要立即减轻急性症状的来访者，可能进展不够快',
      '理论概念较多（六边形模型），初期学习曲线较陡'
    ],
    representative: ['史蒂文·海斯（ACT创始人）', '凯利·威尔森', '罗宾·沃尔泽'],
    quote: '"如果你不愿意有这种感觉，你就会拥有它。" —— 史蒂文·海斯',
    books: [
      { title: '《幸福的陷阱》', author: 'Russ Harris（拉斯·哈里斯）', desc: 'ACT最好的入门书，语言生动，方法实用，读完即可开始练习，强烈推荐' },
      { title: '《接纳与承诺疗法》', author: 'Steven Hayes（史蒂文·海斯）', desc: 'ACT创始人的权威著作，深入理解ACT的理论基础与临床应用' },
      { title: '《与自己和解》', author: 'Kristin Neff（克里斯汀·聂夫）', desc: '自我慈悲视角的ACT补充，帮助人们以温柔代替自我批评' },
      { title: '《关键时刻》', author: 'Kelly Wilson（凯利·威尔森）', desc: 'ACT价值观工作的深度探索，帮助来访者在行动中活出真正珍视的生命方向' }
    ]
  },

  dbt: {
    id: 'dbt',
    name: '辩证行为疗法（DBT）',
    subtitle: '在接纳与改变之间找到平衡',
    icon: 'sliders',
    color: '#C44B3B',
    gradient: 'linear-gradient(135deg, #C44B3B, #E06050)',
    overview: 'DBT由玛莎·莱恩汉为治疗边缘型人格障碍而创立，核心辩证是：你已经尽力了，同时你可以做得更好。DBT整合了正念、行为技能训练和验证策略，特别适合情绪调节困难、冲动行为和人际关系剧烈波动的来访者。',
    philosophy: '"辩证"意味着接纳与改变同时并存。你的感受是真实的、有意义的（接纳），同时你可以学习新的技能来更有效地应对（改变）。不是非此即彼，而是"两者皆是"——这是DBT最核心的智慧。',
    howItWorks: [
      '四大技能模块：正念（核心）、痛苦耐受、情绪调节、人际效能',
      '个人治疗：处理个人化的问题，将技能应用到真实生活情境',
      '技能训练小组：像上课一样系统学习并练习四大技能',
      '电话辅导：危机时刻可联系治疗师获得即时的技能指导支持',
      '治疗师咨询团队：标准DBT的质量保障体系',
      '行为链分析：详细理解问题行为的触发、强化和维持机制'
    ],
    suitableFor: [
      '边缘型人格障碍（BPD）',
      '情绪极度不稳定，易怒、哭泣或崩溃，且难以自控',
      '有自伤或反复出现自杀观念的历史',
      '人际关系剧烈波动（理想化与贬低交替出现）',
      '冲动行为问题（暴饮暴食、酗酒、消费失控、危险性行为）',
      '慢性空虚感和身份认同混乱'
    ],
    duration: {
      short: '技能工作坊：可短程进行',
      standard: '标准DBT：至少1年（完整四模块）',
      long: '复杂案例：2年或以上，分阶段推进'
    },
    durationNote: 'DBT有其系统化的治疗结构，通常需要至少一年时间完成完整的技能模块。标准DBT包含个人治疗和技能小组两个部分，缺一不可。',
    advantages: [
      '是边缘型人格障碍和自伤行为的循证黄金标准治疗方法',
      '对自伤和自杀行为有最强有力的科学证据支持',
      '技能具体实用，学会后可立即在日常生活中应用',
      '提供危机支持体系，给来访者更强的安全感',
      '同时关注接纳和改变，避免来访者感到被否定或被评判'
    ],
    disadvantages: [
      '需要高度投入（个人治疗+小组+日常练习），负担相当重',
      '标准DBT项目费用较高，且需要专门受训的治疗团队',
      '非所有治疗师都经过正规DBT认证培训',
      '对于没有情绪调节问题的来访者，DBT框架可能过于密集',
      '小组形式并非所有来访者都能适应'
    ],
    representative: ['玛莎·莱恩汉（DBT创始人）'],
    quote: '"你需要改变，同时你已经够好了，这两件事都是真实的。" —— 玛莎·莱恩汉',
    books: [
      { title: '《情绪调节手册》', author: 'Marsha Linehan（莱恩汉）', desc: 'DBT官方技能训练手册，全面系统，适合配合治疗使用，也可自学参考' },
      { title: '《我恨你，但别离开我》', author: 'Jerold Kreisman & Hal Straus', desc: '通俗易懂地介绍边缘型人格障碍，帮助来访者和家属理解DBT的必要性' },
      { title: '《边缘人格》', author: 'Amanda L. Smith', desc: 'BPD当事人的亲历叙述，让人感同身受地理解DBT所针对的内在世界' },
      { title: '《DBT自助》', author: 'Matthew McKay 等', desc: '将DBT技能转化为可操作的自助练习，适合初步了解DBT的读者' }
    ]
  },

  trauma: {
    id: 'trauma',
    name: '创伤聚焦疗法',
    subtitle: '温和而彻底地疗愈伤痕',
    icon: 'feather',
    color: '#2A8088',
    gradient: 'linear-gradient(135deg, #2A8088, #3AAAB4)',
    overview: '创伤聚焦疗法是一类专门处理心理创伤的治疗方法，包括EMDR（眼动脱敏再加工）、创伤聚焦CBT（TF-CBT）、躯体体验（SE）、内部家庭系统（IFS）等。创伤不只是"心理问题"，它会从神经生物学层面改变大脑和身体的功能。现代创伤疗法从神经科学出发，温和而有效地帮助大脑和身体完成"未完成的事"。',
    philosophy: '创伤不是你的错，也不代表你软弱。创伤是大脑在极端情境下的保护性反应。那些挥之不去的闪回、过度警觉、麻木和解离，都是生命力量的体现——你的神经系统在拼命保护你。治疗是帮助这个系统知道：危险已经过去了，你现在是安全的。',
    howItWorks: [
      'EMDR：用双侧刺激（眼动或轻拍）帮助大脑重新整合和处理创伤记忆',
      '躯体体验（SE）：追踪身体感觉，帮助神经系统自然完成激活-释放循环',
      '内部家庭系统（IFS）：温和接触人格中受伤的"部分"，带来内在疗愈',
      '分阶段治疗：安全与稳定化→创伤处理→整合与成长',
      '稳定化技能：首先建立内在安全感和自我调节能力',
      '叙事重建：帮助来访者为创伤经历赋予新的意义和视角'
    ],
    suitableFor: [
      '创伤后应激障碍（PTSD）',
      '复杂性PTSD（长期、重复发生的人际创伤）',
      '童年虐待、忽视或目睹暴力的经历',
      '性创伤幸存者',
      '解离症状（感觉不真实、时间断片、情感麻木）',
      '身体化症状（无器质性原因的躯体不适、慢性疼痛）'
    ],
    duration: {
      short: 'EMDR单一创伤：8-16次',
      standard: '复杂创伤：6个月-2年',
      long: '复杂性PTSD：2年以上，分阶段缓慢推进'
    },
    durationNote: '创伤治疗需要谨慎、尊重来访者节奏地推进，急于处理创伤内容可能导致再创伤。好的创伤治疗师会根据你的当下承受能力灵活调整速度，安全始终是第一位的。',
    advantages: [
      'EMDR已有大量临床研究证据，被WHO列为PTSD一线治疗',
      '可以处理那些"说不出口"或"没有语言"的创伤体验（通过身体途径）',
      '帮助大脑和身体真正完成对创伤的整合处理，而非仅仅压制',
      '全面改善生活质量，不只是减轻特定症状',
      '尊重来访者的节奏和边界，不强迫性地暴露'
    ],
    disadvantages: [
      '初期稳定化阶段可能感觉进展缓慢，需要耐心',
      '处理创伤内容过程中可能有短暂的情绪波动，需要良好支持',
      '需要经过专业认证的治疗师，资质参差不齐，需仔细筛选',
      '严重解离状态下需先处理解离，再逐步进入创伤处理阶段'
    ],
    representative: ['弗朗辛·夏皮罗（EMDR创始人）', '贝塞尔·范·德·寇克', '彼得·列文（躯体体验）', '理查德·施瓦茨（IFS）', '朱迪思·赫尔曼（复杂创伤）'],
    quote: '"创伤会影响到我们整个人——我们的感受、思想、身体，乃至我们与他人的关系方式。" —— 贝塞尔·范·德·寇克',
    books: [
      { title: '《身体从未忘记》', author: 'Bessel van der Kolk（范·德·寇克）', desc: '创伤领域最重要的著作之一，从神经科学视角讲述创伤如何留存于身体，有中文版' },
      { title: '《唤醒老虎》', author: 'Peter Levine（彼得·列文）', desc: '躯体体验疗法创始人的代表作，用动物本能解释创伤，温暖而充满智慧' },
      { title: '《创伤与复原》', author: 'Judith Herman（朱迪思·赫尔曼）', desc: '复杂创伤研究的奠基著作，从社会视角理解创伤，深刻且具有时代意义' },
      { title: '《我不是坏小孩》', author: 'Bruce Perry & Maia Szalavitz', desc: '以儿童创伤为切入，温柔地解释大脑如何在创伤中保护我们' }
    ]
  },

  systemic: {
    id: 'systemic',
    name: '系统/家庭疗法',
    subtitle: '从关系中理解个人，从系统中寻找改变',
    icon: 'share2',
    color: '#7A589A',
    gradient: 'linear-gradient(135deg, #7A589A, #9A78BA)',
    overview: '系统疗法认为，个人的问题不能脱离其所在的关系系统来理解。你的家庭、夫妻关系、工作团队，都是相互影响的系统。问题不在于"谁的错"，而在于系统中的互动模式和关系结构。改变关系，就能改变个人——这是系统疗法的根本洞见。',
    philosophy: '没有人是孤岛。你的情绪和行为，总是在关系的背景下发生的。一个孩子的问题，可能是家庭系统正在表达的信号。一对夫妻的冲突，可能是双方都在用同一个破碎的剧本演不同的角色。改变不需要找到"谁的错"，而是改变这个剧本本身。',
    howItWorks: [
      '绘制家庭图（家谱图），了解跨代的关系模式和重复主题',
      '识别循环互动模式（越追越逃；越控制越反抗）',
      '家庭雕塑和角色扮演，让隐性的关系动态变得可见',
      '结构家庭治疗：调整家庭的边界、联盟和层级结构',
      '萨提亚模型：探索家庭的沟通模式和生存姿态',
      '代际传递探索：理解父母的模式如何在自己身上重演'
    ],
    suitableFor: [
      '家庭矛盾、代际冲突和亲子关系问题',
      '婚姻/伴侣关系问题、沟通障碍和冲突',
      '孩子出现行为或情绪问题（建议家庭共同参与）',
      '家庭系统的跨代传递模式（父母的模式在自己身上重演）',
      '离婚、丧亲、移民等家庭变故后的适应',
      '青少年问题（厌学、网络成瘾、抑郁等）'
    ],
    duration: {
      short: '聚焦问题：6-12次（通常每两周一次）',
      standard: '标准疗程：3-6个月',
      long: '深度系统工作：1年以上'
    },
    durationNote: '家庭治疗频率通常低于个人治疗（多为每两周一次），但需要家庭成员共同参与，协调难度相对更高。',
    advantages: [
      '直接在关系层面工作，改变速度有时比个人治疗更快',
      '不病理化任何个人，将问题放在关系系统背景下理解',
      '对儿童青少年问题尤为有效（通过改变家庭环境来改变孩子）',
      '不需要每个成员都参与，系统中一个人的改变会影响整体',
      '改善整个家庭互动，所有成员都可以受益'
    ],
    disadvantages: [
      '需要家庭成员愿意共同参与，协调难度大',
      '个人深层内在体验可能在家庭治疗中关注不足',
      '对严重个体心理问题（如精神病性障碍）需结合其他治疗',
      '某些家庭议题（如严重家庭暴力）需要特别谨慎的处理方式'
    ],
    representative: ['弗吉尼亚·萨提亚', '萨尔瓦多·米纽钦（结构家庭治疗）', '穆雷·鲍文（家庭系统理论）'],
    quote: '"家庭是一个系统，改变其中一部分，就会改变整体。" —— 弗吉尼亚·萨提亚',
    books: [
      { title: '《萨提亚家庭治疗模式》', author: 'Virginia Satir（弗吉尼亚·萨提亚）', desc: '萨提亚疗法经典，充满人情味，帮助你看见家庭沟通模式如何影响每个成员' },
      { title: '《与原生家庭和解》', author: '苏珊·福沃德', desc: '从系统视角理解原生家庭的影响，温和而有力地引导读者走向和解' },
      { title: '《家庭的秘密》', author: 'John Bradshaw（约翰·布拉德肖）', desc: '探讨家庭角色和规则如何塑造个人，从系统视角理解原生家庭的隐性力量' },
      { title: '《家庭治疗技术》', author: 'Salvador Minuchin（米纽钦）', desc: '结构家庭治疗创始人的临床实践著作，案例丰富，适合深度了解' }
    ]
  },

  existential: {
    id: 'existential',
    name: '存在主义/意义疗法',
    subtitle: '在虚无中寻找意义，在有限中活出无限',
    icon: 'sparkles',
    color: '#3D5066',
    gradient: 'linear-gradient(135deg, #3D5066, #5A7088)',
    overview: '存在主义疗法和意义疗法（弗兰克尔创立）面对的是最根本的人类处境：死亡、自由、孤独和无意义。这类疗法不试图消除存在焦虑，而是帮助你在面对这些终极现实时，仍然能够活出真实的自我，找到值得为之而活的意义——哪怕在最深的苦难中。',
    philosophy: '我们无法选择命运，但我们可以选择如何面对命运。即使是在最极端的苦难中，人仍然保有最后一种自由：选择自己态度的自由。意义不是被给予的，而是被创造的。你就是自己生命意义的作者。',
    howItWorks: [
      '探索"存在的给定"（死亡、自由、孤独、无意义）对来访者的真实意义',
      '弗兰克尔的三种找到意义的方式：创造（做有价值的事）、体验（爱与美）、态度（面对苦难时的选择）',
      '真实性工作：帮助来访者活出真实的自我，而非扮演社会角色',
      '与死亡议题工作：将对死亡的觉知转化为生命的驱动力',
      '当下聚焦：充分体验此刻的临在，而非逃避于过去或对未来的焦虑',
      '探索存在孤独：在接受根本孤独的同时，发现真正连接的可能'
    ],
    suitableFor: [
      '存在危机（"活着到底有什么意义？"）',
      '面临重大丧失、严重疾病或死亡威胁',
      '退休、空巢等重大人生转型期的迷茫和失落',
      '深层的孤独感和持续的内心空虚感',
      '价值观冲突和人生方向的根本困惑',
      '追求深度自我探索和哲学反思的来访者'
    ],
    duration: {
      short: '聚焦的存在性危机工作：数月',
      standard: '深度探索：通常需要数月到数年',
      long: '存在性旅程：可以持续很长时间，如一段漫长的对话'
    },
    durationNote: '存在主义疗法更像是一段生命的旅程，而非解决具体问题的工具。时间框架因个人需要而异，关键是探索的深度，而非疗程的长短。',
    advantages: [
      '触及最深层的人类处境，带来真正根本性的转变',
      '不仅减轻痛苦，更帮助来访者主动创造生命意义',
      '对"无法解决"的人类困境（死亡、孤独）提供了有意义的框架',
      '高度尊重来访者的独特性、主体性和自由选择',
      '在面对终极困境时，仍然找到希望和生命的力量'
    ],
    disadvantages: [
      '对有急性症状的来访者，缺乏足够的结构和具体干预技术',
      '研究证据相对较少，难以用传统标准量化疗效',
      '需要来访者有较强的哲学反思能力和思维抽象能力',
      '对某些实践性问题（如社交焦虑的具体技能）帮助相对有限'
    ],
    representative: ['维克多·弗兰克尔（意义疗法创始人）', '欧文·亚隆（存在主义团体疗法）', '罗洛·梅', '埃米·范·德尔森（英国存在主义）'],
    quote: '"在任何情况下，人都拥有最后一种自由：在既定的处境中选择自己的态度。" —— 维克多·弗兰克尔',
    books: [
      { title: '《活出生命的意义》', author: 'Viktor Frankl（维克多·弗兰克尔）', desc: '意义疗法的灵魂之作，弗兰克尔在纳粹集中营中寻找意义的亲历，令人震撼，有中文版' },
      { title: '《存在主义心理治疗》', author: 'Irvin Yalom（欧文·亚隆）', desc: '从死亡、自由、孤独和无意义四个视角深入探讨，是存在主义治疗的权威著作' },
      { title: '《直视骄阳》', author: 'Irvin Yalom', desc: '亚隆关于死亡恐惧的沉思，告诉我们如何与死亡同行而活得更充实，有中文版' },
      { title: '《存在的勇气》', author: 'Paul Tillich（保罗·蒂利希）', desc: '神学家蒂利希探讨焦虑的本质与存在的勇气，是存在主义治疗思想的重要根源' }
    ]
  },

  sfbt: {
    id: 'sfbt',
    name: '焦点解决短期疗法（SFBT）',
    subtitle: '聚焦解决方案，而非问题本身',
    icon: 'target',
    color: '#2D9E6E',
    gradient: 'linear-gradient(135deg, #2D9E6E, #5ABBA0)',
    overview: '焦点解决短期疗法（SFBT）由史蒂夫·德·沙泽尔与茵素·金·伯格创立，是一种高效、积极的短程心理治疗方法。它独特之处在于：不深挖问题的成因，而是将注意力转向来访者已有的优势、资源和过去成功的经验，从"例外时刻"中寻找改变的线索。',
    philosophy: '你比你以为的更有能力。在所有问题中，总有它不发生的时候——那个"例外时刻"，正是解决方案的种子。治疗师不是专家，你才是自己生活的专家。SFBT相信：你已经拥有解决问题所需的资源，只是还没发现而已。',
    howItWorks: [
      '"奇迹问题"：如果明天问题消失了，你会注意到什么不同？帮助来访者描绘目标状态',
      '"例外探寻"：问题没有发生的时候是什么情况？从中发现来访者已有的能力和资源',
      '"量尺问题"：用1-10的量尺评估当前状态，并聚焦"往前一步"需要什么',
      '赞美与正向反馈：积极发现和强化来访者已有的优势和小进步',
      '家庭作业：布置"观察例外"或"做更多已经有效的事情"等任务',
      '合作立场：治疗师与来访者保持平等、好奇、不知道的姿态，共同探索解决方案'
    ],
    suitableFor: [
      '希望快速看到改变，不想深挖过去原因的来访者',
      '有明确具体目标（如改善特定行为、提升工作效能）的人',
      '对问题探索感到疲惫，需要注入希望和动力的来访者',
      '轻中度情绪困扰，日常功能基本维持的人',
      '需要短程、高效干预的学校或职场场景',
      '青少年及家庭问题的简短干预'
    ],
    duration: {
      short: '超短程：3-5次，聚焦单一目标',
      standard: '短程：6-12次（2-3个月）',
      long: '最长通常不超过20次，以来访者满意为结束标准'
    },
    durationNote: 'SFBT是有目的的短程疗法，以"尽可能少的次数，尽可能多的改变"为原则。当来访者认为自己已经达到目标时，治疗即可结束。',
    advantages: [
      '疗程短、效率高，来访者能快速看到变化和希望',
      '尊重来访者的专家地位，增强自我效能感',
      '不病理化，聚焦优势和资源，感觉积极有力量',
      '适用范围广，可用于个人、家庭、青少年等不同场景',
      '费用相对低廉（疗程短）'
    ],
    disadvantages: [
      '对根深蒂固的人格问题或复杂创伤，可能不够深入',
      '过于聚焦解决方案，有时来访者需要的是被充分倾听和理解',
      '部分来访者反映感觉被"跳过"了，没有处理核心的痛苦',
      '对动机较低或目标不清晰的来访者，效果有限'
    ],
    representative: ['史蒂夫·德·沙泽尔（SFBT创始人）', '茵素·金·伯格', '彼得·德·容（Peter De Jong）'],
    quote: '"每一个问题，都有不发生的时候。那个时候，就是答案所在。" —— 茵素·金·伯格',
    books: [
      { title: '《焦点解决短期治疗》', author: 'Insoo Kim Berg & Peter De Jong', desc: 'SFBT的权威入门书，充满真实案例，帮助理解如何从优势视角开展工作' },
      { title: '《改变》', author: 'Paul Watzlawick 等', desc: '简短干预与改变的经典著作，与SFBT的思路高度契合，通俗有趣' },
      { title: '《成功的辅导》', author: 'John J. Murphy', desc: '将SFBT应用于青少年和学校场景的实用指南，案例生动' },
      { title: '《夜会超人》', author: 'Bill O\'Hanlon（比尔·奥汉龙）', desc: '以故事形式呈现焦点与解决导向的思维，轻松幽默，适合所有人阅读' }
    ]
  },

  narrative: {
    id: 'narrative',
    name: '叙事疗法',
    subtitle: '重写你的人生故事',
    icon: 'penTool',
    color: '#7A5CA8',
    gradient: 'linear-gradient(135deg, #7A5CA8, #A080D0)',
    overview: '叙事疗法由麦克尔·怀特与大卫·艾普斯顿创立，其核心理念是：人不是问题，问题才是问题。我们每个人都生活在自己讲给自己的故事中。这些故事塑造了我们的身份认同，而其中许多其实是被社会、文化和他人施加的"主流叙事"所压制的。叙事疗法帮助你发现并重写属于你自己的真实故事。',
    philosophy: '你不是被问题定义的人，你是被问题困扰的人——这两者之间有本质的区别。当我们把"问题"从人身上分离出来，来访者才能以更大的主动性、创造力和可能性来面对生命中的挑战，重新发现被主流故事遮蔽的另类叙事，成为自己故事的作者。',
    howItWorks: [
      '"外化对话"：给问题命名，将其与人分开（"让你失去信心的那个声音"，而非"你没有信心"）',
      '"解构"：探索问题故事是如何形成的，检视文化和社会话语的影响',
      '"寻找独特结果"：发现问题叙事之外的例外时刻，那些来访者展现出力量的瞬间',
      '"重写"：围绕独特结果，发展出新的、更具支持性的替代故事',
      '"丰厚描述"：不只满足于简单化的标签，而是用丰富细节来充实新故事',
      '"见证社群"：邀请重要他人或治疗师作为见证，让新故事得到确认和传播'
    ],
    suitableFor: [
      '身份认同困惑，被"我就是这样的人"的定义所困扰',
      '受到社会偏见、文化压迫或他人眼光影响较深的来访者',
      '被诊断标签（如"抑郁症患者"）所局限，感到被定义',
      '有复杂家庭背景，需要重新理解自己与家族故事关系的人',
      '经历过重大困难，需要重新为自己的经历赋予意义',
      '希望在价值观和身份层面进行深度探索的来访者'
    ],
    duration: {
      short: '聚焦外化工作：6-12次',
      standard: '标准叙事工作：3-6个月',
      long: '深度身份重构：可持续更长时间'
    },
    durationNote: '叙事疗法的时间框架灵活，以来访者新故事的厚度和稳定性为参考。部分议题可以短程完成，深层身份认同工作则可能需要更持续的探索。',
    advantages: [
      '去病理化，不给来访者贴标签，高度尊重其自主性和独特性',
      '高度重视文化、社会和权力背景，适合边缘群体',
      '创造性强，治疗过程充满想象力和可能性',
      '不需要深挖过去的"原因"，而是创造新的叙事可能',
      '来访者成为自己故事的作者，具有强烈的赋权感'
    ],
    disadvantages: [
      '对急需具体技能（如情绪调节）的来访者，帮助相对有限',
      '语言和叙事能力要求较高，可能不适合所有来访者',
      '量化疗效困难，系统研究证据较少',
      '部分来访者需要更多结构化指导，而不只是开放探索'
    ],
    representative: ['麦克尔·怀特（Michael White）', '大卫·艾普斯顿（David Epston）', '艾伦·珍妮丝（Alan Jenkins）'],
    quote: '"问题是问题，人不是问题。" —— 迈克尔·怀特',
    books: [
      { title: '《叙事疗法》', author: 'Michael White & David Epston', desc: '叙事疗法的奠基之作，通过真实案例阐述如何将问题外化、重写来访者的生命故事' },
      { title: '《叙事疗法的实践》', author: 'Alice Morgan', desc: '叙事疗法的入门好书，语言清晰友好，适合初步了解叙事思路的读者' },
      { title: '《重新叙说生命》', author: 'Michael White', desc: '怀特晚年著作，深入探讨叙事疗法的核心概念与实践地图，内容丰富深刻' },
      { title: '《自我的故事》', author: 'Dan McAdams', desc: '从心理学角度探讨人如何通过叙事构建身份，与叙事疗法的理论基础高度契合' }
    ]
  },

  mindfulness: {
    id: 'mindfulness',
    name: '正念疗法',
    subtitle: '活在当下，觉察即疗愈',
    icon: 'wind',
    color: '#3B8FA8',
    gradient: 'linear-gradient(135deg, #3B8FA8, #5BB0C8)',
    overview: '正念疗法（包括正念减压MBSR、正念认知疗法MBCT、正念自我慈悲MSC等）以Jon Kabat-Zinn为代表人物，将东方禅修传统与西方心理学整合。其核心是培养"当下觉察"——有意识地、不评判地关注此刻的内心状态、身体感觉和外部环境，从而打破自动化的反应模式。',
    philosophy: '我们大多数的痛苦，来自对当下的抗拒——要么沉湎于过去，要么焦虑于未来。正念不是让头脑变得空白，也不是消除负面情绪，而是改变你与内心体验的关系：从被自动化反应所驱动，到成为一个有觉察的观察者。此刻，就是最真实的存在。',
    howItWorks: [
      '正式练习：身体扫描、坐禅、行禅、瑜伽等，培养稳定的觉察能力',
      '非正式练习：在日常生活中（进食、洗碗、通勤）保持觉察',
      'MBSR（正念减压）：系统8周课程，适合慢性压力、疼痛和焦虑',
      'MBCT（正念认知疗法）：在CBT框架中融入正念，防止抑郁复发',
      '自我慈悲练习：以慈悲和温柔对待自己的痛苦，而非批评自责',
      '情绪调节：觉察情绪升起→不立即反应→选择更有意识的回应'
    ],
    suitableFor: [
      '慢性压力、职场倦怠和过度紧张的状态',
      '有反复抑郁发作历史，需要预防复发',
      '慢性疼痛或躯体疾病伴随的心理困扰',
      '容易过度思虑、脑子停不下来的人',
      '有冥想兴趣，希望将正式练习与心理成长结合',
      '需要培养自我慈悲、减少自我批评的人'
    ],
    duration: {
      short: 'MBSR/MBCT课程：8周（每周2小时+日常练习）',
      standard: '持续的正念练习：数月到终生',
      long: '深度禅修整合：可作为长期修行方式'
    },
    durationNote: '正念可以作为独立疗法（MBSR课程）或其他疗法（CBT、ACT）的重要补充。最核心的是建立持续的日常练习习惯，而非只在治疗室中练习。',
    advantages: [
      '大量神经科学研究证实其效果，尤其对压力、焦虑和抑郁',
      '技能可以终生使用，转化为个人修行，不依赖治疗师',
      '适用面广，从健康人群的压力管理到临床障碍均有证据',
      '培养整体的心理韧性，而非只针对特定症状',
      '与其他疗法高度兼容，可作为有效补充'
    ],
    disadvantages: [
      '需要持续的日常练习，对没有耐心或动力不足者效果有限',
      '"接纳当下"的理念有时被误解为"什么都不做"或"被动忍受"',
      '在急性危机或严重解离状态下，正念练习可能适得其反',
      '部分有创伤历史的来访者，身体扫描可能触发不适，需谨慎'
    ],
    representative: ['乔·卡巴金（MBSR创始人）', '马克·威廉姆斯（MBCT）', '克里斯汀·聂夫（自我慈悲）'],
    quote: '"你不必控制自己的想法，只需停止让它们控制你。" —— 丹·米尔曼',
    books: [
      { title: '《正念冥想》', author: 'Jon Kabat-Zinn（卡巴金）', desc: 'MBSR创始人的经典著作，深入浅出介绍正念减压的理念与方法，有中文版' },
      { title: '《此刻是家》', author: 'Pema Chödrön（佩玛·丘卓）', desc: '从佛教与心理学视角探讨在不确定中安住当下，文字温柔而充满智慧' },
      { title: '《走出抑郁》', author: 'Mark Williams 等（MBCT）', desc: '正念认知疗法（MBCT）的权威指南，专门用于防止抑郁复发，科学且实用' },
      { title: '《自我慈悲》', author: 'Kristin Neff（克里斯汀·聂夫）', desc: '从科学和实践角度介绍自我慈悲，是正念疗愈中最温柔有力的一环' }
    ]
  }
};

// ===== 测试题目（20题 × 6选项）=====
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: '当你感到情绪痛苦时，你最希望从治疗中得到什么？',
    category: 'coping',
    options: [
      { text: '深入理解为什么我会这样，找到根源', scores: { psychodynamic: 3, humanistic: 1, existential: 1, narrative: 1 } },
      { text: '找到并改变让我痛苦的负面思维方式', scores: { cbt: 3, act: 1, sfbt: 1 } },
      { text: '被真正倾听和理解，感到不孤单', scores: { humanistic: 3, psychodynamic: 1, narrative: 1 } },
      { text: '学习具体的情绪调节技能，稳定下来', scores: { dbt: 3, cbt: 2, mindfulness: 1 } },
      { text: '即使有痛苦，也能找到继续前行的意义', scores: { act: 3, existential: 2, mindfulness: 1 } },
      { text: '改善家庭或亲密关系中的互动模式', scores: { systemic: 3, psychodynamic: 1 } }
    ]
  },
  {
    id: 2,
    question: '你目前最主要的困扰类型是什么？',
    category: 'problem_type',
    options: [
      { text: '童年或过去的创伤、伤害经历', scores: { trauma: 4, psychodynamic: 2 } },
      { text: '焦虑、恐惧或反复出现的担忧', scores: { cbt: 3, act: 2, dbt: 1, mindfulness: 1 } },
      { text: '家庭矛盾或亲密关系问题', scores: { systemic: 4, psychodynamic: 1, humanistic: 1 } },
      { text: '感觉人生没有意义或迷失方向', scores: { existential: 4, humanistic: 2, act: 1, sfbt: 1 } },
      { text: '自我认同困惑，不知道自己是谁或想要什么', scores: { existential: 2, humanistic: 3, psychodynamic: 1, narrative: 3 } },
      { text: '冲动行为或情绪爆发失控问题', scores: { dbt: 4, act: 2, cbt: 1 } }
    ]
  },
  {
    id: 3,
    question: '你如何看待"痛苦"这件事？',
    category: 'philosophy',
    options: [
      { text: '痛苦是一个信号，指向某个需要被理解的根源', scores: { psychodynamic: 3, humanistic: 1 } },
      { text: '痛苦来自错误的思维，改变想法就能改变感受', scores: { cbt: 3 } },
      { text: '痛苦是生命的一部分，我需要学会与它和平共处', scores: { act: 4, existential: 2, mindfulness: 3 } },
      { text: '痛苦让我无法正常生活，我需要技能来管理它', scores: { dbt: 3, cbt: 2 } },
      { text: '痛苦提醒我去寻找更深的生命意义', scores: { existential: 4, humanistic: 1 } },
      { text: '痛苦是关系失调的体现，修复关系才能减轻痛苦', scores: { systemic: 3, psychodynamic: 1 } }
    ]
  },
  {
    id: 4,
    question: '在人际关系中，你最常遇到的模式是？',
    category: 'relationship',
    options: [
      { text: '总是吸引同一类型的人，或重复相似的冲突', scores: { psychodynamic: 3, systemic: 2 } },
      { text: '很难信任他人，或关系开始美好但急速破裂', scores: { psychodynamic: 2, trauma: 2, dbt: 2 } },
      { text: '家庭成员之间有持续的矛盾和沟通障碍', scores: { systemic: 4 } },
      { text: '总是压抑自己、迁就他人，逐渐失去自我', scores: { humanistic: 3, psychodynamic: 1, act: 1, narrative: 1 } },
      { text: '不太清楚自己在关系中是什么样子', scores: { psychodynamic: 2, humanistic: 2, narrative: 2 } },
      { text: '工作或社交关系让我感到焦虑或不自在', scores: { cbt: 2, humanistic: 1, systemic: 1 } }
    ]
  },
  {
    id: 5,
    question: '对于这次寻求帮助，你最主要的期望是？',
    category: 'expectation',
    options: [
      { text: '深入了解自己，理解行为背后的深层原因', scores: { psychodynamic: 4, humanistic: 1, narrative: 2 } },
      { text: '在几个月内看到具体的、可量化的改善', scores: { cbt: 3, dbt: 2, sfbt: 3 } },
      { text: '找到生命的意义和真正属于我的方向', scores: { existential: 4, humanistic: 2, act: 1 } },
      { text: '改善特定的关系或家庭动态', scores: { systemic: 4, humanistic: 1 } },
      { text: '有人帮我度过当前的危机和不稳定', scores: { dbt: 3, cbt: 1, humanistic: 1 } },
      { text: '改善某种具体的行为或习惯', scores: { cbt: 3, act: 2, sfbt: 2 } }
    ]
  },
  {
    id: 6,
    question: '关于你的身体，以下哪项最贴近你的体验？',
    category: 'body',
    options: [
      { text: '身体上有很多不明原因的紧张、疼痛或不适', scores: { trauma: 3, psychodynamic: 1 } },
      { text: '情绪波动时，身体有很明显的反应（心跳加速、胃痛等）', scores: { dbt: 2, trauma: 2, cbt: 1, mindfulness: 1 } },
      { text: '有时感觉与身体"断开"，麻木或不真实', scores: { trauma: 4, existential: 1 } },
      { text: '有明确诊断的慢性病，伴随心理困扰', scores: { act: 4, cbt: 2, mindfulness: 2 } },
      { text: '身体感觉大致正常，主要是思维和情绪的困扰', scores: { cbt: 2, humanistic: 2, psychodynamic: 1 } },
      { text: '我对身体感觉不太敏感，很少关注身体信号', scores: { psychodynamic: 1, humanistic: 1, existential: 1 } }
    ]
  },
  {
    id: 7,
    question: '你的情绪波动程度如何？',
    category: 'emotion_regulation',
    options: [
      { text: '情绪极其强烈，有时感觉完全失控', scores: { dbt: 4, trauma: 1 } },
      { text: '有特定的困扰情绪（如焦虑或抑郁），但整体还算稳定', scores: { cbt: 3, act: 2, mindfulness: 1 } },
      { text: '情绪比较稳定，但有持续的空虚或无意义感', scores: { existential: 3, humanistic: 2, psychodynamic: 1, mindfulness: 1 } },
      { text: '经常压抑情绪，积累到一定程度突然爆发', scores: { psychodynamic: 2, humanistic: 2, dbt: 1 } },
      { text: '情绪经常麻木，感受不到太多情感', scores: { trauma: 3, psychodynamic: 2 } },
      { text: '主要是愤怒或烦躁，很容易被激怒', scores: { dbt: 3, psychodynamic: 2, cbt: 1 } }
    ]
  },
  {
    id: 8,
    question: '关于你生命中的重大困难或伤害，以下哪项最贴近你的感受？',
    category: 'trauma',
    options: [
      { text: '某些经历仍以闪回、噩梦或强烈情绪的方式困扰着我', scores: { trauma: 5, dbt: 1 } },
      { text: '经历过伤害，它仍以关系模式的方式影响着我', scores: { psychodynamic: 3, systemic: 2, trauma: 1 } },
      { text: '有些不太清晰的不好经历，不确定算不算创伤', scores: { psychodynamic: 2, trauma: 2 } },
      { text: '重大丧失或失去让我一直难以走出', scores: { existential: 2, trauma: 2, humanistic: 2 } },
      { text: '已基本梳理了，但对我的世界观有深远影响', scores: { existential: 3, humanistic: 2 } },
      { text: '我没有明显创伤，这不是我主要的困扰来源', scores: { cbt: 1, humanistic: 1, act: 1, sfbt: 1, mindfulness: 1 } }
    ]
  },
  {
    id: 9,
    question: '对你而言，"好起来"意味着什么？',
    category: 'goal',
    options: [
      { text: '不再被过去的阴影束缚，真正活在当下', scores: { trauma: 3, act: 3, existential: 1, mindfulness: 3 } },
      { text: '焦虑/抑郁减轻，能正常工作和生活', scores: { cbt: 3, dbt: 2 } },
      { text: '更真实地了解和接纳自己的全部', scores: { humanistic: 4, psychodynamic: 2, narrative: 2 } },
      { text: '家庭关系改善，大家能够健康地沟通', scores: { systemic: 4, humanistic: 1 } },
      { text: '能够更好地调节情绪，不再轻易失控', scores: { dbt: 4, cbt: 2 } },
      { text: '找到值得为之活着的意义和方向', scores: { existential: 4, humanistic: 2, act: 2 } }
    ]
  },
  {
    id: 10,
    question: '在治疗中，你最愿意做什么？',
    category: 'preference',
    options: [
      { text: '深入谈论过去的经历和家庭背景', scores: { psychodynamic: 3, trauma: 1, systemic: 1, narrative: 1 } },
      { text: '做练习和作业，在生活中实践新技能', scores: { cbt: 3, dbt: 3, act: 1, sfbt: 2, mindfulness: 1 } },
      { text: '主要是被倾听和理解，无需太多"任务"', scores: { humanistic: 4, existential: 2, narrative: 1 } },
      { text: '探讨意义、价值观和人生方向等大问题', scores: { existential: 4, humanistic: 1, act: 1 } },
      { text: '理解理论和背后的原理，不只是技术', scores: { psychodynamic: 2, existential: 2 } },
      { text: '想要有危机支持体系，让我感到安全', scores: { dbt: 3, humanistic: 1 } }
    ]
  },
  {
    id: 11,
    question: '你的原生家庭氛围是怎样的？',
    category: 'family',
    options: [
      { text: '温暖支持，总体上有安全感', scores: { humanistic: 1, psychodynamic: 1, sfbt: 1 } },
      { text: '有时温暖有时冷漠，情绪氛围不稳定', scores: { dbt: 2, psychodynamic: 3, narrative: 1 } },
      { text: '情绪压抑，不被允许表达真实感受', scores: { psychodynamic: 3, humanistic: 2, narrative: 2 } },
      { text: '规则严格，期望极高，充满完美主义压力', scores: { cbt: 2, psychodynamic: 2, act: 1 } },
      { text: '有明显的冲突、忽视或某种形式的伤害', scores: { trauma: 4, dbt: 2, psychodynamic: 1 } },
      { text: '家庭结构复杂（如离婚、隔代养育、移民背景等）', scores: { systemic: 3, psychodynamic: 2 } }
    ]
  },
  {
    id: 12,
    question: '你目前的痛苦程度大约是？',
    category: 'severity',
    options: [
      { text: '轻微困扰：有些不适，日常生活基本正常', scores: { cbt: 2, humanistic: 2, sfbt: 2 } },
      { text: '中度困扰：情绪压力较明显，部分影响日常', scores: { cbt: 3, act: 2, dbt: 1, sfbt: 1 } },
      { text: '较重困扰：已明显影响工作效率或人际关系', scores: { dbt: 2, cbt: 2, act: 2 } },
      { text: '严重困扰：日常生活受到显著影响，难以维持', scores: { dbt: 3, trauma: 2, cbt: 1 } },
      { text: '剧烈波动：有时还好，有时极度崩溃，忽好忽坏', scores: { dbt: 4, trauma: 2 } },
      { text: '慢性低烈度：一种隐隐的、说不清楚的长期难受', scores: { act: 3, existential: 2, psychodynamic: 2, mindfulness: 1 } }
    ]
  },
  {
    id: 13,
    question: '你通常如何看待自己？',
    category: 'self_perception',
    options: [
      { text: '总体正面，但有某些方面让我困扰', scores: { cbt: 2, humanistic: 1, sfbt: 1 } },
      { text: '我有很多问题，感觉自己很差劲或不够好', scores: { humanistic: 3, psychodynamic: 2, cbt: 1 } },
      { text: '我不太了解自己，对自己感到陌生', scores: { psychodynamic: 3, humanistic: 2, narrative: 3 } },
      { text: '我的价值完全取决于成就和他人评价', scores: { cbt: 2, humanistic: 2, existential: 1, narrative: 1 } },
      { text: '我时而觉得自己很好，时而觉得一无是处', scores: { dbt: 4, psychodynamic: 2 } },
      { text: '我知道自己的问题在哪，但感觉无法改变', scores: { act: 3, existential: 2, sfbt: 2 } }
    ]
  },
  {
    id: 14,
    question: '关于"改变"，你的真实感受是？',
    category: 'change_attitude',
    options: [
      { text: '我想改变，也相信自己有能力改变', scores: { cbt: 3, humanistic: 1, sfbt: 3 } },
      { text: '我想改变，但不知道从何入手', scores: { psychodynamic: 2, humanistic: 2, sfbt: 2 } },
      { text: '我有时想改变，有时又觉得改不了、懒得改', scores: { dbt: 2, act: 2, psychodynamic: 1 } },
      { text: '我害怕改变，担心改变后会失去现有的一切', scores: { psychodynamic: 3, humanistic: 2 } },
      { text: '改变本身不是我的目标，找到意义才是', scores: { existential: 4, act: 2 } },
      { text: '我已经尝试很多方法，但感觉都没有真正有用', scores: { act: 3, dbt: 2, trauma: 1, sfbt: 1 } }
    ]
  },
  {
    id: 15,
    question: '你的睡眠和身体状况如何？',
    category: 'sleep_body',
    options: [
      { text: '基本良好，没有明显问题', scores: { cbt: 1, humanistic: 1, mindfulness: 2 } },
      { text: '难以入睡，脑子停不下来，思维奔逸', scores: { cbt: 3, dbt: 1, mindfulness: 1 } },
      { text: '噩梦频繁，有时会被强烈的梦境惊醒', scores: { trauma: 4, dbt: 1 } },
      { text: '身体经常有莫名的紧绷感或慢性疼痛', scores: { trauma: 3, psychodynamic: 1, mindfulness: 1 } },
      { text: '情绪和身体感觉"断开"，麻木没感觉', scores: { trauma: 4, dbt: 1 } },
      { text: '睡眠较多或嗜睡，身体感觉沉重', scores: { dbt: 2, psychodynamic: 1, humanistic: 1 } }
    ]
  },
  {
    id: 16,
    question: '以下哪种回避模式最像你？',
    category: 'avoidance',
    options: [
      { text: '拖延和逃避困难的任务或决定', scores: { cbt: 3, act: 1 } },
      { text: '回避某些特定的地点、人物或情境', scores: { cbt: 3, trauma: 2 } },
      { text: '用刷手机、暴食、购物等方式逃避不舒服的感受', scores: { act: 3, dbt: 2, mindfulness: 2 } },
      { text: '回避亲密关系，怕再次受伤', scores: { trauma: 2, psychodynamic: 3 } },
      { text: '回避思考关于死亡、意义等深层问题', scores: { existential: 3, psychodynamic: 1 } },
      { text: '我不太感觉自己在刻意回避什么', scores: { humanistic: 1, cbt: 1, act: 1 } }
    ]
  },
  {
    id: 17,
    question: '你最主要的困扰大概存在多久了？',
    category: 'duration',
    options: [
      { text: '近期才出现（半年以内），有明确触发事件', scores: { cbt: 3, trauma: 1, act: 1, sfbt: 2, mindfulness: 1 } },
      { text: '1-3年，与某个重要事件或转变有关', scores: { cbt: 2, trauma: 2, act: 1, sfbt: 1 } },
      { text: '很多年了，感觉一直都是这样', scores: { psychodynamic: 3, trauma: 1 } },
      { text: '从童年或青少年时期就有这些模式', scores: { psychodynamic: 4, systemic: 2 } },
      { text: '它来了又走，反复出现，说不清楚多久', scores: { psychodynamic: 2, dbt: 2, act: 1 } },
      { text: '逐渐积累的，很难说从什么时候开始', scores: { psychodynamic: 2, humanistic: 2, existential: 1, mindfulness: 1 } }
    ]
  },
  {
    id: 18,
    question: '关于你的生命意义，以下哪项最接近你的体验？',
    category: 'meaning',
    options: [
      { text: '我有清晰的目标和热爱，生命对我充满意义', scores: { humanistic: 1, cbt: 1, mindfulness: 1 } },
      { text: '我有一些意义感，但时常感到空虚和怀疑', scores: { existential: 2, humanistic: 2, act: 1, mindfulness: 2 } },
      { text: '我曾经有意义感，但某事之后失去了', scores: { trauma: 2, existential: 3, humanistic: 1, narrative: 2 } },
      { text: '我从来不太确定自己活着是为了什么', scores: { existential: 4, psychodynamic: 1 } },
      { text: '我的意义感完全来自他人的认可和期待', scores: { humanistic: 3, psychodynamic: 2, narrative: 2 } },
      { text: '我不常思考意义这件事，更关注具体的问题', scores: { cbt: 2, dbt: 1, sfbt: 1 } }
    ]
  },
  {
    id: 19,
    question: '你目前的主要社会支持状况？',
    category: 'support',
    options: [
      { text: '有稳定的家人或朋友支持，感到被关爱', scores: { cbt: 1, humanistic: 1, mindfulness: 1 } },
      { text: '社会支持有限，感到比较孤立', scores: { humanistic: 3, dbt: 2 } },
      { text: '关系复杂，有时帮忙有时反而添乱', scores: { systemic: 3, psychodynamic: 2 } },
      { text: '有一些支持，但我不敢麻烦别人', scores: { humanistic: 2, act: 1, psychodynamic: 1 } },
      { text: '我需要更多结构化的支持（如支持团体）', scores: { dbt: 3 } },
      { text: '我主要依靠自己，不太依赖他人', scores: { existential: 2, cbt: 2, act: 1, sfbt: 1 } }
    ]
  },
  {
    id: 20,
    question: '最后，哪句话最贴近你现在内心的声音？',
    category: 'closing',
    options: [
      { text: '"我想弄清楚自己为什么总是这样"', scores: { psychodynamic: 4, humanistic: 1, narrative: 2 } },
      { text: '"我知道问题在哪，我需要方法来解决它"', scores: { cbt: 4, dbt: 2, sfbt: 2 } },
      { text: '"我只想有人真正理解我，不评判我"', scores: { humanistic: 4, act: 1, narrative: 2, mindfulness: 1 } },
      { text: '"即使有痛苦，我也想活出有意义的人生"', scores: { act: 4, existential: 3 } },
      { text: '"我想处理那些过去的伤害，不再被困住"', scores: { trauma: 4, psychodynamic: 2 } },
      { text: '"我的家庭或关系太复杂了，需要从根本改变"', scores: { systemic: 4, psychodynamic: 2 } }
    ]
  }
];
