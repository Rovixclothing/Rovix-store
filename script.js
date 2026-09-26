/* ==============================
   BRAND DETAILS
============================== */

const BRAND = {
  name: "ROVIX",

  // Apna WhatsApp number yahan daalo
  // Country code ke saath, + ke bina
  whatsapp: "919876543210",

  // Apna Instagram link
  instagram: "https://instagram.com/yourbrand",

  // Instagram username
  instagramName: "@yourbrand",

  // Apna email
  email: "hello@yourbrand.com"
};


/* ==============================
   PRODUCTS
   YAHAN APNE PRODUCTS ADD KARO
============================== */

const PRODUCTS = [

  {
    name: "Midnight Oversized Shirt",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85"
  },

  {
    name: "Signature Black Jacket",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85"
  },

  {
    name: "Classic Premium Tee",
    price: "₹1,799",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85"
  },

  {
    name: "Luxury Street Hoodie",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85"
  }

];


/* ==============================
   BRAND NAME
============================== */

document.getElementById("brandName").textContent = BRAND.name;

document.getElementById("footerBrand").textContent = BRAND.name;


/* ==============================
   WHATSAPP
============================== */

const whatsappLink =
  "https://wa.me/" + BRAND.whatsapp;

document.getElementById("whatsappText").href =
  whatsappLink;

document.getElementById("whatsappText").textContent =
  "+" + BRAND.whatsapp;


/* ==============================
   INSTAGRAM
============================== */

document.getElementById("instagramText").href =
  BRAND.instagram;

document.getElementById("instagramText").textContent =
  BRAND.instagramName;


/* ==============================
   EMAIL
============================== */

document.getElementById("emailText").href =
  "mailto:" + BRAND.email;

document.getElementById("emailText").textContent =
  BRAND.email;


/* ==============================
   SHOW PRODUCTS
============================== */

const container =
  document.getElementById("productContainer");


PRODUCTS.forEach((product) => {

  const card = document.createElement("div");

  card.className = "product";


  /* WhatsApp order message */

  const message =
    `Hi, I want to order ${product.name} (${product.price}).`;


  const whatsapp =
    `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;


  card.innerHTML = `

    <img
      class="product-image"
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
    >

    <div class="product-info">

      <div class="product-name">
        ${product.name}
      </div>

      <div class="product-price">
        ${product.price}
      </div>

      <a
        class="buy-btn"
        href="${whatsapp}"
        target="_blank"
      >
        ORDER ON WHATSAPP
      </a>

    </div>

  `;


  container.appendChild(card);

});
