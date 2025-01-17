import { sentryVitePlugin } from "@sentry/vite-plugin"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sentryVitePlugin({
            org: "alexander-stoehr",
            project: "veenotes",
        }),
    ],

    build: {
        sourcemap: true,
    },
    server: {
        port: 5173,
    },
})
