(function () {
    const C = { phone1: "+91 9039229820", phone2: "+91 8319964787", phone3: "+91 7879074802", email: "contact@nirdhara.co.in", instagram: "#", facebook: "#", /* <- put your Instagram and Facebook page links here */ address: "Narmadapuram, Madhya Pradesh" };
    const pages = [["index.html", "Home"], ["about.html", "About"], ["products.html", "Products"], ["quality.html", "Quality"], ["export-markets.html", "Logistics"], ["contact.html", "Contact"]];
    // const pages = [["index.html", "Home"], ["about.html", "About"], ["products.html", "Products"], ["quality.html", "Quality"], ["export-markets.html", "Export Markets"], ["contact.html", "Contact"]];
    const norm = s => (s || "index").replace(/\.html$/, "").replace(/\/$/, "") || "index";
    const cur = norm(location.pathname.split("/").pop());
    window.pmedia = p => p.img ? `<div class="imgph cover"><picture><source srcset="${p.img}.webp" type="image/webp"><img src="${p.img}.jpg" width="${p.w}" height="${p.h}" alt="${p.alt}" loading="lazy"></picture></div>` : `<div class="imgph" role="img" aria-label="Photo placeholder"><span class="ph">Photo: ${p.name}</span></div>`;
    const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
    const ICON = {
        instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>'),
        email: svg('<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
        facebook: svg('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'),
        // phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>')
    };
    const ph = t => `<span class="ph">${t}</span>`;
    document.getElementById("site-header").innerHTML = `
        <a class="skip" href="#main">Skip to content</a>
        <div class="topbar"><div class="wrap">
            <a href="${C.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a>
            <a href="mailto:${C.email}" aria-label="Email us">${ICON.email}</a>
            <a href="${C.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.facebook}</a>
          
            <!-- <a href="tel:${C.phone1.replace(/\s/g, "")}" aria-label="Call us">${ICON.phone}</a> --></div></div>
       
            <header class="site-header"><div class="wrap">
        <a class="brand" href="index.html">Nirdhara<small>OVERSEAS PVT. LTD.</small></a>
        <button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>
        <nav class="nav" id="nav" aria-label="Main"><ul>${pages.map(([h, t]) => `<li><a href="${h}"${norm(h) === cur ? ' aria-current="page"' : ""}>${t}</a></li>`).join("")}
        <li><a class="btn btn-primary" href="contact.html#quote">Request a quote</a></li></ul></nav></div></header>`;
    document.getElementById("site-footer").innerHTML = `<footer class="site-footer">
    <div class="wrap"><div class="cols">
        <div>
            <h3>Nirdhara Overseas Pvt. Ltd.</h3>
            <p>Merchant exporter of dehydrated agro products for food businesses worldwide.</p>
            <p>We focus on reliable sourcing, buyer-specific requirements and long-term international partnerships.</p>
        </div>
        <div><h3>Explore</h3><ul>${pages.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul></div>
        <div><h3>Products</h3><ul>${window.PRODUCTS.map(p => `<li><a href="products.html#${p.id}">${p.name}</a></li>`).join("")}</ul></div>
        <div><h3>Contact</h3><ul><li>${C.address}</li>
        <li>${C.phone1}</li> <li>${C.phone2}</li> <li>${C.phone3}</li> 
        <li>${C.email}</li></ul></div></div>
        <div class="legal">© Nirdhara Overseas Pvt. Ltd. All rights reserved.</div></div></footer>`;
    const b = document.querySelector(".menu-btn"), n = document.getElementById("nav");
    b.addEventListener("click", () => { const o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o) });
    const g = document.getElementById("product-grid");
    if (g) g.innerHTML = window.PRODUCTS.map(p => `<article class="card${p.basket ? " basket" : ""}">${window.pmedia(p)}
        <div class="body"><h3>${p.name}</h3><p>${p.blurb}</p><ul class="chips">${p.forms.map(f => `<li>${f}</li>`).join("")}</ul>${p.variants ? `<div class="variants" role="group" aria-label="${p.name.replace("Dehydrated ", "")} varieties">${p.variants.map(v => `<a class="vbtn ${v.id}" href="products.html?variant=${v.id}#${p.id}">${v.name}</a>`).join("")}</div>` : ""}
        <div class="links"><a href="products.html#${p.id}">View details</a><a href="contact.html#quote">Get a quote</a></div></div></article>`).join("");
    const cl = document.getElementById("cert-logos");
    if (cl && window.CERTS) cl.innerHTML = window.CERTS.map(c => `<figure class="logo"><div class="logo-img"><img src="${c.img}" width="${c.w}" height="${c.h}" alt="${c.name} logo" loading="lazy"></div><figcaption>${c.name}</figcaption></figure>`).join("");
    //     const cd = document.getElementById("cert-details");
    //     if (cd && window.CERT_TABLE) {
    //         cd.innerHTML = `<button type="button" class="btn btn-dark cert-toggle" aria-expanded="false" aria-controls="cert-panel"><span class="lbl">View certificate details</span><span class="chev" aria-hidden="true"></span></button>
    // <div class="cert-panel" id="cert-panel"><div class="cert-inner"><div class="tablewrap"><table class="spec cert-table"><caption style="position:absolute;left:-9999px">Certificates and registration numbers</caption><thead><tr><th scope="col">Certificate</th><th scope="col">Number</th></tr></thead><tbody>${window.CERT_TABLE.map(r => `<tr><td>${r.name}</td><td>${r.number || ph("[ADD NUMBER]")}</td></tr>`).join("")}</tbody></table></div></div></div>`;
    //         const tb = cd.querySelector(".cert-toggle"), pn = cd.querySelector(".cert-panel");
    //         tb.addEventListener("click", () => { const o = pn.classList.toggle("open"); tb.setAttribute("aria-expanded", o); tb.querySelector(".lbl").textContent = o ? "Hide certificate details" : "View certificate details"; });
    //     }
    const h = document.querySelector(".site-header"); addEventListener("scroll", () => h.classList.toggle("scrolled", scrollY > 8), { passive: true });
})();
