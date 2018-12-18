import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyALo585DXEy18Wu4HLdBbVDMtTq5YFyFMY",
  authDomain: "clinic-system-d3b2a.firebaseapp.com",
  databaseURL: "https://clinic-system-d3b2a.firebaseio.com",
  projectId: "clinic-system-d3b2a",
  storageBucket: "clinic-system-d3b2a.appspot.com",
  messagingSenderId: "831293173167"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
