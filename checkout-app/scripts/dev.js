import { build, preview } from "vite";

let previewServer;

build({ build: { watch: {} } }).then((buildWatcher) => {
    buildWatcher.on("event", async ({ code }) => {
        if (code !== "END") {
            return;
        }

        if (!previewServer) {
            previewServer = await preview({ preview: { port: 4001 } });
        }

        console.log("\n");
        previewServer.printUrls();
    });
});
