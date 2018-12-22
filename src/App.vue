<template>
  <v-app>
    <transition
      name="custom-classes-transition"
    >
      <!-- leave-active-class="animated slideOutLeft" -->
      <!-- enter-active-class="animated tada" -->
      <router-view/>
    </transition>
    <notifications group="bottomright" position="bottom right" />
    <notifications group="topright" />
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
      this.$store.dispatch('getAs')
      // console.clear()
    }
  }
</script>
