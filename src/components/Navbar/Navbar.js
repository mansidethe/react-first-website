import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
<div className="nav">
    <span className="logo">Mobile</span>
       
        <Link to="/" className="active">Home</Link>

        <Link to="/product" className="active">Products</Link>

        <Link to="/contact" className="active">Contact</Link>

        <Link to="/about" className="active">About</Link>

        </div>
    );
}