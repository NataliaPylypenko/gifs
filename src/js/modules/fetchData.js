export const fetchData = url => fetch(url)
    .then(response => response.ok ? response.json() : Promise.reject(response.statusText))
    .catch(err => console.error(err));
