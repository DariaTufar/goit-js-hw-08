 

export const markupTemplateLightbox = ({ preview, original, description }) =>
  `<li>
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description}  />
</a>; </li>`;
