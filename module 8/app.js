import galleryItems from "./data.js";
console.log(galleryItems);

// <!-- <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li> -->

// preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
//     description: "Hokkaido Flower",

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
