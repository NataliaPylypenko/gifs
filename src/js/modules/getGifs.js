import config from "@js/modules/config";
import refs from "@js/modules/refs";
import { responseProcessing, updateQueryString } from "@js/modules/utils";
import { fetchData } from "@js/modules/fetchData";
import { displayGifs } from "@js/modules/displayGifs";
import {getPagination} from "@js/modules/pagination";

export const getGifs = () => {
    refs.gifContainer.innerHTML = '';
    refs.paginationItems.innerHTML = '';

    // updateQueryString(searchTerm);

    let searchTerm = refs.searchInput.value.trim();
    if (searchTerm) {
        searchGifs(searchTerm);
        return;
    }

    getRandomGifs();
};

const getRandomGifs = () => {
    fetchData(`${config.apiUrl}/trending?api_key=${config.apiKey}&limit=${refs.limit}&offset=${refs.offset}`)
        .then(response => {
            responseProcessing(response);
        })
        .catch(err => console.error(err));
};

const searchGifs = (searchTerm) => {
    fetchData(`${config.apiUrl}/search?api_key=${config.apiKey}&q=${searchTerm}&limit=${refs.limit}&offset=${refs.offset}`)
        .then(response => {
            if (response.data.length === 0) {
                return fetchData(`${config.apiUrl}/search?api_key=${config.apiKey}&q=not+found&limit=9`);
            } else {
                responseProcessing(response);
            }
        })
        .then(notFoundGifResponse => {
            if (notFoundGifResponse && notFoundGifResponse.data) {
                const randomGif = notFoundGifResponse.data[Math.floor(Math.random() * notFoundGifResponse.data.length)];
                displayGifs([randomGif]);
            }
        })
        .catch(err => console.error(err));
};