import config from "@/js/modules/config";
import {fetchData} from "@/js/modules/fetchData";
import {displayGifs} from "@/js/modules/displayGifs";

export const getRandomGifs = () => {
    fetchData(`${config.apiUrl}/v1/gifs/trending?api_key=${config.apiKey}&limit=12`)
        .then(response => {
            // console.log(response.data);
            displayGifs(response.data);
        })
        .catch(err => console.error(err));
};