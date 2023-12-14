import React from "react";
import "../scss/main.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { RiShoppingBagLine } from "react-icons/ri";

export function ProductsContainer({ title, ImageUrl, price, category, addToCart }) {
    const categoryNames = {
        1: "Men",
        2: "Women",
        3: "Accessories",
    };

    return (
        <div className="product-box">
            <RiShoppingBagLine className={"cartIcon"} onClick={() => addToCart({ id: title, ImageUrl, price, category })} />
            <img src={ImageUrl} alt="" />
            <div className="desc">
                <h5>{title}</h5>
                <h6 className="gray-text">{categoryNames[category]}</h6>
                <h6>${price}</h6>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} className={"star"} />
                    <FontAwesomeIcon icon={faStar} className={"star"} />
                    <FontAwesomeIcon icon={faStar} className={"star"} />
                    <FontAwesomeIcon icon={faStar} className={"star"} />
                    <FontAwesomeIcon icon={faStar} className={"star"} />
                </div>
            </div>
        </div>
    );
}

