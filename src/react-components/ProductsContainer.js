import React from "react";
import "../scss/main.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export function ProductsContainer({title, ImageUrl, price, category}) {
    const categoryNames= {
      1: "Men",
        2: "Women",
        3: "Accessories",
    };
    return(
        <div className="product-box">
            <img src={ImageUrl} alt=""/>
            <div className="desc">
                <h5>{title}</h5>
                <h6 className="gray-text">{categoryNames[category]}</h6>
                <h6>${price}</h6>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    )
}