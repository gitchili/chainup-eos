// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VDatePicker,
  VTimePicker,
  VPicker,
  VList,
  VBtn,
  VTextField,
  VIcon,
  VGrid,
  VToolbar,
  VCarousel,
  VCard,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/main.styl'

Vue.use(Vuetify, {

  /* my theme colors [#a69eb0, #efeff2, #f2e2cd, #dadae3, #000000, #D50000, #66BB6A   ] */
  theme: {
    primary: '#000000',
    accent: '#a69eb0',
    secondary: '#a69eb0',
    info: '#000000',
    warning: '#dadae3',
    error: '#D50000',
    success: '#66BB6A'
  },

  /* vuetify compenents */
  components: {
    VApp,
    VPicker,
    VDatePicker,
    VTimePicker,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VTextField,
    VIcon,
    VGrid,
    VToolbar,
    VCarousel,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyALpZbpcdZ0HLMg1KqkFZ1VTd6y_CJ32eU',
      authDomain: 'meetup-eos.firebaseapp.com',
      databaseURL: 'https://meetup-eos.firebaseio.com',
      projectId: 'meetup-eos',
      storageBucket: ''
    })
  }

})
