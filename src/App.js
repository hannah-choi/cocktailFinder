import { useState } from "react";
import "./index.css";
import Nav from "./Nav";
import Home from "./Home";
import Ingredients from "./Ingredients";
import CocktailIngredients from "./CocktailIngredients";
import CocktailDetail from "./CocktailDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Rum, Gin, Vodka, Tequila, Brandy, Cognac, Whiskey

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <div className="contents">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/ingredients"
                            exact
                            component={Ingredients}
                        />
                        <Route
                            path="/ingredients/:item"
                            exact
                            component={CocktailIngredients}
                        />
                        <Route
                            path="/ingredients/:item/:id"
                            component={CocktailDetail}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
