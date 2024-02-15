import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {viteStaticCopy} from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/remotejobs",
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/logo.png',
                    dest: 'assets'
                }
            ]
        })],
})
