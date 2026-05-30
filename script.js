const driveFile = (id) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const driveFolder = (id) => `https://drive.google.com/drive/folders/${id}?usp=sharing`;
const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;
const folderPreview = (id) => `https://drive.google.com/embeddedfolderview?id=${id}#grid`;
const thumb = (id, size = 1200) => `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
const newTabAttrs = 'target="_blank" rel="noopener noreferrer"';
const brandYouUrl =
  window.location.hostname === "summer-ikiki.github.io"
    ? "./brandyou-en.html"
    : "https://summer-ikiki.github.io/brandyou/";
let currentLang = localStorage.getItem("portfolioLang") === "zh" ? "zh" : "en";

const capabilityCopy = {
  all: {
    label: "All Cases",
    title: "Selected cases by capability, role, and evidence.",
    cn: "案例按能力、角色和可查看证据组织，方便快速判断与岗位的相关性。",
    primaryKicker: "Strategic / Operational Work",
    primaryTitle: "Product strategy, growth systems, creator/community work, and business planning.",
    secondaryKicker: "Creative / Visual Work",
    secondaryTitle: "Content production, public creative work, visual systems, and composition judgment.",
  },
  ai: {
    label: "AI Native",
    title: "AI-native products, AI-era communities, and system-building cases.",
    cn: "重点查看 AI 原生产品、AI 时代社群、AI 辅助工作流和系统化搭建相关案例。",
    primaryKicker: "AI Native Cases",
    primaryTitle: "AI-native products, communities, workflow tools, and system-building projects.",
    secondaryKicker: "Related Systems",
    secondaryTitle: "Supporting product, growth, and creator/community systems connected to AI-era work.",
  },
  growth: {
    label: "Growth & GTM",
    title: "Growth, GTM, community activation, and channel-building cases.",
    cn: "重点查看校园增长、社区激活、渠道搭建、用户触达和产品转化相关案例。",
    primaryKicker: "Growth Cases",
    primaryTitle: "Launch, activation, audience development, and partner/channel evidence.",
    secondaryKicker: "Related Creative Evidence",
    secondaryTitle: "Supporting content and visual assets that strengthen growth narratives.",
  },
  creator: {
    label: "Creator & Community",
    title: "Creator ecosystem, community strategy, and audience-positioning cases.",
    cn: "重点查看创作者生态、社区运营、达人资源、受众定位和跨平台内容系统。",
    primaryKicker: "Creator / Community Cases",
    primaryTitle: "Audience positioning, creator resources, collaboration models, and campaign systems.",
    secondaryKicker: "Production Support",
    secondaryTitle: "Creative work that supports creator storytelling and community presence.",
  },
  product: {
    label: "Product Strategy",
    title: "Product strategy, positioning, product marketing, and IA cases.",
    cn: "重点查看产品定位、商业计划、推荐与营销系统设计、信息架构和产品叙事能力。",
    primaryKicker: "Product / Strategy Cases",
    primaryTitle: "Business plans, product narratives, IA, recommendation systems, and launch assets.",
    secondaryKicker: "Supporting Storytelling",
    secondaryTitle: "Content and visual systems that make product ideas easier to understand.",
  },
  content: {
    label: "Content & Production",
    title: "Content production, short-form/video work, and narrative execution.",
    cn: "重点查看影像制作、短片、公开视频、内容表达和叙事执行经验。",
    primaryKicker: "Content Strategy Cases",
    primaryTitle: "Content systems, creator collaboration, and platform-facing story execution.",
    secondaryKicker: "Production / Visual Cases",
    secondaryTitle: "Short film, video archive, photography, and visual production evidence.",
  },
  visual: {
    label: "Visual Systems",
    title: "Visual systems, posters, photography, brand language, and composition work.",
    cn: "重点查看海报系统、摄影、品牌语言、网页视觉和构图判断。",
    primaryKicker: "Visual Strategy Cases",
    primaryTitle: "Brand systems and product-facing visual structure.",
    secondaryKicker: "Creative / Visual Evidence",
    secondaryTitle: "Posters, photography, and selected visual work with stronger aesthetic signal.",
  },
  credentials: {
    label: "Tools & Credentials",
    title: "Tool fluency and digital-marketing foundations.",
    cn: "轻量查看营销分析、社媒工具和数字营销基础证书。",
    primaryKicker: "Credentials",
    primaryTitle: "Analytics, social-media tools, and supporting marketing foundations.",
    secondaryKicker: "Related Work",
    secondaryTitle: "Selected projects where these foundations can be applied.",
  },
};

const capabilityCopyZh = {
  all: {
    label: "全部案例",
    title: "按岗位能力快速查看项目案例。",
    cn: "从岗位关心的能力点进入，快速看到项目背景、角色和项目价值。",
    primaryKicker: "策略 / 运营项目",
    primaryTitle: "产品策略、增长系统、创作者/社区项目与商业规划。",
    secondaryKicker: "内容 / 视觉项目",
    secondaryTitle: "内容制作、公开视频、视觉系统与审美判断。",
  },
  ai: {
    label: "AI Native",
    title: "AI 原生产品、AI 时代社群与系统搭建项目。",
    cn: "重点查看 AI 原生产品、AI 时代社群、AI 辅助工作流和系统化搭建相关案例。",
    primaryKicker: "AI Native 项目",
    primaryTitle: "AI 原生产品、社群、工作流工具和系统搭建案例。",
    secondaryKicker: "相关系统能力",
    secondaryTitle: "与 AI 时代产品、增长、创作者生态和社区运营相关的支持性项目。",
  },
  growth: {
    label: "增长 / GTM",
    title: "增长、GTM、社区激活与渠道搭建案例。",
    cn: "重点查看校园增长、社区激活、合作渠道、用户触达和产品转化相关案例。",
    primaryKicker: "增长案例",
    primaryTitle: "上线、激活、受众增长、合作伙伴和渠道证据。",
    secondaryKicker: "相关内容证据",
    secondaryTitle: "支撑增长叙事的内容与视觉资产。",
  },
  creator: {
    label: "创作者 / 社区",
    title: "创作者生态、社区策略与受众定位案例。",
    cn: "重点查看创作者生态、社区运营、达人资源、受众定位和跨平台内容系统。",
    primaryKicker: "创作者 / 社区案例",
    primaryTitle: "受众定位、创作者资源、协作模型与 campaign 系统。",
    secondaryKicker: "内容制作支持",
    secondaryTitle: "支撑创作者叙事和社区表达的内容作品。",
  },
  product: {
    label: "产品策略",
    title: "产品策略、定位、产品营销与信息架构案例。",
    cn: "重点查看产品定位、商业计划、推荐与营销系统设计、信息架构和产品叙事能力。",
    primaryKicker: "产品 / 策略案例",
    primaryTitle: "商业计划、产品叙事、信息架构、推荐与营销系统设计和上线资产。",
    secondaryKicker: "相关叙事支持",
    secondaryTitle: "帮助产品想法被理解的内容和视觉系统。",
  },
  content: {
    label: "内容 / 制作",
    title: "内容生产、短片/视频作品与叙事执行。",
    cn: "重点查看影像制作、短片、公开视频、内容表达和叙事执行经验。",
    primaryKicker: "内容策略案例",
    primaryTitle: "内容系统、创作者协作和面向平台的叙事执行。",
    secondaryKicker: "影像 / 视觉案例",
    secondaryTitle: "短片、视频档案、摄影和视觉制作证据。",
  },
  visual: {
    label: "视觉系统",
    title: "视觉系统、海报、摄影、品牌语言与构图作品。",
    cn: "重点查看海报系统、摄影、品牌语言、网页视觉和构图判断。",
    primaryKicker: "视觉策略案例",
    primaryTitle: "品牌系统和面向产品的视觉结构。",
    secondaryKicker: "创意 / 视觉证据",
    secondaryTitle: "海报、摄影和更能说明审美判断的视觉作品。",
  },
  credentials: {
    label: "工具 / 证书",
    title: "工具熟练度和数字营销基础。",
    cn: "轻量查看营销分析、社媒工具和数字营销基础证书。",
    primaryKicker: "证书",
    primaryTitle: "数据分析、社媒工具和数字营销基础。",
    secondaryKicker: "相关项目",
    secondaryTitle: "可以应用这些基础能力的项目案例。",
  },
};

const projects = [
  {
    title: "Ditto — International Campus Growth System",
    displayOrder: 10,
    category: "AI Native Product / Marketing Director & Growth Consultant",
    track: "strategic",
    filters: ["ai", "growth", "product", "creator"],
    featured: true,
    tags: ["AI-native product", "Campus growth", "Funnel analytics", "Channel attribution", "Product growth"],
    quick: ["Marketing Director & Growth Consultant", "Campus acquisition and activation", "Funnel tracking and channel attribution"],
    cn: "Ditto 是 AI Native 公司的 AI Native 产品工作项目，呈现校园增长、渠道归因、漏斗分析和产品增长协作。",
    summary:
      "An AI-native student social product growth system connecting field marketing, funnel analytics, ambassador channels, and product-growth feedback loops.",
    caseNotes: {
      rows: [
        {
          label: "Context",
          text: "AI-native student social product growth across student communities, campus channels, events, ambassadors, and local activation.",
        },
        {
          label: "Role",
          text: "Marketing Director & Growth Consultant.",
        },
        {
          label: "Contribution",
          text: "Led growth systems for an AI-native student product across campus acquisition, channel operations, attribution, campaign execution, and product feedback loops.",
        },
      ],
      signal: "AI-native product growth system · funnel tracking · channel attribution · product-growth collaboration.",
      signalCn: "呈现 AI 原生产品增长、校园渠道、漏斗分析和产品增长协作能力。",
    },
    media: [{ src: "./assets/project-covers/ditto-homepage.png", alt: "Ditto public website homepage", cover: true, wide: true }],
    links: [{ label: "Official website", url: "https://ditto.ai" }],
  },
  {
    title: "ENC Mobile — Marketing & Business Development",
    displayOrder: 30,
    category: "Marketing & Business Development Manager",
    track: "strategic",
    filters: ["growth", "product"],
    featured: true,
    tags: ["Regional BD", "Student market", "Partner growth", "Local channels", "Product coordination"],
    quick: ["Marketing & Business Development Manager", "Student-market expansion", "Partner channels and product coordination"],
    cn: "ENC Mobile 工作项目，呈现市场营销、商务拓展、学生市场、渠道合作和产品/技术团队协作。",
    summary:
      "Regional marketing and business-development work across student-market expansion, partner channels, local growth, and product/technical team coordination.",
    caseNotes: {
      rows: [
        {
          label: "Context",
          text: "Regional marketing and BD for a telecom/mobile-service business, with focus on student-market growth and partner/channel expansion.",
        },
        {
          label: "Role",
          text: "Marketing & Business Development Manager.",
        },
        {
          label: "Contribution",
          text: "Drove marketing and business-development work across student-market expansion, partner channels, local growth, and product/team coordination.",
        },
      ],
      signal: "Marketing & BD ownership · student-market expansion · partner/channel development · product-team coordination.",
      signalCn: "呈现市场拓展、学生市场增长、合作伙伴渠道和跨团队协作能力。",
    },
    media: [{ src: "./assets/project-covers/encmobile-unlimited-plan.png", alt: "ENC Mobile Unlimited Plan campaign banner", cover: true, wide: true }],
    links: [{ label: "Official website", url: "https://www.encmobile.com/" }],
  },
  {
    title: "HYPIE Marketing — Overseas Brand Growth Agency",
    displayOrder: 40,
    category: "Founder / Overseas Brand Growth / Creator & Community",
    track: "strategic",
    filters: ["growth", "creator", "content"],
    featured: true,
    tags: ["Founder", "Overseas growth", "Brand marketing", "Creator network", "Local activation"],
    quick: ["Founder", "Overseas brand growth agency", "Creator and community resource system"],
    cn: "面向企业和品牌出海增长的营销机构项目，呈现品牌增长、创作者资源、本地化触达和跨平台激活能力。",
    summary:
      "An overseas growth marketing agency for brands expanding into North American consumer, student, and Chinese-speaking markets, combining brand strategy, creator resources, social content, and local-market activation.",
    caseNotes: {
      rows: [
        {
          label: "Context",
          text: "Overseas growth marketing and community go-to-market work for brands expanding into North American consumer, student, and Chinese-speaking markets.",
        },
        {
          label: "Role",
          text: "Founder.",
        },
        {
          label: "Contribution",
          text: "Built the agency direction and growth-service model for overseas brand expansion.",
        },
      ],
      signal: "Founder ownership · overseas brand-growth agency · creator/community resource system · cross-platform activation.",
      signalCn: "呈现创始人角色、品牌出海增长、创作者/社区资源系统和跨平台激活能力。",
    },
    media: [{ src: "./assets/project-covers/hypie-agency-cover.png", alt: "Hypie overseas growth marketing agency cover" }],
    links: [],
  },
  {
    title: "BrandYou — AI-Native Community & Brand System",
    displayOrder: 45,
    category: "Co-founder / Partner / AI-Native Community",
    track: "strategic",
    filters: ["ai", "growth", "creator", "content", "product"],
    featured: true,
    tags: ["AI-native community", "Co-founder", "0-to-1 website", "Brand system", "Community narrative"],
    quick: ["Co-founder & Partner", "AI-native youth community", "0-to-1 brand, website, and launch narrative"],
    cn: "AI 时代青年行动社群与品牌系统，围绕“像打造 AI 初创公司一样打造自己”，完成定位、网站、社群叙事和启动素材。",
    summary:
      "A 0-to-1 AI-native youth community and brand system built around \"Build yourself like an AI startup,\" covering positioning, website, community narrative, and launch materials.",
    caseNotes: {
      context: "AI-native community for independent builders turning identity, AI workflows, trusted networks, and new growth engines into personal assets.",
      role: "Co-founder & Partner.",
      contribution: "Co-led the 0-to-1 build of an AI-native community and public-facing brand system.",
      output: "Live website, brand narrative, community structure, and launch-facing public page.",
      signal: "Co-founder ownership · AI-native community · 0-to-1 brand system and website.",
      signalCn: "联合创始人/合伙人项目，体现 AI 时代社群、品牌定位和网站从 0 到 1 搭建能力。",
    },
    media: [{ src: "./assets/project-covers/brandyou-ai-native.png", alt: "BrandYou AI-native community website homepage", cover: true }],
    links: [{ label: "Live website", url: brandYouUrl }],
  },
  {
    title: "InfluencerOps Playbook",
    displayOrder: 48,
    category: "AI Marketing Ops / Workflow System",
    track: "strategic",
    filters: ["ai", "growth", "creator", "product"],
    featured: true,
    tags: ["AI workflow", "Influencer marketing", "Creator ops", "Automation tool", "Operating playbook"],
    quick: ["Builder / Workflow Designer", "Influencer marketing operating system", "Playbook plus AI workflow tool"],
    cn: "红人营销流程手册与 AI 辅助工作流原型，覆盖达人筛选、评估、建联、上线、数据追踪、复盘和续约判断。",
    summary:
      "An influencer marketing operating playbook and AI workflow tool that turns creator sourcing, evaluation, outreach, launch tracking, and renewal decisions into a structured workflow.",
    caseNotes: {
      context: "Transferable influencer marketing workflow for creator sourcing, evaluation, pricing, launch controls, performance tracking, and renewal decisions.",
      role: "Builder / Workflow Designer.",
      contribution: "Turned repeated influencer-marketing decisions into a structured operating system and AI-assisted workflow tool.",
      output: "Operating playbook, workflow map, creator scorecard, decision gates, and live AI workflow tool.",
      signal: "AI-assisted marketing workflow · creator evaluation system · live workflow tool.",
      signalCn: "说明 AI 辅助营销工作流、达人评估系统和可打开的工作流工具。",
    },
    media: [{ src: "./assets/project-covers/influencerops-playbook.png", alt: "InfluencerOps Playbook website homepage", cover: true }],
    links: [
      { label: "Operating playbook", url: "https://summer-ikiki.github.io/influencerops-playbook/" },
      { label: "AI workflow tool", url: "https://summer-ikiki.github.io/influencerops-playbook/dashboard.html" },
    ],
  },
  {
    title: "PandaPal",
    displayOrder: 20,
    category: "Founder / Product Marketing / Growth",
    track: "strategic",
    filters: ["ai", "growth", "creator", "product"],
    featured: true,
    timeline: "Initiated in 2021",
    tags: ["0-to-1 product", "Campus GTM", "Community growth", "BD", "Product video"],
    quick: ["Founder", "Campus product and GTM", "Product, business, and marketing launch system"],
    cn: "围绕真实落地的校园生活方式产品，推进市场洞察、GTM、社群增长、BD、产品介绍视频与小程序上线准备。",
    summary:
      "A campus lifestyle product developed from market insight into business planning, marketing planning, product video, community growth, and mini-program launch preparation.",
    caseNotes: {
      context: "Campus lifestyle mini-program product for Chinese students, built from market insight through launch-facing product and growth work.",
      role: "Founder.",
      contribution: "Founded and led product positioning, GTM planning, business planning, marketing planning, product video, and mini-program launch preparation.",
      output: "Business plan, marketing plan, product videos, campus GTM work, and mini-program launch preparation.",
      signal: "0-to-1 founder ownership across product, GTM, community growth, and launch-facing execution.",
      signalCn: "具备 0-1 创始人 ownership，能把产品、GTM、社群增长和上线执行串起来推进。",
    },
    media: [
      { id: "1d8T0Lv6JAeLc-AL_2hhNQaJPYA9HqAG_", alt: "PandaPal poster" },
      { id: "1XtXyjNtDkas6uGmH9vX_O3KyDGktFacK", alt: "PandaPal mini app project plan cover" },
    ],
    preview: {
      title: "PandaPal English Product Video",
      description: "Product storytelling, campus positioning, and GTM materials.",
      url: drivePreview("1Injvll7j0QcT2IopAMZhHdu_tzougVnL"),
      coverOnly: true,
    },
    linkLimit: 7,
    links: [
      { label: "English product video", url: driveFile("1Injvll7j0QcT2IopAMZhHdu_tzougVnL") },
      { label: "Chinese product video", url: driveFile("12MffxJrdn4ZPEElJLaHPM2rOrZ_-YBw4") },
      { label: "Business plan", url: driveFile("1IczD8hdSjMkvNSnOeVLAIBM7E2QdOEsI") },
      { label: "Marketing plan", url: driveFile("14kbBTxT_2rZFUvbj7Af2IYLNygvIxRYf") },
      { label: "PandaPal Instagram", url: "https://www.instagram.com/pandapal_us?igsh=NTc4MTIwNjQ2YQ==" },
      { label: "PandaPal FM / Linktree", url: "https://linktr.ee/pandapalfm?utm_source=qr_code" },
      { label: "Source folder", url: driveFolder("1XTy1eNbYn6JsrrFu58C8jezgsiPN59km") },
    ],
  },
  {
    title: "Legend Co-shooting",
    displayOrder: 60,
    category: "Founder / Film Collaboration Venture",
    track: "strategic",
    filters: ["ai", "creator", "product", "content"],
    featured: true,
    timeline: "Initiated in 2018",
    tags: ["Founder", "Creator collaboration", "Film resources", "Pitch", "Ops model", "Business plan"],
    quick: ["Founder", "Film collaboration venture", "Awarded Chinese plan and bilingual pitch materials"],
    cn: "影视协作与资源共享平台项目，涵盖创作者协作、制作资源整合、运营模型、商业计划和路演表达。",
    summary:
      "A film-resource collaboration venture connecting creator workflows, shared production resources, operating structure, and business storytelling.",
    caseNotes: {
      context: "Film-resource collaboration venture for creators, crews, and shared production resources.",
      role: "Founder / Project Principal.",
      contribution: "Initiated a film-resource collaboration venture and developed its operating model and pitch narrative.",
      output: "Awarded Chinese business plan, English business plan, pitch video, and venture source folder.",
      signal: "Founder ownership · awarded Chinese business plan · bilingual venture materials and pitch video.",
      signalCn: "Founder 项目，包含获奖中文商业计划书、英文商业计划书与路演视频。",
    },
    media: [
      { id: "1TU72JpjLv--xaVSqxzt4IpQ89hR9mcM1", alt: "Legend Co-shooting English business plan cover" },
      { id: "1gB3doVXuY7SnRSdbwr6XEiBbIvjYs5yz", alt: "Legend Co-shooting business plan cover" },
    ],
    preview: {
      title: "Legend Co-shooting Pitch Video",
      description: "One-minute pitch showing film-collaboration positioning and product narrative.",
      url: drivePreview("1rPg4Ro-oejSKkLX-Q12eL37DCPY5Cofl"),
      coverOnly: true,
    },
    links: [
      { label: "Pitch video", url: driveFile("1rPg4Ro-oejSKkLX-Q12eL37DCPY5Cofl") },
      { label: "English business plan", url: driveFile("1TU72JpjLv--xaVSqxzt4IpQ89hR9mcM1") },
      { label: "Awarded Chinese business plan", url: driveFile("1ruRCqwxiIOkRrA5FIOteB2ydmJ6uozne") },
      { label: "Source folder", url: driveFolder("1KzwCNDPfTeUABiqp6ahZkxsXCdNmEnB6") },
    ],
  },
  {
    title: "SWAP",
    displayOrder: 50,
    category: "Co-founder & Marketing Partner / Social Product",
    track: "strategic",
    filters: ["growth", "product", "creator"],
    timeline: "Launched in 2023",
    tags: ["Co-founder", "Marketing partner", "Social product", "Community activation", "Product education"],
    quick: ["Co-founder & Marketing Partner", "Live skill-exchange social product", "Website, RED proof, and education videos"],
    cn: "已上线的技能交换社交产品，结合官网、小红书公开视频、产品教育、社区激活和线上/线下转化进行表达。",
    summary:
      "A launched youth skill-exchange social product presented through its live website, public RED / Xiaohongshu proof, explainer videos, user education, and activation materials.",
    caseNotes: {
      context: "Launched skill-exchange social product for young users, combining product education, community activation, and social proof.",
      role: "Co-founder & Marketing Partner.",
      contribution: "Co-founded the launched social product and led marketing-facing positioning, product education, public proof, and community activation work.",
      output: "Live website, RED / Xiaohongshu proof, product videos, introduction material, and source folder.",
      signal: "Launched product website · RED / Xiaohongshu proof · onboarding and product-education content.",
      signalCn: "已上线产品，具备官网、公开视频证据和产品教育内容。",
    },
    media: [
      { id: "1BrNToM6hwdvyEY6DDGM1iOTfQGPA7Oe2", alt: "SWAP 2023 video thumbnail" },
      { id: "1yux9rYuMrwdAkdVadCXvnPVJ1yPrdm5F", alt: "How to use SWAP video thumbnail" },
    ],
    preview: {
      title: "SWAP 2023 Video",
      description: "Social-product positioning and onboarding material.",
      url: drivePreview("1BrNToM6hwdvyEY6DDGM1iOTfQGPA7Oe2"),
      openUrl: driveFile("1BrNToM6hwdvyEY6DDGM1iOTfQGPA7Oe2"),
      coverOnly: true,
    },
    links: [
      { label: "Live website", url: "https://swapapp.club/" },
      { label: "RED / Xiaohongshu proof", url: "https://xhslink.com/o/4ZRv1iL2iEZ" },
      { label: "Product video", url: driveFile("1BrNToM6hwdvyEY6DDGM1iOTfQGPA7Oe2") },
      { label: "Source folder", url: driveFolder("1O9RAP6hjMmxNjm_il9KWEqCo8Os8JjAF") },
      { label: "How-to video", url: driveFile("1yux9rYuMrwdAkdVadCXvnPVJ1yPrdm5F") },
      { label: "Introduction", url: driveFile("1_4rqVHPltT6y4FntMxo5t_qyl9XHF3rv") },
    ],
  },
  {
    title: "Influencer & Social Media Strategy",
    category: "Creator Marketing / Growth Strategy",
    track: "strategic",
    filters: ["creator", "growth"],
    featured: true,
    tags: ["Creator strategy", "Audience positioning", "Campaign", "Social content"],
    quick: ["Creator strategy", "Audience and campaign system", "Cross-platform content direction"],
    cn: "围绕个人影响力、受众定位、campaign 设计、社媒内容方向和跨平台内容系统展开。",
    summary:
      "Strategy work around audience positioning, creator voice, campaign design, social-media direction, and cross-platform content systems.",
    caseNotes: {
      context: "Creator and social-media strategy work across personal influence, campaign design, and audience systems.",
      role: "Creator / Social Strategy.",
      contribution: "Built audience and creator-strategy direction across positioning, campaign angles, content systems, and cross-platform social narrative.",
      output: "Influence strategy, KUSC campaign material, creative sample, and strategy source folder.",
      signal: "Creator/audience positioning · campaign planning · cross-platform content strategy.",
      signalCn: "覆盖创作者定位、受众策略、campaign 设计与跨平台内容方向。",
    },
    media: [
      { id: "1OnCsi2WErG_pGgk6ZHwMWsieDCDzQIkz", alt: "Influence plan cover" },
      { id: "1tZa8qqSpmWTRr_P1kgcuqGQTqlB2Ge2H", alt: "KUSC campaign cover" },
    ],
    preview: {
      title: "Zhe Chen Influence Plan",
      description: "Audience positioning and creator-growth strategy document.",
      url: drivePreview("1OnCsi2WErG_pGgk6ZHwMWsieDCDzQIkz"),
    },
    links: [
      { label: "Audience strategy", url: driveFile("1OnCsi2WErG_pGgk6ZHwMWsieDCDzQIkz") },
      { label: "KUSC campaign plan", url: driveFile("1tZa8qqSpmWTRr_P1kgcuqGQTqlB2Ge2H") },
      { label: "Creative sample", url: driveFile("1MFOHGRtgiSFly8WRENTLYb4cJi6sJ7Rr") },
      { label: "Source folder", url: driveFolder("15VMFCydGzG_cUHeoIActu4p__hOaJTac") },
    ],
  },
  {
    title: "Di's Spring | 春笛",
    category: "Creative Direction / Production",
    track: "creative",
    filters: ["content", "visual"],
    tags: ["Director", "Producer", "Storytelling", "Poster system", "Short film"],
    quick: ["Director / Producer", "Short-film production", "Public film and poster system"],
    cn: "从故事、拍摄、制作到视觉系统的短片作品线，说明叙事判断、制作推进、海报系统和公开视频入口。",
    summary:
      "A short-film project showing creative direction, end-to-end production ownership, visual system development, and narrative judgment.",
    caseNotes: {
      context: "Short-film work spanning story development, production, and poster-system execution.",
      role: "Director / Producer.",
      contribution: "Led creative direction and production execution across story, shooting coordination, and visual-system delivery.",
      output: "Public YouTube film link, poster system, source materials, and production archive.",
      signal: "End-to-end creative ownership · public short film · poster system and production archive.",
      signalCn: "从创意、拍摄、制作到视觉系统的完整执行。",
    },
    media: [
      { id: "1RWkEVKnXRuYNpP9eqpUNBT6gwEUBVQFa", alt: "Di's Spring poster 1" },
      { id: "1lJfrY7HxcCOiA4znDhqqF8_rN2tIjzos", alt: "Di's Spring poster 2" },
    ],
    preview: {
      title: "Di's Spring Drive Folder",
      description: "Short-film posters and source materials for creative-direction review.",
      url: folderPreview("1U4wN0ee0QfFRNIQfIq4FktzAUg0Hqo_T"),
    },
    links: [
      { label: "Watch short film", url: "https://youtu.be/skGrsfo5ZoY" },
      { label: "Poster set 1", url: driveFile("1RWkEVKnXRuYNpP9eqpUNBT6gwEUBVQFa") },
      { label: "Poster set 2", url: driveFile("1lJfrY7HxcCOiA4znDhqqF8_rN2tIjzos") },
      { label: "Source folder", url: driveFolder("1U4wN0ee0QfFRNIQfIq4FktzAUg0Hqo_T") },
      { label: "Video-link doc", url: driveFile("1dQy5bIc2HM6PSZIvCX4V9rh0ps2y1sGm") },
    ],
  },
  {
    title: "Mirror & Early Video Works",
    category: "Video Production / Content Archive",
    track: "creative",
    filters: ["content"],
    tags: ["Director", "Writer", "Editor", "VLOG", "Documentary"],
    quick: ["Writer / Director / Editor", "Early video archive", "$30 first micro short film"],
    cn: "早期独立影像作品档案，包含 30 美金低成本微电影《Mirror》、VLOG、纪录/文化类视频和早期制作作品。",
    summary:
      "A hands-on video archive anchored by Mirror, my first micro short film made on a $30 budget, alongside VLOG, documentary-style content, and early production work.",
    caseNotes: {
      context: "Early video archive spanning micro short film, VLOG, documentary-style work, and early production practice.",
      role: "Writer / Director / Editor.",
      contribution: "Created low-budget video work while building hands-on production judgment across writing, directing, editing, and presentation.",
      output: "Mirror short film, VLOG selection, TCM video selection, and early video source folder.",
      signal: "First micro short film made on a $30 budget · writing, directing, editing, and final delivery.",
      signalCn: "30 美金低成本完成的第一个微电影作品，覆盖编剧、导演、剪辑与交付。",
    },
    media: [
      { id: "14ChEuJG9I8DkBbOnZS5XZf2pY5CPDbXE", alt: "Early video works cinematic street frame" },
      { id: "1v2OwWs2D_ZXPvrld6jMnU9oxL6DdSEZU", alt: "Hong Kong VLOG thumbnail" },
    ],
    preview: {
      title: "Mirror Short Film",
      description: "My first micro short film, made on a $30 budget, with writing, directing, and editing by me.",
      url: drivePreview("1wVnot_lS6ddUPtxO22dRApu5aEfxaW5l"),
      coverOnly: true,
    },
    links: [
      { label: "Mirror short film", url: driveFile("1wVnot_lS6ddUPtxO22dRApu5aEfxaW5l") },
      { label: "Hong Kong VLOG", url: driveFile("1v2OwWs2D_ZXPvrld6jMnU9oxL6DdSEZU") },
      { label: "TCM video", url: driveFile("1mpQ5dEeaFKamib4C-4iLHQlmoAv67V-c") },
      { label: "Source folder", url: driveFolder("119nngfAtwaY497V_NYCFyJ4doDOQ3Yh0") },
    ],
  },
  {
    title: "Web Strategy & Brand System",
    category: "Product Marketing / Web Strategy",
    track: "strategic",
    filters: ["product", "visual"],
    featured: true,
    tags: ["IA", "Wireframe", "Brand system", "Content hierarchy"],
    quick: ["Product / Web Strategy", "IA and brand system", "Website strategy system"],
    cn: "网站策略系统，覆盖信息架构、内容层级、品牌表达、视觉语言和 wireframe。",
    summary:
      "A website-strategy system covering product-marketing structure, information architecture, content hierarchy, brand language, and execution taste.",
    caseNotes: {
      context: "Personal website strategy system connecting product-marketing structure, information architecture, and brand expression.",
      role: "Product / Web Strategy.",
      contribution: "Developed the website strategy system by connecting information architecture, content hierarchy, brand language, and product-facing wireframe logic.",
      output: "Website strategy plan, brand system, sitemap/IA material, wireframe, and source folder.",
      signal: "IA, content hierarchy, brand system, and wireframe thinking in one website strategy system.",
      signalCn: "把信息架构、内容层级、品牌系统和 wireframe 思考整合到一个网站策略方案中。",
    },
    media: [
      { id: "1mcpMR88Qf87W8jo6k7xK_7g5tt5xvcuO", alt: "Brand Bible design page" },
      { id: "1lEpaHQ39AXTDRfMkMfWi8g2oFr720a9S", alt: "Wireframe page" },
    ],
    preview: {
      title: "CHEN_ZHE Website Plan",
      description: "Website strategy, IA, and brand-system document.",
      url: drivePreview("1Rdm0_fB90gCRB8VePIuoeIfwHuz2k8FO"),
    },
    links: [
      { label: "Website strategy plan", url: driveFile("1Rdm0_fB90gCRB8VePIuoeIfwHuz2k8FO") },
      { label: "Brand system", url: driveFile("1mcpMR88Qf87W8jo6k7xK_7g5tt5xvcuO") },
      { label: "Sitemap / IA", url: driveFile("16tLNOjKrkKgNJ5qUZdXS3qtiJK6uJ6HE") },
      { label: "Source folder", url: driveFolder("120MJ96Fs5jbodK0F8pGKLsT7LEBy7H6s") },
    ],
  },
  {
    title: "Photography Works",
    category: "Visual Taste / Storytelling",
    track: "creative",
    filters: ["visual", "content"],
    tags: ["Photography", "Composition", "Mood", "Cinematic framing"],
    quick: ["Photography / Visual curation", "Travel and observational archive", "Composition and cinematic framing"],
    cn: "摄影作品用于说明审美、构图、现场感、空间氛围和视觉判断力。",
    summary:
      "A selected visual archive showing composition, mood, place, and cinematic framing across travel and observational photography.",
    caseNotes: {
      context: "Selected photography archive used to show visual judgment, place, mood, and composition.",
      role: "Photographer / Visual Curator.",
      contribution: "Shot and curated travel and observational photography to show composition, mood, place, and cinematic framing.",
      output: "Photography folder and selected frames for visual-taste review.",
      signal: "Visual judgment across composition, mood, place, and cinematic framing.",
      signalCn: "通过构图、氛围、空间与电影感画面说明视觉判断力。",
    },
    media: [
      { id: "1lFptt9FCqFUUJpGYDZINaJjArX48Ocfj", alt: "Photography work mountain lake frame" },
      { id: "1ZboiXkctYxBm9yLmKNW1wMRIdaXhdH7H", alt: "Photography work landscape" },
    ],
    preview: {
      title: "Photography Works Folder",
      description: "Visual taste and composition archive.",
      url: folderPreview("17AvL8OkWYqEjJLYHq9vMtenRYdOEV_m0"),
    },
    links: [
      { label: "Photography archive", url: driveFolder("17AvL8OkWYqEjJLYHq9vMtenRYdOEV_m0") },
      { label: "Mountain lake selection", url: driveFile("1lFptt9FCqFUUJpGYDZINaJjArX48Ocfj") },
      { label: "Landscape selection", url: driveFile("1ZboiXkctYxBm9yLmKNW1wMRIdaXhdH7H") },
    ],
  },
  {
    title: "Insight Fast Recommendation",
    category: "Core Founding Member / Product Strategy",
    track: "strategic",
    filters: ["ai", "product", "growth"],
    timeline: "Developed in 2020",
    tags: ["Core founding member", "Recommendation", "Personalization", "Marketing system", "Product strategy"],
    quick: ["Core founding member", "Recommendation and marketing system", "Personalization and campaign logic"],
    cn: "作为核心创始成员参与的推荐与营销系统设计，侧重个性化、产品策略、用户触达和营销系统思维。",
    summary:
      "A recommendation and marketing-system design focused on personalization, product strategy, user targeting, and campaign logic.",
    caseNotes: {
      context: "Recommendation and marketing-system design focused on personalization and user targeting.",
      role: "Core Founding Member.",
      contribution: "Framed product logic, campaign use cases, and marketing-system thinking for recommendation scenarios.",
      output: "Recommendation system PDF and source folder.",
      signal: "Core founding member · recommendation system design · personalization and marketing-system logic.",
      signalCn: "核心创始成员参与，说明推荐系统设计、个性化逻辑和营销系统思维。",
    },
    media: [{ id: "132tXCqG0Jz3gXfi1yqYr8UCnfsdkCxIJ", alt: "Insight Fast Recommendation cover" }],
    preview: {
      title: "Insight Fast Recommendation PDF",
      description: "Product strategy and recommendation-system design.",
      url: drivePreview("132tXCqG0Jz3gXfi1yqYr8UCnfsdkCxIJ"),
    },
    links: [
      { label: "Recommendation system PDF", url: driveFile("132tXCqG0Jz3gXfi1yqYr8UCnfsdkCxIJ") },
      { label: "Source folder", url: driveFolder("1Sb4oSljMtuK25_KeiRdvU_HV3DlojNC7") },
    ],
  },
  {
    title: "Certifications",
    category: "Analytics / Tool Fluency",
    track: "strategic",
    filters: ["credentials"],
    tags: ["Google Analytics", "Hootsuite", "Credential", "Digital marketing"],
    quick: ["Tool credentials", "Analytics and social tools", "GA and Hootsuite foundations"],
    cn: "证书区保持轻量，用于补充增长、数据反馈、社媒工具和数字营销基础。",
    summary:
      "Selected analytics and social-media credentials that complement marketing, growth, and operations work.",
    caseNotes: {
      context: "Supporting credentials for analytics, digital marketing, and social-media tool fluency.",
      role: "Credential Holder.",
      output: "Google Analytics qualification, Hootsuite credential, and source folder.",
      signal: "Google Analytics and Hootsuite credentials supporting marketing measurement and social-tool fluency.",
      signalCn: "补充证明营销分析、数据反馈和社媒工具基础。",
    },
    media: [
      { id: "11v5hZsP7C0E65ozmUpT0nLbOmfNC7xsO", alt: "Google Analytics Individual Qualification certificate" },
      { id: "1yH1H6ClqzEfiQm98qBT5FMay4mNMjHyC", alt: "Hootsuite Academy certification" },
    ],
    preview: {
      title: "Google Analytics Individual Qualification",
      description: "Marketing analytics and measurement credential.",
      url: drivePreview("11v5hZsP7C0E65ozmUpT0nLbOmfNC7xsO"),
    },
    links: [
      { label: "Google Analytics qualification", url: driveFile("11v5hZsP7C0E65ozmUpT0nLbOmfNC7xsO") },
      { label: "Hootsuite credential", url: driveFile("1yH1H6ClqzEfiQm98qBT5FMay4mNMjHyC") },
      { label: "Source folder", url: driveFolder("1qg5MMuPVQA5Ook2JIBpcdwKGClTNACL9") },
    ],
  },
];

const projectCopyZh = {
  "Ditto — International Campus Growth System": {
    title: "Ditto — 国际校园增长系统",
    category: "AI 原生产品 / Marketing Director & Growth Consultant",
    tags: ["AI 原生产品", "校园增长", "漏斗分析", "渠道归因", "产品增长"],
    quick: ["Marketing Director & Growth Consultant", "校园获客与激活", "漏斗追踪与渠道归因"],
    summary: "我围绕 AI 原生学生社交产品搭建校园增长系统，把线下触达、渠道运营、数据追踪和产品反馈连接起来。",
    caseNotes: {
      context: "AI 原生学生社交产品的校园增长工作，覆盖学生社区、校园渠道、活动、大使机制和本地化激活。",
      role: "Marketing Director & Growth Consultant.",
      contribution: "我把校园获客、渠道运营、漏斗追踪和产品反馈串成增长闭环，推动产品从触达到转化。",
      signal: "熟悉从线下触达到数据归因再到产品反馈的增长闭环，能在早期产品增长中同时推进执行和复盘。",
      signalCn: "",
    },
    linkLabels: { "Official website": "官网" },
  },
  "ENC Mobile — Marketing & Business Development": {
    title: "ENC Mobile — 市场与商务拓展",
    category: "Marketing & Business Development Manager",
    tags: ["区域 BD", "学生市场", "合作伙伴增长", "本地渠道", "产品协作"],
    quick: ["Marketing & Business Development Manager", "学生市场拓展", "合作渠道与产品协同"],
    summary: "围绕学生市场、合作伙伴渠道、本地增长和产品/技术团队协作展开的市场与商务拓展项目。",
    caseNotes: {
      context: "面向电信/移动服务业务的区域市场与 BD 工作，重点是学生市场增长和合作渠道拓展。",
      role: "Marketing & Business Development Manager.",
      contribution: "我负责学生市场拓展、合作渠道沟通、本地活动触达，并把一线市场反馈同步给产品/技术团队。",
      signal: "具备市场 + BD + 跨团队协作经验，能在增长一线推动业务落地。",
      signalCn: "",
    },
    linkLabels: { "Official website": "官网" },
  },
  "HYPIE Marketing — Overseas Brand Growth Agency": {
    title: "HYPIE Marketing — 品牌出海增长机构",
    category: "Founder / 品牌出海增长 / 创作者与社区",
    tags: ["Founder", "品牌出海", "品牌营销", "创作者网络", "本地化激活"],
    quick: ["Founder", "品牌出海增长机构", "创作者与社区资源系统"],
    summary: "服务企业和品牌出海增长的营销机构，结合品牌策略、创作者资源、社媒内容和本地市场激活。",
    caseNotes: {
      context: "为品牌进入北美消费市场、学生市场和华人市场提供出海增长与社区 GTM 支持。",
      role: "Founder.",
      contribution: "我搭建品牌出海增长服务方向，组织创作者资源、社群触达和本地化传播方案。",
      signal: "理解品牌出海、社区传播和创作者资源整合，能把分散资源组织成可交付的增长服务。",
      signalCn: "",
    },
  },
  "BrandYou — AI-Native Community & Brand System": {
    title: "BrandYou — AI Native 社群与品牌系统",
    category: "Co-founder / Partner / AI Native 社群",
    tags: ["AI Native 社群", "Co-founder", "0-1 网站", "品牌系统", "社群叙事"],
    quick: ["Co-founder & Partner", "AI 时代青年行动社群", "0-1 品牌、网站与启动叙事"],
    summary: "围绕“Build yourself like an AI startup”从 0 到 1 搭建的 AI Native 青年行动社群与品牌系统。",
    caseNotes: {
      context: "面向独立成长者和行动者的 AI Native 社群，把身份定位、AI 工作流、可信网络和增长引擎变成个人资产。",
      role: "Co-founder & Partner.",
      contribution: "我作为联合创始人/合伙人，参与 AI Native 青年行动社群的定位、品牌系统、网站和启动叙事。",
      signal: "能从 0 到 1 搭建面向新趋势的人群、品牌和社区项目，并把抽象定位落到可访问的网站与叙事中。",
      signalCn: "",
    },
    linkLabels: { "Live website": "打开网站" },
  },
  "InfluencerOps Playbook": {
    title: "InfluencerOps Playbook — 红人营销流程与 AI 工具",
    category: "AI 营销运营 / 工作流系统",
    tags: ["AI 工作流", "红人营销", "创作者运营", "自动化工具", "流程手册"],
    quick: ["Builder / Workflow Designer", "红人营销操作系统", "流程手册与 AI 工作流工具"],
    summary: "把达人筛选、评估、建联、上线追踪和续约判断整理成可复用的红人营销流程，并配套 AI 自动化辅助工具。",
    caseNotes: {
      context: "适用于红人营销的流程系统，覆盖达人筛选、评估、报价、上线控制、效果追踪和复盘续约。",
      role: "Builder / Workflow Designer.",
      contribution: "我把红人营销中反复发生的判断，整理成可复用流程、评分表、决策节点和 AI 辅助工具原型。",
      signal: "能把经验型营销工作沉淀为流程化系统，并用 AI 工具提升筛选、评估和执行效率。",
      signalCn: "",
    },
    linkLabels: { "Operating playbook": "流程手册", "AI workflow tool": "AI 工作流工具" },
  },
  PandaPal: {
    title: "PandaPal",
    category: "Founder / 产品营销 / 增长",
    tags: ["0-1 产品", "校园 GTM", "社区增长", "BD", "产品介绍视频"],
    quick: ["Founder", "校园产品与 GTM", "产品、商业计划和营销体系完整推进"],
    summary: "真实落地的校园生活方式产品，从市场洞察推进到商业计划、营销计划、产品介绍视频、社群增长和小程序上线准备。",
    caseNotes: {
      context: "面向中国留学生的校园生活方式小程序产品，从市场洞察推进到产品上线准备、GTM 和社群增长。",
      role: "Founder.",
      contribution: "我负责产品定位、GTM 规划、商业计划、营销计划、产品介绍视频和小程序上线准备。",
      signal: "具备 0-1 创始人 ownership，能把产品、GTM、社群增长和上线执行串起来推进。",
      signalCn: "",
    },
    linkLabels: {
      "English product video": "英文产品介绍视频",
      "Chinese product video": "中文产品介绍视频",
      "Business plan": "商业计划书",
      "Marketing plan": "营销计划书",
      "PandaPal Instagram": "PandaPal Instagram",
      "PandaPal FM / Linktree": "PandaPal FM / Linktree",
      "Source folder": "源材料文件夹",
    },
  },
  "Legend Co-shooting": {
    title: "Legend Co-shooting",
    category: "Founder / 影视协作平台",
    tags: ["Founder", "创作者协作", "影视资源", "路演", "运营模型", "商业计划"],
    quick: ["Founder", "影视协作平台", "获奖中文计划书与双语路演材料"],
    summary: "连接创作者协作、制作资源共享、运营结构和商业叙事的影视资源协作平台项目。",
    caseNotes: {
      context: "面向创作者、剧组和共享制作资源的影视协作平台构想。",
      role: "Founder / Project Principal.",
      contribution: "我发起影视资源协作平台项目，完成运营模型、商业故事、双语商业计划和路演叙事。",
      signal: "能把资源型平台想法转化为商业计划、运营结构和对外路演表达，并获得中文商业计划书奖项。",
      signalCn: "",
    },
    linkLabels: {
      "Pitch video": "路演视频",
      "English business plan": "英文商业计划书",
      "Awarded Chinese business plan": "获奖中文商业计划书",
      "Source folder": "源材料文件夹",
    },
  },
  SWAP: {
    title: "SWAP",
    category: "Co-founder & Marketing Partner / 社交产品",
    tags: ["Co-founder", "Marketing partner", "社交产品", "社区激活", "产品教育"],
    quick: ["Co-founder & Marketing Partner", "已上线技能交换社交产品", "官网、小红书证明与产品教育视频"],
    summary: "已上线的青年技能交换社交产品，通过官网、小红书公开视频、解释视频、用户教育和激活材料呈现。",
    caseNotes: {
      context: "面向年轻用户的技能交换社交产品，结合产品教育、社区激活和公开社媒证明。",
      role: "Co-founder & Marketing Partner.",
      contribution: "我作为 co-founder 和 marketing partner，参与产品上线后的市场定位、产品教育、公开证明和社区激活。",
      signal: "具备把社交产品从定位带到公开触达的经验，能用官网、公开视频和内容教育降低用户理解成本。",
      signalCn: "",
    },
    linkLabels: {
      "Live website": "官网",
      "RED / Xiaohongshu proof": "RED / 小红书证明",
      "Product video": "产品视频",
      "Source folder": "源材料文件夹",
      "How-to video": "使用说明视频",
      Introduction: "介绍材料",
    },
  },
  "Influencer & Social Media Strategy": {
    title: "Influencer & Social Media Strategy",
    category: "创作者营销 / 增长策略",
    tags: ["创作者策略", "受众定位", "Campaign", "社媒内容"],
    quick: ["创作者策略", "受众与 campaign 系统", "跨平台内容方向"],
    summary: "围绕受众定位、创作者人设、campaign 设计、社媒方向和跨平台内容系统展开的策略项目。",
    caseNotes: {
      context: "个人影响力、campaign 设计和受众系统相关的创作者与社媒策略工作。",
      role: "Creator / Social Strategy.",
      contribution: "我梳理受众定位、创作者表达、campaign 角度、内容系统和跨平台社媒叙事方向。",
      signal: "能把人群洞察、内容角度和平台表达组织成可执行的创作者增长策略。",
      signalCn: "",
    },
    linkLabels: {
      "Audience strategy": "受众策略",
      "KUSC campaign plan": "KUSC campaign 方案",
      "Creative sample": "创意样本",
      "Source folder": "源材料文件夹",
    },
  },
  "Di's Spring | 春笛": {
    title: "《春笛》Di's Spring",
    category: "创意导演 / 制作",
    tags: ["导演", "制片", "叙事", "海报系统", "短片"],
    quick: ["导演 / 制片", "短片制作", "公开短片与海报系统"],
    summary: "说明创意导演、端到端制作推进、视觉系统和叙事判断的短片项目。",
    caseNotes: {
      context: "覆盖故事发展、拍摄制作和海报系统执行的短片作品。",
      role: "Director / Producer.",
      contribution: "我负责创意方向和制作执行，推进故事、拍摄协调、后期交付和海报视觉系统。",
      signal: "具备端到端创意 ownership，能把短片从故事发展推进到公开作品和视觉系统。",
      signalCn: "",
    },
    linkLabels: {
      "Watch short film": "观看短片",
      "Poster set 1": "海报组 1",
      "Poster set 2": "海报组 2",
      "Source folder": "源材料文件夹",
      "Video-link doc": "视频链接文档",
    },
  },
  "Mirror & Early Video Works": {
    title: "Mirror 与早期影像作品",
    category: "影像制作 / 内容档案",
    tags: ["导演", "编剧", "剪辑", "VLOG", "纪录"],
    quick: ["编剧 / 导演 / 剪辑", "早期影像档案", "30 美金完成的第一个微电影"],
    summary: "以 30 美金低成本微电影《Mirror》为核心，包含 VLOG、纪录/文化类内容和学生时期制作练习的影像档案。",
    caseNotes: {
      context: "覆盖微电影、VLOG、纪录/文化类内容和学生制作练习的早期影像档案。",
      role: "Writer / Director / Editor.",
      contribution: "我在低预算条件下完成影像创作与交付，独立推进编剧、导演、剪辑和作品发布。",
      signal: "30 美金完成第一个微电影，说明我能在资源有限的情况下完成完整影像交付。",
      signalCn: "",
    },
    linkLabels: {
      "Mirror short film": "Mirror 微电影",
      "Hong Kong VLOG": "香港 VLOG",
      "TCM video": "中医视频",
      "Source folder": "源材料文件夹",
    },
  },
  "Web Strategy & Brand System": {
    title: "网站策略与品牌系统",
    category: "产品营销 / 网站策略",
    tags: ["信息架构", "Wireframe", "品牌系统", "内容层级"],
    quick: ["产品 / 网站策略", "信息架构与品牌系统", "网站策略方案"],
    summary: "覆盖产品营销结构、信息架构、内容层级、品牌语言和执行审美的网站策略系统。",
    caseNotes: {
      context: "连接产品营销结构、信息架构和品牌表达的个人网站策略系统。",
      role: "Product / Web Strategy.",
      contribution: "我把信息架构、内容层级、品牌语言和产品化 wireframe 逻辑整合成网站策略方案。",
      signal: "能把抽象个人品牌和内容资产整理成可导航、可阅读、可执行的网站结构。",
      signalCn: "",
    },
    linkLabels: {
      "Website strategy plan": "网站策略方案",
      "Brand system": "品牌系统",
      "Sitemap / IA": "Sitemap / 信息架构",
      "Source folder": "源材料文件夹",
    },
  },
  "Photography Works": {
    title: "摄影作品",
    category: "视觉审美 / 叙事",
    tags: ["摄影", "构图", "氛围", "电影感画面"],
    quick: ["摄影 / 视觉策展", "旅行与观察档案", "构图与电影感 framing"],
    summary: "通过旅行与观察摄影呈现构图、氛围、空间感和电影感画面的视觉判断。",
    caseNotes: {
      context: "用于说明视觉判断、地点感、氛围和构图能力的摄影档案。",
      role: "Photographer / Visual Curator.",
      contribution: "我拍摄并筛选旅行与观察摄影，用画面组织构图、氛围、空间和电影感 framing。",
      signal: "具备视觉选择和画面判断能力，能为内容、品牌和产品表达提供审美支撑。",
      signalCn: "",
    },
    linkLabels: {
      "Photography archive": "摄影档案",
      "Mountain lake selection": "山湖照片精选",
      "Landscape selection": "风景照片精选",
    },
  },
  "Insight Fast Recommendation": {
    title: "Insight Fast Recommendation",
    category: "核心创始成员 / 产品策略",
    tags: ["核心创始成员", "推荐系统", "个性化", "营销系统", "产品策略"],
    quick: ["核心创始成员", "推荐与营销系统", "个性化与 campaign 逻辑"],
    summary: "侧重个性化、产品策略、用户触达和 campaign 逻辑的推荐与营销系统设计。",
    caseNotes: {
      context: "围绕个性化推荐和用户触达的推荐与营销系统设计。",
      role: "Core Founding Member.",
      contribution: "我作为核心创始成员参与产品逻辑、campaign 使用场景和推荐场景下的营销系统设计思考。",
      signal: "能把个性化推荐、用户触达和营销系统逻辑结合起来，形成可沟通的产品策略方案。",
      signalCn: "",
    },
    linkLabels: {
      "Recommendation system PDF": "推荐系统方案 PDF",
      "Source folder": "源材料文件夹",
    },
  },
  Certifications: {
    title: "证书与工具基础",
    category: "数据分析 / 工具熟练度",
    tags: ["Google Analytics", "Hootsuite", "证书", "数字营销"],
    quick: ["工具证书", "数据分析与社媒工具", "GA 与 Hootsuite 基础"],
    summary: "补充说明营销分析、社媒工具和数字营销基础的证书材料。",
    caseNotes: {
      context: "用于补充数据分析、数字营销和社媒工具熟练度的证书。",
      role: "Credential Holder.",
      contribution: "",
      signal: "Google Analytics 与 Hootsuite 证书，支持我在营销测量、社媒工具和增长复盘中的基础判断。",
      signalCn: "",
    },
    linkLabels: {
      "Google Analytics qualification": "Google Analytics 证书",
      "Hootsuite credential": "Hootsuite 证书",
      "Source folder": "源材料文件夹",
    },
  },
};

const orderedProjects = projects
  .map((project, index) => ({ project, index }))
  .sort((a, b) => (a.project.displayOrder ?? a.index + 1000) - (b.project.displayOrder ?? b.index + 1000));

const getCapabilityCopy = (filter) => {
  const base = capabilityCopy[filter] || capabilityCopy.all;
  return currentLang === "zh" ? { ...base, ...(capabilityCopyZh[filter] || capabilityCopyZh.all) } : base;
};

const localizeProject = (project) => {
  if (currentLang !== "zh") {
    return project;
  }

  const zh = projectCopyZh[project.title];

  if (!zh) {
    return project;
  }

  const caseNotes = zh.caseNotes
    ? {
        ...project.caseNotes,
        ...zh.caseNotes,
        rows: undefined,
      }
    : project.caseNotes;
  const links = project.links?.map((link) => ({
    ...link,
    label: zh.linkLabels?.[link.label] || link.label,
  }));

  return {
    ...project,
    ...zh,
    caseNotes,
    links,
  };
};

const caseLabels = () =>
  currentLang === "zh"
    ? { context: "项目背景", role: "角色", signal: "项目价值" }
    : { context: "Context", role: "Role", signal: "Signal" };

const actionCopy = () =>
  currentLang === "zh"
    ? { preview: "预览", materials: "查看材料", openDrive: "在 Google Drive 打开", driveFolder: "打开 Drive 文件夹" }
    : { preview: "Preview", materials: "Open materials", openDrive: "Open in Google Drive", driveFolder: "Open Drive folder" };

const previewItems = orderedProjects
  .map(({ project }) => project)
  .filter((project) => project?.preview)
  .slice(0, 8)
  .map((project) => ({
    ...project.preview,
    projectTitle: project.title,
    cover: project.media[0]?.id,
    coverSrc: project.media[0]?.src,
    coverOnly: project.preview.coverOnly,
    openUrl: project.preview.openUrl || project.links[0]?.url,
  }));

const galleryItems = [
  { id: "1d8T0Lv6JAeLc-AL_2hhNQaJPYA9HqAG_", caption: "PandaPal poster / campus product visual" },
  { id: "1RWkEVKnXRuYNpP9eqpUNBT6gwEUBVQFa", caption: "Di's Spring poster 1" },
  { id: "1lJfrY7HxcCOiA4znDhqqF8_rN2tIjzos", caption: "Di's Spring poster 2" },
  { id: "1k0d4AHWJLgqr6GAdEx_LU7bGQ9l6KFAW", caption: "Di's Spring poster 3" },
  { id: "1ZboiXkctYxBm9yLmKNW1wMRIdaXhdH7H", caption: "Photography selection / landscape composition", wide: true, cover: true },
  { id: "199bN4Ymq9XiDAhAUHGBorzUoWx8TCMz2", caption: "Photography selection / place and mood", cover: true },
  { id: "1lFptt9FCqFUUJpGYDZINaJjArX48Ocfj", caption: "Photography selection / visual archive", cover: true },
  { id: "1mcpMR88Qf87W8jo6k7xK_7g5tt5xvcuO", caption: "Brand Bible design page", wide: true },
  { id: "1lEpaHQ39AXTDRfMkMfWi8g2oFr720a9S", caption: "Personal website wireframe" },
];

const archiveGroups = [
  {
    title: "Entrepreneurial Projects / Business Plans",
    count: "5 folders / 19 files",
    cn: "PandaPal、Legend Co-shooting、SWAP、Insight、Band2Gether。",
    folderId: "146PXmOvldL8LdVZA542Cwd3L9Aa2BPfF",
    cover: "1d8T0Lv6JAeLc-AL_2hhNQaJPYA9HqAG_",
  },
  {
    title: "Influencer Strategies",
    count: "3 PDF files",
    cn: "个人影响力、KUSC campaign、社媒创意样本。",
    folderId: "15VMFCydGzG_cUHeoIActu4p__hOaJTac",
    cover: "1OnCsi2WErG_pGgk6ZHwMWsieDCDzQIkz",
  },
  {
    title: "Video Works",
    count: "2 folders / 11 files",
    cn: "春笛海报、Mirror、VLOG、早期影像作品。",
    folderId: "1PXR3FIs_wJqzqB7jFkNzlMRaYuavvpwc",
    cover: "1RWkEVKnXRuYNpP9eqpUNBT6gwEUBVQFa",
  },
  {
    title: "Photography Works",
    count: "10 image files",
    cn: "旅行、景观、纪实与电影感构图。",
    folderId: "17AvL8OkWYqEjJLYHq9vMtenRYdOEV_m0",
    cover: "1ZboiXkctYxBm9yLmKNW1wMRIdaXhdH7H",
  },
  {
    title: "Website Plan & Strategy",
    count: "5 files",
    cn: "品牌系统、文案系统、网站计划、sitemap 和 wireframe。",
    folderId: "120MJ96Fs5jbodK0F8pGKLsT7LEBy7H6s",
    cover: "1mcpMR88Qf87W8jo6k7xK_7g5tt5xvcuO",
  },
  {
    title: "Certifications",
    count: "5 files",
    cn: "Google Analytics 与 Hootsuite 证书材料。",
    folderId: "1qg5MMuPVQA5Ook2JIBpcdwKGClTNACL9",
    cover: "11v5hZsP7C0E65ozmUpT0nLbOmfNC7xsO",
  },
];

const galleryCaptionZh = {
  "PandaPal poster / campus product visual": "PandaPal 校园产品视觉",
  "Di's Spring poster 1": "《春笛》海报 1",
  "Di's Spring poster 2": "《春笛》海报 2",
  "Di's Spring poster 3": "《春笛》海报 3",
  "Photography selection / landscape composition": "摄影精选 / 风景构图",
  "Photography selection / place and mood": "摄影精选 / 地点与氛围",
  "Photography selection / visual archive": "摄影精选 / 视觉档案",
  "Brand Bible design page": "品牌系统设计页",
  "Personal website wireframe": "个人网站 wireframe",
};

const archiveCopyZh = {
  "Entrepreneurial Projects / Business Plans": {
    title: "创业项目与商业计划",
    count: "5 个文件夹 / 19 个文件",
    cn: "PandaPal、Legend Co-shooting、SWAP、Insight、Band2Gether。",
  },
  "Influencer Strategies": {
    title: "Influencer 与社媒策略",
    count: "3 个 PDF 文件",
    cn: "个人影响力、KUSC campaign、社媒创意样本。",
  },
  "Video Works": {
    title: "影像作品",
    count: "2 个文件夹 / 11 个文件",
    cn: "春笛海报、Mirror、VLOG、早期影像作品。",
  },
  "Photography Works": {
    title: "摄影作品",
    count: "10 个图片文件",
    cn: "旅行、景观、纪实与电影感构图。",
  },
  "Website Plan & Strategy": {
    title: "网站计划与策略",
    count: "5 个文件",
    cn: "品牌系统、文案系统、网站计划、sitemap 和 wireframe。",
  },
  Certifications: {
    title: "证书",
    count: "5 个文件",
    cn: "Google Analytics 与 Hootsuite 证书材料。",
  },
};

const staticCopy = {
  en: {
    accessNote: "Source links open Google Drive; mainland China may require VPN.",
    nav: {
      "#capabilities": "Capabilities",
      "#work": "Cases",
      "#platform-proof": "Public Work",
      "#preview": "Materials",
      "#gallery": "Visuals",
      "#archive": "Full Archive",
    },
    heroEyebrow: "Some Earlier Projects",
    heroTitle: "Turning ideas into stories, systems, and momentum.",
    lede: "Selected work across product strategy, community growth, creator programs, content production, and visual systems.",
    roleLine: "Relevant across roles that connect product, growth, creator/community systems, content strategy, and market storytelling.",
    portfolioContext:
      "Earlier projects, organized as a record of foundation and growth. My recent work has advanced further in scope, polish, and strategic depth; role-relevant examples can be shared in conversation.",
    heroNote: "Browse by capability: choose AI Native, Growth, Creator, Product, Content, Visual, or Credentials to jump into matching cases.",
    heroButtons: ["Explore Capabilities", "Open Resume", "Source Drive"],
    heroCaptions: [
      ["Creative Direction", "Short-film poster system"],
      ["Product Launch", "Campus lifestyle product"],
      ["Web Strategy", "Brand system and IA"],
    ],
    signals: [
      ["community reach across Discord, Telegram, WeChat, RED / Xiaohongshu, TikTok, and campus/community channels.", "Community growth, creator content, campus channels, and activation."],
      ["creator and influencer resources across RED / Xiaohongshu, TikTok, Instagram, and creator communities.", "Creator resources, social content, influencer collaboration, and community reach."],
      ["campus and community touchpoints across events, student groups, partners, and local growth channels.", "Campus networks, offline activations, partners, and local growth channels."],
    ],
    proof: {
      kicker: "Evidence at a Glance",
      title: "Role, scope, and evidence at a glance.",
      note: "Role, project scope, and reviewable materials are surfaced early for faster scanning.",
      cards: [
        ["Founder and core ownership", "PandaPal, Legend Co-shooting, HYPIE Marketing, and Insight Fast show founder or core founding-member ownership."],
        ["Live products and official work", "Ditto, ENC Mobile, and SWAP connect marketing, BD, public product surfaces, and launch-facing materials."],
        ["Public audience signal", "Mount & Sea documents 1.124M views, 104K likes, and 14K shares from the original public release."],
        ["Open source materials", "Business plans, pitch videos, product videos, strategy PDFs, and folders are linked for deeper review."],
      ],
    },
    capabilities: {
      kicker: "Capability Map",
      title: "Start with the capability closest to the role.",
      note: "Each capability entry filters directly into matching cases and materials.",
      cards: {
        ai: ["AI Native", "AI-native products, AI-era communities, and system-building projects.", "Ditto, BrandYou, InfluencerOps, PandaPal, Legend, Insight"],
        growth: ["Growth & GTM", "Launch, campus channels, community activation, partner-led growth.", "Ditto, ENC Mobile, HYPIE Marketing, PandaPal"],
        creator: ["Creator & Community", "Creator positioning, KOL/KOC resources, audience systems, campaigns.", "HYPIE Marketing, Influencer Strategy, Legend Co-shooting"],
        product: ["Product Strategy", "Business plans, product narratives, recommendation systems, IA.", "Ditto, PandaPal, SWAP, Web Strategy"],
        content: ["Content & Production", "Short film, video production, pitch videos, content archives.", "Di's Spring, Mirror, Legend Co-shooting"],
        visual: ["Visual Systems", "Posters, photography, brand systems, product pages, composition.", "Di's Spring, Photography, Web Strategy"],
        credentials: ["Tools & Credentials", "Marketing analytics, social tools, digital-marketing foundations.", "Google Analytics, Hootsuite"],
      },
    },
    workKicker: "Selected Cases",
    platform: {
      kicker: "Public Platform Work",
      title: "Public releases, audience metrics, and platform production roles.",
      note: "Public metrics, series links, and project roles show production, coordination, and cross-platform execution.",
      mountText:
        "An archived platform screenshot documents 1.124M views, 104K likes, 5,264 comments, and 14K shares for the original public release. The current link points to a re-upload, so visible public metrics may differ from the original run.",
      mountNote: "The archived Bilibili screenshot preserves original release metrics; the public link is a later re-upload.",
      currentUpload: "Current re-upload",
      dinnerTitle: "What's for Dinner? | 今天吃什么",
      dinnerText: "Selected public links from a platform food and entertainment series where I contributed writing and planning across episodes.",
      dinnerNote: "Tencent Video series work showing platform writing, planning, and content execution.",
      tcmTitle: "A Small Story of Traditional Chinese Medicine | 中医小事",
      tcmText:
        "Public links from a documentary interview series around Chinese medicine and cultural storytelling, presented as assistant-director and execution-support evidence.",
      tcmNote: "iQIYI documentary/culture series work showing field execution and assistant-director experience.",
      metricLabels: ["views", "likes", "shares"],
      episodes: ["Episode 2", "Episode 5", "Episode 6", "Episode 9"],
      tcmEpisodes: ["Episode 1", "Episode 2", "Episode 3", "Episode 4"],
      series: "Series",
    },
    preview: {
      kicker: "Source Preview",
      title: "Browse selected source materials directly.",
      note: "Videos, PDFs, product plans, strategy documents, and folders remain linked for review in-page or through Google Drive.",
      defaultTitle: "Select a preview",
      defaultDescription: "Choose a Drive artifact to load it here.",
    },
    gallery: {
      kicker: "Visual Range",
      title: "Selected visuals across posters, brand systems, photography, and product pages.",
      note: "Product covers, film posters, brand systems, photography, and web strategy materials add visual judgment and content-execution context.",
    },
    archive: {
      kicker: "Source Archive",
      title: "Full Drive groups for deeper review.",
      note: "The page presents selected paths; the full Drive folders keep source files and additional materials available for deeper review.",
    },
    closing: {
      kicker: "Connect",
      title: "Open to growth, creator, community, content, and product-operations work.",
      text: "I work best where creator ecosystems, community growth, content workflows, short-form video, lifestyle products, or cross-cultural GTM meet.",
      note: "Creator ecosystems, community growth, content products, short-form video, lifestyle products, and cross-cultural GTM.",
      buttons: ["Contact", "Resume"],
    },
  },
  zh: {
    accessNote: "源材料链接会打开 Google Drive；中国大陆访问可能需要 VPN。",
    nav: {
      "#capabilities": "能力",
      "#work": "案例",
      "#platform-proof": "公开作品",
      "#preview": "材料",
      "#gallery": "视觉",
      "#archive": "完整档案",
    },
    heroEyebrow: "部分早期项目",
    heroTitle: "把产品、增长、内容和社区资源，组织成可落地的业务方案。",
    lede: "我关注产品定位、增长执行、创作者/社区运营、内容生产和跨文化市场表达，适合需要把想法推进到用户、渠道和业务结果的岗位。",
    roleLine: "我的优势在于把策略判断、内容表达、渠道资源和执行推进连接起来，让项目从方向判断走向真实触达。",
    portfolioContext: "这些项目记录了我较早阶段的能力基础与成长路径；我近期作品在复杂度、完成度和策略深度上已有明显提升，可根据岗位方向补充交流更相关的案例。",
    heroNote: "可按能力线索浏览：点击 AI Native、增长、创作者/社区、产品策略、内容、视觉或工具证书进入对应案例。",
    heroButtons: ["查看能力路径", "查看简历", "源材料文件夹"],
    heroCaptions: [
      ["创意导演", "短片海报系统"],
      ["产品上线", "校园生活方式产品"],
      ["网站策略", "品牌系统与信息架构"],
    ],
    signals: [
      ["覆盖 Discord、Telegram、微信、RED / 小红书、TikTok 与校园/社区渠道的社区触达。", "覆盖社区增长、创作者内容、校园渠道与用户激活。"],
      ["覆盖 RED / 小红书、TikTok、Instagram 与创作者社区的 2,000+ 创作者/达人资源。", "覆盖创作者资源、社媒内容、达人合作与社区传播。"],
      ["覆盖活动、学生组织、合作伙伴和本地增长渠道的校园与社区触点。", "连接校园网络、线下活动、合作伙伴与本地增长渠道。"],
    ],
    proof: {
      kicker: "快速证据",
      title: "先看到角色、动作和证据，再深入查看材料。",
      note: "中文版本会更直接说明我在项目里承担什么、推进什么，以及这些项目说明了什么能力。",
      cards: [
        ["Founder 与核心 ownership", "PandaPal、Legend Co-shooting、HYPIE Marketing 和 Insight Fast 说明我能从 0 到 1 发起、组织和推进项目。"],
        ["已上线产品与正式工作项目", "Ditto、ENC Mobile 和 SWAP 说明我能参与真实业务场景，把市场、BD、产品和用户触达连接起来。"],
        ["公开传播数据", "《山海》原发布记录包含 112.4 万播放、10.4 万点赞和 1.4 万分享，证明我参与过有真实传播结果的平台内容。"],
        ["可查看源材料", "商业计划书、路演视频、产品介绍视频、策略 PDF 与文件夹均可继续打开查看。"],
      ],
    },
    capabilities: {
      kicker: "能力地图",
      title: "从最贴近岗位需求的能力入口开始看。",
      note: "每个入口都对应一组能力和案例，方便面试官快速判断我能放在哪类岗位或项目中发挥作用。",
      cards: {
        ai: ["AI Native", "把 AI 原生产品、AI 工作流和 AI 时代社群做成可理解、可体验、可推进的项目。", "Ditto、BrandYou、InfluencerOps、PandaPal、Legend、Insight"],
        growth: ["增长 / GTM", "把用户触达、校园渠道、社区激活和合作伙伴资源组织成增长路径。", "Ditto、ENC Mobile、HYPIE Marketing、PandaPal"],
        creator: ["创作者 / 社区", "整合创作者资源、受众定位和社群触达，推动内容与增长协同。", "HYPIE Marketing、Influencer Strategy、Legend Co-shooting"],
        product: ["产品策略", "把产品定位、商业计划、GTM 叙事和信息架构整理成可沟通的产品方案。", "Ditto、PandaPal、SWAP、Web Strategy"],
        content: ["内容 / 制作", "从内容策划、视频制作到公开发布，推进能被用户看见和理解的内容表达。", "《春笛》、Mirror、Legend Co-shooting"],
        visual: ["视觉系统", "用海报、摄影、品牌系统和网页视觉提升项目的可信度和表达清晰度。", "《春笛》、摄影作品、网站策略"],
        credentials: ["工具 / 证书", "用营销分析、社媒工具和数字营销基础支持增长判断与复盘。", "Google Analytics、Hootsuite"],
      },
    },
    workKicker: "项目案例",
    platform: {
      kicker: "公开平台作品",
      title: "公开发布、传播数据与平台制作角色。",
      note: "公开数据、系列节目链接和项目角色，用来说明我参与过真实平台内容、项目统筹和跨平台执行。",
      mountText: "《山海》B站原发布截图记录了 112.4 万播放、10.4 万点赞、5264 条评论和 1.4 万分享；当前可访问链接为重发版本，显示数据可能不同。",
      mountNote: "原始截图保留了首次发布数据；当前公开链接为后续重发版本。",
      currentUpload: "当前重发链接",
      dinnerTitle: "《今天吃什么》",
      dinnerText: "腾讯视频美食娱乐系列节目公开链接，我在多期内容中参与编剧与策划。",
      dinnerNote: "说明我具备平台节目策划、内容执行和系列内容协作经验。",
      tcmTitle: "《中医小事》",
      tcmText: "围绕中医与文化叙事的纪录访谈系列公开链接，用于说明助理导演与现场执行支持经验。",
      tcmNote: "说明我参与过纪录/文化传播、现场执行和助理导演相关工作。",
      metricLabels: ["播放", "点赞", "分享"],
      episodes: ["第 2 期", "第 5 期", "第 6 期", "第 9 期"],
      tcmEpisodes: ["第 1 期", "第 2 期", "第 3 期", "第 4 期"],
      series: "系列页",
    },
    preview: {
      kicker: "材料预览",
      title: "直接浏览部分源材料。",
      note: "视频、PDF、产品计划、策略文档与文件夹均保留源材料，可在页面内预览，也可跳转 Google Drive 查看。",
      defaultTitle: "选择一个材料预览",
      defaultDescription: "从左侧选择一个 Drive 材料加载到这里。",
    },
    gallery: {
      kicker: "视觉作品",
      title: "海报、品牌系统、摄影和产品页面中的视觉判断。",
      note: "集中呈现产品封面、影像海报、品牌系统、摄影与网站策略，补充说明我的视觉判断和内容执行能力。",
    },
    archive: {
      kicker: "源材料档案",
      title: "完整 Drive 文件夹，方便深入查看。",
      note: "页面呈现精选脉络；完整 Drive 文件夹保留作品来源与补充材料，便于进一步查看。",
    },
    closing: {
      kicker: "联系",
      title: "关注增长、创作者/社区、内容和产品运营相关机会。",
      text: "我更适合在创作者生态、社区增长、内容工作流、短视频、生活方式产品或跨文化 GTM 交汇的项目中发挥作用。",
      note: "关注创作者生态、社区增长、内容产品、短视频、生活方式产品与跨文化 GTM。",
      buttons: ["联系我", "简历"],
    },
  },
};

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 2,
        "aria-hidden": "true",
      },
    });
  }
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);

  if (element && text !== undefined) {
    element.textContent = text;
  }
};

const setAllText = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) {
      element.textContent = values[index];
    }
  });
};

const setButtonText = (selector, text) => {
  const span = document.querySelector(selector);

  if (span && text !== undefined) {
    span.textContent = text;
  }
};

const updateStaticLanguage = () => {
  const copy = staticCopy[currentLang];

  document.documentElement.lang = currentLang === "zh" ? "zh-Hans" : "en";
  document.body.classList.toggle("lang-zh", currentLang === "zh");
  document.body.classList.toggle("lang-en", currentLang === "en");

  setText(".access-note", copy.accessNote);
  Object.entries(copy.nav).forEach(([href, label]) => {
    setText(`.navlinks a[href="${href}"]`, label);
  });

  setText(".hero .eyebrow", copy.heroEyebrow);
  setText(".hero h1", copy.heroTitle);
  setText(".hero .lede", copy.lede);
  setText(".hero .role-line", copy.roleLine);
  setText(".hero .portfolio-context", copy.portfolioContext);
  setText(".hero-copy > .cn-note", copy.heroNote);
  setButtonText(".hero-actions .button:nth-child(1) span", copy.heroButtons[0]);
  setButtonText(".hero-actions .button:nth-child(2) span", copy.heroButtons[1]);
  setButtonText(".hero-actions .button:nth-child(3) span", copy.heroButtons[2]);

  document.querySelectorAll(".hero-shot figcaption").forEach((caption, index) => {
    const [label, title] = copy.heroCaptions[index] || [];
    const labelElement = caption.querySelector("span");
    const titleElement = caption.querySelector("strong");

    if (labelElement && label) {
      labelElement.textContent = label;
    }

    if (titleElement && title) {
      titleElement.textContent = title;
    }
  });

  document.querySelectorAll(".signal-band article").forEach((article, index) => {
    const [body, note] = copy.signals[index] || [];

    if (body) {
      article.querySelector("span").textContent = body;
    }

    if (note) {
      article.querySelector(".cn-note").textContent = note;
    }
  });

  setText(".proof-glance-copy .section-kicker", copy.proof.kicker);
  setText(".proof-glance-copy h2", copy.proof.title);
  setText(".proof-glance-copy .cn-note", copy.proof.note);
  document.querySelectorAll(".proof-glance-grid article").forEach((card, index) => {
    const [title, body] = copy.proof.cards[index] || [];
    setText(`.proof-glance-grid article:nth-child(${index + 1}) strong`, title);
    setText(`.proof-glance-grid article:nth-child(${index + 1}) span`, body);
  });

  setText("#capabilities .section-kicker", copy.capabilities.kicker);
  setText("#capabilities h2", copy.capabilities.title);
  setText("#capabilities .cn-note", copy.capabilities.note);
  Object.entries(copy.capabilities.cards).forEach(([filter, cardCopy]) => {
    const card = document.querySelector(`.capability-card[data-jump-filter="${filter}"]`);

    if (!card) {
      return;
    }

    card.querySelector(".capability-label").textContent = cardCopy[0];
    card.querySelector("h3").textContent = cardCopy[1];
    card.querySelector("p").textContent = cardCopy[2];
  });

  setText("#work > .section-heading .section-kicker", copy.workKicker);
  document.querySelectorAll("[data-filter]").forEach((button) => {
    const span = button.querySelector("span");
    const label = getCapabilityCopy(button.dataset.filter).label;

    if (span && label) {
      span.textContent = button.dataset.filter === "all" ? label.replace(" Cases", "") : label;
    }
  });
  document.querySelectorAll(".hero-paths [data-jump-filter]").forEach((link) => {
    link.textContent = getCapabilityCopy(link.dataset.jumpFilter).label;
  });

  setText("#platform-proof .section-kicker", copy.platform.kicker);
  setText("#platform-proof h2", copy.platform.title);
  setText("#platform-proof .section-heading .cn-note", copy.platform.note);
  setAllText(".proof-metrics span", copy.platform.metricLabels);
  setText(".platform-proof-card-featured .platform-proof-copy > p:not(.cn-note)", copy.platform.mountText);
  setText(".platform-proof-card-featured .platform-proof-copy > .cn-note", copy.platform.mountNote);
  setText(".platform-proof-card-featured .source-link span", copy.platform.currentUpload);
  setText(".platform-proof-card:nth-child(2) h3", copy.platform.dinnerTitle);
  setText(".platform-proof-card:nth-child(2) .platform-proof-copy > p:not(.cn-note)", copy.platform.dinnerText);
  setText(".platform-proof-card:nth-child(2) .cn-note", copy.platform.dinnerNote);
  setAllText(".platform-proof-card:nth-child(2) .proof-link-list a", copy.platform.episodes);
  setText(".platform-proof-card:nth-child(3) h3", copy.platform.tcmTitle);
  setText(".platform-proof-card:nth-child(3) .platform-proof-copy > p:not(.cn-note)", copy.platform.tcmText);
  setText(".platform-proof-card:nth-child(3) .cn-note", copy.platform.tcmNote);
  setText(".platform-proof-card:nth-child(3) .proof-link-list a:nth-child(1)", copy.platform.series);
  setAllText(".platform-proof-card:nth-child(3) .proof-link-list a:not(:first-child)", copy.platform.tcmEpisodes);

  setText("#preview .section-kicker", copy.preview.kicker);
  setText("#preview h2", copy.preview.title);
  setText("#preview .section-heading .cn-note", copy.preview.note);
  setText("#preview-open-link span", actionCopy().openDrive);

  setText("#gallery .section-kicker", copy.gallery.kicker);
  setText("#gallery h2", copy.gallery.title);
  setText("#gallery .section-heading .cn-note", copy.gallery.note);

  setText("#archive .section-kicker", copy.archive.kicker);
  setText("#archive h2", copy.archive.title);
  setText("#archive .section-heading .cn-note", copy.archive.note);

  setText(".closing-section .section-kicker", copy.closing.kicker);
  setText(".closing-section h2", copy.closing.title);
  setText(".closing-section p:not(.section-kicker):not(.cn-note):not(.contact-line)", copy.closing.text);
  setText(".closing-section .cn-note", copy.closing.note);
  setButtonText(".closing-actions .button:nth-child(1) span", copy.closing.buttons[0]);
  setButtonText(".closing-actions .button:nth-child(2) span", copy.closing.buttons[1]);

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const applyLanguage = () => {
  const activeFilter = document.querySelector("[data-filter].is-active")?.dataset.filter || "all";

  updateStaticLanguage();
  renderProjects(activeFilter);
  renderPreviewList();
  renderGallery();
  renderArchive();
  initIcons();
};

const initLanguageToggle = () => {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = button.dataset.langOption === "zh" ? "zh" : "en";

      if (nextLang === currentLang) {
        return;
      }

      currentLang = nextLang;
      localStorage.setItem("portfolioLang", currentLang);
      applyLanguage();
    });
  });
};

const initHero = () => {
  const heroImages = [
    ["hero-large", "1RWkEVKnXRuYNpP9eqpUNBT6gwEUBVQFa", "Di's Spring poster from Google Drive"],
    ["hero-small-a", "1d8T0Lv6JAeLc-AL_2hhNQaJPYA9HqAG_", "PandaPal poster from Google Drive"],
    ["hero-small-b", "1mcpMR88Qf87W8jo6k7xK_7g5tt5xvcuO", "Website brand design page from Google Drive"],
  ];

  heroImages.forEach(([elementId, fileId, alt]) => {
    const image = document.getElementById(elementId);

    if (image) {
      image.src = thumb(fileId, 1600);
      image.alt = alt;
    }
  });
};

const buildProjectCard = (project, index) => {
  const viewProject = localizeProject(project);
  const labels = caseLabels();
  const actions = actionCopy();
  const mediaClass = [
    "card-media",
    project.media.length === 1 ? "single" : "",
    project.media.length === 1 && project.media[0]?.wide ? "is-wide" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const media = project.media
    .map(
      (item) => {
        const src = item.src || thumb(item.id, 1000);
        const fitClass = item.cover ? " class=\"is-cover\"" : "";
        return `<img src="${src}" alt="${item.alt}" loading="lazy"${fitClass} />`;
      },
    )
    .join("");
  const tags = viewProject.tags.map((tag) => `<span>${tag}</span>`).join("");
  const links = viewProject.links
    .slice(0, viewProject.linkLimit || 4)
    .map(
      (link) =>
        `<a class="source-link" href="${link.url}" ${newTabAttrs}><i data-lucide="external-link"></i><span>${link.label}</span></a>`,
    )
    .join("");
  const previewAction = project.preview && !project.preview.coverOnly
    ? `<button class="source-link primary" type="button" data-preview-project="${index}">
          <i data-lucide="eye"></i>
          <span>${actions.preview}</span>
        </button>`
    : "";
  const materialActions = `${previewAction}${links}`;
  const quickLabels = ["Role", "Scope", "Signal"];
  const quickSummaryLabels = currentLang === "zh" ? ["角色", "范围", "重点"] : quickLabels;
  const quickSummary = viewProject.quick
    ? `<div class="quick-summary" aria-label="${viewProject.title} quick read">
        ${viewProject.quick
          .map(
            (item, quickIndex) => `
              <span>
                <b>${quickSummaryLabels[quickIndex] || (currentLang === "zh" ? "备注" : "Note")}</b>
                ${item}
              </span>
            `,
          )
          .join("")}
      </div>`
    : "";
  const defaultCaseRows = viewProject.caseNotes
    ? [
        { label: labels.context, text: viewProject.caseNotes.context },
        { label: labels.role, text: viewProject.caseNotes.role },
      ].filter((row) => row.text)
    : [];
  const caseRows = (viewProject.caseNotes?.rows || defaultCaseRows).filter(
    (row) => !["Contribution", "我做了什么", "项目推进"].includes(row.label),
  );
  const caseBrief = viewProject.caseNotes
    ? `
        <div class="case-brief" aria-label="${viewProject.title} case summary">
          ${caseRows
            .map(
              (row) => `
                <div>
                  <span>${row.label}</span>
                  <p>${row.text}</p>
                </div>
              `,
            )
            .join("")}
          ${
            viewProject.caseNotes.signal
              ? `<div class="case-signal">
                  <span>${labels.signal}</span>
                  <p>${viewProject.caseNotes.signal}${viewProject.caseNotes.signalCn ? `<small>${viewProject.caseNotes.signalCn}</small>` : ""}</p>
                </div>`
              : ""
          }
        </div>
      `
    : "";

  return `
    <article class="project-card${project.featured ? " is-featured" : ""}" data-filters="${project.filters.join(" ")}">
      <div class="${mediaClass}">${media}</div>
      <div class="card-copy">
        <div class="category-pill">${viewProject.category}</div>
        <h3>${viewProject.title}</h3>
        ${
          viewProject.timeline
            ? `<p class="project-timeline">${viewProject.timeline}</p>`
            : ""
        }
        ${quickSummary}
        <div class="project-tags">${tags}</div>
        <p class="case-summary">${viewProject.summary}</p>
        ${caseBrief}
        ${currentLang === "en" ? `<p class="cn-note">${project.cn}</p>` : ""}
        ${
          materialActions
            ? `<div class="evidence-label">${actions.materials}</div>
              <div class="card-actions">${materialActions}</div>`
            : ""
        }
      </div>
    </article>
  `;
};

const renderProjects = (filter = "all") => {
  const featuredGrid = document.getElementById("featured-grid");
  const supportingGrid = document.getElementById("supporting-grid");
  const featuredSection = document.getElementById("featured-work");
  const supportingSection = document.getElementById("supporting-work");
  const workHeading = document.getElementById("work-heading-title");
  const workNote = document.getElementById("work-heading-note");
  const primaryKicker = document.getElementById("primary-group-kicker");
  const primaryTitle = document.getElementById("primary-group-title");
  const secondaryKicker = document.getElementById("secondary-group-kicker");
  const secondaryTitle = document.getElementById("secondary-group-title");

  if (!featuredGrid || !supportingGrid || !featuredSection || !supportingSection) {
    return;
  }

  const copy = getCapabilityCopy(filter);
  const matchesFilter = (project) => filter === "all" || project.filters.includes(filter);
  const matchedProjects = orderedProjects.filter(({ project }) => matchesFilter(project));
  const strategic = matchedProjects.filter(({ project }) => project.track !== "creative");
  const creative = matchedProjects.filter(({ project }) => project.track === "creative");

  if (workHeading) {
    workHeading.textContent = copy.title;
  }

  if (workNote) {
    workNote.textContent = copy.cn;
  }

  if (primaryKicker) {
    primaryKicker.textContent = copy.primaryKicker;
  }

  if (primaryTitle) {
    primaryTitle.textContent = copy.primaryTitle;
  }

  if (secondaryKicker) {
    secondaryKicker.textContent = copy.secondaryKicker;
  }

  if (secondaryTitle) {
    secondaryTitle.textContent = copy.secondaryTitle;
  }

  featuredGrid.innerHTML = strategic.map(({ project, index }) => buildProjectCard(project, index)).join("");
  supportingGrid.innerHTML = creative.map(({ project, index }) => buildProjectCard(project, index)).join("");
  featuredSection.hidden = strategic.length === 0;
  supportingSection.hidden = creative.length === 0;

  document.querySelectorAll("[data-preview-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects[Number(button.dataset.previewProject)];
      if (!project?.preview) {
        return;
      }
      openDialog(localizeProject(project).title, project.preview.url);
    });
  });

  initIcons();
};

const renderPreviewList = () => {
  const list = document.getElementById("preview-list");

  if (!list) {
    return;
  }

  list.innerHTML = previewItems
    .map(
      (item, index) => {
        const zhProject = projectCopyZh[item.projectTitle];
        const title = currentLang === "zh" ? zhProject?.title || item.title : item.title;
        const description = currentLang === "zh" ? zhProject?.summary || item.description : item.description;

        return `
        <button class="preview-choice" type="button" data-preview-index="${index}">
          <strong>${title}</strong>
          <span>${description}</span>
        </button>
      `;
      },
    )
    .join("");

  document.querySelectorAll("[data-preview-index]").forEach((button) => {
    button.addEventListener("click", () => setEmbeddedPreview(Number(button.dataset.previewIndex)));
  });

  setEmbeddedPreview(0);
};

const setEmbeddedPreview = (index) => {
  const item = previewItems[index];
  const frame = document.getElementById("preview-frame");
  const frameWrap = frame?.closest(".preview-frame-wrap");
  const title = document.getElementById("preview-title");
  const description = document.getElementById("preview-description");
  const cover = document.getElementById("preview-cover-img");
  const openLink = document.getElementById("preview-open-link");

  if (!item || !frame || !title || !description || !cover || !openLink) {
    return;
  }

  document.querySelectorAll("[data-preview-index]").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.previewIndex) === index);
  });

  const useThumbnailFallback = window.location.protocol === "file:" || item.coverOnly;
  const zhProject = projectCopyZh[item.projectTitle];
  const previewTitle = currentLang === "zh" ? zhProject?.title || item.title : item.title;
  const previewDescription = currentLang === "zh" ? zhProject?.summary || item.description : item.description;

  frameWrap?.classList.toggle("is-thumbnail-fallback", useThumbnailFallback);
  frame.src = useThumbnailFallback ? "about:blank" : item.url;
  title.textContent = previewTitle;
  description.textContent = previewDescription;
  cover.src = item.coverSrc || thumb(item.cover, 1600);
  cover.alt = `${previewTitle} thumbnail`;
  openLink.href = item.openUrl || item.url;
  openLink.querySelector("span").textContent = actionCopy().openDrive;
};

const renderGallery = () => {
  const grid = document.getElementById("gallery-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = galleryItems
    .map(
      (item) => {
        const caption = currentLang === "zh" ? galleryCaptionZh[item.caption] || item.caption : item.caption;

        return `
        <figure class="gallery-item${item.wide ? " is-wide" : ""}${item.cover ? " is-cover" : ""}">
          <a href="${driveFile(item.id)}" ${newTabAttrs}>
            <img src="${thumb(item.id, item.wide ? 1600 : 1000)}" alt="${caption}" loading="lazy" />
          </a>
          <figcaption>${caption}</figcaption>
        </figure>
      `;
      },
    )
    .join("");
};

const renderArchive = () => {
  const grid = document.getElementById("archive-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = archiveGroups
    .map(
      (group) => {
        const zh = currentLang === "zh" ? archiveCopyZh[group.title] : null;
        const title = zh?.title || group.title;
        const count = zh?.count || group.count;
        const note = zh?.cn || group.cn;

        return `
        <article class="archive-card">
          <img src="${thumb(group.cover, 1200)}" alt="${title} cover thumbnail" loading="lazy" />
          <div class="archive-copy">
            <div class="category-pill">${count}</div>
            <h3>${title}</h3>
            <p class="cn-note">${note}</p>
            <a class="source-link primary" href="${driveFolder(group.folderId)}" ${newTabAttrs}>
              <i data-lucide="folder-open"></i>
              <span>${actionCopy().driveFolder}</span>
            </a>
          </div>
        </article>
      `;
      },
    )
    .join("");
};

const applyProjectFilter = (filter = "all") => {
  document.querySelectorAll("[data-filter]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.filter === filter);
  });

  document.querySelectorAll("[data-jump-filter]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.jumpFilter === filter);
  });

  renderProjects(filter);
};

const initFilters = () => {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      applyProjectFilter(button.dataset.filter);
    });
  });
};

const initCapabilityLinks = () => {
  document.querySelectorAll("[data-jump-filter]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      applyProjectFilter(link.dataset.jumpFilter);
      document.getElementById("work")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

const initNewTabLinks = () => {
  document.addEventListener("click", (event) => {
    const clickedElement = event.target instanceof Element ? event.target : event.target?.parentElement;
    const link = clickedElement?.closest('a[target="_blank"]');

    if (
      !link ||
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
      return;
    }

    const opened = window.open(link.href, "_blank", "noopener,noreferrer");

    if (opened) {
      opened.opener = null;
      event.preventDefault();
    }
  });
};

const openDialog = (title, url) => {
  const dialog = document.getElementById("preview-dialog");
  const frame = document.getElementById("dialog-frame");
  const heading = document.getElementById("dialog-title");

  if (!dialog || !frame || !heading) {
    return;
  }

  heading.textContent = title;
  frame.src = url;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

const initDialog = () => {
  const dialog = document.getElementById("preview-dialog");
  const close = document.querySelector(".dialog-close");
  const frame = document.getElementById("dialog-frame");

  if (!dialog || !close || !frame) {
    return;
  }

  close.addEventListener("click", () => {
    dialog.close();
    frame.src = "about:blank";
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      frame.src = "about:blank";
    }
  });
};

const initSectionTracking = () => {
  const links = Array.from(document.querySelectorAll('.navlinks a[href^="#"]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      links.forEach((link) => {
        link.toggleAttribute("aria-current", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.1, 0.35, 0.6],
    },
  );

  sections.forEach((section) => observer.observe(section));
};

initHero();
initLanguageToggle();
initFilters();
initCapabilityLinks();
initNewTabLinks();
initDialog();
initSectionTracking();
applyLanguage();
