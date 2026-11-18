
/* Single source of truth for products. Edit here; pages render from it. */

window.PRODUCTS = [
  {
    id: "onion",
    img: "assets/img/dehydrated-onion",
    w: 1000,
    h: 667,
    alt: "Dehydrated red onion flakes and powder beside whole red onions",
    name: "Dehydrated Onion",

    variants: [
      { id: "red", name: "Red" },
      { id: "white", name: "White" },
      { id: "pink", name: "Pink" }
    ],

    blurb: "Red, white and pink onion in the forms below.",

    forms: ["Powder", "Flakes", "Minced", "Fried"],
    gallery: ["Flakes", "Powder", "Fried", "Minced"],

    specs: {
      "Moisture": "Below 5%",
      "Colour": "Cream to light pink",
      "Packaging": "10 kg, 20 kg, 25 kg bags",
      // "Minimum order quantity": "500 kg",
      "Shelf life": "12 months"
    }
  },

  {
    id: "garlic",
    img: "assets/img/dehydrated-garlic",
    w: 1000,
    h: 667,
    alt: "Dehydrated garlic powder and flakes beside fresh garlic bulbs",
    name: "Dehydrated Garlic",

    blurb: "Garlic in matching forms for food manufacturers and kitchens.",

    forms: ["Powder", "Flakes", "Granules", "Minced"],
    gallery: ["Flakes", "Powder", "Granules", "Minced"],

    specs: {
      "Moisture": "3% - 6%",
      "Colour": "White to off-white",
      "Packaging": "10 kg, 20 kg, 25 kg bags",
      // "Minimum order quantity": "Contact us for details",
      "Shelf life": "12 months"
    }
  },

  {
    id: "horeca",
    img: "assets/img/horeca-basket",
    w: 1000,
    h: 563,
    alt: "Dehydrated onion, garlic, tomato and spice powders in bowls",
    name: "All-In-One Ingredient Basket",

    basket: true,

    gallery: [
      { name: "Tomato powder", file: "tomato-powder.jpg" },
      { name: "Turmeric powder", file: "termeric-powder.jpg" },
      { name: "Coriander powder", file: "coriander-powder.jpg" },
      { name: "Spices", file: "assorted-spices.jpg" }
    ],

    blurb: "One combined order of dehydrated ingredients for hotels, restaurants and caterers.",

    forms: [
      "Tomato powder",
      "Turmeric powder",
      "Coriander powder",
      "Spices"
    ],

    specs: {
      "Moisture": "Perfectly dried as per individual product",
      "Colour": "Natural colour specific to each ingredient",
      "Packaging": "Customizable",
      "Shelf life": "As per individual product specifications"
    }
  }
];

/* Certification logos shown on the Home and Quality pages.
   To add one: put the logo in assets/img/certs/ and add a line below (w/h = image width/height in pixels). */
window.CERTS = [
  { name: "FSSAI", img: "assets/img/certs/fssai.png", w: 420, h: 168 },
  { name: "APEDA", img: "assets/img/certs/apeda.png", w: 420, h: 319 },
  { name: "Udyam (MSME)", img: "assets/img/certs/udyam.png", w: 420, h: 191 },
  { name: "IEC", img: "assets/img/certs/iec.png", w: 420, h: 156 },
  { name: "FoSTaC", img: "assets/img/certs/fostac.png", w: 415, h: 191 }
];

/* Rows of the "View certificate details" table on the Quality page.
   Fill in each number; add a new row any time: { name: "Certificate name", number: "123456" }.
   A blank number shows an [ADD NUMBER] tag. */
window.CERT_TABLE = [
  { name: "FSSAI", number: "" },
  { name: "APEDA", number: "" },
  { name: "Udyam (MSME) registration", number: "" },
  { name: "Import Export Code (IEC)", number: "" },
  { name: "FoSTaC (Food Safety Training & Certification)", number: "" }
];
