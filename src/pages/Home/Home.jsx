import Hero from "./Hero.jsx";
import Demo from "./Demo.jsx";
import Benefits from "./Benefits.jsx";
import FAQ from "./FAQ.jsx";
import Footer from "../../components/Footer.jsx";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Demo/>
            <Benefits/>
            <FAQ/>
            <Footer/>
        </div>
    )
}