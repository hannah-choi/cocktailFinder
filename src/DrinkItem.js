import React from "react";

export default function DrinkItem({ data }) {
    return (
        <li className="drinkItem" drinkid-key={data.idDrink}>
            <div className="thumbnail">
                <img src={data.strDrinkThumb} alt={data.strDrink} />
            </div>
            <div className="drinkName">{data.strDrink}</div>
        </li>
    );
}
