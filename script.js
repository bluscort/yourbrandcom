(function(){
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("yr").textContent = new Date().getFullYear();

  /* ---------- header ---------- */
  var hdr = document.getElementById("hdr");
  var onScroll = function(){ hdr.classList.toggle("stuck", window.scrollY > 24); };
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});

  var burger = document.getElementById("burger"), mnav = document.getElementById("mnav");
  burger.addEventListener("click", function(){
    var open = mnav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------- smooth scroll ---------- */
  function goTo(sel){
    var el = document.querySelector(sel); if(!el) return;
    var y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({top:y, behavior: reduce ? "auto" : "smooth"});
  }
  document.addEventListener("click", function(e){
    var s = e.target.closest("[data-scroll]");
    if(s){ e.preventDefault(); closeAll(); goTo(s.getAttribute("data-scroll")); return; }
    var a = e.target.closest('a[href^="#"]');
    if(a && a.getAttribute("href").length > 1){
      e.preventDefault();
      mnav.classList.remove("open"); burger.setAttribute("aria-expanded","false");
      var t = a.getAttribute("data-tab"); if(t) selectTab(t);
      goTo(a.getAttribute("href"));
    }
  });

  /* ---------- modals ---------- */
  var lastFocus = null;
  function openModal(id){
    var ov = document.getElementById("ov-" + id); if(!ov) return;
    lastFocus = document.activeElement;
    ov.hidden = false; document.body.style.overflow = "hidden";
    var f = ov.querySelector("button, [href], input, select, textarea"); if(f) f.focus();
  }
  function closeAll(){
    var any = false;
    document.querySelectorAll(".ov").forEach(function(o){ if(!o.hidden){ o.hidden = true; any = true; } });
    if(any){ document.body.style.overflow = ""; if(lastFocus) lastFocus.focus(); }
  }
  document.addEventListener("click", function(e){
    var m = e.target.closest("[data-modal]");
    if(m){ e.preventDefault(); mnav.classList.remove("open"); openModal(m.getAttribute("data-modal")); return; }
    if(e.target.closest("[data-close]") || e.target.classList.contains("ov")) closeAll();
  });
  document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeAll(); });

  document.querySelectorAll(".copy").forEach(function(b){
    b.addEventListener("click", function(){
      var v = b.parentNode.querySelector("[data-copy]").textContent.trim();
      var done = function(){ var o = b.textContent; b.textContent = "Скопировано"; setTimeout(function(){ b.textContent = o; }, 1600); };
      if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(v).then(done).catch(done); }
      else { done(); }
    });
  });

  /* ---------- practices ---------- */
  var PRACTICES = {
    emergency: {
      code:"P—01 / Emergency Defense",
      title:"Экстренная защита и свобода",
      lead:"Работа в режиме кризиса: когда под угрозой находится физическая свобода, право на въезд и выезд или сам статус пребывания. Реакция считается в часах, а не в неделях.",
      items:[
        ["Интерпол: Red Notice и diffusions","Оспаривание в Комиссии по контролю файлов (CCF), удаление данных из системы, превентивные запросы о статусе."],
        ["Экстрадиционные процедуры","Защита в стране задержания, оспаривание запроса, доказывание политической мотивации преследования."],
        ["Международные правовые нарушения","Обращения в ЕСПЧ и договорные органы ООН, фиксация процессуальных нарушений на ранней стадии."],
        ["Политическое убежище","Подготовка доказательной базы, сопровождение процедуры, координация с профильным counsel в стране обращения."],
        ["Альтернативное гражданство и резиденция","Программы получения второго паспорта и ВНЖ как элемент стратегии защиты, а не как самостоятельный продукт."]
      ],
      aside:[["Реакция","до 4 часов","gold"],["Формат","Кризисный штаб 24/7",""],["География","ЕС · UK · Залив · Азия",""]]
    },
    sanctions: {
      code:"P—02 / Sanctions & Compliance",
      title:"Санкционный комплаенс и риски",
      lead:"Санкционное ограничение почти всегда бьёт шире формулировки: блокируются платежи, рушится банковский onboarding, партнёры выходят из сделок. Задача — снять ограничение и восстановить операционную способность.",
      items:[
        ["Анализ и снижение санкционных рисков","Аудит структуры владения и цепочек контроля, проверка на 50%-правило, устранение уязвимых связей."],
        ["Снятие ограничений (delisting)","Формирование досье и представление позиции в OFAC, OFSI и Совете ЕС, сопровождение до результата."],
        ["Разблокировка активов и платежей","Работа с банками-корреспондентами и депозитариями: снятие внутренних стоп-листов, лицензии на операции."],
        ["Комплаенс-периметр на будущее","Регламенты, скрининг контрагентов и протокол работы, исключающий повторное попадание в ограничения."]
      ],
      aside:[["Реакция","24–72 часа","gold"],["Регуляторы","OFAC · OFSI · EU Council",""],["Формат","Проектное сопровождение",""]]
    },
    assets: {
      code:"P—03 / Real Assets",
      title:"Недвижимость и управление активами",
      lead:"Трофейный объект — это не только сделка, но и долгосрочная точка уязвимости: титул, налоговый след, публичность владения. Мы закрываем весь цикл — от проверки до защищённой структуры владения.",
      items:[
        ["Due Diligence трофейных объектов","Проверка титула, обременений, истории владения и источника происхождения средств до подписания."],
        ["Трансграничные сделки","Сопровождение покупки и продажи в нескольких юрисдикциях, escrow, валютные и налоговые аспекты."],
        ["Защита и структурирование владения","Разделение рисков между холдингами, трастами и фондами, защита от обращения взыскания."],
        ["Управление и выход из актива","Протокол безопасного распоряжения, реструктуризация и подготовка к продаже без раскрытия бенефициара."]
      ],
      aside:[["Срок DD","10–20 дней","gold"],["Рынки","London · Dubai · Monaco · CH",""],["Формат","Сделка под ключ",""]]
    },
    finance: {
      code:"P—04 / Capital & Digital",
      title:"Международные финансы и Web3",
      lead:"Капитал требует одновременно защищённости и легальной прозрачности. Мы строим структуры, которые проходят банковский комплаенс и налоговую проверку — и при этом не раскрывают бенефициара публично.",
      items:[
        ["Защита бенефициара","Юридические конструкции, ограничивающие публичное раскрытие при сохранении полной законности владения."],
        ["Трасты и частные фонды","Учреждение и администрирование, планирование преемственности, разделение контроля и выгоды."],
        ["Международный налоговый консалтинг","Резидентство, соглашения об избежании двойного налогообложения, CRS и отчётность по контролируемым структурам."],
        ["Легализация цифровых активов","Ввод криптоактивов в правовое поле: подтверждение источника, банковский onboarding, отчётность и хранение."]
      ],
      aside:[["Горизонт","От 1 месяца","gold"],["Юрисдикции","CH · SG · UAE · Liechtenstein",""],["Формат","Структурный проект",""]]
    }
  };

  var panels = document.getElementById("panels");
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  Object.keys(PRACTICES).forEach(function(key, i){
    var p = PRACTICES[key];
    var el = document.createElement("div");
    el.className = "panel"; el.id = "p-" + key; el.setAttribute("role","tabpanel");
    el.setAttribute("aria-labelledby","tab-" + key);
    if(i !== 0) el.hidden = true;
    var svc = p.items.map(function(it){
      return '<li><svg class="icon icon-sm"><use href="#i-check"/></svg><div><b>' + esc(it[0]) + '</b><span>' + esc(it[1]) + '</span></div></li>';
    }).join("");
    var aside = p.aside.map(function(a){
      return '<div class="aside-row"><div class="k">' + esc(a[0]) + '</div><div class="v ' + (a[2]||"") + '">' + esc(a[1]) + '</div></div>';
    }).join("");
    el.innerHTML =
      '<div><div class="eyebrow compact" style="margin-bottom:16px">' + esc(p.code) + '</div>' +
      '<h3>' + esc(p.title) + '</h3><p class="lead" style="font-size:15.5px">' + esc(p.lead) + '</p>' +
      '<ul class="svc">' + svc + '</ul></div>' +
      '<div class="aside">' + aside +
      '<button class="btn btn-sm" data-scroll="#contact" style="align-self:flex-start">Обсудить кейс <svg class="icon icon-sm"><use href="#i-arrow"/></svg></button></div>';
    panels.appendChild(el);
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  function selectTab(key){
    tabs.forEach(function(t){
      var on = t.getAttribute("data-key") === key;
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    Object.keys(PRACTICES).forEach(function(k){
      var pane = document.getElementById("p-" + k);
      pane.hidden = (k !== key);
      pane.classList.remove("panel-in");
      if(k === key && !reduce){ void pane.offsetWidth; pane.classList.add("panel-in"); }
    });
  }
  tabs.forEach(function(t, i){
    t.addEventListener("click", function(){ selectTab(t.getAttribute("data-key")); });
    t.addEventListener("keydown", function(e){
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if(!d) return;
      e.preventDefault();
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); selectTab(n.getAttribute("data-key"));
    });
  });

  /* ---------- risk protocol ---------- */
  var RISKS = {
    interpol: { label:"Интерпол / экстрадиция", icon:"i-plane", w:3,
      protocol:"Протокол экстренной защиты свободы",
      steps:[
        "Экстренный запрос о наличии данных в системах Интерпола и фиксация текущего статуса.",
        "Обращение в Комиссию по контролю файлов (CCF) с обоснованием политической мотивации преследования.",
        "Защитная линия в юрисдикции возможного задержания: превентивные ходатайства и дежурный counsel.",
        "Оценка альтернативного статуса — убежище, ВНЖ, второе гражданство — как страховочного контура."
      ], eta:"4 часа" },
    sanctions: { label:"Санкционные ограничения", icon:"i-scale", w:2,
      protocol:"Протокол снятия ограничений и разблокировки",
      steps:[
        "Аудит структуры владения и цепочек контроля, проверка на 50%-правило.",
        "Формирование delisting-досье и подача позиции профильному регулятору.",
        "Работа с банками-корреспондентами: снятие внутренних стоп-листов, разблокировка платежей.",
        "Комплаенс-регламент дальнейших операций и коммуникации с контрагентами."
      ], eta:"24 часа" },
    assets: { label:"Активы под угрозой", icon:"i-landmark", w:1,
      protocol:"Протокол защиты и реструктурирования владения",
      steps:[
        "Юридический и технический Due Diligence по объектам и цепочке титула.",
        "Реструктурирование владения: холдинги, трасты, фонды, разделение рисков.",
        "Защита от обеспечительных мер и обращения взыскания в ключевых юрисдикциях.",
        "Протокол безопасного распоряжения активом и сценарий выхода."
      ], eta:"72 часа" },
    corporate: { label:"Корпоративный конфликт", icon:"i-brief", w:2,
      protocol:"Протокол урегулирования конфликта",
      steps:[
        "Картирование конфликта: бенефициары, центры влияния, точки давления.",
        "OSINT-профилирование оппонента и оценка его реальных ресурсов.",
        "Параллельные линии: переговорный трек и подготовка судебно-арбитражного сценария.",
        "Защита ключевых лиц, документов и информационного периметра компании."
      ], eta:"24 часа" }
  };
  var JURS = {
    eu:{label:"ЕС / Шенген", w:1, note:"Приоритет — превентивная защита при пересечении границ и координация с локальным counsel в стране риска."},
    uk:{label:"Великобритания", w:1, note:"Акцент на позицию перед OFSI, лондонский судебный трек и контроль репутационного контура."},
    us:{label:"США", w:2, note:"Фокус на OFAC, экстерриториальное применение норм и долларовые корреспондентские расчёты."},
    gulf:{label:"ОАЭ / Залив", w:1, note:"Работа с локальными регуляторами и банковским комплаенсом, защита статуса резиденции."},
    cis:{label:"СНГ", w:2, note:"Повышенный риск административного давления — приоритет отдаётся безопасности физического присутствия."},
    asia:{label:"Азия (SG / HK)", w:1, note:"Банковский onboarding, прозрачность структуры владения и режим цифровых активов."}
  };

  var state = { risk:null, jur:null };
  var riskOpts = document.getElementById("riskOpts"), jurOpts = document.getElementById("jurOpts");

  Object.keys(RISKS).forEach(function(k){
    var b = document.createElement("button");
    b.className = "opt"; b.type = "button"; b.setAttribute("aria-pressed","false"); b.dataset.k = k;
    b.innerHTML = '<svg class="icon icon-sm"><use href="#' + RISKS[k].icon + '"/></svg>' + RISKS[k].label;
    b.addEventListener("click", function(){ state.risk = k; sync(); });
    riskOpts.appendChild(b);
  });
  Object.keys(JURS).forEach(function(k){
    var b = document.createElement("button");
    b.className = "opt"; b.type = "button"; b.setAttribute("aria-pressed","false"); b.dataset.k = k;
    b.textContent = JURS[k].label;
    b.addEventListener("click", function(){ state.jur = k; sync(); });
    jurOpts.appendChild(b);
  });

  function sync(){
    riskOpts.querySelectorAll(".opt").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.k === state.risk ? "true":"false"); });
    jurOpts.querySelectorAll(".opt").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.k === state.jur ? "true":"false"); });
    document.getElementById("step2").classList.toggle("done", !!state.risk);
    document.getElementById("step3").classList.toggle("done", !!(state.risk && state.jur));
    render();
  }

  function render(){
    var box = document.getElementById("result");
    if(!state.risk || !state.jur){
      box.innerHTML = '<div class="result-empty"><svg class="icon"><use href="#i-alert"/></svg>' +
        '<p>Выберите характер риска и юрисдикцию, чтобы увидеть предварительный протокол защиты.</p></div>';
      return;
    }
    var r = RISKS[state.risk], j = JURS[state.jur], score = r.w + j.w;
    var lvl = score >= 5 ? ["Критический уровень","lv-crit"] : score >= 4 ? ["Высокий уровень","lv-high"] : ["Повышенный уровень","lv-med"];
    var steps = r.steps.map(function(s){ return "<li>" + esc(s) + "</li>"; }).join("");
    box.innerHTML =
      '<div class="res">' +
        '<div class="res-lvl ' + lvl[1] + '"><span class="sq"></span>' + lvl[0] + ' · ' + esc(j.label) + '</div>' +
        '<h3>' + esc(r.protocol) + '</h3>' +
        '<p class="res-note">' + esc(j.note) + '</p>' +
        '<ol class="res-steps">' + steps + '</ol>' +
        '<div class="res-foot">' +
          '<div class="res-eta"><span>Первичная реакция</span><b>' + esc(r.eta) + '</b></div>' +
          '<button class="btn btn-gold" data-scroll="#contact">Запросить протокол по защищённой линии <svg class="icon icon-sm"><use href="#i-arrow"/></svg></button>' +
        '</div>' +
      '</div>';
  }

  /* ---------- intake form ---------- */
  var form = document.getElementById("intake");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var type = document.getElementById("type"), handle = document.getElementById("handle");
    if(!type.value){ type.focus(); type.style.borderColor = "var(--alarm)"; return; }
    if(!handle.value.trim()){ handle.focus(); handle.style.borderColor = "var(--alarm)"; return; }
    var nda = document.getElementById("nda").checked;
    form.innerHTML =
      '<div class="sent">' +
        '<div class="ok"><svg class="icon"><use href="#i-check"/></svg></div>' +
        '<h3 style="font-size:26px">Обращение зафиксировано</h3>' +
        '<p class="lead" style="font-size:14.5px">Ответ придёт по указанному защищённому каналу. Экстренные обращения обрабатываются в течение 4 часов, остальные — в течение суток.' +
        (nda ? ' Проект двустороннего NDA будет направлен до первого содержательного разговора.' : '') + '</p>' +
        '<p class="form-note">Демонстрационная форма — данные не отправлены и не сохранены.</p>' +
      '</div>';
  });
  ["type","handle","jur"].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.addEventListener("input", function(){ el.style.borderColor = ""; });
  });

  /* ---------- reveal ---------- */
  var rv = document.querySelectorAll(".rv, .trust-cell");
  if(reduce || !("IntersectionObserver" in window)){
    rv.forEach(function(el){ el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var d = en.target.classList.contains("trust-cell")
            ? Array.prototype.indexOf.call(en.target.parentNode.children, en.target) * 110 : 0;
          setTimeout(function(){ en.target.classList.add("in"); }, d);
          io.unobserve(en.target);
        }
      });
    }, {threshold:.12, rootMargin:"0px 0px -8% 0px"});
    rv.forEach(function(el){ io.observe(el); });
  }

  /* ---------- guilloche engraving ---------- */
  var cv = document.getElementById("guilloche");
  function drawGuilloche(){
    var box = cv.parentNode.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(1, box.width), h = Math.max(1, box.height);
    cv.width = w * dpr; cv.height = h * dpr;
    var ctx = cv.getContext("2d");
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,w,h);
    var cs = getComputedStyle(document.documentElement);
    var rgb = (cs.getPropertyValue("--guilloche-rgb") || "122,92,49").trim();
    var a0 = parseFloat(cs.getPropertyValue("--guilloche-a")) || 0.20;
    var cx = w * 0.5, cy = h * 0.44, R = Math.min(w,h) * 0.46;
    ctx.lineWidth = 0.55;
    for(var ring = 0; ring < 5; ring++){
      var k = 5 + ring * 2, amp = R * (0.10 - ring * 0.012), base = R * (0.38 + ring * 0.13);
      ctx.beginPath();
      for(var a = 0; a <= Math.PI * 2 + 0.02; a += 0.008){
        var rr = base + amp * Math.cos(k * a) + amp * 0.35 * Math.sin((k + 3) * a);
        var x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a) * 0.92;
        if(a === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = "rgba(" + rgb + "," + Math.max(0.03, a0 - ring * 0.03) + ")";
      ctx.stroke();
    }
    for(var i = 0; i < 90; i++){
      var ang = (i / 90) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx + R * 0.30 * Math.cos(ang), cy + R * 0.30 * Math.sin(ang) * 0.92);
      ctx.lineTo(cx + R * 0.34 * Math.cos(ang), cy + R * 0.34 * Math.sin(ang) * 0.92);
      ctx.strokeStyle = "rgba(" + rgb + "," + (a0 * 0.62) + ")";
      ctx.stroke();
    }
  }
  drawGuilloche();
  var rt; window.addEventListener("resize", function(){ clearTimeout(rt); rt = setTimeout(drawGuilloche, 180); });
})();
