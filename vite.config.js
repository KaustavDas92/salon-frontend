import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",   // 👈 This is the key
    globals: true,          // optional, lets you use describe/it/expect without imports
    // setupFiles: "./setupTests.js" // optional, for jest-dom matchers
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
