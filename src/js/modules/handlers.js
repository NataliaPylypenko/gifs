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

// export const handleShowMore = () => getGifs();

export const handlePagination = (e) => {
    if (e.target.getAttribute('page-index')) {
        console.log(e.target.getAttribute('page-index'));
    } else if (e.target.id === 'buttonNext') {
        console.log('buttonNext');
        getGifs();
    } else if (e.target.id === 'buttonPrev') {
        console.log('buttonPrev');
    }
};

export const handleInput = () => {
    refs.offset = 0;
    refs.currentPage = 1;

    // updateQueryString(searchTerm);

    getGifs();
};