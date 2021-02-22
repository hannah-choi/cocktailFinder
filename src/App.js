import { useState } from "react";
import "./index.css";
import Nav from "./Nav";
import List from "./List";
//Rum, Gin, Vodka, Tequila, Brandy, Cognac, Whiskey

function App() {
    const [baseName, setBaseName] = useState("Gin");

    const handleClick = e => {
        setBaseName(e.target.textContent);
    };

    return (
        <div className="App">
            <Nav handleClick={handleClick} />
            <List name={baseName} />
        </div>
    );
}

export default App;
