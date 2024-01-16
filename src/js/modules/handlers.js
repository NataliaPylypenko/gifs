import refs from "@js/modules/refs";
import { getGifs } from "@js/modules/getGifs";

export const handleInitialSearch = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchTerm = urlSearchParams.get('search');
    const currentPage = parseInt(urlSearchParams.get('page'));

    if (searchTerm) {
        refs.searchInput.value = searchTerm;
    }

    if (currentPage) {
        refs.currentPage = currentPage;
        refs.offset = (refs.currentPage - 1) * refs.limit;
    }

    getGifs();
};

export const handlePagination = (e) => {
    if (e.target.getAttribute('page-index')) {
        refs.currentPage = parseInt(e.target.getAttribute('page-index'));
        refs.offset = (refs.currentPage - 1) * refs.limit;
        getGifs();
    } else if (e.target.id === 'buttonNext') {
        refs.currentPage += 1;
        refs.offset += refs.limit;
        getGifs();
    } else if (e.target.id === 'buttonPrev') {
        refs.currentPage -= 1;
        refs.offset -= refs.limit;
        getGifs();
    }
};

export const handleInput = () => {
    refs.offset = 0;
    refs.currentPage = 1;

    getGifs();
};