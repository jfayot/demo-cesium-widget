import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium-engine";

export default defineConfig({
  plugins: [
    react(),
    cesium({
      ionToken: "<YOUR_OWN_ION_TOKEN>"
    })
  ],
});
