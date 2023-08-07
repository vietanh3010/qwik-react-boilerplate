import { defineConfig, loadEnv } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import tailwindcss from 'tailwindcss';
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            __APP_ENV__: env.APP_ENV,
        },
        plugins: [
            qwikCity(),
            qwikVite({
                client: {
                    outDir: 'dist/', // This is the right setting
                },
            }),
            tsconfigPaths(),
            qwikReact(),
        ],
        css: {
            postcss: {
                plugins: [tailwindcss],
            },
        },
        server: {
            port: 3012,
            host: true,
        },
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        },
    };
});
