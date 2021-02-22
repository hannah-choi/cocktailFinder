import React from "react";
import { v4 } from "uuid";
import ListItem from "./ListItem";

export default function Nav({ handleClick }) {
    const Ingredient = ["Gin", "Rum", "Vodka", "Tequila"];
    const drinks = ["Gin", "Rum", "Vodka", "Tequila"];

    return (
        <nav>
            <h3>Cocktails by Ingredient</h3>
            <ul>
                <ListItem
                    name="Alcoholic"
                    key={v4()}
                    handleClick={handleClick}
                    category="cocktails"
                />
                {drinks.map(item => (
                    <ListItem
                        name={item}
                        key={v4()}
                        handleClick={handleClick}
                        category="cocktails"
                    />
                ))}
                <ListItem
                    name="Non-alcohol"
                    key={v4()}
                    handleClick={handleClick}
                    category="cocktails"
                />
            </ul>
            <h3>Base spirit</h3>
            {Ingredient.map(item => (
                <ListItem
                    name={item}
                    key={v4()}
                    handleClick={handleClick}
                    category="ingredients"
                />
            ))}
        </nav>
    );
}
