import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // use: [
    //   {
    //     loader: 'markdown-loader',
    //     options: {
    //       basename: process.env.NODE_ENV === "production" ? "/react-router" : undefined
    //     }
    // ]
})
