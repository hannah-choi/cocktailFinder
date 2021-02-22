import React from "react";

export default function DrinkItem({ data }) {
    return (
        <li className="drinkLi" id-key={data.idDrink}>
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
