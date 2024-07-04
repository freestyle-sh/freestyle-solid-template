import { defineConfig} from 'freestyle-sh'

export default defineConfig({
    dev: {
        proxy: "http://localhost:3000"
    },
    deploy: {
        web: {
            entryPoint: ".output/server/index.ts"
        }
    }
});