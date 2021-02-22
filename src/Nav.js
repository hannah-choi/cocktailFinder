import React from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/ingredients">
                    <li>Ingredients</li>
                </Link>
                <Link to="/cocktails">
                    <li>Cocktails</li>
                </Link>
            </ul>
        </nav>
    );
}
