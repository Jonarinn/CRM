import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            "/api": "https://localhost:5001",
        },
    },
    build: {
        outDir: "../api/wwwroot",
    },
});
