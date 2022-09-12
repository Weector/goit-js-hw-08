import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryImageMarkup();

galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryImageMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
