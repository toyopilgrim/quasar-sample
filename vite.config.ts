import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        quasar({
            sassVariables: "src/quasar-variables.sass",
        }),
    ],
});