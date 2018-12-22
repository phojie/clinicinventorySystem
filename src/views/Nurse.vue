<template>
  <v-app
    id="inspire"
  >
    <v-navigation-drawer
      v-model="drawer"
      dark
      width="250"
      app
    >
      <v-layout justify-center class="mt-3 mr-1">
        <v-avatar color="white" size="100">
          <img src="https://img.icons8.com/color/1600/000000/nurse-female.png">
        </v-avatar>
      </v-layout>
      <v-layout justify-center class="mt-4 mr-1">
        <span class="title white--text"> Nurse Panel</span>
      </v-layout>
      <v-divider class="mt-4 mx-4 green" ></v-divider>
      <v-list dense class="">
        <v-card class="pa-4" flat width="250">
        <v-btn  class="textNone caption transparent" exact-active-class="green"  depressed block to="accountDoctor">
          <v-list-tile-action>
            <v-avatar size="21">
              <img src="https://img.icons8.com/ios/50/ffffff/services-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Dashboard
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>


        <v-subheader class="mt-3 green--text">MANAGE</v-subheader>

          <v-btn  class="textNone caption transparent" exact-active-class="green"  depressed block to="/doctorAppointments">
          <v-list-tile-action>
            <v-avatar tile size="21">
              <img src="https://img.icons8.com/ios/50/ffffff/calendar-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Appointments
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <v-btn  class="textNone caption transparent" exact-active-class="green"  depressed block to="/doctorPatients">
          <v-list-tile-action>
            <v-avatar size="21">
              <img src="https://img.icons8.com/ios/50/ffffff/hospital-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Patient
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/doctorPM">
          <v-list-tile-action>
            <v-avatar size="22">
              <img src="https://img.icons8.com/windows/80/ffffff/caduceus-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Prescribe Medicine
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

        </v-card>
    
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      flat
      style="border-bottom:1px solid #607d8b17 !important"
      color="white"
      app
      fixed
      >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-icon class="mx-3">fab fa-youtube</v-icon> -->
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Asentista Doctors Hospital </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     
      <!-- <v-menu left offset-y >
        <v-btn  
        dark
        small
        class="green lighten-2 caption"
        slot="activator" flat >
        Create / Add
        <v-icon size="18" class="">mdi-menu-down</v-icon>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="dialogDoctor = true">
            <v-list-tile-title style="font-size:12px"> <v-icon small color="green darken-3">mdi-account-plus </v-icon> Doctor </v-list-tile-title>
          </v-list-tile>
          <v-list-tile  @click="openNurseDialog">
            <v-list-tile-title style="font-size:12px"><v-icon small color="green darken-3">mdi-account-plus  </v-icon> Nurse / Pharmacist</v-list-tile-title>
          </v-list-tile>
          <v-list-tile  @click="openEmployeeDialog">
            <v-list-tile-title style="font-size:12px"><v-icon small color="green darken-3">mdi-account-plus  </v-icon> Other Employee </v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu> -->
   
      <v-btn :ripple="false" flat outline small class="caption grey--text textNone transparent"  >
        <v-icon size="18" class="mr-2">mdi-chart-line</v-icon>
        Stats
      </v-btn>
      <v-btn :ripple="false" flat outline small class="caption grey--text textNone transparent"  >
        <v-icon size="18" class="mr-2">mdi-bell</v-icon>
        5 Notifications
      </v-btn>
      <v-btn :ripple="false" flat outline small class="caption grey--text textNone transparent"  >
        <v-icon size="18" class="mr-2">person</v-icon>
        {{accountDetails.fn}} {{accountDetails.ln}}
      </v-btn>
      <!-- <v-divider vertical  inset class=""></v-divider> -->
      <v-menu left offset-y min-width="140">
        <v-btn  
        slot="activator" icon large>
        <v-avatar size="32px" >
          <img
            :src="accountDetails.profile"
            alt="Profile"
          >
        </v-avatar>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="test">
            <v-list-tile-title style="font-size:12px"> <v-icon small color="blue darken-3">mdi-account-circle-outline </v-icon> Account</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="test">
            <v-list-tile-title style="font-size:12px"><v-icon small color="blue darken-3">mdi-settings-outline </v-icon> Settings</v-list-tile-title>
          </v-list-tile>
           <v-list-tile @click="logoutAccount">
            <v-list-tile-title style="font-size:12px"><v-icon small color="blue darken-3">mdi-logout-variant </v-icon> Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
    </v-toolbar>
    <v-content >
      <!-- <v-container fill-height> -->
        <router-view/>
      <!-- </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
     
    }),
    props: {
      source: String
    },
    computed: {
      accountDetails() {
        var obUser = JSON.parse(localStorage.getItem('accountDetails') );
        // console.log(obUser.profilePic)
        return obUser
      },
    },
    methods: {
      logoutAccount() {
      let vm = this
      try {
        localStorage.removeItem("accountDetails");
      } catch(error) {
        alert('something is wrong!')
      } finally {
        vm.$router.push({
          path:'/auth',
        })
      }
    },
    test() {

    }
  }
  }
</script>