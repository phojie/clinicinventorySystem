<template>
  <v-app>
    <v-layout class="bgLandingjie">
      <!-- <v-flex class="white--text" lg7 md6 hidden-sm-and-down>
        <v-container class="ml-5" style="height:100%">
          <v-layout align-center justify-center row fill-height>
            <v-card-title primary-title>
              <div>
                <div style='letter-spacing:3px !important;' class="display-3 light-green--text font-weight-black">Asentista Doctors Hospital</div>
                <div style='letter-spacing:2px !important;' class="body-1 font-weight-bold">Hospital in Lala, Lanao del Norte</div>
                <v-divider class="my-2" style="border-color:white !important"></v-divider>
                <div style='letter-spacing:1px !important;' class="font-weight-bold subheading">The tool that saves your time and stress with managing your patient and services.</div>
              </div>
            </v-card-title>
          </v-layout>
        </v-container>
      </v-flex> -->
      <!-- <v-flex lg5 md6 sm12> -->
      <v-flex lg12>
        <v-layout column wrap justify-center fill-height align-center>
          <v-card class="pa-4" style="position:relative !important;" >
            <v-container>
            <!-- <v-layout justify-center>
              <v-avatar color="indigo">
                <v-icon dark>mdi-circle-outline</v-icon>
              </v-avatar>
            </v-layout> -->
            <div class="mb-4 text-xs-center">
                <div class="display-1 font-weight-black"><span class="black--text text--darken-2">Asentista Hospital</span></div>
                <span class="body-2 font-weight-bold grey--text text--darken-2 " style="letter-spacing:3px"> Sign In</span>
            </div>
            <LoginFrame/>
            <span class="mt-2 caption font-weight-regular grey--text " style="letter-spacing:1px"> &copy; {{ new Date().getFullYear() }} Ckcm College of <span class="light-green--text text--darken-2">Computer Science</span></span>
            </v-container>
          </v-card>
        </v-layout>
        
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import LoginFrame from '../components/LoginFrame'
  export default {
    data: () => ({
    }),
    components: {
      LoginFrame
    }
    
  }
</script>
