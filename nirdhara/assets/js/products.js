(function () {
    const el = document.getElementById("product-detail"); if (!el) return;
    const rows = ["Available forms", "Moisture", "Colour", "Packaging", "Shelf life"];
    const ph = t => `<span class="ph">${t}</span>`;
    const wanted = new URLSearchParams(location.search).get("variant");

    /* Image files: assets/img/forms/<product>[-<variety>]-<form>.jpg  e.g. onion-red-flakes.jpg, garlic-powder.jpg.
       A gallery item can also be { name, file } to use any file name (used by the ingredient basket). */
    function gallery(p, v) {
        const base = p.id + (v ? "-" + v.id : "");
        const noun = p.name.replace("Dehydrated ", "").toLowerCase();

        return p.gallery.map(item => {
            const named = typeof item === "object";
            const name = named ? item.name : item;
            const file = named ? item.file : `${base}-${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
            const alt = named ? name : `${v ? v.name + " " : ""}${noun} ${name.toLowerCase()}`;
            return `<figure class="fig"><div class="frame"><img src="assets/img/forms/${file}" alt="${alt}" width="640" height="480" loading="lazy"></div><figcaption>${name}</figcaption></figure>`;
        }).join("");
    }
    function wire(root) {
        root.querySelectorAll(".frame img").forEach(img =>
            img.addEventListener("error", () => { img.parentElement.innerHTML = ph("Photo to be added"); }));
    }
    function show(p, v) {
        const sec = document.getElementById(p.id);
        const grid = sec.querySelector(".forms-grid");
        grid.innerHTML = gallery(p, v); wire(grid);
        sec.querySelector(".vnote").innerHTML = v
            ? `Showing: <strong>${v.name} ${p.name.replace("Dehydrated ", "").toLowerCase()}</strong>`
            : "";
        sec.querySelectorAll(".vbtn").forEach(b => b.setAttribute("aria-pressed", b.dataset.v === (v && v.id)));
        sec.querySelector(".quote-link").href = `contact.html?product=${p.id}${v ? "&variant=" + v.id : ""}#quote`;
    }

    el.innerHTML = window.PRODUCTS.map(p => `<section class="pdetail" id="${p.id}"><div class="wrap split">
<div><h2>${p.name}</h2><p>${p.blurb}</p>${window.pmedia(p)}</div>
<div><table class="spec"><caption class="sr" style="position:absolute;left:-9999px">${p.name} specifications</caption><tbody>
<tr><th scope="row">${rows[0]}</th><td>${p.forms.join(", ")}</td></tr>
${rows.slice(1).map(r => `
  <tr>
    <th scope="row">${r}</th>
    <td>${p.specs && p.specs[r] ? p.specs[r] : ph("Contact us for details")}</td>
  </tr>
`).join("")}
</tbody></table>
<p style="margin-top:1.2rem"><a class="btn btn-primary quote-link" href="contact.html?product=${p.id}#quote">Request a quote</a></p></div></div>
${p.gallery ? `<div class="wrap forms"><h3>${p.variants ? "Varieties" : "Forms available"}</h3>
${p.variants ? `<div class="vtabs" role="group" aria-label="${p.name.replace("Dehydrated ", "")} variety">${p.variants.map(v => `<button type="button" class="vbtn ${v.id}" data-v="${v.id}" aria-pressed="false">${v.name}</button>`).join("")}</div>` : ""}
<p class="vnote" aria-live="polite"></p><div class="forms-grid"></div></div>` : ""}</section>`).join("");

    window.PRODUCTS.filter(p => p.gallery).forEach(p => {
        const sec = document.getElementById(p.id);
        const start = p.variants ? (p.variants.find(v => v.id === wanted) || p.variants[0]) : null;
        show(p, start);
        if (p.variants) sec.querySelectorAll(".vbtn").forEach(b => b.addEventListener("click", () => show(p, p.variants.find(v => v.id === b.dataset.v))));
    });
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
})();
