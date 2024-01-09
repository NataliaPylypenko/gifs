import refs from "@js/modules/refs";
import { getGifs } from "@js/modules/getGifs";

export const handleShowMore = () => getGifs();

export const handleInput = () => {
    refs.offset = 0;
    refs.gifContainer.innerHTML = '';
    refs.showMore.style.display = 'none';
    getGifs();
};