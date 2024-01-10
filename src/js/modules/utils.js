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
    url.pathname = `/search/${encodeURIComponent(searchTerm)}`;

    window.history.replaceState({}, '', url.href);
};

export const extractSearchTermFromURL = () => {
    const path = window.location.pathname; // http://localhost:8081/search/coffee
    const parts = path.split('/'); // ['http:', '', 'localhost:8081', 'search', 'coffee']
    const searchTerm = parts[parts.length - 1];  // coffee

    return decodeURIComponent(searchTerm);
};