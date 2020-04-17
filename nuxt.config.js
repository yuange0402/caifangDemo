
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:"佛山采房信息科技有限公司-房地产，佛山房产，房价咨询，楼盘，房价，买房，租房",
    meta: [ 
      // 配置百度搜索 
      { name :'baidu-site-verification',content:'b3soprudUI'},
      { charset: 'utf-8' },
      {name:"keywords",content:"佛山采房信息科技有限公司-房地产，佛山房产，房价咨询，楼盘，房价，买房，租房"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "佛山采房信息科技有限公司-房地产，佛山房产，房价咨询，楼盘，房价，买房，租房" }
    ], 
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ] 
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
     '~assets/common.scss',
     '~assets/iconfont.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios'
    
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */

  modules:[
    '@nuxtjs/axios'
  ],

  axios: {
       prefix: '/api/',
        //  proxy: true
  },

  proxy: {
         '/api/': {
         target: 'https://maoyan.com/',
           pathRewrite: {
             '^/api/': ''
           }
         }
   },


  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },


}
