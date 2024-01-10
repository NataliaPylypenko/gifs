// SCSS
import '../scss/style.scss';

import refs from "@js/modules/refs";
import { handleInput, handleShowMore, handleInitialSearch } from "@js/modules/handlers";
import debounce from "@js/modules/debounce";

window.addEventListener('DOMContentLoaded', handleInitialSearch);

refs.showMore.addEventListener('click', handleShowMore);

refs.searchInput.addEventListener('input', debounce(handleInput, 1500));

refs.searchInput.addEventListener('keydown', (e) => (e.key === 'Enter') && e.preventDefault());