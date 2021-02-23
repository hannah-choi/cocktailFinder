import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

export default function Ingredients() {
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

    const getName = name => {
        return name.replace(" ", "_");
    };

    return (
        <div>
            <h1>Cocktails by Ingredient</h1>
            {drinkList.map(item => (
                <Link to={`/ingredients/${getName(item)}`} key={v4()}>
                    <li>{item}</li>
                </Link>
            ))}
        </div>
    );
}
