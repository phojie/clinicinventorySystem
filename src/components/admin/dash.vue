<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex xs12 md3>
      <v-card class="pa-3 "  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div>Doctor</div>
              <div class="orange--text font-weight-bold headline"> {{countDoctor}} </div>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-avatar tile size="72">
            <v-img
              src="https://img.icons8.com/office/1600/000000/doctor-female.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> View / Manage now <v-icon color="orange" size="17">mdi-account-edit</v-icon></span>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex xs12 md3>
      <v-card class="pa-3"  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div> Nurse</div>
              <div class="red--text font-weight-bold headline"> {{countNurse}} </div>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-avatar tile size="73">
            <v-img
              src="https://img.icons8.com/office/1600/000000/nurse-male.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> View / Manage now <v-icon color="red" size="17">mdi-account-edit</v-icon></span>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex xs12 md3>
      <v-card class="pa-3 "  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div> Pharmacist </div>
              <div class="font-weight-bold blue--text headline"> {{countPharmacist}} </div>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-avatar tile size="71">
            <v-img
              src="https://img.icons8.com/office/1600/000000/pharmacist.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span to="/Doctor" class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> View / Manage now <v-icon color="blue" size="17">mdi-account-edit</v-icon></span>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex xs12 md3>
      <v-card class="pa-3"  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div> Employees</div>
              <div class="green--text font-weight-bold headline"> {{countEmployee}} </div>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-avatar tile size="70">
            <v-img
              src="https://img.icons8.com/office/1600/000000/exhibitor.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> View / Manage now <v-icon color="green" size="17">mdi-account-edit</v-icon></span>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-divider class="mb-3 transparent"></v-divider>
    </v-flex>
    <v-flex md8 xs12>
      <v-btn style="position:absolute;margin-top:30px;" class=" textNone flat blue darken-3 white--text" > <v-icon size="18" class="mr-1">mdi-calendar</v-icon> Calendar Schedule</v-btn>
      <full-calendar :config="config" :event-sources="eventSources"></full-calendar>
    </v-flex>

    <v-flex md4 xs12>
      <v-card height="300px">
      </v-card>
    </v-flex>
  </v-layout>

  <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
    <v-flex xs12>
      <v-spacer></v-spacer><v-btn @click="dialog = false">Close</v-btn>
    </v-flex>
    <full-calendar :event-sources="eventSources"></full-calendar>
  </v-card>
  </v-dialog> -->

  </v-container>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      dialog: false,
      eventSources: [
        { 
          events: [
            {
                title  : 'event1',
                allDay: true,
                start: moment(),
                end: moment().add(2, "d")
            },
            {
                title  : 'event2',
                allDay: true,
                start: moment(),
                end: moment().add(2, "d"),
                color: 'green',
            },
            {
                title  : 'event3',
                start  : '2010-01-09T12:30:00',
                allDay : true,
            },
          ],
          textColor: 'white',
        }
      ],
      config: {
        defaultView: "",
      },
    }
  },
  computed: {
    listofUsers() {
      return this.$store.getters.listofUsers
    },
    countDoctor() {
      var getDoctor = _.filter(this.listofUsers,['type', 1])
      return getDoctor.length
    },
    countNurse() {
      var getNurse = _.filter(this.listofUsers,['doctortype', 'Nurse'])
      return getNurse.length
    },
    countPharmacist() {
      var getPharma = _.filter(this.listofUsers,['doctortype', 'Pharmacist'])
      return getPharma.length
    },
    countEmployee() {
      var getEmploy = _.filter(this.listofUsers,['type', 4])
      return getEmploy.length
    }

  }
}
</script>

<style>

</style>
