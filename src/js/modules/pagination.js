import refs from "@js/modules/refs";

const createPageItems = (index) => {
    const PageItem = document.createElement("button");
    PageItem.className = 'pagination__btn';
    PageItem.innerHTML = index;
    PageItem.setAttribute('page-index', index);
    PageItem.setAttribute('aria-label', `Page ${index}`);

    refs.paginationItems.appendChild(PageItem);
};

export const getPagination = (pageCount) => {
    for (let i = 1; i <= pageCount; i++) {
        createPageItems(i);
    }
};