import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 4000,
            strictPort: true,
        },
        preview: {
            port: 4000,
            strictPort: true,
        },
        plugins: [
            react(),
            federation({
                name: "events",
                filename: "remoteEntry.js",
                exposes: {
                    "./App": "./src/App.jsx",
                    "./PopularEvents": "./src/AppPopularEvents.jsx",
                },
                shared: {
                    react: {
                        singleton: true,
                    },
                    "react-dom": {
                        singleton: true,
                    },
                    "react-router-dom": {
                        singleton: true,
                    },
                },
            }),
        ],
        build: {
            modulePreload: false,
            target: "esnext",
            minify: false,
            cssCodeSplit: false,
            assetsDir : ""
        },
        base: mode === "production" ? "/events-app/latest" : "/",
        
    };
});
