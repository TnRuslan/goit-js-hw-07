import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryBoxEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class=""gallery__item">
            <img
                class="gallery__image"
                src="${preview}" 
                alt="${description}" 
                data-source="${original}">
        </div>`
  )
  .join("");

galleryBoxEl.insertAdjacentHTML("afterbegin", galleryItemsEl);

galleryBoxEl.addEventListener("click", onAddImageClick);

function onAddImageClick(event) {
  console.log(event);
  console.log(event.target.nodeName);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target.dataset.original);
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.sourse}">
    </div>
`);

  instance.show();
}

{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>;  */
}
