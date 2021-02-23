import React, { useState, useEffect } from "react";
import CocktailListItem from "./CocktailListItem";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

export default function CocktailIngredients({ match }) {
    const [item, setItem] = useState([]);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${+match
                .params.id}`
        );
        const data = await res.json();
        const drink = data.drinks[0];
        setItem(drink);

        const getRecipes = () => {
            let ingredientArray = [];
            for (let i = 1; i < 15; i++) {
                if (drink["strIngredient" + i]) {
                    ingredientArray.push({
                        name: drink["strIngredient" + i],
                        amount: drink["strMeasure" + i],
                    });
                }
            }

            setRecipe(
                ingredientArray.map(recipe =>
                    recipe.amount !== null
                        ? recipe.amount + " " + recipe.name + "\n"
                        : recipe.name + "\n"
                )
            );
        };

        getRecipes();
    }

    return (
        <>
            <div className="detail">
                <h1>{item.strDrink}</h1>
                <h4>
                    {item.strAlcoholic} | {item.strGlass}
                </h4>
                <div className="detailContents">
                    <div
                        className="detailImg"
                        style={{
                            backgroundImage: `url(${item.strDrinkThumb})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="detailDesc">
                        {recipe.map(item => (
                            <small key={v4()}>
                                {item}
                                <br />
                            </small>
                        ))}
                        <p className="instruction">{item.strInstructions}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
