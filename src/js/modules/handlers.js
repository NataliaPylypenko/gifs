import refs from "@js/modules/refs";
import { extractSearchTermFromURL } from "@js/modules/utils";
import { getGifs } from "@js/modules/getGifs";

export const handleInitialSearch = () => {
    const searchTerm = extractSearchTermFromURL();

    if (searchTerm) {
        refs.searchInput.value = searchTerm;
        getGifs();
    }

    getGifs();
};

export const handleShowMore = () => getGifs();

export const handleInput = () => {
    refs.offset = 0;
    refs.gifContainer.innerHTML = '';
    refs.showMore.style.display = 'none';

    getGifs();
};