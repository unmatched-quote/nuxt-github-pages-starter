# Nuxt 3 with GitHub pages example

TL;DR: when generating static pages, the directory with JS, CSS and/or images must be `assets/` instead of `_nuxt/`
when target is GitHub pages.

Refer to `nuxt.config.ts` to see the values in `app`.

## Additional useful libs

I find it great to produce as few files as possible. I used [vite-plugin-singlefile](https://www.npmjs.com/package/vite-plugin-singlefile)
with this project. You can remove it if you want to keep default Nuxt behavior, it's located in `nuxt.config.ts` under `vite.plugins`.
