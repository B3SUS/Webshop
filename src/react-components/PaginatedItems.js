import {ProductsContainer} from "./ProductsContainer";
import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";


export const Pagination = ({onChangePage}) =>{

    function Items({currentItems}){
        return(
            <div className="products-container">
                {currentItems.map((obj) =>(
                    <ProductsContainer key={obj.id} {...obj}/>))}
            </div>
        )
    }

    useEffect(() => {
        fetch('https://65630cd6ee04015769a6bc93.mockapi.io/name')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
            });
    }, []);

    const [items, setItems] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    return(
        <>
            <ReactPaginate
                   className="page-nav"
                   breakLabel="..."
                   nextLabel="→"
                   onPageChange={(event) => onChangePage(event.selected +1)}
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
    )
}