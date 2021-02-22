import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cocktails() {
    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
        );
        const data = await res.json();
        setDrinkList(data.drinks.map(item => item.strIngredient1));
    }

    return (
        <div>
            <h1>Cocktails by Ingredient</h1>
        </div>
    );
}
