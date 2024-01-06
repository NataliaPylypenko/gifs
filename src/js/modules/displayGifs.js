import refs from "@/js/modules/refs";

export const displayGifs = (gifs) => {
    refs.gifContainer.innerHTML = '';
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.classList.add('grid-item');
        img.src = gif.images['fixed_height'].url;

        refs.gifContainer.appendChild(img);
    });
};
