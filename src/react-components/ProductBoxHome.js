import React, {useEffect, useState} from "react";
import "../scss/main.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";



export function ProductBoxHome({title, ImageUrl, price, category}) {
    const categoryNames= {
        1: "Men",
        2: "Women",
        3: "Accessories",
    };
    function HomeProducts ({title, ImageUrl, price}) {
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
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(
            `https://65630cd6ee04015769a6bc93.mockapi.io/name?&sortBy=rating&order=desc`
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json.slice(0, 10));
            });
    }, []);
    return(
        <section className="products-container">
            {items.map((obj) => (
                <HomeProducts key={obj.id} {...obj}/>
            ))}
        </section>
    )
}