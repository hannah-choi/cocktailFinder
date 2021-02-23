import React from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>
                        <h3>Home</h3>
                    </li>
                </Link>
                <Link to="/ingredients">
                    <li>
                        <h3>Ingredients</h3>
                    </li>
                </Link>
                <Link to="/glasses">
                    <li>
                        <h3>Glasses</h3>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}
