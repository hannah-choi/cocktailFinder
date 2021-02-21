import React, { useEffect } from "react";

export default function List(name) {
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        console.log(name);
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
        );
        const data = await res.json();

        console.log(data);
    };

    return (
        <div>
            <h1>sss</h1>
        </div>
    );
}
