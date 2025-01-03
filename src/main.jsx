import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import * as Sentry from "@sentry/react"

Sentry.init({
    dsn: "https://995a6e5980ba1e7fbb9cfda1e351b711@o4508088476565504.ingest.de.sentry.io/4508518026182736",
    integrations: [],
    environment: import.meta.env.SENTRY_ENVIRONMENT,
})

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
)
