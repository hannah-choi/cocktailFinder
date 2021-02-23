import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

export default function Glasses() {
    const [glassList, setGlassList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
        );
        const data = await res.json();
        setGlassList(data.drinks.map(item => item.strGlass));
    }

    const getName = name => {
        return name.replace(" ", "_");
    };

    return (
        <>
            <h1>Cocktails by glass type</h1>
            <ul className="drinkUl">
                {glassList.map(item => (
                    <Link to={`/glasses/${getName(item)}`} key={v4()}>
                        <li className="ingredient">{item}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
}
