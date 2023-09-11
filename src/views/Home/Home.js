import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
export default function Home()
{
    return(

        <div className="home">
            <Navbar/>
        <h1>Homepage</h1>
        <Footer/>
        </div>
    )
}