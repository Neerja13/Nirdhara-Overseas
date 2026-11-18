(function () {
  const FORM_ENDPOINT = "https://formspree.io/f/mwloojqb"; /* e.g. a Formspree/Netlify URL. Leave empty to fall back to email. */
  const TO_EMAIL = "neerjachourey@gmail.com";
  const f = document.getElementById("quote-form"); if (!f) return;
  const q = new URLSearchParams(location.search).get("product"); if (q && f.product.querySelector(`[value="${q}"]`)) f.product.value = q; const vr = new URLSearchParams(location.search).get("variant"); if (vr && q === "onion" && !f.message.value) f.message.value = "Variety: " + vr.charAt(0).toUpperCase() + vr.slice(1) + " onion\nForm: \nQuantity: \nDestination: ";
  const rules = {
    name: v => v.trim() ? "" : "Enter your name.",
    email: v => /^\S+@\S+\.\S+$/.test(v) ? "" : "Enter a valid email address.", country: v => v.trim() ? "" : "Enter your country.",
    product: v => v ? "" : "Choose a product.", need: v => f.product.value === "custom" && v.trim().length < 3 ? "Please tell us what you need." : "", message: v => v.trim().length > 9 ? "" : "Tell us your quantity and requirements (at least 10 characters)."
  };
  /* "List what you need": show a text box only when that option is chosen */
  const nf = document.getElementById("need-field");
  function syncNeed() { const on = f.product.value === "custom"; nf.hidden = !on; if (!on) { f.need.value = ""; document.getElementById("need-err").textContent = ""; f.need.setAttribute("aria-invalid", "false") } }
  f.product.addEventListener("change", syncNeed); f.addEventListener("reset", () => setTimeout(syncNeed)); syncNeed();
  function check(n) { const el = f[n], m = rules[n](el.value), e = document.getElementById(n + "-err"); el.setAttribute("aria-invalid", !!m); e.textContent = m; return !m }
  Object.keys(rules).forEach(n => f[n].addEventListener("blur", () => check(n)));
  f.addEventListener("submit", async ev => {
    ev.preventDefault();
    if (f.website.value) return; /* honeypot */
    const bad = Object.keys(rules).filter(n => !check(n)); if (bad.length) { f[bad[0]].focus(); return }
    const data = Object.fromEntries(new FormData(f)); delete data.website; data.product = f.product.selectedOptions[0].text; if (f.product.value !== "custom") delete data.need; const out = document.getElementById("form-status");
    try {
      if (FORM_ENDPOINT) {
        const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) }); if (!r.ok) throw 0;
        out.className = "notice"; out.textContent = "Thank you. We have received your enquiry and will reply by email."; f.reset();
      }
      else {
        const body = Object.entries(data).map(([k, v]) => k + ": " + v).join("\n");
        location.href = "mailto:" + TO_EMAIL + "?subject=" + encodeURIComponent("Quotation request: " + data.product) + "&body=" + encodeURIComponent(body);
        out.className = "notice"; out.textContent = "Your email app should open with the enquiry filled in. Send it to complete your request.";
      }
    } catch (e) { out.className = "err"; out.textContent = "Could not send. Please email us directly." }
  });
})();
