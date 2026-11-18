# Nirdhara Overseas website

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run locally
- Quick look: double-click `index.html`.
- Recommended: in this folder run `python3 -m http.server 8000`, then open http://localhost:8000

## Where to edit
| What | File |
|---|---|
| Phone, email, WhatsApp, address (header, footer) | `assets/js/main.js` (top, `C` object) |
| Products, forms, specs summary | `assets/js/data.js` |
| Product spec table rows | `assets/js/products.js` (`rows` list) |
| Colours, fonts, spacing | `assets/css/style.css` (`:root` at the top) |
| Page text | the matching `.html` file |
| Quote form destination | `assets/js/forms.js` (`FORM_ENDPOINT`, `TO_EMAIL`) |

Search the whole project for `PLACEHOLDER`, `[ADD]`, `[CONFIRM]` and `[` to find everything still to fill in.
Remove the `ph` class from a span once its content is real, to drop the yellow dashed styling.

## Before going live
1. Domain is set to `nirdhara.co.in` in every page, `sitemap.xml` and `robots.txt`. Search for it if you ever change domain.
2. Add your logo (put it in `assets/img/` and replace the text brand in `main.js`).
3. Replace photo placeholders with real images (use `<img>` with `alt` text, WebP or JPEG, under 200 KB each).
4. Set up the quote form: create a free Formspree or Netlify Forms endpoint and paste its URL into `FORM_ENDPOINT`.
5. Add only certifications you hold, with their numbers.

## Deploy (all free options)
- **Netlify**: drag the project folder onto app.netlify.com/drop. Add your domain in Site settings.
- **GitHub Pages**: push to a repo, then Settings > Pages > deploy from the main branch.
- **Normal web hosting**: upload all files to `public_html` over FTP or the file manager.

## Product form photos
The Products page shows a labelled photo for each form. Put JPG files (640 x 480 works well) in `assets/img/forms/` named `<product>[-<variety>]-<form>.jpg`:
- Onion: `onion-red-flakes.jpg`, `onion-white-powder.jpg`, `onion-pink-fried.jpg`, `onion-red-minced.jpg` ... (3 varieties x 4 forms)
- Garlic: `garlic-flakes.jpg`, `garlic-powder.jpg`, `garlic-granules.jpg`, `garlic-minced.jpg`
- Ingredient basket: each item names its own file in `data.js` (`gallery`), so any file name works.
Until a file exists, a "Photo to be added" tile shows in its place. Forms and varieties are set in `assets/js/data.js` (`gallery`, `variants`).

## Certifications
- Logos live in `assets/img/certs/` and are listed in `window.CERTS` in `assets/js/data.js`. Add a line to add a logo.
- The "View certificate details" table on the Quality page is `window.CERT_TABLE` in the same file. Fill in the numbers and add rows as needed.

## Social and call icons (top bar)
Set `instagram` and `facebook` at the top of `assets/js/main.js`. The email and call icons use `email` and `phone1` from the same place.

## Deploy on Cloudflare Pages (nirdhara.co.in)
1. In the Cloudflare dashboard open Workers & Pages, create a Pages project and choose to upload assets (direct upload). Upload the project folder (the one containing `index.html`). No build command is needed.
2. In the project, open Custom domains and add `nirdhara.co.in`. Also add `www.nirdhara.co.in` and redirect it to `nirdhara.co.in` (Rules > Redirect Rules).
3. If the domain was bought elsewhere, add it to Cloudflare and change its nameservers at the registrar to the two Cloudflare gives you.
4. Create the mailbox address `contact@nirdhara.co.in` (for example with Cloudflare Email Routing, forwarding to your own inbox), otherwise enquiries sent there go nowhere.
5. Set up the quote form (`FORM_ENDPOINT` in `assets/js/forms.js`) and send one test enquiry on the live site.
6. Submit `https://nirdhara.co.in/sitemap.xml` in Google Search Console.

Notes: Cloudflare Pages shows `about.html` at `/about` and redirects the `.html` address to it, so canonical addresses and the sitemap use the extensionless form. `404.html` is shown for missing pages and `_headers` adds extra security headers.
