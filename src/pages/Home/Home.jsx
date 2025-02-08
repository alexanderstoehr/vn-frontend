import Hero from "./Hero.jsx"
import Demo from "./Demo.jsx"
import Benefits from "./Benefits.jsx"
import FAQ from "./FAQ.jsx"
import Pricing from "./Pricing.jsx"
import { useQuery } from "@tanstack/react-query"
import { getAllSpacesQuery } from "../../api/queries/getAllSpacesQuery.js"
import { useEffect } from "react"
import { getAccessToken } from "../../utils/helpers.js"
import Explainer from "./Explainer.jsx"

export default function Home() {
    const sessionStorageObj = getAccessToken
    console.log("token: ", sessionStorageObj)

    const { data, isSuccess, isError, error, refetch } = useQuery({
        queryKey: ["allSpaces"],
        queryFn: getAllSpacesQuery,
        enabled: false, // Disable automatic query execution
    })

    // Manually trigger the query after the initial render
    useEffect(() => {
        if (sessionStorageObj && sessionStorageObj !== "defaultAccessToken") {
            refetch()
        } // Manually trigger the query after the initial render
    }, [refetch])

    if (isSuccess) {
        console.log("Query was successful:", data)
    }

    // Handling error
    if (isError) {
        console.error("An error occurred while pre-fetching Spaces: ", error)
    }

    return (
        <div>
            <Hero />
            <Explainer />
            <Demo />
            <Benefits />
            <Pricing />
            <FAQ />
            {/*<Modal modalHeader="Cookies" modalContent="Cakes and Stuff" primaryButtonText="Gimme" secondaryButtonText="Naaa"/>*/}
        </div>
    )
}
