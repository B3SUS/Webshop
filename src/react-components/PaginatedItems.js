import {ProductsContainer} from "./ProductsContainer";
import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

function Items({currentItems}){
    return(
        <div className="products-container">
            {currentItems.map((obj) =>(
                <ProductsContainer key={obj.id} {...obj}/>))}
        </div>
    )
}

export function PaginatedItems() {
    const [items, setItems] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        fetch('https://65630cd6ee04015769a6bc93.mockapi.io/name')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
            });
    }, []);


    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    }
    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate className="page-nav"
                breakLabel="..."
                nextLabel="→"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="←"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}