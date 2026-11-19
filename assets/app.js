/* ===== 2027 세무직 누적 학습 노트 — app ===== */
(function () {
  "use strict";

  var ITEMS = (window.STUDY_ITEMS || []).slice();
  var SUBJECTS = ["전체", "세법", "회계학", "국어", "영어"];
  var DONE_VIEW = "복습 완료";
  var BY_ID = {};
  ITEMS.forEach(function (i) { BY_ID[i.id] = i; });
  var EXAM_ISO = "2027-03-27T00:00:00+09:00";
  var LS = {
    star: "taxstudy.v1.starred",
    done: "taxstudy.v1.mastered",
    theme: "taxstudy.v1.theme",
    subject: "taxstudy.v1.subject",
    filter: "taxstudy.v1.filter",
    date: "taxstudy.v1.date"
  };

  /* ---------- storage ---------- */
  function loadSet(key) {
    try {
      var raw = localStorage.getItem(key);
      var arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (e) { return new Set(); }
  }
  function saveSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(set))); } catch (e) {}
  }
  var starred = loadSet(LS.star);
  var mastered = loadSet(LS.done);

  /* ---------- state ---------- */
  var state = {
    subject: localStorage.getItem(LS.subject) || "전체",
    filter: localStorage.getItem(LS.filter) || "all",
    date: localStorage.getItem(LS.date) || "all",
    q: ""
  };
  if (SUBJECTS.indexOf(state.subject) < 0 && state.subject !== DONE_VIEW) state.subject = "전체";
  if (state.subject === DONE_VIEW && state.filter === "weak") state.filter = "all";

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function inline(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
  /* 줄 단위 포맷: '- ' 로 시작하면 리스트, 빈 줄은 문단 구분 */
  function fmt(text) {
    if (!text) return "";
    var lines = String(text).split("\n");
    var out = [];
    var list = [];
    function flush() {
      if (list.length) {
        out.push("<ul>" + list.map(function (li) { return "<li>" + inline(li) + "</li>"; }).join("") + "</ul>");
        list = [];
      }
    }
    lines.forEach(function (raw) {
      var line = raw.trim();
      if (!line) { flush(); return; }
      if (/^[-·•]\s+/.test(line)) {
        list.push(line.replace(/^[-·•]\s+/, ""));
      } else {
        flush();
        out.push("<p>" + inline(line) + "</p>");
      }
    });
    flush();
    return out.join("");
  }
  function diffDays(targetISO, now) {
    var t = new Date(targetISO);
    var a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    var n = new Date(now);
    var b = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.round((a - b) / 86400000);
  }
  function fmtDate(iso) {
    var p = String(iso || "").split("-");
    if (p.length !== 3) return iso || "";
    return p[0].slice(2) + "." + p[1] + "." + p[2];
  }

  /* ---------- theme ---------- */
  var themeIcon = $("#themeIcon");
  function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    themeIcon.textContent = mode === "light" ? "☀️" : "🌙";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", mode === "light" ? "#f6f8fb" : "#0d1117");
  }
  applyTheme(localStorage.getItem(LS.theme) || "dark");
  $("#themeToggle").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem(LS.theme, next); } catch (e) {}
  });

  /* ---------- header: D-day ---------- */
  function tickHeader() {
    var now = new Date();
    var d = diffDays(EXAM_ISO, now);
    var el = $("#ddayValue");
    el.textContent = d > 0 ? "D-" + d : d === 0 ? "D-DAY" : "D+" + Math.abs(d);

    var target = new Date(EXAM_ISO).getTime();
    var ms = target - now.getTime();
    var cd = $("#countdown");
    if (ms <= 0) {
      cd.textContent = "시험일이야. 끝까지 집중!";
    } else {
      var s = Math.floor(ms / 1000);
      var days = Math.floor(s / 86400);
      var hh = Math.floor((s % 86400) / 3600);
      var mm = Math.floor((s % 3600) / 60);
      var ss = s % 60;
      cd.textContent = days + "일 " + String(hh).padStart(2, "0") + ":" +
        String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
    }
  }

  /* ---------- stats ---------- */
  function updateStats() {
    var total = ITEMS.length;
    var done = ITEMS.filter(function (i) { return mastered.has(i.id); }).length;
    var star = ITEMS.filter(function (i) { return starred.has(i.id); }).length;
    var remaining = total - done;
    $("#statTotal").textContent = total;
    $("#statDone").textContent = done;
    $("#statStar").textContent = star;
    $("#statWeak").textContent = remaining;
    $("#progressBar").style.width = total ? Math.round((done / total) * 100) + "%" : "0%";
    // tab counts: 과목 탭은 '아직 남은(미완료) 카드', 복습 완료 탭은 완료 카드
    $$(".tab", $("#tabs")).forEach(function (t) {
      var sub = t.getAttribute("data-subject");
      var badge = $(".n", t);
      var n;
      if (sub === DONE_VIEW) {
        n = done;
        t.title = "복습 완료 " + n + "장 모아 보기";
      } else if (sub === "전체") {
        n = remaining;
        t.title = "미완료 " + n + "장";
      } else {
        n = ITEMS.filter(function (i) { return i.subject === sub && !mastered.has(i.id); }).length;
        t.title = "미완료 " + n + "장";
      }
      if (badge) badge.textContent = n;
    });
  }

  /* ---------- tabs ---------- */
  function syncTabActive() {
    $$(".tab", $("#tabs")).forEach(function (t) {
      t.classList.toggle("is-active", t.getAttribute("data-subject") === state.subject);
    });
  }
  function syncChipActive() {
    $$(".chip", $("#chips")).forEach(function (c) {
      c.classList.toggle("is-active", c.getAttribute("data-filter") === state.filter);
    });
  }
  function setSubject(sub) {
    state.subject = sub;
    if (sub === DONE_VIEW && state.filter === "weak") state.filter = "all";
    try {
      localStorage.setItem(LS.subject, state.subject);
      localStorage.setItem(LS.filter, state.filter);
    } catch (e) {}
    syncTabActive();
    syncChipActive();
    render();
    updateStats();
  }
  function renderTabs() {
    var wrap = $("#tabs");
    var parts = [];
    SUBJECTS.forEach(function (s, idx) {
      parts.push('<button type="button" class="tab' + (state.subject === s ? " is-active" : "") +
        '" data-subject="' + esc(s) + '"><span>' + esc(s) + '</span><span class="n">0</span></button>');
      if (idx === 0) {
        parts.push('<button type="button" class="tab tab-done' + (state.subject === DONE_VIEW ? " is-active" : "") +
          '" data-subject="' + DONE_VIEW + '"><span>✓ 복습 완료</span><span class="n">0</span></button>');
      }
    });
    wrap.innerHTML = parts.join("");
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest(".tab");
      if (!btn) return;
      setSubject(btn.getAttribute("data-subject"));
    });
  }

  /* ---------- date filter ---------- */
  function renderDateOptions() {
    var counts = {};
    ITEMS.forEach(function (i) { counts[i.date] = (counts[i.date] || 0) + 1; });
    var dates = Object.keys(counts).sort().reverse();
    var sel = $("#dateFilter");
    var html = '<option value="all">전체 기간</option>';
    html += '<option value="recent7">최근 7일</option>';
    dates.forEach(function (d) {
      html += '<option value="' + d + '">' + fmtDate(d) + " (" + counts[d] + ")</option>";
    });
    sel.innerHTML = html;
    var exists = Array.prototype.some.call(sel.options, function (o) { return o.value === state.date; });
    if (!exists) state.date = "all";
    sel.value = state.date;
    sel.addEventListener("change", function () {
      state.date = sel.value;
      try { localStorage.setItem(LS.date, state.date); } catch (e) {}
      render();
    });
  }

  /* ---------- chips ---------- */
  function initChips() {
    var wrap = $("#chips");
    syncChipActive();
    wrap.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      state.filter = chip.getAttribute("data-filter");
      try { localStorage.setItem(LS.filter, state.filter); } catch (err) {}
      syncChipActive();
      render();
    });
  }

  /* ---------- search ---------- */
  var searchInput = $("#searchInput");
  var searchTimer = null;
  searchInput.addEventListener("input", function () {
    $("#searchClear").hidden = !searchInput.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      state.q = searchInput.value.trim().toLowerCase();
      render();
    }, 130);
  });
  $("#searchClear").addEventListener("click", function () {
    searchInput.value = "";
    $("#searchClear").hidden = true;
    state.q = "";
    render();
    searchInput.focus();
  });

  /* ---------- filtering ---------- */
  function haystack(i) {
    return [i.title, i.topic, i.subject, i.analogy, i.principle, i.trap, i.example,
      (i.tags || []).join(" "), (i.ox && (i.ox.q + " " + i.ox.why)) || ""]
      .join(" ").toLowerCase();
  }
  function applyFilters() {
    var doneView = state.subject === DONE_VIEW;
    var cutoff = null;
    if (state.date === "recent7") {
      var now = new Date();
      cutoff = new Date(now.getTime() - 6 * 86400000);
      cutoff = new Date(cutoff.getFullYear(), cutoff.getMonth(), cutoff.getDate());
    }
    return ITEMS.filter(function (i) {
      if (doneView) {
        if (!mastered.has(i.id)) return false;
      } else {
        // 복습 완료한 카드는 과목·전체 목록에서 빼고 '복습 완료' 탭에만 모은다
        if (mastered.has(i.id)) return false;
        if (state.subject !== "전체" && i.subject !== state.subject) return false;
      }
      if (state.filter === "star" && !starred.has(i.id)) return false;
      if (state.filter === "weak" && mastered.has(i.id)) return false;
      if (state.date !== "all" && state.date !== "recent7") {
        if (i.date !== state.date) return false;
      }
      if (cutoff) {
        var d = new Date(i.date + "T00:00:00");
        if (isNaN(d.getTime()) || d < cutoff) return false;
      }
      if (state.q && haystack(i).indexOf(state.q) < 0) return false;
      return true;
    });
  }

  /* ---------- 복습 완료 모아보기 정렬 ---------- */
  var SUBJECT_ORDER = { "세법": 0, "회계학": 1, "국어": 2, "영어": 3 };
  function sortDoneView(a, b) {
    var sa = SUBJECT_ORDER[a.subject] == null ? 9 : SUBJECT_ORDER[a.subject];
    var sb = SUBJECT_ORDER[b.subject] == null ? 9 : SUBJECT_ORDER[b.subject];
    if (sa !== sb) return sa - sb;
    if (a.date !== b.date) return String(b.date).localeCompare(String(a.date));
    return String(a.id).localeCompare(String(b.id));
  }

  /* ---------- card render ---------- */
  function cardHTML(i) {
    var doneView = state.subject === DONE_VIEW;
    var cls = "card";
    if (mastered.has(i.id)) cls += " is-done";
    if (starred.has(i.id)) cls += " is-star";
    if (doneView) cls += " in-done-view";
    var doneLabel = doneView ? "복습 완료 해제 (원래 과목으로)" : "복습 완료";
    var tags = (i.tags || []).map(function (t) { return '<span class="tag">#' + esc(t) + "</span>"; }).join("");
    return '<article class="' + cls + '" data-id="' + esc(i.id) + '">' +
      '<div class="card-head" role="button" tabindex="0" aria-expanded="false">' +
        '<div class="card-tagrow">' +
          '<span class="subject-chip s-' + esc(i.subject) + '">' + esc(i.subject) + "</span>" +
          '<span class="card-date">' + esc(fmtDate(i.date)) + " 학습</span>" +
        "</div>" +
        "<h3>" + inline(i.title) + "</h3>" +
        '<div class="card-topic">' + esc(i.topic || "") + "</div>" +
        '<div class="card-actions">' +
          '<button type="button" class="mini-btn star-btn' + (starred.has(i.id) ? " on-star" : "") +
            '" data-act="star" aria-label="별표" title="별표">★</button>' +
          '<button type="button" class="mini-btn done-btn' + (mastered.has(i.id) ? " on-done" : "") +
            '" data-act="done" aria-label="' + doneLabel + '" title="' + doneLabel + '">✓</button>' +
        "</div>" +
      "</div>" +
      '<div class="card-body">' +
        (i.analogy ? '<div class="block analogy"><h4>💡 한 줄 비유 / 뼈대</h4>' + fmt(i.analogy) + "</div>" : "") +
        (i.principle ? '<div class="block principle"><h4>🔍 왜 그런지 (원리)</h4>' + fmt(i.principle) + "</div>" : "") +
        (i.trap ? '<div class="block trap"><h4>🎣 출제자 낚시 포인트</h4>' + fmt(i.trap) + "</div>" : "") +
        (i.example ? '<details class="example"><summary>📝 기출 / 숫자 예시</summary><div class="example-body">' + fmt(i.example) + "</div></details>" : "") +
        (tags ? '<div class="tags">' + tags + "</div>" : "") +
      "</div>" +
    "</article>";
  }

  function render() {
    var doneView = state.subject === DONE_VIEW;
    var list = applyFilters();
    if (doneView) list = list.slice().sort(sortDoneView);
    var wrap = $("#cards");
    wrap.innerHTML = list.map(cardHTML).join("");
    wrap.classList.toggle("is-doneview", doneView);
    $("#resultView").textContent = doneView ? "복습 완료 · " : "";
    $("#resultCount").textContent = list.length;
    $("#viewHint").hidden = !doneView;
    $("#chipWeak").hidden = doneView;
    var empty = list.length === 0;
    $("#emptyState").hidden = !empty;
    wrap.hidden = empty;
    if (empty) {
      var anyDone = doneView && ITEMS.some(function (i) { return mastered.has(i.id); });
      if (doneView && !anyDone) {
        $("#emptyEmoji").textContent = "✅";
        $("#emptyMsg").innerHTML = "아직 복습 완료한 카드가 없어.<br>카드의 <b>✓</b>를 누르면 이 탭으로 모여.";
        $("#emptyReset").textContent = "학습 카드 전체 보기";
      } else {
        $("#emptyEmoji").textContent = doneView ? "🔎" : "🗂️";
        $("#emptyMsg").textContent = doneView
          ? "이 조건에 맞는 복습 완료 카드가 없어."
          : "조건에 맞는 카드가 없어.";
        $("#emptyReset").textContent = "필터 초기화";
      }
    }
  }

  /* ---------- card interactions (delegated) ---------- */
  $("#cards").addEventListener("click", function (e) {
    var card = e.target.closest(".card");
    if (!card) return;
    var id = card.getAttribute("data-id");
    var act = e.target.closest("[data-act]");
    if (act) {
      var kind = act.getAttribute("data-act");
      if (kind === "star") {
        if (starred.has(id)) starred.delete(id); else starred.add(id);
        saveSet(LS.star, starred);
        act.classList.toggle("on-star", starred.has(id));
        card.classList.toggle("is-star", starred.has(id));
        updateStats();
        if (state.filter === "star" && !starred.has(id)) {
          card.style.transition = "opacity .18s ease";
          card.style.opacity = "0";
          window.setTimeout(render, 190);
          toast("★ 별표를 풀었어 · 별표만 보기에서 빠졌어");
        }
      } else if (kind === "done") {
        var wasDone = mastered.has(id);
        if (wasDone) mastered.delete(id); else mastered.add(id);
        saveSet(LS.done, mastered);
        act.classList.toggle("on-done", !wasDone);
        card.classList.toggle("is-done", !wasDone);
        updateStats();
        // 체크 ON → 과목 목록에서 빠져 '복습 완료'로 / 체크 OFF(복습 완료 탭) → 원래 과목 목록으로 복귀
        if (!wasDone || state.subject === DONE_VIEW) {
          var item = BY_ID[id];
          card.style.transition = "opacity .18s ease, transform .18s ease";
          card.style.opacity = "0";
          card.style.transform = "translateY(-4px)";
          window.setTimeout(render, 190);
          toast(!wasDone
            ? "✓ 복습 완료로 모았어 · 위의 '복습 완료' 탭에서 볼 수 있어"
            : "↩︎ " + ((item && item.subject) || "원래") + " 목록으로 돌아갔어");
        }
      }
      return;
    }
    // 헤더 클릭 → 접기/펼치기
    var head = e.target.closest(".card-head");
    if (head) {
      var open = card.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    }
  });
  $("#cards").addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var head = e.target.closest(".card-head");
    if (!head) return;
    e.preventDefault();
    head.click();
  });

  $("#resetFilters").addEventListener("click", resetFilters);
  $("#emptyReset").addEventListener("click", resetFilters);
  $("#statDoneBtn").addEventListener("click", function () { setSubject(DONE_VIEW); });
  function resetFilters() {
    state.subject = "전체";
    state.filter = "all";
    state.date = "all";
    state.q = "";
    searchInput.value = "";
    $("#searchClear").hidden = true;
    $("#dateFilter").value = "all";
    syncTabActive();
    syncChipActive();
    try {
      localStorage.setItem(LS.subject, "전체");
      localStorage.setItem(LS.filter, "all");
      localStorage.setItem(LS.date, "all");
    } catch (e) {}
    render();
    updateStats();
  }

  /* ---------- toast ---------- */
  var toastTimer = null;
  var toastHideTimer = null;
  function toast(msg) {
    var el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    // 강제 리플로우로 opacity 전환을 다시 태운다
    void el.offsetWidth;
    el.classList.add("show");
    clearTimeout(toastTimer);
    clearTimeout(toastHideTimer);
    toastTimer = window.setTimeout(function () {
      el.classList.remove("show");
      toastHideTimer = window.setTimeout(function () { el.hidden = true; }, 240);
    }, 2600);
  }

  /* ---------- OX quiz ---------- */
  var quiz = { pool: [], idx: 0, score: 0, answered: false, total: 0 };
  var modal = $("#quizModal");

  function openQuiz() {
    var base = applyFilters().filter(function (i) { return i.ox && i.ox.q; });
    if (!base.length) {
      base = ITEMS.filter(function (i) { return i.ox && i.ox.q; });
    }
    if (!base.length) return;
    quiz.pool = shuffle(base.slice()).slice(0, Math.min(10, base.length));
    quiz.idx = 0;
    quiz.score = 0;
    quiz.total = quiz.pool.length;
    quiz.answered = false;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    renderQuiz();
  }
  function closeQuiz() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function renderQuiz() {
    var body = $("#quizBody");
    if (quiz.idx >= quiz.total) {
      var pct = Math.round((quiz.score / quiz.total) * 100);
      var msg = pct >= 90 ? "완벽해. 이 단원은 닫아도 돼 🔥"
        : pct >= 70 ? "좋아. 틀린 카드만 다시 보면 돼 👍"
        : pct >= 50 ? "절반 넘겼어. 오답 카드 복습 가자 💪"
        : "여기가 약점이야. 해당 카드부터 다시 읽자 📖";
      body.innerHTML = '<div class="quiz-end">' +
        '<p>이번 세트 결과</p>' +
        '<div class="big">' + quiz.score + " / " + quiz.total + "</div>" +
        "<p>" + msg + "</p>" +
        '<div class="quiz-nav">' +
          '<button class="btn" type="button" data-q="close">닫기</button>' +
          '<button class="btn btn-primary" type="button" data-q="again">한 세트 더</button>' +
        "</div></div>";
      return;
    }
    var item = quiz.pool[quiz.idx];
    body.innerHTML =
      '<div class="quiz-meta"><span>' + esc(item.subject) + " · " + esc(item.topic || "") +
        '</span><span class="score">' + (quiz.idx + 1) + " / " + quiz.total +
        " · 정답 " + quiz.score + "</span></div>" +
      '<p class="quiz-q">' + fmt(item.ox.q) + "</p>" +
      '<div class="quiz-choices">' +
        '<button class="ox-btn" type="button" data-answer="true">O</button>' +
        '<button class="ox-btn" type="button" data-answer="false">X</button>' +
      "</div>" +
      '<div id="quizFeedback"></div>';
    quiz.answered = false;
  }
  function answerQuiz(val) {
    if (quiz.answered) return;
    quiz.answered = true;
    var item = quiz.pool[quiz.idx];
    var correct = !!item.ox.a;
    var ok = (val === correct);
    if (ok) quiz.score++;
    $$(".ox-btn", $("#quizBody")).forEach(function (b) {
      var bv = b.getAttribute("data-answer") === "true";
      if (bv === correct) b.classList.add("correct");
      else if (bv === val) b.classList.add("wrong");
      b.disabled = true;
    });
    var fb = $("#quizFeedback");
    fb.innerHTML = '<div class="quiz-feedback ' + (ok ? "is-ok" : "is-no") + '">' +
      '<span class="verdict">' + (ok ? "⭕ 정답!" : "❌ 오답 — 정답은 " + (correct ? "O" : "X")) + "</span>" +
      "<p>" + fmt(item.ox.why || item.principle || "") + "</p></div>" +
      '<div class="quiz-nav"><button class="btn btn-primary" type="button" data-q="next">' +
      (quiz.idx + 1 >= quiz.total ? "결과 보기" : "다음 문제") + "</button></div>";
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal) { closeQuiz(); return; }
    var ox = e.target.closest("[data-answer]");
    if (ox) { answerQuiz(ox.getAttribute("data-answer") === "true"); return; }
    var q = e.target.closest("[data-q]");
    if (!q) return;
    var act = q.getAttribute("data-q");
    if (act === "next") { quiz.idx++; renderQuiz(); }
    else if (act === "again") { openQuiz(); }
    else if (act === "close") { closeQuiz(); }
  });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeQuiz();
    if (!quiz.answered && quiz.pool.length) {
      if (e.key === "o" || e.key === "O" || e.key === "1") answerQuiz(true);
      if (e.key === "x" || e.key === "X" || e.key === "2") answerQuiz(false);
    } else if (e.key === "Enter" && quiz.answered) {
      quiz.idx++; renderQuiz();
    }
  });
  $("#quizOpen").addEventListener("click", openQuiz);
  $("#quizClose").addEventListener("click", closeQuiz);

  /* ---------- footer ---------- */
  (function initFoot() {
    var dates = ITEMS.map(function (i) { return i.date; }).sort();
    var first = dates[0], last = dates[dates.length - 1];
    $("#footUpdated").textContent = "수록 범위 " + fmtDate(first) + " ~ " + fmtDate(last) +
      " · 카드 " + ITEMS.length + "장 · " + (SUBJECTS.length - 1) + "과목";
  })();

  /* ---------- boot ---------- */
  renderTabs();
  renderDateOptions();
  initChips();
  render();
  updateStats();
  tickHeader();
  setInterval(tickHeader, 1000);
})();
