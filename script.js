(function () {
  "use strict";

  var EN = {
    "nav.how": "How it works", "nav.features": "Features", "nav.price": "Pricing", "nav.faq": "FAQ", "nav.download": "Download", "nav.menu": "Menu",
    "hero.eyebrow": "Travel expense reports for iPhone",
    "hero.title": "From receipt to expense report, without retyping a thing.",
    "hero.lead": "Snap the receipt and Voyalog reads merchant, amount, date and currency. At the end of the trip you have a PDF ready to hand in, receipts attached.",
    "hero.note": "Free. Pro is € 14.99 once, no subscription.",
    "cta.appstore": "Download on the App Store",
    "mock.check": "Check the data", "mock.read": "Read on the phone", "mock.merchant": "Merchant", "mock.datetime": "Date & time", "mock.datetimeval": "Sep 11, 2026 · 19:34",
    "mock.amount": "Amount", "mock.amountval": "$ 89.59 · tip $ 15.00", "mock.expenses": "Expenses", "mock.cardnote": "22 expenses · meal cap: € 325.61 left", "mock.recent": "RECENT",
    "mock.bytrip": "By trip", "mock.bymonth": "By month", "mock.total": "TOTAL · USA — HOUSTON", "mock.mealcap": "Meal cap", "mock.left": "€ 325.61 left", "mock.capdetail": "€ 334.39 of € 660.00 · 11 days × € 60",
    "mock.genpdf": "Generate PDF", "mock.done": "Done", "mock.share": "Share", "mock.catsummary": "Summary by category",
    "cat.lodging": "Lodging", "cat.meals": "Meals & Restaurants", "cat.rep": "Entertainment", "cat.park": "Parking & Tolls",
    "how.eyebrow": "How it works", "how.title": "Three steps, on your phone.",
    "how.s1.t": "Snap", "how.s1.p": "Frame the receipt. The text is read right on the iPhone, even without a connection.",
    "how.s2.t": "Check", "how.s2.p": "Review the suggested data, pick category and trip, and save. Foreign-currency expenses are already converted.",
    "how.s3.t": "Hand in", "how.s3.p": "Generate the expense report as a PDF: summary, day-by-day detail and attached receipts. Send it with any app.",
    "report.eyebrow": "The report", "report.title": "An expense report you can read at a glance.",
    "report.lead": "Total, reimbursable amount, meal cap and category summary on the first page. Then the detail of every expense with ECB rate and tip, and the numbered receipts attached.",
    "report.l1": "Header with company, employee and period", "report.l2": "Every page numbered, with name and trip", "report.l3": "In Italian or English, your choice",
    "feat.eyebrow": "Features", "feat.title": "What you need when you travel for work.",
    "f1.t": "On-phone reading", "f1.p": "OCR runs on the iPhone. Receipt photos are never sent to any server.",
    "f2.t": "Offline and private", "f2.p": "Expenses and receipts stay on your device. No account needed.",
    "f3.t": "Any currency", "f3.p": "Foreign-currency expenses are converted at the ECB rate of their own day, shown in the report.",
    "f4.t": "Meal cap", "f4.p": "Set the daily limit and always see how much you've spent and how much is left.",
    "f5.t": "Trips, jobs, cost centers", "f5.p": "Every expense carries its code and its trip. The report summarizes by job and cost center.",
    "f6.t": "Mileage reimbursement", "f6.p": "Start, stops and arrival: distance and reimbursement are computed leg by leg.",
    "f7.t": "Receipt collections", "f7.p": "Group receipts outside a trip and generate a separate PDF.",
    "f8.t": "Professional PDF", "f8.p": "Laid out for the accounting office: totals, detail and receipts in a single file.",
    "price.eyebrow": "Pricing", "price.title": "No subscription. No cost per expense report.",
    "price.lead": "Download Voyalog for free, with every feature. When you need more receipts and backup, unlock Pro with a single purchase and it's yours to keep.",
    "price.free": "Free", "price.freeonce": "forever", "price.f.all": "Every feature of the app", "price.f.limit": "Up to 10 receipts", "price.f.pdf": "Expense report PDF",
    "price.amount": "€ 14.99", "price.once": "one-time purchase", "price.p.all": "Everything in the free plan", "price.p.unl": "Unlimited receipts", "price.p.bk": "Backup and restore",
    "faq.title": "Frequently asked questions",
    "q1.q": "Do I need an account?", "q1.a": "No. Open the app and start logging expenses.",
    "q2.q": "Where is my data stored?", "q2.a": "Only on your iPhone: expenses, photos and settings never pass through our servers.",
    "q3.q": "Does it work abroad without a connection?", "q3.a": "Yes. Scanning and logging work offline; ECB rates update as soon as you're back online.",
    "q4.q": "Will the PDF work for my company?", "q4.a": "It lists company, employee, period, jobs and cost centers, with receipts attached. Hand it in as it is.",
    "q6.q": "What changes with Pro?", "q6.a": "The free version has every feature, up to 10 receipts. Pro, € 14.99 once, removes the limit and adds backup and restore.",
    "q5.q": "Is there an Android version?", "q5.a": "For now Voyalog is available for iPhone only.",
    "final.title": "Your next expense report, done in five minutes.",
    "foot.privacy": "Privacy", "foot.terms": "Terms", "foot.support": "Support"
  };

  var root = document.documentElement;
  var items = [].slice.call(document.querySelectorAll("[data-i18n], [data-i18n-html], [data-i18n-aria]"));
  items.forEach(function (el) {
    if (el.hasAttribute("data-i18n-aria")) el.dataset.itAria = el.getAttribute("aria-label");
    else el.dataset.it = el.innerHTML;
  });

  function setLang(lang) {
    items.forEach(function (el) {
      if (el.hasAttribute("data-i18n-aria")) {
        var k = el.getAttribute("data-i18n-aria");
        el.setAttribute("aria-label", lang === "en" && EN[k] ? EN[k] : el.dataset.itAria);
        return;
      }
      var key = el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html");
      el.innerHTML = lang === "en" && EN[key] ? EN[key] : el.dataset.it;
    });
    root.lang = lang;
    if (document.body.dataset.title !== "keep") document.title = lang === "en" ? "Voyalog — Travel expense reports for iPhone" : "Voyalog — Note spese di trasferta per iPhone";
    [].forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("voyalog-lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("voyalog-lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "it").slice(0, 2) === "it" ? "it" : "en");
  if (initial !== "it") setLang(initial);
  [].forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  var header = document.querySelector(".site-header");
  var nav = document.getElementById("nav");
  var menuBtn = document.querySelector(".menu-btn");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeMenu() { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  if (!("IntersectionObserver" in window)) {
    [].forEach.call(document.querySelectorAll(".reveal"), function (el) { el.classList.add("in"); });
    return;
  }

  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  [].forEach.call(document.querySelectorAll(".reveal"), function (el) { revealIO.observe(el); });

  var links = [].slice.call(nav.querySelectorAll('a[href^="#"]:not(.btn)'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  var spyIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var idx = sections.indexOf(en.target);
      links.forEach(function (a, i) { a.classList.toggle("active", i === idx); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(function (s) { if (s) spyIO.observe(s); });
})();
