const translations = {
  en: {
    nav: { strategy: "Strategy", demo: "Sprint", pilot: "Pilot", plan: "90 Days", metrics: "Metrics" },
    hero: {
      kicker: "AN OUTSIDE-IN US MARKET PROPOSAL",
      title: "From AI video tool<br />to <em>creative growth system.</em>",
      lead: "Position Migoo as the AI performance creative team for DTC brands and agencies — turning one product into a repeatable pipeline of campaign-ready assets.",
      author: "Prepared by Summer Chen",
      thesis: "Sell usable campaign output, not generation volume."
    },
    positioning: {
      kicker: "THE CATEGORY DECISION", title: "Do not enter as another AI video generator.",
      intro: "The US market already has tools for URL-to-video, avatars, editing and UGC generation. Migoo can win by owning the workflow from product brief to campaign-ready creative.",
      oldLabel: "Crowded category", oldTitle: "AI video generator", old1: "Feature-led comparison", old2: "Credit and price pressure", old3: "One-off experimentation",
      newLabel: "Ownable position", newTitle: "AI performance creative team", new1: "Outcome-led campaign packs", new2: "Repeatable production workflow", new3: "Brand and agency expansion",
      messageLabel: "Market-facing promise", message: "Turn one product into a month of campaign-ready creative."
    },
    audience: {
      kicker: "BEACHHEAD MARKET", title: "Start where creative fatigue is already expensive.", dtcTab: "DTC Growth Teams", agencyTab: "Performance Agencies",
      pain: "Pain", buy: "Why they buy", expand: "Expansion", highRepeat: "High repeat value", lowRepeat: "Low repeat value", lowLeverage: "Low leverage", highLeverage: "High leverage",
      mapAgency: "Agencies", mapDtc: "DTC brands", mapSeller: "Marketplace sellers", mapCreator: "General creators"
    },
    sprint: {
      kicker: "THE COMMERCIAL WEDGE", title: "Migoo Creative Sprint", intro: "A concrete offer that makes the product’s value visible before asking the market to understand the underlying agent.",
      example: "ILLUSTRATIVE CAMPAIGN", input: "Input", inputValue: "Product URL + brand kit + goal", audience: "Audience", audienceValue: "US Gen Z skincare buyers", channels: "Channels", output: "Output", outputValue: "3 angles · 12 assets · 3 formats",
      angle1: "Creator proof", angle1Sub: "Real-routine hook", angle2: "Product desire", angle2Sub: "Texture + sensory payoff", angle3: "Routine demo", angle3Sub: "Use case + objection handling", hooks: "5 hooks", variants: "12 variants"
    },
    engine: {
      kicker: "THE GROWTH SYSTEM", title: "Evidence first. Distribution second. Paid scale third.", step1: "Design partners", step1Sub: "10 agencies + 20 brands", step2: "Creator proof", step2Sub: "Performance creators, not vanity reach", step3: "Agency distribution", step3Sub: "One partner, multiple brands", step4: "Repeat workflow", step4Sub: "Weekly creative refresh", step5: "Scalable paid", step5Sub: "Amplify proven messages", principle: "Paid media scales a working value loop; it does not create one."
    },
    pilot: {
      kicker: "THE FIRST COMMERCIAL PROOF", title: "Four weeks to prove repeat value.", intro: "A design-partner cohort built to answer who reuses Migoo, why they pay and which workflow deserves scale.", agencies: "US agencies", brands: "DTC brands",
      w1: "Onboard", w1s: "Brand kit, product feed, current ads and campaign goal", w2: "Create", w2s: "First Creative Sprint across hooks, formats and channels", w3: "Iterate", w3s: "Second-round variants based on selection and channel feedback", w4: "Decide", w4s: "Review usable output, repeat behavior and willingness to pay",
      criteria: "PILOT SUCCESS CRITERIA", c1: "Time to first usable asset", c2: "Assets selected and exported", c3: "Second project within 7 days", c4: "Willingness to continue paid", c5: "Second client added by agency", c6: "Cost per usable export",
      challengeLabel: "CREATOR-LED LAUNCH", challengeTitle: "One Product.<br />30 Creatives.<br />7 Days.", challengeBody: "Performance creators and media buyers turn one brief into public proof, product feedback and reusable sales content."
    },
    signals: {
      kicker: "US MARKET → ASIA HQ", title: "Turn local signals into product decisions.", intro: "Localization is not translation. It is a disciplined system for converting customer friction, commercial resistance and creative quality into decisions the product team can act on.",
      f1: "Segment + job", f2: "Friction + evidence", f3: "Business impact", f4: "Proposed change", f5: "Success metric",
      i1: "The real competitor is the current workflow.", i1s: "Win against agencies, freelancers, internal production and fragmented AI stacks — not only other models.", i2: "Agency is both channel and stress test.", i2s: "Multi-client work reveals the need for brand kits, approvals, workspaces and volume economics.", i3: "Activation means “willing to use.”", i3s: "The first generation is not value. Selection, edit or export of a campaign-ready asset is.", i4: "Human creator + AI earns more trust.", i4s: "Combine human insight and credibility with AI variation speed instead of positioning replacement.",
      cadence: "WEEKLY OPERATING CADENCE", mon: "Customer signals", tue: "Creative quality review", wed: "Product prioritization", thu: "Market experiments", fri: "US–HQ decision memo"
    },
    plan: {
      kicker: "FIRST 90 DAYS", title: "Three decisions, not three activity lists.", q1: "Where is the first repeatable value?", p1: "Diagnose", p1a: "30–40 customer interviews", p1b: "Five-vertical quality audit", p1c: "Funnel baseline + ICP pages", q2: "What will customers reuse and pay for?", p2: "Prove", p2a: "Three commercial offers", p2b: "Guided design-partner cohorts", p2c: "Six to ten evidence-led cases", q3: "Which loop deserves scale?", p3: "Scale", p3a: "Agency referral + creator affiliate", p3b: "Benchmark content + public challenge", p3c: "High-intent paid acquisition", signal: "Signal", s1: "Clear ICP × use case", s2: "Repeat usage + willingness to pay", s3: "Repeatable acquisition-to-paid loop"
    },
    metrics: {
      kicker: "THE OPERATING SYSTEM", title: "Measure usable output and repeat value.", note: "Illustrative data only", northLabel: "NORTH STAR", northValue: "campaign-ready assets exported weekly", funnelLabel: "ACTIVATION FUNNEL", f1: "Qualified visit", f2: "Product imported", f3: "First usable asset", f4: "Second project", cohortLabel: "7-DAY REPEAT BY COHORT", agency: "Agency", dtc: "DTC brand", seller: "Seller", cohortNote: "Scale the cohort with stronger repeat value, not the cheapest signup.", time: "Time to first usable asset", timeUnit: "minutes", cost: "Cost per usable export", costUnit: "illustrative", paid: "Activated → paid", paidUnit: "target signal"
    },
    fit: {
      kicker: "OPERATOR FIT", title: "One role. Six connected systems.", intro: "The role needs more than channel marketing. It needs someone who can connect product value, creator behavior, commercial partnerships and operating metrics across the US and Asia.",
      c1: "0→1 AI GTM", c1s: "Positioning, launch and growth systems", c2: "Creator ecosystems", c2s: "KOL, UGC, community and events", c3: "Partnerships", c3s: "Agency, B2B and channel development", c4: "Creative judgment", c4s: "Film, short video and production workflow", c5: "Growth operations", c5s: "Funnels, CAC, ROI and experiments", c6: "Cross-market execution", c6s: "US market with Asia HQ collaboration",
      validate: "WHAT I WOULD VALIDATE FIRST", q1: "Which product line and use case own the US goal?", q2: "Where does today’s activation funnel break?", q3: "What team, budget and product support can the market lead mobilize?", q4: "What have early US users already taught us?"
    },
    closing: {
      kicker: "THE BET", title: "Own the creative workflow,<br />not just the generation moment.", body: "Start with brands and agencies that already feel the cost of creative fatigue. Prove usable output, repeat behavior and paid value. Then scale the story the market has already validated.", author: "Prepared by Summer Chen", product: "View Migoo", disclaimer: "Independent outside-in proposal based on publicly available information. Illustrative campaign and metrics are clearly labeled."
    }
  },
  zh: {
    nav: { strategy: "策略", demo: "创意演示", pilot: "Pilot", plan: "90 天", metrics: "指标" },
    hero: {
      kicker: "美国市场外部视角提案",
      title: "从 AI 视频工具<br />走向<em>创意增长系统。</em>",
      lead: "将 Migoo 定位为服务 DTC 品牌与营销机构的 AI 创意交付团队，把一个产品转化为可持续生产、可直接测试的广告素材体系。",
      author: "提案人：Summer Chen",
      thesis: "卖的是可用的 Campaign 产出，而不是生成次数。"
    },
    positioning: {
      kicker: "品类选择", title: "不要以“又一个 AI 视频生成器”进入美国市场。",
      intro: "美国市场已经有大量 URL-to-video、数字人、剪辑与 UGC 生成工具。Migoo 更有机会占领的，是从产品 brief 到可投放成品的完整创意工作流。",
      oldLabel: "拥挤品类", oldTitle: "AI 视频生成器", old1: "围绕功能横向比较", old2: "陷入点数和价格竞争", old3: "大量一次性尝鲜用户",
      newLabel: "可建立的心智", newTitle: "AI 广告创意交付团队", new1: "围绕可投放成果定价", new2: "形成持续复用的生产流程", new3: "推动品牌与 Agency 扩张",
      messageLabel: "市场价值主张", message: "一个产品，生成一个月可直接测试的广告创意。"
    },
    audience: {
      kicker: "首要目标市场", title: "先服务已经为“创意疲劳”付出成本的人。", dtcTab: "DTC 增长团队", agencyTab: "效果营销 Agency",
      pain: "核心痛点", buy: "购买原因", expand: "扩张路径", highRepeat: "高复用价值", lowRepeat: "低复用价值", lowLeverage: "低渠道杠杆", highLeverage: "高渠道杠杆",
      mapAgency: "营销机构", mapDtc: "DTC 品牌", mapSeller: "平台卖家", mapCreator: "泛创作者"
    },
    sprint: {
      kicker: "商业切入口", title: "Migoo Creative Sprint", intro: "先用一个清晰、可交付的 Offer 让客户看见商业价值，再让市场理解背后的 Agent 能力。",
      example: "模拟营销案例", input: "输入", inputValue: "产品链接 + 品牌素材 + 目标", audience: "受众", audienceValue: "美国 Z 世代护肤消费者", channels: "渠道", output: "交付", outputValue: "3 个方向 · 12 条素材 · 3 种格式",
      angle1: "Creator 口碑", angle1Sub: "真实日常使用场景", angle2: "产品欲望", angle2Sub: "质感与感官利益点", angle3: "使用演示", angle3Sub: "场景呈现与顾虑化解", hooks: "5 个 Hook", variants: "12 个版本"
    },
    engine: {
      kicker: "增长系统", title: "先建立证据，再构建分发，最后扩大投放。", step1: "设计伙伴", step1Sub: "10 家 Agency + 20 个品牌", step2: "Creator 证据", step2Sub: "重效果创作者，而非虚荣曝光", step3: "Agency 分发", step3Sub: "一个伙伴带来多个品牌", step4: "持续复用", step4Sub: "每周更新广告创意", step5: "规模化投放", step5Sub: "放大已经验证的信息", principle: "付费广告能够放大有效的价值闭环，但无法凭空创造闭环。"
    },
    pilot: {
      kicker: "首轮商业验证", title: "用四周验证复用价值。", intro: "通过 Design Partner Cohort 回答三个问题：谁会持续使用、为什么愿意付费、哪一条工作流值得规模化。", agencies: "美国 Agency", brands: "DTC 品牌",
      w1: "接入", w1s: "导入品牌素材、产品信息、现有广告和 Campaign 目标", w2: "生产", w2s: "完成第一轮 Hook、格式与渠道 Creative Sprint", w3: "迭代", w3s: "根据素材选择和渠道反馈生成第二轮变体", w4: "决策", w4s: "复盘可用产出、复用行为和真实付费意愿",
      criteria: "PILOT 成功标准", c1: "首个可用素材耗时", c2: "选择并导出的素材数量", c3: "7 日内创建第二个项目", c4: "继续付费的真实意愿", c5: "Agency 导入第二个客户", c6: "单个可用导出的成本",
      challengeLabel: "CREATOR 启动项目", challengeTitle: "一个产品<br />30 条创意<br />7 天完成", challengeBody: "由效果型 Creator 和 Media Buyer 把一个 brief 转化为公开证据、产品反馈和可复用销售内容。"
    },
    signals: {
      kicker: "美国市场 → 亚洲总部", title: "把本地市场信号转化为产品决策。", intro: "真正的本地化不是翻译，而是持续把客户摩擦、商业阻力和创意质量，转化为产品团队可以执行并验证的决策。",
      f1: "用户类型 + 任务", f2: "摩擦 + 证据", f3: "业务影响", f4: "产品建议", f5: "成功指标",
      i1: "真正的竞争对手，是客户现有的制作流程。", i1s: "竞争对象包括 Agency、Freelancer、内部制作和碎片化 AI 工具组合，而不只是其他模型。", i2: "Agency 既是渠道，也是产品压力测试器。", i2s: "多客户场景会快速暴露 brand kit、审批、workspace 和批量经济性需求。", i3: "Activation 应该代表“愿意使用”。", i3s: "完成生成不等于获得价值；选择、修改或导出可投放素材才是。", i4: "Human Creator + AI 更容易建立信任。", i4s: "用真人洞察与可信度结合 AI 变体速度，而不是把产品讲成替代 Creator。",
      cadence: "每周运营节奏", mon: "汇总客户信号", tue: "审查创意质量", wed: "确定产品优先级", thu: "运行市场实验", fri: "提交美国市场决策 Memo"
    },
    plan: {
      kicker: "入职前 90 天", title: "三个阶段解决三个关键决策。", q1: "第一批可重复价值在哪里？", p1: "诊断", p1a: "完成 30–40 个客户访谈", p1b: "审计五个垂直行业的产出质量", p1c: "建立漏斗基线与 ICP 页面", q2: "客户愿意复用并付费的是什么？", p2: "验证", p2a: "测试三种商业 Offer", p2b: "运营设计伙伴 Cohort", p2c: "形成 6–10 个证据型案例", q3: "哪一个增长闭环值得放大？", p3: "规模化", p3a: "Agency 推荐与 Creator Affiliate", p3b: "行业报告与公开挑战赛", p3c: "高意图付费获客", signal: "判断信号", s1: "明确 ICP × 核心场景", s2: "出现复用与真实付费意愿", s3: "形成可重复的获客到付费闭环"
    },
    metrics: {
      kicker: "增长管理系统", title: "衡量可用成果，以及用户是否再次回来。", note: "以下均为模拟数据", northLabel: "核心指标", northValue: "每周完成并导出的可用广告素材", funnelLabel: "激活漏斗", f1: "高意向访问", f2: "导入产品", f3: "首个可用素材", f4: "第二个项目", cohortLabel: "不同 Cohort 的 7 日复用率", agency: "Agency", dtc: "DTC 品牌", seller: "平台卖家", cohortNote: "优先放大复用价值更高的 Cohort，而不是单纯追求最便宜的注册。", time: "首个可用素材耗时", timeUnit: "分钟", cost: "单个可用导出成本", costUnit: "模拟数字", paid: "激活到付费", paidUnit: "目标信号"
    },
    fit: {
      kicker: "负责人匹配度", title: "一个岗位，连接六套系统。", intro: "这个岗位需要的不只是渠道营销，而是能够在美国市场与亚洲总部之间，把产品价值、创作者生态、商业合作和增长指标连接起来的人。",
      c1: "AI 产品 0→1 GTM", c1s: "定位、发布与增长机制", c2: "创作者生态", c2s: "KOL、UGC、社群与线下活动", c3: "商务合作", c3s: "Agency、B2B 与渠道拓展", c4: "内容判断", c4s: "影视、短视频与生产工作流", c5: "增长运营", c5s: "漏斗、CAC、ROI 与实验管理", c6: "跨市场协作", c6s: "美国本地执行与亚洲总部协同",
      validate: "优先核实的四个问题", q1: "美国市场具体由哪条产品线和哪个场景承接？", q2: "当前激活漏斗最主要的断点在哪里？", q3: "市场负责人可以调动哪些团队、预算和产品资源？", q4: "早期美国用户已经提供了哪些关键反馈？"
    },
    closing: {
      kicker: "核心判断", title: "占领完整创意工作流，<br />而不只是生成的那一刻。", body: "先从已经为创意疲劳付出成本的品牌和 Agency 切入，验证可用产出、复用行为和付费价值，再放大市场已经证明成立的故事。", author: "提案人：Summer Chen", product: "查看 Migoo", disclaimer: "本提案基于公开信息形成，为独立外部视角；模拟案例与模拟数据均已明确标注。"
    }
  }
};

const audienceContent = {
  en: {
    dtc: { tag: "PRIMARY ICP", title: "Lean teams, relentless creative demand.", description: "US e-commerce brands already investing in Meta, TikTok or Amazon, but lacking the production capacity to refresh creative every week.", pain: "Creative fatigue outpaces production", buy: "More testable assets, faster", expand: "New products, channels and teams" },
    agency: { tag: "DISTRIBUTION MULTIPLIER", title: "One relationship can unlock many brands.", description: "Boutique performance and creative agencies serving 5–30 DTC clients, under pressure to increase creative velocity without increasing production headcount.", pain: "Client demand grows faster than margin", buy: "More delivery capacity per strategist", expand: "Client workspaces, seats and volume" }
  },
  zh: {
    dtc: { tag: "首要 ICP", title: "团队精简，但广告创意需求永不停歇。", description: "已经在 Meta、TikTok 或 Amazon 投放，却没有足够制作能力每周持续更新素材的美国电商品牌。", pain: "创意疲劳速度超过生产速度", buy: "更快获得更多可测试素材", expand: "新产品、新渠道和更多团队" },
    agency: { tag: "渠道放大器", title: "一个合作关系，可以带来多个品牌。", description: "服务 5–30 个 DTC 客户的中小型效果营销与创意 Agency，需要在不扩大制作人力的前提下提升交付速度。", pain: "客户需求增长快于项目利润", buy: "提升每位策略人员的交付能力", expand: "客户工作区、团队席位与用量" }
  }
};

let currentLanguage = localStorage.getItem("migoo-language") || "en";
let currentAudience = "dtc";

function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("migoo-language", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "Migoo 美国市场 GTM 策略 | Summer Chen" : "Migoo US GTM Strategy | Summer Chen";
  document.querySelector('meta[name="description"]').content = lang === "zh"
    ? "Summer Chen 基于公开信息制作的 Migoo 美国市场 GTM 双语提案。"
    : "An independent outside-in US go-to-market proposal for Migoo, prepared by Summer Chen.";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.dataset.i18n.split(".");
    let value = translations[lang];
    keys.forEach((key) => { value = value?.[key]; });
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  applyAudience(currentAudience);
  if (window.lucide) window.lucide.createIcons();
}

function applyAudience(type) {
  currentAudience = type;
  const content = audienceContent[currentLanguage][type];
  document.getElementById("audienceTag").textContent = content.tag;
  document.getElementById("audienceTitle").textContent = content.title;
  document.getElementById("audienceDescription").textContent = content.description;
  document.getElementById("audiencePain").textContent = content.pain;
  document.getElementById("audienceBuy").textContent = content.buy;
  document.getElementById("audienceExpand").textContent = content.expand;
  document.querySelectorAll("[data-audience]").forEach((button) => {
    const active = button.dataset.audience === type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-target-audience]").forEach((button) => {
    button.classList.toggle("active", button.dataset.targetAudience === type);
  });
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  document.getElementById("progressBar").style.height = `${Math.min(100, ratio * 100)}%`;
}

function observeSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll("[data-nav]").forEach((link) => {
        link.classList.toggle("active", link.dataset.nav === entry.target.dataset.section);
      });
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
}

async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
  } else {
    await document.exitFullscreen?.();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLanguage);
  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  document.querySelectorAll("[data-audience]").forEach((button) => button.addEventListener("click", () => applyAudience(button.dataset.audience)));
  document.querySelectorAll("[data-target-audience]").forEach((button) => button.addEventListener("click", () => applyAudience(button.dataset.targetAudience)));
  document.getElementById("fullscreenButton").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    document.body.classList.toggle("fullscreen", Boolean(document.fullscreenElement));
    const icon = document.fullscreenElement ? "minimize-2" : "maximize-2";
    document.getElementById("fullscreenButton").innerHTML = `<i data-lucide="${icon}"></i>`;
    if (window.lucide) window.lucide.createIcons();
  });
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
  observeSections();
  if (window.lucide) window.lucide.createIcons();
});
