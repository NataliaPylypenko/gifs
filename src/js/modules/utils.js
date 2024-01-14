import refs from "@js/modules/refs";
import { displayGifs } from "@js/modules/displayGifs";
import {getPagination} from "@js/modules/pagination";

export const responseProcessing = (response) => {
    let totalGifsCount = parseInt(response['pagination']['total_count']);
    let pageCount = Math.ceil(totalGifsCount / refs.limit);

    getPagination(pageCount);
    displayGifs(response.data);

    refs.buttonNext.disabled = false;
    refs.buttonPrev.disabled = true;
    refs.offset += refs.limit;

    if (refs.offset >= totalGifsCount) {
        refs.buttonNext.disabled = true;
    }

    if (refs.offset > 0) {
        refs.buttonPrev.disabled = false;
    }
};

export const updateQueryString = (searchTerm) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set('search', searchTerm);

    window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);
};