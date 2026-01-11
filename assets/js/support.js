(function () {
  /* =====================
     DESIGN → REPO MAP
  ====================== */

  const designRepos = {
    we_universal: {
      name: "we_universal",
      repo: "https://github.com/nextgen-solutions-gt/we_universal/issues/new"
    },
    cynthia: {
      name: "Cynthia",
	repo: "https://github.com/nextgen-solutions-gt/cynthia/issues/new"
    },
    fi_subice: {
      name: "FI-Subice",
      repo: "https://github.com/nextgen-solutions-gt/fi-subice/issues/new"
    },
    saphic: {
      name: "Saphic",
      repo: "https://github.com/nextgen-solutions-gt/saphic/issues/new"
    },
    adinfinitum: {
      name: "Adinfinitum",
      repo: "https://github.com/nextgen-solutions-gt/adinfinitum/issues/new"
    },
    milky_way: {
      name: "Milky Way",
      repo: "https://github.com/nextgen-solutions-gt/milky_way/issues/new"
    },
    proglass: {
      name: "proglass",
      repo: "https://github.com/nextgen-solutions-gt/proglass/issues/new"
    },
    revolution: {
      name: "Revolution",
      repo: "https://github.com/nextgen-solutions-gt/revolution/issues/new"
    },
    we_clearblue: {
      name: "we_clearblue",
      repo: "https://github.com/nextgen-solutions-gt/we_clearblue/issues/new"
    },
    custom: null
  };

  const designUrlMap = [
    { key: "we_universal", match: /we-universal|we_universal/i },
	{ key: "cynthia", 	match: /cynthia|cynthia/i },
    { key: "fi_subice", match: /fi-subice|fi_subice/i },
    { key: "saphic", 	match: /saphic|saphic/i },
    { key: "adinfinitum", match: /adinfinitum|adinfinitum/i },
    { key: "milky_way", match: /milky-way|milky_way/i },
    { key: "proglass", 	match: /proglass|proglass/i },
    { key: "revolution", match: /revolution|revolution/i },
    { key: "we_clearblue", match: /we-clearblue|we_clearblue/i }
  ];

  /* =====================
     DRAWER CONTROLS
  ====================== */

  const fab = document.querySelector(".support-fab");
  const drawer = document.querySelector(".support-drawer");
  const backdrop = document.querySelector(".support-backdrop");
  const closeBtn = document.querySelector(".support-close");

  if (!fab || !drawer || !backdrop) return;

  function openSupport() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

function resetSupportState() {
  if (form) {
    form.reset();
    form.hidden = true;

    const submitBtn = form.querySelector(".support-submit");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fa-solid fa-paper-plane"></i> Send message';
    }
  }

  if (body) {
    body.querySelectorAll(".support-message").forEach(el => el.remove());
  }

  if (options) {
    options.innerHTML = "";
  }

  if (typeof start === "function") {
    start();
  }
}

  function closeSupport() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
	
	resetSupportState();
  }

  fab.addEventListener("click", openSupport);
  backdrop.addEventListener("click", closeSupport);
  if (closeBtn) closeBtn.addEventListener("click", closeSupport);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSupport();
  });

  /* =====================
     CHAT ELEMENTS
  ====================== */

  const body = document.querySelector(".support-body");
  const options = document.querySelector(".support-options");
  const form = document.querySelector(".support-form");

  if (!body || !options) return;

  /* =====================
     HELPERS
  ====================== */

  function resetConversation() {
    body.querySelectorAll(".support-message").forEach(el => el.remove());
  }

  function botMessage(text) {
    const div = document.createElement("div");
    div.className = "support-message bot";
    div.innerHTML = `<p>${text}</p>`;
    body.appendChild(div);
    scrollToBottom();
  }

  function userMessage(text) {
    const div = document.createElement("div");
    div.className = "support-message user";
    div.innerHTML = `<p>${text}</p>`;
    body.appendChild(div);
    scrollToBottom();
  }

  function setOptions(list) {
    options.innerHTML = "";
    list.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "support-option";
      btn.innerHTML = item.label;
      btn.addEventListener("click", item.action);
      options.appendChild(btn);
    });
  }

  function scrollToBottom() {
    body.scrollTop = body.scrollHeight;
  }

function showContactForm() {
  options.innerHTML = "";
  form.hidden = false;

  const pageField = form.querySelector('[name="page"]');
  if (pageField) {
    pageField.value = window.location.href;
  }

  const uaField = form.querySelector('[name="userAgent"]');
  if (uaField) {
    uaField.value = navigator.userAgent;
  }

  scrollToBottom();
}
  function hideContactForm() {
    if (form) form.hidden = true;
  }

  function detectDesignFromUrl() {
    const path = window.location.pathname;
    for (const design of designUrlMap) {
      if (design.match.test(path)) return design.key;
    }
    return null;
  }

  function getEnvironmentInfo() {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
    };
  }

  function buildIssueBody(designName) {
    const env = getEnvironmentInfo();
    return encodeURIComponent(`
### Description
Please describe the issue clearly.

---

### Design
${designName}

---

### Steps to reproduce
1.
2.
3.

---

### Expected behavior
What you expected to happen.

---

### Actual behavior
What actually happened.

---

### Environment
- URL: ${env.url}
- Browser / UA: ${env.userAgent}
- Platform: ${env.platform}
- Language: ${env.language}

---

### Additional notes
Add any other relevant information here.
`);
  }

  function openIssues(designKey) {
    const design = designRepos[designKey];

    if (!design) {
      resetConversation();
      botMessage(
        "If you're using a custom or modified style, please contact me directly so I can help you properly."
      );
      setOptions([
        { label: '<i class="fa-solid fa-envelope"></i> Contact me', action: contact },
        { label: '<i class="fa-solid fa-arrow-left"></i> Back', action: start }
      ]);
      return;
    }

    const title = encodeURIComponent(`[Bug] ${design.name}`);
    const body = buildIssueBody(design.name);
    const labels = encodeURIComponent("bug");

    window.open(
      `${design.repo}?title=${title}&body=${body}&labels=${labels}`,
      "_blank"
    );

    start();
  }

  /* =====================
     STATES
  ====================== */

  function start() {
    hideContactForm();
    resetConversation();
    botMessage("Hi 👋 How can I help you today?");
    setOptions([
      { label: '<i class="fa-solid fa-screwdriver-wrench"></i> I have a technical issue', action: tech },
      { label: '<i class="fa-solid fa-palette"></i> Questions about styles / themes', action: design },
      { label: '<i class="fa-solid fa-bug"></i> I want to report a bug', action: bug },
      { label: '<i class="fa-solid fa-briefcase"></i> Work / collaboration', action: work },
      { label: '<i class="fa-solid fa-circle-question"></i> Something else', action: contact }
    ]);
  }

  function tech() {
    hideContactForm();
    resetConversation();
    botMessage(
      "Most technical issues are related to cache, browser extensions, or incompatible versions. What would you like to do?"
    );
    setOptions([
      {
        label: '<i class="fa-solid fa-book"></i> View common solutions',
        action: () => {
          resetConversation();
          botMessage(
            "Try clearing your browser cache, disabling extensions, and checking the software version. Did this solve your issue?"
          );
          setOptions([
            { label: '<i class="fa-solid fa-check"></i> Yes, it worked', action: start },
            { label: '<i class="fa-solid fa-life-ring"></i> No, I need help', action: contact }
          ]);
        }
      },
      { label: '<i class="fa-solid fa-bug"></i> Report a bug', action: bug },
      { label: '<i class="fa-solid fa-arrow-left"></i> Back', action: start }
    ]);
  }

  function design() {
    hideContactForm();
    resetConversation();
    botMessage("What do you need help with?");
    setOptions([
      {
        label: '<i class="fa-solid fa-moon"></i> Dark mode',
        action: () => {
          resetConversation();
          botMessage(
            "Dark mode adapts automatically to your system preference, or you can switch it manually using the theme selector."
          );
          setOptions([
            { label: '<i class="fa-solid fa-thumbs-up"></i> Got it', action: start },
            { label: '<i class="fa-solid fa-envelope"></i> Contact me', action: contact }
          ]);
        }
      },
      {
        label: '<i class="fa-solid fa-mobile-screen-button"></i> Responsive / mobile',
        action: () => {
          resetConversation();
          botMessage(
            "All designs are fully responsive. Layout issues are usually caused by custom CSS overrides."
          );
          setOptions([
            { label: '<i class="fa-solid fa-thumbs-up"></i> Understood', action: start },
            { label: '<i class="fa-solid fa-envelope"></i> Contact me', action: contact }
          ]);
        }
      },
      { label: '<i class="fa-solid fa-arrow-left"></i> Back', action: start }
    ]);
  }

  function bug() {
    hideContactForm();
    resetConversation();

    const detected = detectDesignFromUrl();
    if (detected) {
      botMessage(
        `It looks like you're using <strong>${designRepos[detected].name}</strong>. Redirecting you to the correct issue tracker…`
      );
      setTimeout(() => openIssues(detected), 800);
      return;
    }

    botMessage("Which design are you using?");
    setOptions([
      { label: '<i class="fa-solid fa-paintbrush"></i> we_universal', action: () => openIssues("we_universal") },
      { label: '<i class="fa-solid fa-paintbrush"></i> Cynthia', action: () => openIssues("cynthia") },
      { label: '<i class="fa-solid fa-paintbrush"></i> FI-Subice', action: () => openIssues("fi_subice") },
      { label: '<i class="fa-solid fa-paintbrush"></i> Saphic', action: () => openIssues("saphic") },
      { label: '<i class="fa-solid fa-paintbrush"></i> Adinfinitum', action: () => openIssues("adinfinitum") },
      { label: '<i class="fa-solid fa-paintbrush"></i> Milky Way', action: () => openIssues("milky_way") },
      { label: '<i class="fa-solid fa-paintbrush"></i> Proglass', action: () => openIssues("proglass") },
      { label: '<i class="fa-solid fa-paintbrush"></i> Revolution', action: () => openIssues("revolution") },
      { label: '<i class="fa-solid fa-paintbrush"></i> we_clearblue', action: () => openIssues("we_clearblue") },
      { label: '<i class="fa-solid fa-code"></i> Custom / modified style', action: () => openIssues("custom") },
      { label: '<i class="fa-solid fa-arrow-left"></i> Back', action: start }
    ]);
  }

  function work() {
    resetConversation();
    hideContactForm();
    botMessage("Great 👌 What are you interested in?");
    setOptions([
      { label: '<i class="fa-solid fa-handshake"></i> Collaboration', action: contact },
      { label: '<i class="fa-solid fa-code"></i> Development work', action: contact },
      { label: '<i class="fa-solid fa-arrow-left"></i> Back', action: start }
    ]);
  }

  function contact() {
    resetConversation();
    hideContactForm();

    botMessage(
      "Perfect 👍 Fill out the form below and I’ll get back to you as soon as possible."
    );

    showContactForm();

    setOptions([
      { label: '<i class="fa-solid fa-arrow-left"></i> Back', action: start }
    ]);
  }


function botMessageTemporary(text, timeout = 4000) {
  body.querySelectorAll(".support-temp").forEach(m => m.remove());

  const div = document.createElement("div");
  div.className = "support-message bot support-temp";
  div.innerHTML = `<p>${text}</p>`;

  body.appendChild(div);
  scrollToBottom();

  setTimeout(() => {
    div.classList.add("fade-out");

    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
      },
      { once: true }
    );
  }, timeout);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = form.querySelector(".support-submit");
  const last = localStorage.getItem("support_last_submit");

  // ⛔ Rate limit
  if (last && Date.now() - last < 60000) {
    alert("Please wait a moment before sending another message.");

    submitBtn.disabled = false;
    submitBtn.innerHTML =
      '<i class="fa-solid fa-paper-plane"></i> Send message';

    return;
  }

  // ✅ A partir de aquí SÍ se enviará
  localStorage.setItem("support_last_submit", Date.now());

  submitBtn.disabled = true;
  submitBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

  const formData = new FormData(form);

  /* =====================
     ⏱ SAFETY TIMEOUT (NUEVO)
  ====================== */
  const safetyTimeout = setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML =
      '<i class="fa-solid fa-paper-plane"></i> Send message';

    botMessageTemporary(
      "⚠️ Verification is taking too long. Please try again."
    );
  }, 15000); // 15 segundos

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then(() => {
      clearTimeout(safetyTimeout);

      form.reset();
      hideContactForm();
      resetConversation();

      botMessageTemporary(
        "✅ Thank you! Your message has been sent successfully. I’ll get back to you shortly."
      );

      setOptions([
        {
          label: '<i class="fa-solid fa-arrow-left"></i> Back to start',
          action: start
        }
      ]);
    })
    .catch(() => {
      clearTimeout(safetyTimeout);

      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fa-solid fa-paper-plane"></i> Send message';

      botMessageTemporary(
        "❌ Something went wrong while sending your message. Please try again later."
      );
    });
});

document.addEventListener("click", e => {
  const btn = e.target.closest("[data-open-support]");
  if (!btn) return;

  openSupport();
  contact();
});


  /* =====================
     INIT
  ====================== */

  start();
})();
