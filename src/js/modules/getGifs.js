import config from "@/js/modules/config";
import {fetchData} from "@/js/modules/fetchData";
import {displayGifs} from "@/js/modules/displayGifs";

export const getRandomGifs = () => {
    fetchData(`${config.apiUrl}/v1/gifs/trending?api_key=${config.apiKey}&limit=15`)
        .then(response => {
            // console.log(response.data);
            displayGifs(response.data);
        })
        .catch(err => console.error(err));
};

export const searchGifs = (e) => {
    let searchTerm = e.target.value;

    fetchData(`${config.apiUrl}/v1/gifs/search?api_key=${config.apiKey}&q=${searchTerm}&limit=15`)
        .then(response => {
            displayGifs(response.data);
        })
        .catch(err => console.error(err));
};