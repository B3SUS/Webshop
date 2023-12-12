import React, { useState, useEffect } from 'react';
import '../scss/main.css';

export const CategoryCountComponent = () => {
    const categoryNames= {
        1: "Men",
        2: "Women",
        3: "Accessories",
    };
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://65630cd6ee04015769a6bc93.mockapi.io/name')
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
            });
    }, []);

    const calculateCategoriesCount = () => {
        const categoriesCount = {};

        items.forEach((product) => {
            const category = product.category;
            categoriesCount[category] = (categoriesCount[category] || 0) + 1;
        });

        return categoriesCount;
    };

    const categoriesCount = calculateCategoriesCount();

    return (
        <div className="product-categories">
            <ul>
                {Object.entries(categoriesCount).map(([category, count]) => (
                    <li key={category}><a href="">{categoryNames[category]}</a><span className="count">({count})</span></li>
                ))}
            </ul>
        </div>
    );
};
