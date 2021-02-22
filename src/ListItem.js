import React from "react";

export default function ListItem({ handleClick, name, category }) {
    return (
        <li onClick={e => handleClick(e.target.textContent, category)}>
            {name}
        </li>
    );
}
