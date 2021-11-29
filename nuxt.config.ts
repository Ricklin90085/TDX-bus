import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    script: [
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBK7JyVaeQRmzIohlbT5h0Ytbtdiuptzfk&v=weekly', defer: true }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&family=Noto+Sans+TC&display=swap' },
    ]
  },
  css: [
    '@/assets/css/windi.css', 
  ],
  buildModules: [
    'nuxt-windicss'
  ],
  windicss: {
    analyze: true
  }
})