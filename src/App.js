import "./index.css";
import Nav from "./Nav";
import List from "./List";
//Rum, Gin, Vodka, Tequila, Brandy, Cognac, Whiskey

function App() {
    let selected;

    const handleClick = e => {
        selected = e.target.textContent;
    };

    return (
        <div className="App">
            <Nav handleClick={handleClick} />
            {selected && <List name={selected} />}
        </div>
    );
}

export default App;
