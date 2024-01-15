import refs from "@js/modules/refs";
import { displayGifs } from "@js/modules/displayGifs";
import {getPagination} from "@js/modules/pagination";

export const responseProcessing = (response) => {
    let totalGifsCount = parseInt(response['pagination']['total_count']);
    let pageCount = Math.ceil(totalGifsCount / refs.limit);

    refs.buttonNext.disabled = refs.offset >= totalGifsCount;
    refs.buttonPrev.disabled = refs.offset <= 0;

    displayGifs(response.data);
    getPagination(pageCount, refs.currentPage);
};

export const updateQueryString = (searchTerm) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set('search', searchTerm);

    window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);
};