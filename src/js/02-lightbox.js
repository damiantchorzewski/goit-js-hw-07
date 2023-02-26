import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const items = galleryItems.map(({ preview, original, description }) => {
  const galleryItem = document.createElement('a');
  galleryItem.classList.add('gallery__item');
  galleryItem.setAttribute('href', original);

  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.classList.add('gallery__image');

  galleryItem.appendChild(image);

  return galleryItem;
});

gallery.append(...items);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
console.log(galleryItems);
