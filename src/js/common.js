// SCSS
import '../scss/style.scss';

import refs from "@js/modules/refs";
import { getRandomGifs, searchGifs } from "@js/modules/getGifs";

window.addEventListener('DOMContentLoaded', () => {
    getRandomGifs();
});

refs.searchInput.addEventListener('input', searchGifs);
