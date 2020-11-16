require('dotenv').config();

export default {
    /*
    ** ENV
    */
    env: {
        SITE_URL: process.env.SITE_URL,
        API_ENDPOINT: process.env.API_ENDPOINT,
    },
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',
    loading: false,
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap", rel: 'stylesheet'}
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/app.scss',
        '@mdi/font/css/materialdesignicons.css'
    ],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        {src: '~/plugins/repository'},
        '@/components',
        '@/plugins/auth',
        '@/plugins/axios',
        '@/plugins/mixins',
        '@/plugins/theme',
    ],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: false,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxt/content',
        ['cookie-universal-nuxt', {alias: 'ck'}],
        'nuxt-ssr-cache',
        '@nuxtjs/sitemap'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.API_ENDPOINT
    },
    /*
    ** Content module configuration
    ** See https://content.nuxtjs.org/configuration
    */
    content: {},
    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    },
    cache: {
        useHostPrefix: false,
        pages: [
            // you can also pass a regular expression to test a path
            '/',
            // /^\/\d+\/$/,
        ],
        store: {
            type: 'memory',
            max: 256,

            ttl: 60 * 60 * 24,
        },
    },
    sitemap: {}
}
