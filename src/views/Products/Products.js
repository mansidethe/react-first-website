import "./products.css"
import image from "./rose.jifif"
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import Card from "./../../components/Card/Card";



export default function Card() {
    return (
        <div>

            <Navbar />

            <img src={image} />

            <Footer />

        </div>
    )
}