import refs from "@js/modules/refs";
import { getGifs } from "@js/modules/getGifs";
import {updateQueryString} from "@js/modules/utils";

export const handleInitialSearch = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchTerm = urlSearchParams.get('search');

    if (searchTerm) {
        refs.searchInput.value = searchTerm;
    }

    getGifs();
};

export const handleShowMore = () => getGifs();

export const handleInput = () => {
    refs.offset = 0;
    refs.gifContainer.innerHTML = '';
    refs.showMore.style.display = 'none';

    let searchTerm = refs.searchInput.value.trim();
    updateQueryString(searchTerm);

    getGifs();
};