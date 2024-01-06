import config from "@/js/modules/config";
import {fetchData} from "@/js/modules/fetchData";
import {displayGifs} from "@/js/modules/displayGifs";

export const getRandomGifs = () => {
    fetchData(`${config.apiUrl}/v1/gifs/trending?api_key=${config.apiKey}&limit=15`)
        .then(response => {
            displayGifs(response.data);
        })
        .catch(err => console.error(err));
};

export const searchGifs = (e) => {
    let searchTerm = e.target.value;

    if (!searchTerm.trim()) {
        getRandomGifs();
        return;
    }

    fetchData(`${config.apiUrl}/v1/gifs/search?api_key=${config.apiKey}&q=${searchTerm}&limit=15`)
        .then(response => {
            if (response.data.length === 0) {
                return fetchData(`${config.apiUrl}/v1/gifs/search?api_key=${config.apiKey}&q=not+found&limit=1`);
            } else {
                displayGifs(response.data);
            }
        })
        .then(randomGifResponse => {
            if (randomGifResponse && randomGifResponse.data) {
                displayGifs(randomGifResponse.data);
            }
        })
        .catch(err => console.error(err));
};