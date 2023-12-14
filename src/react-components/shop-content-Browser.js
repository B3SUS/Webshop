import React, { useEffect, useState } from "react";
import { TopProductBox } from "./TopProductBox";
import { Link } from "react-router-dom";
import {PaginatedItems} from "./PaginatedItems";
import "../scss/main.css";
import { CategoryCountComponent } from "./Categories";
import { Sort } from "./Sort";
import { ProductsContainer } from "./ProductsContainer";

export const ShopContentBrowser = ({addToCart, cart: cartProp, setCart: setProp}) => {
    const [sortType, setSortType] = useState({ name: "default", sort: "default" });
    const [items, setItems] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(31);
    const [cart, setCart] = useState([]);

    const order = sortType.sort.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sort.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";


    const onChangeCategory = (id) => {
        setCategoryId(id);
        setCurrentPage(1);

        if (id === null) {
            setTotalItems(31);
        } else {
            fetch(
                `https://65630cd6ee04015769a6bc93.mockapi.io/name?category=${id}`
            )
                .then((res) => res.json())
                .then((json) => {
                    setTotalItems(json.length);
                });
        }
    };

    useEffect(() => {
        fetch(
            `https://65630cd6ee04015769a6bc93.mockapi.io/name?page=${currentPage}&limit=12&${category}$&sortBy=${sortBy}&order=${order}`
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, currentPage]);

    const from = currentPage * 12 - 11;
    const to = Math.min(currentPage * 12, totalItems);
    const handleClick = (product) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (existingItem) => existingItem.id === product.id
            );

            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                const newCart = [...prevCart, { ...product, quantity: 1 }];
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }
        });
    };



    return (
        <section className="shop-content">
            <section className="secondary">
                <div className="categories">
                    <h3>Categories</h3>
                    <CategoryCountComponent value={categoryId} onChangeCategory={onChangeCategory} />
                </div>
                <TopProductBox />
            </section>

            <section className="commerce-content">
                <div className="breadcrumb">
                    <Link to="/">HomePage</Link> / Store
                </div>

                <div className="commerce-container-header">
          <span>
            Showing {from}-{to} of {totalItems} results
          </span>
                    <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
                </div>

                <div className="products-container">
                    {items.map((obj) => (
                        <ProductsContainer key={obj.id} {...obj} addToCart={() => handleClick(obj, cart, setCart)} cart={cart} />
                    ))}
                </div>

                <PaginatedItems
                    totalItems={totalItems}
                    currentPage={currentPage}
                    itemsPerPage={12}
                    onChangePage={(number) => setCurrentPage(number)}
                    cart={cart}
                    setCart={setCart}
                />
            </section>
        </section>
    );
};