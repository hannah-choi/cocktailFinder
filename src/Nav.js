import React from "react";
import { v4 } from "uuid";
import ListItem from "./ListItem";

export default function Nav({ handleClick }) {
    const drinks = ["Gin", "Rum", "Vodka", "Tequila", "Non-alcohol"];

    return (
        <nav>
            <ul>
                {drinks.map(item => (
                    <ListItem
                        name={item}
                        key={v4()}
                        handleClick={handleClick}
                    />
                ))}
            </ul>
        </nav>
    );
}
