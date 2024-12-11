import Hero from "./Hero.jsx"
import Demo from "./Demo.jsx"
import Benefits from "./Benefits.jsx"
import FAQ from "./FAQ.jsx"
import Pricing from "./Pricing.jsx"
import Modal from "../../components/modals/Modal.jsx"

export default function Home() {
    return (
        <div>
            <Hero />
            <Demo />
            <Benefits />
            <Pricing />
            <FAQ />
            {/*<Modal modalHeader="Cookies" modalContent="Cakes and Stuff" primaryButtonText="Gimme" secondaryButtonText="Naaa"/>*/}
        </div>
    )
}
