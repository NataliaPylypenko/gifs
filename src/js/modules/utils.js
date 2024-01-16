import refs from "@js/modules/refs";
import { displayGifs } from "@js/modules/displayGifs";
import { getPagination } from "@js/modules/pagination";

export const responseProcessing = (response) => {
    let totalGifsCount = parseInt(response['pagination']['total_count']);
    let pageCount = Math.ceil(totalGifsCount / refs.limit);

    refs.buttonNext.disabled = refs.offset >= totalGifsCount;
    refs.buttonPrev.disabled = refs.offset <= 0;

    displayGifs(response.data);
    getPagination(pageCount, refs.currentPage);
};

export const updateQueryString = () => {
    const searchTerm = refs.searchTerm; // cat
    const currentPage = refs.currentPage; // 1

    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);

    searchParams.set('search', searchTerm);
    searchParams.set('page', currentPage);

    if (searchTerm === '' && currentPage === 1) {
        window.history.replaceState({}, '', `${url.pathname}`);
        return;
    }

    if (searchTerm === '') {
        searchParams.delete('search');
    }

    if (currentPage === 1) {
        searchParams.delete('page');
    }

    window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);

    // if (searchTerm === '' && currentPage === 1) {
    //     window.history.replaceState({}, '', `${url.pathname}`);
    //     return;
    // } else if (currentPage !== 1) {
    //     window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);
    //     return;
    // }  else if (searchTerm !== '') {
    //     searchParams.delete('page');
    //     window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);
    //     return;
    // } else {
    //     window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);
    //     return;
    // }
};