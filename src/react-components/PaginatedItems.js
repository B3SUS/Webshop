import React from "react";

export const PaginatedItems = ({ totalItems, currentPage, itemsPerPage, onChangePage }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    if (pageCount === 1) {
        return null;
    }

    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

    return (
        <div className="pagination">
            {pages.map((page) => (
                <li

                    key={page}
                    className={page === currentPage ? "active" : ""}
                    onClick={() => onChangePage(page)}
                >
                    {page}
                </li>
            ))}
        </div>
    );
};