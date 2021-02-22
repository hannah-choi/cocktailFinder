import { useState } from "react";
import "./index.css";
import Nav from "./Nav";
import Home from "./Home";
import Cocktails from "./Cocktails";
import Ingredients from "./Ingredients";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Rum, Gin, Vodka, Tequila, Brandy, Cognac, Whiskey

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cocktails" component={Cocktails} />
                    <Route path="/ingredients" component={Ingredients} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
