import { useState } from "react";
import "./index.css";
import Nav from "./Nav";
import List from "./List";
import Ingredient from "./Ingredient";
//Rum, Gin, Vodka, Tequila, Brandy, Cognac, Whiskey

function App() {
    const [drinkName, setDrinkName] = useState(`filter.php?a=Alcoholic`);

    const handleClick = (text, category) => {
        if (category === "ingredients") {
            setDrinkName(`search.php?i=${text}`);
        } else {
            let name =
                text === "Non-alcohol"
                    ? `filter.php?a=Non_Alcoholic`
                    : text === "Alcoholic"
                    ? `filter.php?a=Alcoholic`
                    : `filter.php?i=${text}`;
            setDrinkName(name);
        }
    };

    return (
        <div className="App">
            <Nav handleClick={handleClick} />
            <div className="contents">
                <Ingredient name={drinkName} />
                <List name={drinkName} />
            </div>
        </div>
    );
}

export default App;
