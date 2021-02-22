import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import DrinkItem from "./DrinkItem";

export default function List({ name }) {
    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        getData();
    }, [name]);

    async function getData() {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/${name}`
        );
        const data = await res.json();

        setDrinkList(data.drinks);
    }

    return (
        <>
            <h1>{name.slice(2)} Cocktails</h1>
            <ul className="drinkUl">
                {drinkList.map(drink => (
                    <DrinkItem data={drink} key={v4()} />
                ))}
            </ul>
        </>
    );
}
