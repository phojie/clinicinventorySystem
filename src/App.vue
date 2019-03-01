<template>
  <v-app>
    <transition
      name="custom-classes-transition"
    >
      <!-- leave-active-class="animated slideOutLeft" -->
      <!-- enter-active-class="animated tada" -->
      <router-view/>
    </transition>
    <notifications group="topright" position="top right" />
    <notifications group="bottomright" position="bottom right" />
    <notifications group="topcenter" position="top center" />
    <notifications group="bottomcenter" position="bottom center" />
    


  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
      }
    },
    created() {
      this.$store.dispatch("getRooms")
      this.$store.dispatch('getAccountUser')
      this.$store.dispatch('getAppointments')
      this.$store.dispatch('getPatients')
      this.$store.dispatch('getPrescriptions')
      this.$store.dispatch('getAs')
      this.$store.commit('saveAdmission')
      this.$store.commit('saveHistory')


      // console.clear()
      
      var myhost = window.location.hostname
      console.log(myhost)
      
      if(myhost != 'account.asentista.gq') {
        this.$router.push('/')
      } else {
        this.$router.push('/auth')
      }
    }, 
    mounted() {
      // window.location.href returns the href (URL) of the current page.
      // window.location.hostname returns the domain name of the web host.
      // window.location.pathname returns the path and filename of the current page.
      // window.location.protocol returns the web protocol used (http: or https:)
      // window.location.assign loads a new document.
    }
  }
</script>
