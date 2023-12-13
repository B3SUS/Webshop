import React, {useEffect, useState} from "react";
import {TopProductBox} from "./TopProductBox";
import {Link} from "react-router-dom";
import {Pagination} from "./PaginatedItems";
import "../scss/main.css";
import {CategoryCountComponent} from "./Categories";
import {Sort} from "./Sort";
import {ProductsContainer} from "./ProductsContainer";
export const ShopContentBrowser = () => {
    const [sortType, setSortType] = React.useState({name:'default', sort: 'default'});
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sort.replace('-','');
    const category = categoryId > 0 ? `category=${categoryId}` : '';


    const onChangeCategory = (i) => setCategoryId(i);




    useEffect(() => {
        fetch(`https://65630cd6ee04015769a6bc93.mockapi.io/name?page=${currentPage}&limit=12&${category}$&sortBy=${sortBy}&order=${order}`
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
            });
        window.scrollTo(0,0);
    }, [categoryId, sortType, currentPage]);

    const from = currentPage * 12 - 11;
    const to = Math.min(currentPage * 12, 31);

    return(
      <section className="shop-content">
          <section className="secondary">
              <div className="search">
                  <input type="text" placeholder="Search..." className="normal-input"/>
                  <button className="blue">
                      <svg aria-hidden="true" role="img" focusable="false"
                           className="dashicon dashicons-arrow-right-alt2" xmlns="http://www.w3.org/2000/svg"
                           width="20" height="20" viewBox="0 0 20 20">
                          <path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path>
                      </svg>
                  </button>
              </div>
              <div className="filter">
                  <h3>Filter by Price</h3>
                  <div className="price-amount">
                      <button className="blue">Filter</button>
                      <h4>120$-290$</h4>
                  </div>
              </div>
              <div className="categories">
                  <h3>Categories</h3>
                  <CategoryCountComponent value={categoryId} onChangeCategory={onChangeCategory}/>
              </div>
              <TopProductBox/>
          </section>
          <section className="commerce-content">
              <div className="breadcrumb">
                  <Link to={"/"}>HomePage</Link>
                  /Store
              </div>
              <div className="commerce-container-header">
                  <span>Showing {from}-{to} of 31 results</span>
                  <Sort value={sortType} onChangeSort={(i)=> setSortType(i)}/>
              </div>
              <div className="products-container">
                  {items.map((obj) =>(
                      <ProductsContainer key={obj.id} {...obj}/>))}
              </div>
              <Pagination onChangePage={(number) => setCurrentPage(number)}/>
          </section>
      </section>
  )
}