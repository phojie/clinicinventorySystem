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
    listofPatient: [],
    listofPrescriptions: [],
    listofAdmission: [],
    listofHistory: []
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
    },
    listofPatient(state) {
      return state.listofPatient
    },
    listofPrescriptions(state) {
      return state.listofPrescriptions
    },
    listofAdmission(state) {
      return state.listofAdmission
    },
    listofHistory(state) {
       return state.listofHistory
    }
  },
  mutations: {
    saveAccountDetails(state) {
      state.accountDetails = localStorage.getItem('accountDetails')
    },
    savelistofUsers(state,data) {
      // var filter = _.filter(data)
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
    savePatients(state,data) {
      state.listofPatient = data
    },
    savePrescriptions(state, data) {
      state.listofPrescriptions = data
    },
    saveAdmission(state) {
      firebase.database().ref('admissions').on('value', function(snapshot) {
         console.log(snapshot.val())
         state.listofAdmission = snapshot.val()
       })
    },
    saveHistory(state) {
      firebase.database().ref('patientsHistory').on('value', function(snapshot) {
         console.log(snapshot.val())
         state.listofHistory = snapshot.val()
       })
    }
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
      let vm = this
      var newPostKey = firebase.database().ref().child('appointments').push().key;
      // alert(newPostKey)
      var getnewRequest = firebase.database().ref().child('appointments/-LUNhtGrQnNXPF-VrneY')
      getnewRequest.on('child_changed', function(data) {
        console.log(data.val())
       
      })
    },
    getAs(context, state) {
      firebase.database().ref('acceptedAs').on('value', function(snapshot) {
        context.commit('saveAs', snapshot.val())
      })
    },
    getPatients(context, state) {
      firebase.database().ref('patients').on('value', function(snapshot) {
        context.commit('savePatients', snapshot.val())
      })
    },
    getPrescriptions(context,state) {
      firebase.database().ref('prescriptions').on('value', function(snapshot) {
        context.commit('savePrescriptions', snapshot.val())
      })
    }
  }
})

export default store
