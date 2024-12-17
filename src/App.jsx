import Router from "./pages/router.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { UserProvider } from "./context/UserContext.jsx"

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Router />
            </UserProvider>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}
