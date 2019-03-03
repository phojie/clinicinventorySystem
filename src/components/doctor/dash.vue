<template>
   <v-container grid-list-lg>
      <v-layout row wrap justify-center >
         <v-flex xs12>
            <span class="transparent--text">{{dateSetter}}</span>
            <v-flex xs12 >
               <v-menu
               ref="menu"
               v-model="menu"
               :close-on-content-click="false"
               :nudge-right="40"
               :return-value.sync="dates"
               lazy
               transition="scale-transition"
               offset-y
               full-width
               min-width="290px"
               >
               <template v-slot:activator="{ on }">
                  <v-combobox
                     v-model="dates"
                     multiple
                     color="green"
                     chips
                     small-chips
                     label="Day off"
                     prepend-icon="event"
                     readonly
                     v-on="on"
                  ></v-combobox>
               </template>
               <v-date-picker
                  v-model="dates" multiple no-title scrollable
                  color="green"
                  >
                  <v-spacer></v-spacer>
                  <v-btn flat color="green" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="green" @click="submitDay(dates)">OK</v-btn>
               </v-date-picker>
               </v-menu>
            </v-flex>
            <v-flex xs12 >
               <v-date-picker
               v-model="dates"
               readonly=""
               landscape=""
               full-width
               color="green"
               multiple
               ></v-date-picker>
            </v-flex>
         </v-flex>  
      </v-layout>
   </v-container>
</template>

<script>
   import moement from 'moment'
   import firebase from 'firebase'
   export default {
    data: () => ({
      menu: false,
      dates: [],
    }),
      // dates: ['2018-09-15', '2018-09-20'],
    methods: {
       submitDay(dates) {
         //  var union = _.union(dateSetter,dates);
          this.$refs.menu.save(dates)
          var post = firebase.database().ref('accountUser/'+this.accountDetails.keyIndex)
          post.update({
             dayoff: this.dates
          })
       }, 
    },
    computed: {
      
      listofUsers() {
        return this.$store.getters.listofUsers
      },
       dateSetter() {
          let data = []
          if(this.accountDetails) {
            _.forEach(this.accountDetails.dayoff, function(value, key) {
               data.push(value)
            })
          }
        
          
          this.dates = data
          return data
       },
      accountDetails() {
        var obUser = JSON.parse(localStorage.getItem('accountDetails') );
        var getDetails = _.filter(this.listofUsers,['keyIndex',obUser.keyIndex])
        // console.log(getDetails)
        // console.clear()

        return getDetails[0]
      },
    },
  }
</script>