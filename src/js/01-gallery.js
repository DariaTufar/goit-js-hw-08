// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { markupTemplateLightbox } from './functions/markupTemplateLightbox';


const imgContainer = document.querySelector('.gallery');
const galleryList = galleryItems
  .map(item => markupTemplateLightbox(item))
  .join(``);

console.log(imgContainer);
imgContainer.insertAdjacentHTML('afterbegin', galleryList);

new  SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  caption: true,
  captionDelay: 250,
});
