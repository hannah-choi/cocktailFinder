import React, { useState, useEffect } from "react";

export default function Ingredient({ name }) {
    const [baseName, setBaseName] = useState([]);

    useEffect(() => {
        console.log(name);
        getData();
    }, [name]);

    async function getData() {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/${name}`
        );
        const data = await res.json();

        setBaseName(data);
        console.log(baseName);
    }

    return <div></div>;
}
