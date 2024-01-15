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
        refs.currentPage = parseInt(e.target.getAttribute('page-index'));
        refs.offset = (refs.currentPage - 1) * refs.limit;
        getGifs();

        console.log('refs.currentPage', refs.currentPage);
        console.log('refs.offset', refs.offset);
    } else if (e.target.id === 'buttonNext') {
        refs.currentPage += 1;
        refs.offset += refs.limit;
        getGifs();
        console.log('refs.currentPage', refs.currentPage);
        console.log('refs.offset', refs.offset);
    } else if (e.target.id === 'buttonPrev') {
        refs.currentPage -= 1;
        refs.offset -= refs.limit;
        getGifs();
    }
};

export const handleInput = () => {
    refs.offset = 0;
    refs.currentPage = 1;

    // updateQueryString(searchTerm);

    getGifs();
};