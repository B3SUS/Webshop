import React from "react";
import {TopProductBox} from "./TopProductBox";
import {ProductsContainer} from "./ProductsContainer";
export const ShopContentBrowser = () => {
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
                  <div className="product-categories">
                      <ul>
                          <li><a href="">Accessories</a><span className="count">(7)</span></li>
                          <li><a href="">Men</a><span className="count">(14)</span></li>
                          <li><a href="">Women</a><span className="count">(17)</span></li>
                      </ul>
                  </div>
              </div>
              <TopProductBox/>
          </section>
          <section className="commerce-content">
              <div className="breadcrumb">
                  <a href="index.html">HomePage</a>
                  /Store
              </div>
              <div className="commerce-container-header">
                  <span>Showing 1-12 of 31 results</span>
                  <form className="ordering" method="get">
                      <select className="orderby" name="orderby" aria-label="Shop order">
                          <option value="menu_order" selected="selected">Default sorting</option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="rating">Sort by average rating</option>
                          <option value="date">Sort by latest</option>
                          <option value="price">Sort by price: low to high</option>
                          <option value="price-desc">Sort by price: high to low</option>
                      </select>
                  </form>
              </div>
              <ProductsContainer/>
              <div className="pagination">
                  <ul className="page-nav">
                      <li><a href="">
                          <button className="normal">1</button>
                      </a></li>
                      <li><a href="">
                          <button className="normal">2</button>
                      </a></li>
                      <li><a href="">
                          <button className="normal">3</button>
                      </a></li>
                      <li><a href="">
                          <button className="normal">→</button>
                      </a></li>
                  </ul>
              </div>
          </section>
      </section>
  )
}