// SCSS
import '../scss/style.scss';

const refs = {
    apiUrl: 'https://api.giphy.com',
    apiKey: process.env.GIPHY_API_KEY,
    gifContainer: document.querySelector('#gifContainer'),
    searchInput: document.querySelector('#searchInput'),
};

// function to fetch data from the API
const fetchData = url => fetch(url)
    .then(response => response.ok ? response.json() : Promise.reject(response.statusText))
    .catch(err => console.error(err));


const displayGifs = (gifs) => {
    refs.gifContainer.innerHTML = '';
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.classList.add('grid-item');
        img.src = gif.images['fixed_height'].url;

        refs.gifContainer.appendChild(img);
    });
};


// A function for obtaining random gifs
const getRandomGifs = () => {
    fetchData(`${refs.apiUrl}/v1/gifs/trending?api_key=${refs.apiKey}&limit=12`)
        .then(response => {
            console.log(response.data);
            displayGifs(response.data);
        })
        .catch(err => console.error(err));
};


getRandomGifs();