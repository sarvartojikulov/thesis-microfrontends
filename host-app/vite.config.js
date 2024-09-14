import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const remotesLocal = {
    events: "http://localhost:4000/events/latest/remoteEntry.js",
    popularEvents: "http://localhost:4000/events/latest/remoteEntry.js",
    checkout: "http://localhost:4001/checkout/latest/remoteEntry.js",
};

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode, isPreview }) => {
    const env = loadEnv(mode, process.cwd());
    const domain = env.VITE_PRODUCTION_DOMAIN;

    const remotes = isPreview
        ? remotesLocal
        : {
              events: `${domain}/events/latest/remoteEntry.js`,
              popularEvents: `${domain}/events/latest/remoteEntry.js`,
              checkout: `${domain}/checkout/latest/remoteEntry.js`,
          };

    return {
        plugins: [
            react(),
            federation({
                name: "app",
                remotes,
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
        },
    };
});
