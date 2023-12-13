import React, {useEffect, useState} from "react";
import "../scss/main.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";



export function TopProductBox({title, ImageUrl, price}) {
    function TopProducts ({title, ImageUrl, price}) {
        return(
            <div className="top-product-box">
                <img src={ImageUrl} alt=""/>
                <div className="top-product-info">
                    <a href="">{title}</a>
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h5>${price}</h5>
                </div>
            </div>
        )
    }
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(
            `https://65630cd6ee04015769a6bc93.mockapi.io/name?&sortBy=rating&order=desc`
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json.slice(0, 5));
            });
    }, []);
    return(
        <div className="top-rated-products">
            <h3>Our Best Sellers</h3>
            <ul>
                <li>
                    {items.map((obj) => (
                        <TopProducts key={obj.id} {...obj}/>
                    ))}
                </li>
            </ul>
        </div>
    )
}