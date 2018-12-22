<template>
  <div>test
    <v-btn class="error" @click="logoutAccount">logout</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
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
    }
  },
}
</script>
