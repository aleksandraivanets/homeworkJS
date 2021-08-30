import galleryItems from "./data.js";
console.log(galleryItems);

const ul = document.querySelector(".gallery");

const modal = document.querySelector(".lightbox");

galleryItems.forEach((galleryItem) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = galleryItem.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.setAttribute("data-source", galleryItem.original);
  img.alt = galleryItem.description;

  a.appendChild(img);
  li.appendChild(a);
  ul.appendChild(li);
});

ul.addEventListener("click", (event) => {
  event.preventDefault(); //щоб не переходити за посилянням картинки, а залишатися у браузері
  document.querySelector(".js-lightbox").classList.add("is-open");

  let modalWindow = document.querySelector(".lightbox__overlay");
  let img = event.target;
  let src = img.getAttribute("data-source");
  let img_modal = document.querySelector(".lightbox__image");
  img_modal.alt = img.alt;
  img_modal.src = src;
});
document.querySelector(".lightbox__button").addEventListener("click", () => {
  document.querySelector(".js-lightbox").classList.remove("is-open");
  document.querySelector(".lightbox__image").src = "";
  document.querySelector(".lightbox__image").alt = "";
});
