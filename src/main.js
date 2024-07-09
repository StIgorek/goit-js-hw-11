import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPicturesByQuery } from "./js/pixabay-api";
import { } from "./js/render-functions";

const ref = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
  btn: document.querySelector('.button'),
};

getPicturesByQuery('grey+car')
  .then((data) => console.log(data))
  .catch((err) => console.error('Fetch Error:', err));
