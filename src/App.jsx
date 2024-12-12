import Router from "./pages/router.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}
