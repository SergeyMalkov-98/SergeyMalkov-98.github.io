// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-swiper", "@nuxt/image"],
  css: ["@/assets/styles/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/assets/styles/dev/colors.scss' as *;
            @use '@/assets/styles/dev/media.scss' as *;
            @use '@/assets/styles/dev/mixins.scss' as *;
            @use '@/assets/styles/dev/typography.scss' as *;
          `,
        },
      },
    },
  },
});
