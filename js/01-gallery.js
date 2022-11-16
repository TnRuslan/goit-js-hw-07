import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryBoxEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class=""gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
              class="gallery__image"
              src="${preview}" 
              alt="${description}" 
              data-source="${original}">
        </a>
      </div>`
  )
  .join("");

galleryBoxEl.insertAdjacentHTML("afterbegin", galleryItemsEl);

galleryBoxEl.addEventListener("click", onAddImageClick);

function onAddImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
}
