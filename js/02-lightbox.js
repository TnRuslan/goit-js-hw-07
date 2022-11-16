import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

const galleryBoxEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
          <img
              class="gallery__image"
              src="${preview}" 
              alt="${description}" />
        </a>`
  )
  .join("");

galleryBoxEl.insertAdjacentHTML("afterbegin", galleryItemsEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
