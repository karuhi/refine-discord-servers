require('dotenv').config()
export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'refine-discord-servers',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/reseter.min.css', 'vuesax/dist/vuesax.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuesax'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-vite'],
  vite: {
    /* options for vite */
    vue: {
      /* options for vite-plugin-vue2 */
    },
    optimizeDeps: {
      include: ['cookie'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/auth
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://discord.com/api/v8',
  },
  // Axios module configuration: https://auth.nuxtjs.org/providers/discord
  auth: {
    redirect: {
      login: '/login', // 未ログイン時に認証ルートへアクセスした際のリダイレクトURL
      logout: '/', // ログアウト時のリダイレクトURL
      callback: '/callback', // Oauth認証等で必要となる コールバックルート
      home: '/dashboard', // ログイン後のリダイレクトURL
    },
    strategies: {
      discord: {
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        grantType: process.env.GRANT_TYPE,
        scope: ['identify', 'guilds'],
        redirectUri: process.env.REDIRECT_URI,
        codeChallengeMethod: '',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
