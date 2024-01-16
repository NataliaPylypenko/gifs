const refs = {
    gifContainer: document.querySelector('#gifContainer'),
    searchInput: document.querySelector('#searchInput'),
    searchTerm: '',
    showMore: document.querySelector('#showMore'),
    paginationContainer: document.querySelector('.pagination__container'),
    buttonPrev: document.querySelector('#buttonPrev'),
    paginationItems: document.querySelector('#paginationItems'),
    buttonNext: document.querySelector('#buttonNext'),
    limit: 12,
    offset: 0,
    currentPage: 1,
};

export default refs;