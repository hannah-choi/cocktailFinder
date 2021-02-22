import React, { useEffect, useState } from "react";
import DrinkItem from "./DrinkItem";
import { v4 } from "uuid";

export default function List({ name }) {
    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        getData();
    }, [name]);

    async function getData() {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
        );
        const data = await res.json();
        setDrinkList(data.drinks);
        console.log(data.drinks);
    }

    let listMapping = drinkList.map(item => (
        <DrinkItem data={item} key={v4()} />
    ));

    return (
        <div className="contents">
            <h1>{name}</h1>
            <ul>{listMapping}</ul>
        </div>
    );
}
