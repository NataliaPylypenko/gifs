import refs from "@js/modules/refs";

const createPageItems = (index, pageIndex) => {
    const PageItem = document.createElement("button");
    PageItem.className = index === pageIndex ? 'pagination__btn active' : 'pagination__btn';
    PageItem.innerHTML = index;
    PageItem.setAttribute('page-index', index);
    PageItem.setAttribute('aria-label', `Page ${index}`);

    refs.paginationItems.appendChild(PageItem);
};

export const getPagination = (pageCount, pageIndex) => {
    for (let i = 1; i <= pageCount; i++) {
        createPageItems(i, pageIndex);
    }
};