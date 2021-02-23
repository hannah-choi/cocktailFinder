import React from "react";

export default function CocktailListItem({ data }) {
    return (
        <li className="drinkLi">
            <div
                className="img"
                style={{
                    backgroundImage: `url(${data.strDrinkThumb})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="name">{data.strDrink}</div>
        </li>
    );
}
