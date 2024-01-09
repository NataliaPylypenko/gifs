import config from "@js/modules/config";
import refs from "@js/modules/refs";
import {fetchData} from "@js/modules/fetchData";
import {displayGifs} from "@js/modules/displayGifs";

export const getGifs = (e) => {
    let searchTerm = refs.searchInput.value;

    console.log('searchTerm', searchTerm);
    console.log('offset', refs.offset);

    if (searchTerm.trim()) {
        searchGifs(searchTerm);
        return;
    }

    getRandomGifs();
};

export const getRandomGifs = () => {
    fetchData(`${config.apiUrl}/v1/gifs/trending?api_key=${config.apiKey}&limit=${refs.limit}&offset=${refs.offset}`)
        .then(response => {
            displayGifs(response.data);
            refs.offset += refs.limit;
        })
        .catch(err => console.error(err));
};

const searchGifs = (searchTerm) => {
    fetchData(`${config.apiUrl}/v1/gifs/search?api_key=${config.apiKey}&q=${searchTerm}&limit=${refs.limit}&offset=${refs.offset}`)
        .then(response => {
            if (response.data.length === 0) {
                return fetchData(`${config.apiUrl}/v1/gifs/search?api_key=${config.apiKey}&q=not+found&limit=9`);
            } else {
                displayGifs(response.data);
                refs.offset += refs.limit;
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