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
              src="https://img.icons8.com/office/1600/000000/medical-doctor.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span  class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> <router-link style="text-decoration:none;color:grey" to="Doctor">View / Manage now <v-icon color="orange" size="17">mdi-account-edit</v-icon></router-link> </span>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex xs12 md3>
      <v-card class="pa-3"  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div> Rooms </div>
              <div class="red--text font-weight-bold headline"> {{countRooms}} </div>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-avatar tile size="65">
            <v-img
              src="https://img.icons8.com/office/1600/000000/hospital-3.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span  class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> <router-link style="text-decoration:none;color:grey" to="Rooms">View / Manage now <v-icon color="red" size="17">mdi-account-edit</v-icon></router-link> </span>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex xs12 md3>
      <v-card class="pa-3 "  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div> Appointments </div>
              <div class="font-weight-bold amber--text headline"> {{countAppointments}} </div>
            </div>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-avatar tile size="69">
            <v-img
              src="https://img.icons8.com/office/1600/000000/property-time.png"
              height="115px"
              contain
            ></v-img>
          </v-avatar>
        </v-layout>
        <v-layout >
          <!-- <v-btn  flat color="red" :ripple="false" >Manage <v-icon>mdi-account-group</v-icon></v-btn> -->
          <v-spacer></v-spacer><span  class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> <router-link style="text-decoration:none;color:grey" to="Appointments">View / Manage now <v-icon color="amber" size="17">mdi-account-edit</v-icon></router-link> </span>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex xs12 md3>
      <v-card class="pa-3"  style="border-radius:5px"  >
        <v-layout align-center row wrap>
          <v-card-title primary-title>
            <div>
              <div> Employees</div>
              <div class="blue--text font-weight-bold headline"> {{countEmployee}} </div>
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
          <v-spacer></v-spacer><span  class="caption pr-3 pa-2 grey--text" style="cursor:pointer"> <router-link style="text-decoration:none;color:grey" to="Employees">View / Manage now <v-icon color="blue" size="17">mdi-account-edit</v-icon></router-link> </span>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-divider class="mb-3 transparent"></v-divider>
    </v-flex>

    <!-- <v-flex md8 xs12>
      <v-btn style="position:absolute;margin-top:30px;" class=" textNone flat blue darken-3 white--text" > <v-icon size="18" class="mr-1">mdi-calendar</v-icon> Calendar Schedule</v-btn>
      <full-calendar :config="config" :event-sources="eventSources"></full-calendar>
    </v-flex> -->

    <v-flex xs5 class="">
      <v-card full-width height="360">
        <v-card-title class="subheading font-weight-bold" primary-title>
          Doctors  in different department
        </v-card-title>
        <apexchart  type="pie" width="400"  :options="chartOptions" :series="percentagesDoc"></apexchart>
      </v-card>
    </v-flex>
    <v-flex xs7 >
      <apexchart  type="bar" width=600  :options="xaxis1" :series="series1"></apexchart>
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
// import VueApexCharts from 'apexcharts'

export default {
  data() {
    return {
      series1: [{
        name: 'Patients',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis1: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug','Sep','Nov','Oct','Dec']
      },
      chartOptions: {
        labels: ['Internal Doctor', 'Pediatrician', 'General Doctor', 'Obstercian'],
        // colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },

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
  // components: {
  //   apexchart: VueApexCharts
  // },
  computed: {
    listofUsers() {
      return this.$store.getters.listofUsers
    },
    countDoctor() {
      var getDoctor = _.filter(this.listofUsers,['type', 1])
      return getDoctor.length
    },
    percentagesDoc() {
      var getDoctor = _.filter(this.listofUsers,['type', 1])
      let vm = this
      var a = 0
      var b = 0
      var c = 0
      var d = 0
      _.forEach(getDoctor, function(value) {
        _.forEach(value.doctortype, function(data) {
          // console.log(data)
          if(data=='Internal Doctor'){
            a+=1
          } else if(data=='Pediatrician') {
            b+=1
          } else if(data=='General Doctor') {
            c+=1
          } else if(data=='Obstercian') {
            d+=1
          } else {
          }
        });
      });
      return [a,b,c,d]
    },
    countRooms() {
      var getRooms = _.filter(this.$store.getters.listofRooms,'keyIndex')
      return getRooms.length
    },
    countAppointments() {
      var getAppointers = _.filter(this.$store.getters.listofAs,'adate')
      return getAppointers.length
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
      var getEmployee2 = _.filter(this.$store.getters.listofUsers, ['type', 2])
      var getEmployee3 = _.filter(this.$store.getters.listofUsers, ['type', 3])
      var getEmployee4 = _.filter(this.$store.getters.listofUsers, ['type', 4])

      var Employee = _.unionWith(getEmployee2, getEmployee3, getEmployee4, _.isEqual);
      return Employee.length
    }

  }
}
</script>

<style>

</style>
