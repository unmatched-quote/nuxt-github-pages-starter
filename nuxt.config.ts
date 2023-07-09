// https://nuxt.com/docs/api/configuration/nuxt-config
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineNuxtConfig({
  // This is the "magic" part
  app: {
    baseURL: '/change-me/', // This is the suffix if your GitHub pages. i.e https://<username>.githubpages.io/<change-me>
    buildAssetsDir: '/assets/' // GitHub pages action will bundle assets into this directory, whereas nuxt creates _nuxt/ directory. This project alters it to /assets/
  },
  devtools: { enabled: true },
  vite: {
    plugins: [viteSingleFile()] // Plugin to reduce the number of files produced to a minimum, you can remove this
  }
})
