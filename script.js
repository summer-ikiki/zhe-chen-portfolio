const driveFile = (id) => `https://drive.google.com/file/d/${id}/view?usp=sharing`;
const driveFolder = (id) => `https://drive.google.com/drive/folders/${id}?usp=sharing`;
const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;
const folderPreview = (id) => `https://drive.google.com/embeddedfolderview?id=${id}#grid`;
const thumb = (id, size = 1200) => `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
const newTabAttrs = 'target="_blank" rel="noopener noreferrer"';

const capabilityCopy = {
  all: {
    label: "All Cases",
    title: "Selected cases by capability, contribution, and evidence.",
    cn: "案例按能力、个人贡献和可查看证据组织，方便快速判断与岗位的相关性。",
    primaryKicker: "Strategic / Operational Work",
    primaryTitle: "Product strategy, growth systems, creator/community work, and business planning.",
    secondaryKicker: "Creative / Visual Work",
    secondaryTitle: "Content production, public creative work, visual systems, and composition judgment.",
  },
  growth: {
    label: "Growth & GTM",
    title: "Growth, GTM, community activation, and channel-building cases.",
    cn: "重点查看校园增长、社区激活、渠道搭建、用户触达和产品转化相关案例。",
    primaryKicker: "Growth Cases",
    primaryTitle: "Launch, activation, audience development, and partner/channel evidence.",
    secondaryKicker: "Related Creative Evidence",
    secondaryTitle: "Supporting content and visual assets that helped package growth narratives.",
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
    cn: "重点查看产品定位、商业计划、推荐系统概念、信息架构和产品叙事能力。",
    primaryKicker: "Product / Strategy Cases",
    primaryTitle: "Business plans, product narratives, IA, recommendation concepts, and launch materials.",
    secondaryKicker: "Supporting Storytelling",
    secondaryTitle: "Content and visual systems that make product ideas easier to understand.",
  },
  content: {
    label: "Content & Production",
    title: "Content production, short-form/video work, and narrative execution.",
    cn: "重点查看影像制作、短片、公开视频、内容包装和叙事执行经验。",
    primaryKicker: "Content Strategy Cases",
    primaryTitle: "Content systems, creator collaboration, and platform-facing story packaging.",
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

const projects = [
  {
    title: "PandaPal",
    category: "Founder / Product Marketing / Growth",
    track: "strategic",
    filters: ["growth", "creator", "product"],
    featured: true,
    tags: ["0-to-1 product", "Campus GTM", "Community growth", "BD", "Demo video"],
    cn: "围绕校园生活方式产品，整理了市场洞察、GTM、社群增长、BD、产品 Demo 与小程序早期体验材料。",
    summary:
      "A campus lifestyle product package developed from market insight to business plan, marketing plan, product video, and mini-app early-access materials.",
    caseNotes: {
      context: "Campus lifestyle mini-program concept for Chinese students, built from market insight to early-access materials.",
      role: "Founder and product marketer; shaped positioning, GTM, BD narrative, demo video, and community launch materials.",
      output: "Business plan, marketing plan, campus GTM package, product demo video, and mini-app concept.",
      signal: "Founder ownership · full GTM package · product demo, business plan, marketing plan, and early mini-app materials.",
      signalCn: "从 0-1 产品构想到 GTM、Demo、商业计划和营销计划的完整打包能力。",
    },
    media: [
      { id: "1d8T0Lv6JAeLc-AL_2hhNQaJPYA9HqAG_", alt: "PandaPal poster" },
      { id: "1XtXyjNtDkas6uGmH9vX_O3KyDGktFacK", alt: "PandaPal mini app project plan cover" },
    ],
    preview: {
      title: "PandaPal English Product Video",
      description: "Product storytelling, campus positioning, and GTM materials.",
      url: drivePreview("1Injvll7j0QcT2IopAMZhHdu_tzougVnL"),
    },
    linkLimit: 5,
    links: [
      { label: "English product video", url: driveFile("1Injvll7j0QcT2IopAMZhHdu_tzougVnL") },
      { label: "Chinese product video", url: driveFile("12MffxJrdn4ZPEElJLaHPM2rOrZ_-YBw4") },
      { label: "Business plan", url: driveFile("1IczD8hdSjMkvNSnOeVLAIBM7E2QdOEsI") },
      { label: "Marketing plan", url: driveFile("14kbBTxT_2rZFUvbj7Af2IYLNygvIxRYf") },
      { label: "Source folder", url: driveFolder("1XTy1eNbYn6JsrrFu58C8jezgsiPN59km") },
    ],
  },
  {
    title: "Legend Co-shooting",
    category: "Founder / Film Collaboration Venture",
    track: "strategic",
    filters: ["creator", "product", "content"],
    featured: true,
    tags: ["Founder", "Creator collaboration", "Film resources", "Pitch", "Ops model", "Business plan"],
    cn: "影视协作与资源共享平台项目，涵盖创作者协作、制作资源整合、运营模型、商业计划和路演表达。",
    summary:
      "A film-resource collaboration venture connecting creator workflows, shared production resources, operating structure, and business storytelling.",
    caseNotes: {
      context: "Film-resource collaboration venture for creators, crews, and shared production resources.",
      role: "Founder and project principal; built the operating model, business story, bilingual plan materials, and pitch narrative.",
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
    category: "Social Product / Community",
    track: "strategic",
    filters: ["growth", "product", "creator"],
    tags: ["Social product", "User insight", "Community activation", "Product education"],
    cn: "技能交换社交产品，结合官网、小红书公开视频、产品教育、社区激活和线上/线下转化进行表达。",
    summary:
      "A youth social-product concept framed through a live website, public RED / Xiaohongshu proof, explainer videos, user education, community behavior, and activation mechanics.",
    caseNotes: {
      context: "Skill-exchange social product for young users, combining online education and community activation.",
      role: "Worked on product positioning, public-facing website proof, user education videos, and social distribution.",
      output: "Live website, RED / Xiaohongshu proof, product videos, introduction material, and source folder.",
      signal: "Live product website · RED / Xiaohongshu proof · onboarding and product-education content.",
      signalCn: "具备官网、公开视频证据和产品教育内容，可呈现从产品定位到用户理解的表达。",
    },
    media: [
      { id: "1BrNToM6hwdvyEY6DDGM1iOTfQGPA7Oe2", alt: "SWAP 2023 video thumbnail" },
      { id: "1yux9rYuMrwdAkdVadCXvnPVJ1yPrdm5F", alt: "How to use SWAP video thumbnail" },
    ],
    preview: {
      title: "SWAP 2023 Video",
      description: "Social-product positioning and onboarding material.",
      url: drivePreview("1BrNToM6hwdvyEY6DDGM1iOTfQGPA7Oe2"),
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
    cn: "围绕个人影响力、受众定位、campaign 设计、社媒内容方向和跨平台内容系统展开。",
    summary:
      "Strategy work around audience positioning, creator voice, campaign design, social-media direction, and cross-platform content systems.",
    caseNotes: {
      context: "Creator and social-media strategy work across personal influence, campaign design, and audience systems.",
      role: "Defined audience positioning, creator voice, campaign angles, and cross-platform content direction.",
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
    cn: "从故事、拍摄、制作到视觉包装的短片作品线，呈现叙事判断、制作推进、海报视觉系统和公开视频入口。",
    summary:
      "A short-film project showing creative direction, end-to-end production ownership, visual packaging, and narrative judgment.",
    caseNotes: {
      context: "Short-film work spanning concept, production, and poster packaging.",
      role: "Led creative direction and production execution across story, shooting coordination, and visual materials.",
      output: "Public YouTube film link, poster system, source materials, and production archive.",
      signal: "End-to-end creative ownership · public short film · poster system and production archive.",
      signalCn: "从创意、拍摄、制作到视觉包装的完整执行。",
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
    cn: "早期影像作品档案，包含 30 美金低成本微电影《Mirror》、VLOG、纪录/文化类视频和学生作品练习。",
    summary:
      "A hands-on video archive anchored by Mirror, my first micro short film made on a $30 budget, alongside VLOG, documentary-style content, and student production exercises.",
    caseNotes: {
      context: "Early video archive spanning micro short film, VLOG, documentary-style work, and student production practice.",
      role: "Wrote, directed, edited, and packaged low-budget video pieces while building hands-on production judgment.",
      output: "Mirror short film, VLOG sample, TCM video sample, and early video source folder.",
      signal: "First micro short film made on a $30 budget · writing, directing, editing, and packaging.",
      signalCn: "30 美金低成本完成的第一个微电影作品，覆盖编剧、导演、剪辑与包装。",
    },
    media: [
      { id: "14ChEuJG9I8DkBbOnZS5XZf2pY5CPDbXE", alt: "Early video works cinematic street frame" },
      { id: "1v2OwWs2D_ZXPvrld6jMnU9oxL6DdSEZU", alt: "Hong Kong VLOG thumbnail" },
    ],
    preview: {
      title: "Mirror Short Film",
      description: "My first micro short film, made on a $30 budget, with writing, directing, and editing by me.",
      url: drivePreview("1wVnot_lS6ddUPtxO22dRApu5aEfxaW5l"),
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
    cn: "网站策略系统，覆盖信息架构、内容层级、品牌表达、视觉语言和 wireframe。",
    summary:
      "A website-strategy system covering product-marketing structure, information architecture, content hierarchy, brand language, and execution taste.",
    caseNotes: {
      context: "Personal website strategy system connecting product-marketing structure, information architecture, and brand expression.",
      role: "Built the IA, content hierarchy, brand system direction, and wireframe logic for a portfolio-style product surface.",
      output: "Website strategy plan, brand system, sitemap/IA material, wireframe, and source folder.",
      signal: "IA, content hierarchy, brand system, and wireframe thinking in one website strategy package.",
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
    cn: "摄影作品用于呈现审美、构图、现场感、空间氛围和视觉判断力。",
    summary:
      "A selected visual archive showing composition, mood, place, and cinematic framing across travel and observational photography.",
    caseNotes: {
      context: "Selected photography archive used to show visual judgment, place, mood, and composition.",
      role: "Shot and selected work around landscape, travel observation, and cinematic framing.",
      output: "Photography folder and selected frames for visual-taste review.",
      signal: "Visual judgment across composition, mood, place, and cinematic framing.",
      signalCn: "通过构图、氛围、空间与电影感画面呈现视觉判断力。",
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
    filters: ["product", "growth"],
    tags: ["Core founding member", "Recommendation", "Personalization", "Marketing system", "Product strategy"],
    cn: "作为核心创始成员参与的推荐与营销系统概念，侧重个性化、产品策略、用户触达和营销系统思维。",
    summary:
      "A recommendation and marketing-system concept focused on personalization, product strategy, user targeting, and campaign logic.",
    caseNotes: {
      context: "Recommendation and marketing-system concept focused on personalization and user targeting.",
      role: "Core founding member; framed product logic, campaign use cases, and marketing-system thinking for recommendation scenarios.",
      output: "Recommendation concept PDF and source folder.",
      signal: "Core founding member · recommendation concept · personalization and marketing-system logic.",
      signalCn: "核心创始成员参与，体现推荐系统概念、个性化逻辑和营销系统思维。",
    },
    media: [{ id: "132tXCqG0Jz3gXfi1yqYr8UCnfsdkCxIJ", alt: "Insight Fast Recommendation cover" }],
    preview: {
      title: "Insight Fast Recommendation PDF",
      description: "Product strategy and recommendation-system concept.",
      url: drivePreview("132tXCqG0Jz3gXfi1yqYr8UCnfsdkCxIJ"),
    },
    links: [
      { label: "Recommendation concept PDF", url: driveFile("132tXCqG0Jz3gXfi1yqYr8UCnfsdkCxIJ") },
      { label: "Source folder", url: driveFolder("1Sb4oSljMtuK25_KeiRdvU_HV3DlojNC7") },
    ],
  },
  {
    title: "Certifications",
    category: "Analytics / Tool Fluency",
    track: "strategic",
    filters: ["credentials"],
    tags: ["Google Analytics", "Hootsuite", "Credential", "Digital marketing"],
    cn: "证书区保持轻量，用于补充增长、数据反馈、社媒工具和数字营销基础。",
    summary:
      "Selected analytics and social-media credentials that complement marketing, growth, and operations work.",
    caseNotes: {
      context: "Supporting credentials for analytics, digital marketing, and social-media tool fluency.",
      role: "Completed certifications that complement marketing, growth, and operations work.",
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

const previewItems = [projects[0], projects[1], projects[2], projects[3], projects[5], projects[6], projects[7]]
  .filter((project) => project?.preview)
  .map((project) => ({
    ...project.preview,
    cover: project.media[0]?.id,
    openUrl: project.links[0]?.url,
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
  const mediaClass = project.media.length === 1 ? "card-media single" : "card-media";
  const media = project.media
    .map(
      (item) =>
        `<img src="${thumb(item.id, 1000)}" alt="${item.alt}" loading="lazy" />`,
    )
    .join("");
  const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  const links = project.links
    .slice(0, project.linkLimit || 4)
    .map(
      (link) =>
        `<a class="source-link" href="${link.url}" ${newTabAttrs}><i data-lucide="external-link"></i><span>${link.label}</span></a>`,
    )
    .join("");
  const caseBrief = project.caseNotes
    ? `
        <div class="case-brief" aria-label="${project.title} contribution summary">
          <div>
            <span>Context</span>
            <p>${project.caseNotes.context}</p>
          </div>
          <div>
            <span>My role</span>
            <p>${project.caseNotes.role}</p>
          </div>
          <div>
            <span>Output</span>
            <p>${project.caseNotes.output}</p>
          </div>
          ${
            project.caseNotes.signal
              ? `<div class="case-signal">
                  <span>Signal</span>
                  <p>${project.caseNotes.signal}${project.caseNotes.signalCn ? `<small>${project.caseNotes.signalCn}</small>` : ""}</p>
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
        <div class="category-pill">${project.category}</div>
        <div class="project-tags">${tags}</div>
        <h3>${project.title}</h3>
        <p class="case-summary">${project.summary}</p>
        ${caseBrief}
        <p class="cn-note">${project.cn}</p>
        <div class="evidence-label">Open materials</div>
        <div class="card-actions">
          <button class="source-link primary" type="button" data-preview-project="${index}">
            <i data-lucide="eye"></i>
            <span>Preview</span>
          </button>
          ${links}
        </div>
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

  const copy = capabilityCopy[filter] || capabilityCopy.all;
  const matchesFilter = (project) => filter === "all" || project.filters.includes(filter);
  const matchedProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => matchesFilter(project));
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
      openDialog(project.preview.title, project.preview.url);
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
      (item, index) => `
        <button class="preview-choice" type="button" data-preview-index="${index}">
          <strong>${item.title}</strong>
          <span>${item.description}</span>
        </button>
      `,
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

  frame.src = item.url;
  title.textContent = item.title;
  description.textContent = item.description;
  cover.src = thumb(item.cover, 1600);
  cover.alt = `${item.title} thumbnail`;
  openLink.href = item.openUrl || item.url;
};

const renderGallery = () => {
  const grid = document.getElementById("gallery-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = galleryItems
    .map(
      (item) => `
        <figure class="gallery-item${item.wide ? " is-wide" : ""}${item.cover ? " is-cover" : ""}">
          <a href="${driveFile(item.id)}" ${newTabAttrs}>
            <img src="${thumb(item.id, item.wide ? 1600 : 1000)}" alt="${item.caption}" loading="lazy" />
          </a>
          <figcaption>${item.caption}</figcaption>
        </figure>
      `,
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
      (group) => `
        <article class="archive-card">
          <img src="${thumb(group.cover, 1200)}" alt="${group.title} cover thumbnail" loading="lazy" />
          <div class="archive-copy">
            <div class="category-pill">${group.count}</div>
            <h3>${group.title}</h3>
            <p class="cn-note">${group.cn}</p>
            <a class="source-link primary" href="${driveFolder(group.folderId)}" ${newTabAttrs}>
              <i data-lucide="folder-open"></i>
              <span>Open Drive folder</span>
            </a>
          </div>
        </article>
      `,
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
renderProjects();
renderPreviewList();
renderGallery();
renderArchive();
initFilters();
initCapabilityLinks();
initNewTabLinks();
initDialog();
initSectionTracking();
initIcons();
