import refs from "@js/modules/refs";

const createPageItems = (index, pageIndex) => {
    if (index === '...') {
        createDots(index);
        return;
    }
    const PageItem = document.createElement('button');
    PageItem.className = index === pageIndex ? 'pagination__btn active' : 'pagination__btn';
    PageItem.innerHTML = index;
    PageItem.setAttribute('page-index', index);
    PageItem.setAttribute('aria-label', `Page ${index}`);

    refs.paginationItems.appendChild(PageItem);
};

const createDots = (index) => {
    const dots = document.createElement('span');
    dots.innerHTML = index;

    refs.paginationItems.appendChild(dots);
};

export const getPagination = (pageCount, currentPage) => {
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    const range = [];

    for (let i = 1; i <= pageCount; i++) {
        if (i === 1 || i === pageCount || i >= left && i < right) {
            range.push(i);
        }
    }

    let prev = 0;
    for (const i of range) {
        if (prev && i - prev === 2) {
            createDots(prev + 1);
        } else if (prev && i - prev !== 1) {
            createDots('...');
        }
        createPageItems(i, currentPage);
        prev = i;
    }
};