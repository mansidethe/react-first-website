import "./Navbar.css"
import {link } from "react-router-dom"
export default function Navbar() {
    return (

        <nav>
       <Link to="/">Home</Link>
       
       <Link to="/product">Product</Link>
       
       <Link to="/contact">Contact</Link>

       <Link to="/about">About</Link>
        </nav>
    )
}