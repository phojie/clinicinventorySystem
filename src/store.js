import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import Router from 'vue-router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    accountDetails: localStorage.getItem('accountDetails') || null,
    listofUsers: [],
    listofRooms: [],
    listofAppointments: [],
    listofAs: [],
  },
  getters: {
    accountDetails(state) {
      return state.accountDetails
    },
    listofUsers(state) {
      return state.listofUsers
    },
    listofRooms(state) {
      return state.listofRooms
    },
    listofAppointments(state) {
      return state.listofAppointments
    },
    listofAs(state) {
      return state.listofAs
    }
  },
  mutations: {
    saveAccountDetails(state) {
      state.accountDetails = localStorage.getItem('accountDetails')
    },
    savelistofUsers(state,data) {
      state.listofUsers = data
    },
    saveRooms(state,data) {
      state.listofRooms = data
    },
    saveAppointments(state,data) {
      state.listofAppointments = data
    },
    saveAs(state,data) {
      state.listofAs = data
    },
  },
  actions: {
    getAccountUser(context,state) {
      firebase.database().ref('accountUser').on('value', function(snapshot) {
        // console.log(snapshot.val())
        context.commit('savelistofUsers', snapshot.val())
      })
    },
    getRooms(context, state) {
      firebase.database().ref('rooms').on('value', function(snapshot) {
        context.commit('saveRooms', snapshot.val())
      })
    },
    getAppointments(context, state) {
      firebase.database().ref('appointments').on('value', function(snapshot) {
        context.commit('saveAppointments', snapshot.val())
      })
    },
    getAs(context, state) {
      firebase.database().ref('acceptedAs').on('value', function(snapshot) {
        context.commit('saveAs', snapshot.val())
      })
    }
  }
})

export default store
