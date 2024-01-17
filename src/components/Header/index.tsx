import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
}