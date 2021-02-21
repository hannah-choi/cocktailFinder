import React from "react";

export default function ListItem({ handleClick, name }) {
    return <li onClick={e => handleClick(e)}>{name}</li>;
}
