import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.href = original;
  link.classList.add('gallery__link');

  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.dataset.source = original;
  image.classList.add('gallery__image');

  link.appendChild(image);

  galleryItem.appendChild(link);

  return galleryItem;
};

const renderGallery = () => {
  const items = galleryItems.map(createGalleryItem);
  gallery.append(...items);
};

renderGallery();

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const original = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${original}" width="800" height="600">
  `);

  instance.show();

  const closeModal = (event) => {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModal);
    }
  };

  window.addEventListener('keydown', closeModal);
});

console.log(galleryItems);