import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

var moment = require('moment');
// lodash

// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


// end lodash

import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDunWkOmWTLmqOg9Y7osvoLZHO_QcbLXqI",
  authDomain: "phojie-747ba.firebaseapp.com",
  databaseURL: "https://phojie-747ba.firebaseio.com",
  projectId: "phojie-747ba",
  storageBucket: "phojie-747ba.appspot.com",
  messagingSenderId: "465315485600"
};
firebase.initializeApp(config);

import Notifications from 'vue-notification'
Vue.use(Notifications)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import FullCalendar from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'
Vue.use(FullCalendar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
