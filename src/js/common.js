// SCSS
import '../scss/style.scss';

import refs from "@js/modules/refs";
import { getRandomGifs, searchGifs } from "@js/modules/getGifs";
import debounce from "@js/modules/debounce";

let searchTimeout;

window.addEventListener('DOMContentLoaded', () => {
    getRandomGifs();
});

refs.searchInput.addEventListener('input', debounce(searchGifs, 1500));
