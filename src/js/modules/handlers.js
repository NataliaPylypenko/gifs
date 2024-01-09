import refs from "@js/modules/refs";
import { getGifs } from "@js/modules/getGifs";

export const handleShowMore = (e) => getGifs(e);

export const handleInput = (e) => {
    refs.offset = 0;
    refs.gifContainer.innerHTML = '';
    getGifs(e);
};