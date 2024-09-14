import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        events: "http://localhost:4000/assets/remoteEntry.js",
        popularEvents: "http://localhost:4000/assets/remoteEntry.js",
        checkout : "http://localhost:4001/assets/remoteEntry.js"
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
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
})