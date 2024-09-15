import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 4001,
            strictPort: true,
        },
        preview: {
            strictPort: true,
            port: 4001,
        },
        plugins: [
            react(),
            federation({
                name: "events",
                filename: "remoteEntry.js",
                exposes: {
                    "./App": "./src/App.jsx",
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
            assetsDir: "",
        },
        base: mode === "production" ? "/checkout-app/latest" : "/",
    };
});
