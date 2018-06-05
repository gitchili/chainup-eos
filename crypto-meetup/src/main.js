// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/main.styl'

Vue.use(Vuetify, {

  /* my theme colors [#a69eb0, #efeff2, #f2e2cd, #dadae3, #000000, #D50000, #66BB6A   ] */
  theme: {
    primary: '#000000',
    accent: '#a69eb0',
    secondary: '#efeff2',
    info: '#f2e2cd',
    warning: '#dadae3',
    error: '#D50000',
    success: '#66BB6A'
  },

  /* vuetify compenents */
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
