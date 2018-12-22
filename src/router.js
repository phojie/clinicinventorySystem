
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import firebase from 'firebase'

import lost from './views/404.vue'
import Login from './views/Login.vue'
import Dash from './views/Dash.vue'
import portal from './views/Portal.vue'

//admin
import Admin from './views/Admin.vue'
import adminDash from './components/admin/dash.vue'
import admission from './components/admin/admission.vue'
import dietary from './components/admin/dietary.vue'
import doctor from './components/admin/doctor.vue'
import employee from './components/admin/employee.vue'
import patient from './components/admin/patient.vue'
import room from './components/admin/room.vue'

//doctor
import vDoctor from './views/Doctor.vue'
import doctorDash from './components/doctor/dash.vue'
import doctorAppointments from './components/doctor/appointments.vue'
import doctorPatients from './components/doctor/patients.vue'
import doctorPM from './components/doctor/medical.vue'
import doctorRequest from './components/doctor/request.vue'
//
import accountNurse from './views/Nurse.vue'
import nurseDash from './components/nurse/dash.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'portal',
      component: portal,
    },
    {
      path: '/auth',
      name: 'login',
      component: Login,
    }, {
      path: '*',
      component: lost,
      // meta: {requiresAuth:true},
    }, {
      path: '/Administrator',
      component: Admin,
      meta: {requiresAuth:true},
      children: [
        {
          path: '/',
          component: adminDash,
        } ,
        {
          path: '/Admission',
          component: admission
        },
        {
          path: '/Doctor',
          component: doctor,
        },
        {
          path: '/Patient',
          component: patient
        },
        {
          path: '/Employees',
          component: employee,
        },
        {
          path: '/Dietary',
          component: dietary,
        },
        {
          path: '/Rooms',
          component: room
        }
      ]
    },{
      path: '/accountDoctor',
      component: vDoctor,
      meta: {requiresAuth:true},
      children: [
        {
          path: '/',
          component: doctorDash,
        },
        {
          path: '/doctorAppointments',
          component: doctorAppointments,
        },
        {
          path: '/doctorPM',
          component: doctorPM,
        },
        {
          path: '/doctorPatients',
          component: doctorPatients,
        },
        {
          path: '/doctorRequest',
          component: doctorRequest,
        }
      ]
    }, {
      path: '/accountNurse',
      component: accountNurse,
      meta: {requiresAuth:true},
      children: [
        {
          path: '/',
          component: nurseDash
        },
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const accountDetails = localStorage.getItem('accountDetails')
  // const objAccount = JSON.parse(accountDetails);
  if(JSON.parse(accountDetails) == null) {
    var objAccount = []
    objAccount.push({
      type:-1
    })
  } else {
  var objAccount = JSON.parse(accountDetails);
  }
  // const accountDetails = store.getters.accountDetails
  if (requiresAuth && !accountDetails) {
    next({
      path: '/auth',
      query: { redirect: to.fullPath }
    })
  } else if (to.path == '/auth' && accountDetails) {
    next('/')
  } else {
    next() // make sure to always call next()!
    // console.log(objAccount.type)
    if(objAccount.type == 0) {
      if(to.path == '/Admission') {
        next('/Admission')
      } else if(to.path == '/Doctor'){
        next('/Doctor')
      }
      else if(to.path == '/Patient'){
        next('/Patient')
      } 
      else if(to.path == '/Employees'){
        next('/Employees')
      } 
      else if(to.path == '/Dietary'){
        next('/Dietary')
      } 
      else if(to.path == '/Rooms'){
        next('/Rooms')
      } else if(to.path == '/Administrator') {
        next('/Administrator')
      } else {
        next('/Administrator')
      }
    } else if(objAccount.type == 1){
      // doctor
      if(to.path == '/accountDoctor') {
        next('/accountDoctor')
      } else if(to.path == '/doctorAppointments'){
        next('/doctorAppointments')
      }
      else if(to.path == '/doctorPatients'){
        next('/doctorPatients')
      } 
      else if(to.path == '/doctorPM'){
        next('/doctorPM')
      } else if(to.path == '/doctorRequest'){
        next('/doctorRequest')
      } else {
        next('/accountDoctor')
      }
    } else if(objAccount.type == 2) {
      // nurse
      next('/accountNurse')
    } else if(objAccount.type == 3) {
      // pharmacist
      next('/accountPharmacist')
    }else {
      next()
    }
  }
});

export default router;


// if(requiresAuth) {
//   if(!accountDetails) {
//     next({
//       path: '/auth',
//       query: {
//         redirect: to.fullPath
//       }
//     })
//     console.log(firebase.auth().currentUser)
//   } else {
//     next()
//   }
// } else if(requiresGuest) {
//   if(accountDetails) {
//     next({
//       path: '/',
//       query: {
//         redirect: to.fullPath
//       }
//     })
//   } else {
//     next()
//   }