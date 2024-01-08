// SCSS
import '../scss/style.scss';

import refs from "@js/modules/refs";
import { getRandomGifs, searchGifs } from "@js/modules/getGifs";

let searchTimeout;

window.addEventListener('DOMContentLoaded', () => {
    getRandomGifs();
});

refs.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        searchGifs(e);
    }, 1500);
});
