import { defineConfig } from 'vite'
import { codecovVitePlugin } from "@codecov/vite-plugin";

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Put the Codecov vite plugin after all other plugins
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "billy-bundle2-test",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
})
