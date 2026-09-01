/* ============================================================
   MARK ROMANOV — interaction layer
   i18n · navigation · reveal · modals · form
   ============================================================ */
(function () {
  "use strict";

  /* ---------- dictionary ---------- */
  var I18N = {
    en: {
      "doc.title": "Mark Romanov — International Lawyer, Jurisconsult & Arbitrator",
      "doc.desc": "Strategic counsel in international arbitration, cross-border disputes, extradition defence, sanctions compliance, asset management and securitization.",

      "a11y.skip": "Skip to main content",
      "a11y.menu": "Open menu",
      "a11y.menuClose": "Close menu",
      "a11y.close": "Close",

      "brand.sub": "International Lawyer · Jurisconsult · Arbitrator",
      "nav.profile": "Profile",
      "nav.strategy": "Strategy",
      "nav.practice": "Practice Areas",
      "nav.media": "Media",
      "nav.insights": "Insights",
      "nav.contact": "Contact",

      "cta.consult": "Private Consultation",
      "cta.brief": "Request Confidential Briefing",
      "cta.explore": "Explore Practice Areas",
      "cta.copy": "Copy",

      "hero.eyebrow": "Private International Practice",
      "hero.name": "Mark Romanov",
      "hero.role": "International Lawyer, Jurisconsult & Arbitrator",
      "hero.sub": "Strategic Counsel · Cross-Border Dispute Resolution · Asset Management & Securitization",
      "hero.m1": "Multi-jurisdictional mandates",
      "hero.m2": "ICC · LCIA arbitration frameworks",
      "hero.m3": "Privilege & NDA from first contact",

      "bio.eyebrow": "Profile",
      "bio.k1": "Areas of law",
      "bio.b1": "Mark Vladimirovich Romanov is an international lawyer whose work focuses on cross-border commercial law, international arbitration, banking, and corporate governance.",
      "bio.exp": "With extensive experience in international law, global governance, analytics and forecasting of multi-level processes, strategic and tactical forecasting, and the art of diplomacy in negotiations, Mark Romanov possesses exceptional qualifications and a team of highly specialized professionals to solve any client's challenges.",
      "bio.k2": "Clients and mandates",
      "bio.b2": "Mark Romanov's team advises corporations, financial institutions, government-related entities, and private clients on complex international matters \u2014 from structuring, management, asset protection, and the creation of business holding structures to trade finance, dispute resolution, and regulatory integrity.",
      "bio.k3": "Geography and languages",
      "bio.b3": "His practice spans the European Union, the United Arab Emirates, Russia, and Hong Kong, and he conducts his work in English and Russian.",
      "bio.k4": "Credentials and appointments",
      "bio.b4": "He holds a PhD in law, officially recognized in the United Kingdom, and is a current member of the International Bar Association. In addition to practicing law, he holds senior positions at several international investment firms.",

      "about.eyebrow": "Strategy",
      "about.h": "A single point of accountability for cross-border matters",
      "about.lead": "Mark Romanov's practice is focused on complex cross-border and multi-jurisdictional matters, where commercial interests, regulatory exposure and the legal systems of several countries meet within a single mandate.",
      "about.p1t": "A single point of accountability in cross-border matters",
      "about.p1b": "Mark Romanov acts as the client's single point of accountability: coordinating the legal, expert and organisational work, structuring the process and holding the client's interests protected at every stage.",
      "about.p2t": "One coordination centre in cross-border matters",
      "about.p2b": "In complex cross-border matters he serves as a single coordination centre, bringing together lawyers, experts and partners across jurisdictions. The client is not left to align specialists on their own.",
      "about.p3t": "Risk, assets and reputation",
      "about.p3b": "The approach covers more than legal coordination: risk management, the security of assets and the reputational aspects that carry weight in cross-border matters, including the operational strategy for managing reputation.",
      "about.p4t": "Discretion by default",
      "about.p4b": "Every engagement opens under legal privilege and non-disclosure. Case materials are handled through encrypted channels, and the circle of people with access is kept deliberately narrow.",
      "about.p5t": "Strategy before procedure",
      "about.p5b": "Filings follow a position, not the reverse. Each matter begins with analysis and forecasting of how forums, regulators and counterparties are likely to act, and the procedural route is chosen from there.",
      "about.p6t": "Diplomacy as an instrument",
      "about.p6b": "Many cross-border problems resolve faster through negotiation and institutional dialogue than through litigation. Where a settlement serves the client better than a ruling, that route is built first.",

      "pr.eyebrow": "Counsel across borders",
      "pr.h": "A practice built for complex, multi-jurisdictional matters",
      "pr.lead": "Matters often extend across several legal systems and several lines of operational management. We bring in proven, specialised professionals to reach the best result in the shortest time — wherever a case calls for a deep understanding of enforcement practice, particular fields of expertise and direct engagement with the state institutions of the jurisdictions involved.",

      "pr1.t": "International Arbitration & Disputes",
      "pr1.b": "Representation and advisory in institutional and cross-border arbitration, including ICC and LCIA frameworks, and the strategy that surrounds multi-forum disputes.",
      "pr2.t": "Legal assistance in complex international cases",
      "pr2.b": "Interpol Notices, extradition, asylum. Confidential analysis, preparation of master dossiers and positions, full legal support. Defense against detention and extradition. International protection, protection from unlawful actions.",
      "pr3.t": "Banking and International Finance",
      "pr3.b": "Cross-border trade finance mechanisms, instruments, and structures with thorough analysis of financial crime risks and sanctions compliance. Building secure ownership structures and protecting ultimate beneficiaries. Digital asset transactions, fund transfer chains, and legalization in accordance with applicable law.",
      "pr4.t": "Real Estate",
      "pr4.b": "Asset management, insurance and asset protection, and sanctions recovery. We provide due diligence and support for real estate transactions. We handle cross-border settlements in complex transactions. We work with investment funds and private investors.",
      "pr5.t": "Analytical Center and Troubleshooting",
      "pr5.b": "Information collection and analysis, OSINT, corporate and private intelligence, private investigations, strategic consulting, and risk management. Tailored solutions for personal and corporate problems. Interaction with government agencies worldwide.",
      "pr6.t": "Alternative Citizenship and Residence",
      "pr6.b": "Citizenship and residence by investment. Selecting the jurisdiction that fits the client's objectives, preparing the dossier and evidencing the source of funds, and support through to the grant of status. Questions of tax residence and the status of family members are handled alongside.",
      "md.eyebrow": "Media & Press",
      "md.h": "Speaking, analysis and commentary",
      "md.lead": "Selected formats for conferences, editorial desks and research teams. Materials and availability are confirmed individually.",
      "md.t1": "Speaking",
      "md.t2": "Publications",
      "md.t3": "Commentary",
      "md.c1t": "Keynote Speeches & International Legal Forums",
      "md.c1b": "Keynotes and panel participation on arbitration practice, cross-border enforcement and the mechanics of multi-jurisdictional risk.",
      "md.c2t": "Thought Leadership, Legal Analysis & Whitepapers",
      "md.c2b": "Long-form analysis and briefing papers prepared for institutional readers, counsel teams and private clients.",
      "md.c3t": "Press Commentary on Global Sanctions & Extradition Frameworks",
      "md.c3b": "Comment for journalists on sanctions regimes, Interpol procedure and extradition practice, on the record or on background.",
      "md.pk": "Press Kit & Media Inquiries",
      "md.pkb": "Biography, portrait photography, credentials and speaking topics are provided on request to accredited media.",
      "md.pkc": "Request Press Kit",
      "md.pkm": "Accredited media receive a biography, high-resolution portrait photography, the coat of arms in vector form, credentials and current speaking topics. Interview requests are answered with a confirmed window and agreed subject matter.",
      "md.pr1": "Media email",
      "md.pr2": "Signal",
      "md.pkn": "Commentary on active mandates is not provided. Subjects covered are listed under Insights.",

      "in.eyebrow": "Insights",
      "in.h": "Analytical notes and briefing papers",
      "in.lead": "Working subjects on which analysis is maintained. Full papers are shared with clients and accredited media on request.",
      "in.1t": "Red Notices and the prevention of arrest",
      "in.1b": "How notices are reviewed, on what grounds a request is refused, and what weight arguments of political motivation carry.",
      "in.tag1": "Extradition",
      "in.2t": "Sanctions exposure in multi-tier ownership structures",
      "in.2b": "How control is established along a chain of ownership, when a regulator's licence is required, and what protects the ultimate beneficial owner in cross-border holdings.",
      "in.tag2": "Sanctions",
      "in.3t": "Enforcement of awards across uncooperative forums",
      "in.3b": "Strategy for recognition, asset tracing and parallel proceedings when a debtor's assets are spread across several jurisdictions.",
      "in.tag3": "Arbitration",
      "in.4t": "Legalization of digital assets under applicable law",
      "in.4b": "Transfer chains, source-of-funds evidence and what regulators require of private asset holders.",
      "in.tag4": "Digital assets",

      "ct.eyebrow": "Confidential Advisory",
      "ct.h": "Request a private consultation",
      "ct.lead": "Leave a name and a convenient way to reach you. The reply confirms a time and a secure channel for the conversation itself.",
      "ct.badge": "All inquiries protected by strict legal privilege and NDA standards.",
      "ct.ch1": "Signal",
      "ct.ch2": "Proton Mail",
      "ct.ch3": "Telegram",
      "ct.ch4": "Matrix",
      "ct.ch5": "WhatsApp",
      "ct.ch6": "Landline",
      "ct.chnote": "These channels are convenient for getting in touch and agreeing a time. The details of a matter are better discussed on an encrypted channel.",
      "ct.name": "Name",
      "ct.namep": "How to address you",
      "ct.reach": "How to reach you",
      "ct.reachp": "Email, Telegram, Signal or phone",
      "ct.msg": "Briefly about your matter",
      "ct.msgp": "Optional — a few words are enough",
      "ct.submit": "Request a consultation",
      "ct.note": "Transmission does not create a counsel–client relationship until an engagement is confirmed in writing.",

      "ftr.nav": "Navigation",
      "ftr.ch": "Encrypted channels",
      "ftr.msg": "Messengers",
      "ftr.disc": "This website provides general information about the practice of Mark Romanov and does not constitute legal advice, an offer of representation, or a solicitation in any jurisdiction where such an offer would be unlawful. Transmitting information through this site does not create a counsel–client relationship until an engagement is confirmed in writing. Services are rendered in accordance with the regulatory and professional requirements applicable in each relevant jurisdiction.",
      "ftr.priv": "Legal privilege · NDA standard · Encrypted correspondence",

      "ok.h": "Request received",
      "ok.b": "A reply follows on the contact you left, normally within one business day.",
      "copy.done": "Copied"
    },

    ru: {
      "doc.title": "Марк Романов — международный юрист, юрисконсульт и арбитр",
      "doc.desc": "Стратегический консалтинг в международном арбитраже, трансграничных спорах, защите при экстрадиции, санкционном комплаенсе, управлении и секьюритизации активов.",

      "a11y.skip": "Перейти к содержанию",
      "a11y.menu": "Открыть меню",
      "a11y.menuClose": "Закрыть меню",
      "a11y.close": "Закрыть",

      "brand.sub": "Международный юрист · Юрисконсульт · Арбитр",
      "nav.profile": "Профиль",
      "nav.strategy": "Стратегия",
      "nav.practice": "Практика",
      "nav.media": "Медиа",
      "nav.insights": "Аналитика",
      "nav.contact": "Контакты",

      "cta.consult": "Частная консультация",
      "cta.brief": "Запросить конфиденциальный брифинг",
      "cta.explore": "Перейти к практике",
      "cta.copy": "Копировать",

      "hero.eyebrow": "Частная международная практика",
      "hero.name": "Марк Романов",
      "hero.role": "Международный юрист, юрисконсульт и арбитр",
      "hero.sub": "Стратегический консалтинг · Трансграничные споры · Управление и секьюритизация активов",
      "hero.m1": "Мандаты в нескольких юрисдикциях",
      "hero.m2": "Арбитраж по регламентам ICC и LCIA",
      "hero.m3": "Юридическая тайна и NDA с первого контакта",

      "bio.eyebrow": "Профиль",
      "bio.k1": "Области права",
      "bio.b1": "Марк Владимирович Романов — международный юрист, работа которого сосредоточена на трансграничном коммерческом праве, международном арбитраже, банковском праве и корпоративном управлении.",
      "bio.exp": "Обладая обширным опытом в области международного права, глобального управления, аналитики и прогнозирования разноуровневых процессов, стратегического и тактического предиктата, искусства дипломатии в переговорах, Марк Романов имеет исключительную квалификацию и команду узкопрофильных профессионалов для решения любых поставленных клиентом задач.",
      "bio.k2": "Клиенты и поручения",
      "bio.b2": "Команда Марка Романова консультирует корпорации, финансовые институты, структуры с государственным участием и частных клиентов по сложным международным вопросам — от структурирования, управления, защиты активов и создания бизнес-холдингов до торгового финансирования, разрешения споров и соблюдения регуляторных требований.",
      "bio.k3": "География и языки",
      "bio.b3": "Практика охватывает Европейский союз, Объединённые Арабские Эмираты, Россию и Гонконг; работа ведётся на английском и русском языках.",
      "bio.k4": "Квалификация и должности",
      "bio.b4": "Имеет степень PhD в области права, официально признанную в Великобритании, и является действующим членом International Bar Association. Помимо юридической практики занимает руководящие должности в нескольких международных инвестиционных компаниях.",

      "about.eyebrow": "Стратегия",
      "about.h": "Единая точка ответственности в трансграничных делах",
      "about.lead": "Практика Марка Романова сосредоточена на сложных трансграничных и мультиюрисдикционных кейсах, где коммерческие интересы, регуляторные риски и правовые системы разных стран пересекаются в рамках одной задачи.",
      "about.p1t": "Единая точка ответственности в трансграничных делах",
      "about.p1b": "Марк Романов выступает для клиента единой точкой ответственности: координирует юридическую, экспертную и организационную работу, помогает выстроить процесс и обеспечить защиту интересов на каждом этапе.",
      "about.p2t": "Единый координационный центр в трансграничных делах",
      "about.p2b": "В сложных трансграничных делах он выполняет роль единого координационного центра, объединяя работу юристов, экспертов и партнёров в разных юрисдикциях. Клиенту не нужно самостоятельно сводить специалистов между собой.",
      "about.p3t": "Риски, активы, репутация",
      "about.p3b": "Подход включает не только юридическую координацию, но и управление рисками, вопросы безопасности активов и репутационные аспекты, которые имеют значение в трансграничных делах, включая операционную стратегию управления репутацией.",
      "about.p4t": "Конфиденциальность по умолчанию",
      "about.p4b": "Каждое поручение начинается с адвокатской тайны и соглашения о неразглашении. Материалы дела передаются по зашифрованным каналам, а круг лиц с доступом намеренно узок.",
      "about.p5t": "Стратегия прежде процедуры",
      "about.p5b": "Процессуальные шаги следуют за позицией, а не наоборот. Работа начинается с анализа и прогнозирования того, как поведут себя субъекты, регуляторы и оппоненты, — и уже из этого выбирается маршрут.",
      "about.p6t": "Дипломатия как инструмент",
      "about.p6b": "Многие трансграничные проблемы решаются переговорами и институциональным диалогом быстрее, чем судом. Там, где урегулирование выгоднее решения, этот маршрут выстраивается первым.",

      "pr.eyebrow": "Консультирование в трансграничных отношениях",
      "pr.h": "Практика, ориентированная на сложные дела, охватывающие несколько юрисдикций",
      "pr.lead": "Задачи часто распространяются на несколько правовых систем и векторов операционного управления. Мы привлекаем проверенных, профильных специалистов для получения лучшего результата в кратчайшие сроки — там, где необходимо глубокое понимание правоприменительной практики, особые области знания и прямое взаимодействие с институтами власти задействованных юрисдикций.",

      "pr1.t": "Международный арбитраж и разрешение споров",
      "pr1.b": "Представление интересов и консультации в институциональном и трансграничном арбитраже, включая рамки ICC и LCIA, а также разработка стратегии разрешения споров в нескольких юрисдикциях.",
      "pr2.t": "Юридическая помощь в сложных международных делах",
      "pr2.b": "Интерпол-уведомления, экстрадиция, получение убежища. Конфиденциальный анализ, подготовка мастер-досье и позиции, полное юридическое сопровождение. Защита при угрозе задержания, экстрадиции. Международная защита, защита от неправомерных действий.",
      "pr3.t": "Банковское дело и международные финансы",
      "pr3.b": "Трансграничные механизмы, инструменты и структуры торгового финансирования с тщательным анализом рисков финансовых преступлений и соблюдения санкций. Построение безопасной структуры владения, защита конечного бенефициара. Операции с цифровыми активами, цепочки перевода средств и легализация в соответствии с законодательством.",
      "pr4.t": "Недвижимость",
      "pr4.b": "Управление активами, страхование и защита активов, выход из санкционных ситуаций. Проверка и сопровождение сделок с недвижимостью. Проведение трансграничных расчётов при сложных сделках. Сотрудничество с инвестиционными фондами и частными инвесторами.",
      "pr5.t": "Аналитический центр и Траблшутинг",
      "pr5.b": "Сбор и анализ информации, ОСИНТ, корпоративная и частная разведка, проведение частных расследований, стратегический консалтинг и риск-менеджмент. Индивидуальные решения персональных и корпоративных проблем. Взаимодействие с административными структурами разных стран.",
      "pr6.t": "Получение альтернативного гражданства",
      "pr6.b": "Программы гражданства и вида на жительство за инвестиции. Подбор юрисдикции под задачи клиента, подготовка досье и доказывание источника средств, сопровождение до получения статуса. Параллельно решаются вопросы налогового резидентства и статуса членов семьи.",
      "md.eyebrow": "Медиа и пресса",
      "md.h": "Выступления, аналитика и комментарии",
      "md.lead": "Отобранные форматы для конференций, редакций и исследовательских команд. Материалы и доступность подтверждаются индивидуально.",
      "md.t1": "Выступления",
      "md.t2": "Публикации",
      "md.t3": "Комментарии",
      "md.c1t": "Ключевые доклады и международные юридические форумы",
      "md.c1b": "Доклады и участие в панелях по арбитражной практике, трансграничному исполнению решений и механике рисков в нескольких юрисдикциях.",
      "md.c2t": "Экспертиза, правовой анализ и аналитические доклады",
      "md.c2b": "Развёрнутый анализ и брифинги для институциональных читателей, юридических команд и частных клиентов.",
      "md.c3t": "Комментарии для прессы о санкциях и экстрадиции",
      "md.c3b": "Комментарии журналистам по санкционным режимам, процедурам Интерпола и практике экстрадиции — под запись или в качестве фона.",
      "md.pk": "Пресс-кит и запросы СМИ",
      "md.pkb": "Биография, портретная съёмка, сведения о квалификации и темы выступлений предоставляются аккредитованным СМИ по запросу.",
      "md.pkc": "Запросить пресс-кит",
      "md.pkm": "Аккредитованные СМИ получают биографию, портретную съёмку в высоком разрешении, герб в векторе, сведения о квалификации и актуальные темы выступлений. На запросы об интервью отвечаем с подтверждённым окном и согласованной темой.",
      "md.pr1": "Почта для СМИ",
      "md.pr2": "Signal",
      "md.pkn": "Комментарии по текущим поручениям не предоставляются. Круг тем указан в разделе «Аналитика».",

      "in.eyebrow": "Аналитика",
      "in.h": "Аналитические записки и брифинги",
      "in.lead": "Темы, по которым ведётся постоянный анализ. Полные материалы предоставляются клиентам и аккредитованным СМИ по запросу.",
      "in.1t": "Red Notice и предотвращение ареста",
      "in.1b": "Как пересматриваются уведомления, на каких основаниях запрос отклоняют и какую роль играют доводы о политической мотивации.",
      "in.tag1": "Экстрадиция",
      "in.2t": "Санкционные риски в многоуровневых структурах владения",
      "in.2b": "Как устанавливается контроль по цепочке участия, в каких случаях требуется лицензия регулятора и чем защищён конечный бенефициар в трансграничных холдингах.",
      "in.tag2": "Санкции",
      "in.3t": "Исполнение решений в недружественных юрисдикциях",
      "in.3b": "Стратегия признания решения, розыска активов и параллельных процессов, когда активы должника разбросаны по нескольким юрисдикциям.",
      "in.tag3": "Арбитраж",
      "in.4t": "Легализация цифровых активов в правовом поле",
      "in.4b": "Цепочки перевода средств, доказывание источника и требования регуляторов к частным держателям активов.",
      "in.tag4": "Цифровые активы",

      "ct.eyebrow": "Конфиденциальное обращение",
      "ct.h": "Запросить частную консультацию",
      "ct.lead": "Оставьте имя и удобный способ связи. В ответном сообщении подтвердим время и защищённый канал для самого разговора.",
      "ct.badge": "Все обращения защищены адвокатской тайной и стандартами NDA.",
      "ct.ch1": "Signal",
      "ct.ch2": "Proton Mail",
      "ct.ch3": "Telegram",
      "ct.ch4": "Matrix",
      "ct.ch5": "WhatsApp",
      "ct.ch6": "Телефон",
      "ct.chnote": "Эти каналы подходят, чтобы связаться и договориться о времени. Подробности дела лучше обсуждать по защищённому каналу.",
      "ct.name": "Имя",
      "ct.namep": "Как к вам обращаться",
      "ct.reach": "Способ связи",
      "ct.reachp": "Почта, Telegram, Signal или телефон",
      "ct.msg": "Кратко о вопросе",
      "ct.msgp": "Необязательно — достаточно нескольких слов",
      "ct.submit": "Запросить консультацию",
      "ct.note": "Отправка не создаёт отношений «юрист — клиент» до письменного подтверждения поручения.",

      "ftr.nav": "Навигация",
      "ftr.ch": "Защищённые каналы",
      "ftr.msg": "Мессенджеры",
      "ftr.disc": "Сайт носит общий информационный характер, не является юридической консультацией, офертой о представительстве или предложением услуг в юрисдикциях, где такое предложение противоречит закону. Передача информации через сайт не создаёт отношений «юрист — клиент» до письменного подтверждения поручения. Услуги оказываются с соблюдением регуляторных и профессиональных требований применимых юрисдикций.",
      "ftr.priv": "Адвокатская тайна · Стандарт NDA · Шифрованная переписка",

      "ok.h": "Запрос принят",
      "ok.b": "Ответ придёт на оставленный вами контакт, как правило в течение одного рабочего дня.",
      "copy.done": "Скопировано"
    }
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- i18n ---------- */
  var lang = "en";

  function t(key) {
    var d = I18N[lang] || I18N.en;
    return Object.prototype.hasOwnProperty.call(d, key) ? d[key] : (I18N.en[key] || key);
  }

  function applyLang(next) {
    lang = I18N[next] ? next : "en";
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });

    document.title = t("doc.title");
    var md = $('meta[name="description"]');
    if (md) md.setAttribute("content", t("doc.desc"));

    $$(".lang-b").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    var burger = $("#burger");
    if (burger) {
      burger.setAttribute("aria-label", burger.getAttribute("aria-expanded") === "true" ? t("a11y.menuClose") : t("a11y.menu"));
    }

    try { localStorage.setItem("mr-lang", lang); } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("mr-lang"); } catch (e) {}
    if (!saved) {
      var nav = (navigator.language || "en").toLowerCase();
      saved = /^(ru|be|kk|uk|ky|uz|hy|az)/.test(nav) ? "ru" : "en";
    }
    applyLang(saved);
  }

  $$(".lang-b").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* ---------- header ---------- */
  var hdr = $("#hdr");
  var onScroll = function () {
    if (hdr) hdr.classList.toggle("stuck", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = $("#burger");
  var mnav = $("#mnav");
  function setMenu(open) {
    if (!burger || !mnav) return;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? t("a11y.menuClose") : t("a11y.menu"));
    mnav.hidden = !open;
  }
  if (burger) {
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });
  }
  if (mnav) {
    $$("a", mnav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }
  window.addEventListener("resize", function () { if (window.innerWidth > 1080) setMenu(false); });

  /* ---------- reveal ---------- */
  var rvs = $$(".rv");
  if ("IntersectionObserver" in window && rvs.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        setTimeout(function () { el.classList.add("in"); }, Math.min(i * 70, 280));
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    rvs.forEach(function (el) { io.observe(el); });
  } else {
    rvs.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- modals ---------- */
  var lastFocus = null;

  function focusables(root) {
    return $$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', root)
      .filter(function (el) { return el.offsetParent !== null || el === document.activeElement; });
  }

  function openOv(ov) {
    lastFocus = document.activeElement;
    ov.hidden = false;
    document.body.style.overflow = "hidden";
    var f = focusables(ov);
    if (f.length) f[0].focus();
  }

  function closeOv(ov) {
    ov.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function closeAny() {
    $$(".ov").forEach(function (ov) { if (!ov.hidden) closeOv(ov); });
  }

  $$(".ov").forEach(function (ov) {
    ov.addEventListener("click", function (e) { if (e.target === ov) closeOv(ov); });
    ov.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var f = focusables(ov);
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeAny(); setMenu(false); }
  });

  $$("[data-close]").forEach(function (b) {
    b.addEventListener("click", function () {
      var ov = b.closest(".ov");
      if (ov) closeOv(ov);
    });
  });

  $$('[data-open="press"]').forEach(function (b) {
    b.addEventListener("click", function () { openOv($("#ov-press")); });
  });

  /* ---------- copy ---------- */
  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var val = b.getAttribute("data-copy");
      var done = function () {
        var prev = b.textContent;
        b.textContent = t("copy.done");
        setTimeout(function () { b.textContent = prev; }, 1600);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(val).then(done).catch(function () {});
      } else {
        var ta = document.createElement("textarea");
        ta.value = val;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  });

  /* ---------- form ---------- */
  var form = $("#form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = false;
      $$("input[required],textarea[required]", form).forEach(function (el) {
        var ok = el.value.trim().length > 0;
        el.classList.toggle("bad", !ok);
        if (!ok && !bad) { el.focus(); bad = true; }
      });
      if (bad) return;

      var box = document.createElement("div");
      box.className = "sent";
      box.setAttribute("role", "status");
      box.innerHTML =
        '<div class="sent-ok"><svg class="ic"><use href="#i-check"/></svg></div>' +
        '<h3></h3><p class="lead"></p>';
      $("h3", box).textContent = t("ok.h");
      $("p", box).textContent = t("ok.b");
      form.replaceWith(box);
    });

    $$("input,textarea", form).forEach(function (el) {
      el.addEventListener("input", function () { el.classList.remove("bad"); });
    });
  }

  /* ---------- misc ---------- */
  var y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());

  initLang();
})();
