import refs from "@js/modules/refs";
import { displayGifs } from "@js/modules/displayGifs";

export const responseProcessing = (response) => {
    let totalGifsCount = response['pagination']['total_count'];

    displayGifs(response.data);
    refs.showMore.style.display = 'flex';
    refs.offset += refs.limit;

    if (refs.offset >= totalGifsCount) {
        refs.showMore.style.display = 'none';
    }
};

export const updateQueryString = (searchTerm) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set('search', searchTerm);

    window.history.replaceState({}, '', `${url.pathname}?${searchParams}`);
};