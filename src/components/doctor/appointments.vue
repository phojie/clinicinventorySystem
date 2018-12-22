<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Appointment List</div>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="myRequest"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-">{{ props.item.firstname }} {{ props.item.lastname }}</td>
          <td class="text-xs-" v-if="currentDay == props.item.adate"> 
            <v-chip small label color="green" text-color="white">
             <v-icon left>label</v-icon> Today
            </v-chip> 
          </td>
          <td class="text-xs-" v-else-if="next2day == props.item.adate"> 
            <v-chip small label color="amber lighten-2" darken-2 text-color="white">
             <v-icon left>label</v-icon> Tomorrow
            </v-chip> 
          </td>
          <td v-else>
            <v-chip small label color="blue lighten-3" darken-2 text-color="white">
              <v-icon left>label</v-icon>
              {{ props.item.adate }}
            </v-chip> 
          </td>
          <td class="text-xs- warning--text text--darken-1" v-if="props.item.status == 'Pending'" >{{ props.item.status }}...</td>
          <td class="text-xs- green--text text--darken-2" v-else >{{ props.item.status }}</td>
          <td class="">
            <!-- <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              view
            </v-icon> -->
            <v-chip @click="viewDetails(props.item)" small flat  color="light-green lighten-4" text-color="green" >View Form</v-chip> 
          </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>

   <v-dialog
      v-model="dialog"
      width="800"
    >
       <v-container  style="" class="mx-0 lighten-4 grey" grid-list-lg>
        <v-card-title class="mb-1">
          <span class="headline">Appointment Information</span>
          <v-spacer></v-spacer>
          <v-btn color="error darken-2" flat @click="cancelA" >Cancel Appointment</v-btn>
        </v-card-title>
            <v-layout wrap>
              <v-flex xs12 sm1 d-flex>
                <v-select
                  :items="['Mr','Mrs','Ms','Fr','Sr','Reve.','Dr']"
                  label="Title"
                  readonly
                  v-model="modelPatient.title"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <v-text-field 
                  readonly
                  v-model="modelPatient.firstname" label="First name"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md3>
                <v-text-field 
                  readonly
                  v-model="modelPatient.lastname" label="Last name"></v-text-field>
              </v-flex>
             
              <v-flex xs12 sm6 md5>
                <v-text-field v-model="modelPatient.email"
                  readonly
                  label="E-mail">
                </v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-text-field 
                  readonly
                  v-model="modelPatient.cnumber" label="Phone #"></v-text-field>
              </v-flex>

               <v-flex xs12 sm4 >
                <v-text-field 
                  readonly
                  v-model="modelPatient.address1" label="Address Line 1"></v-text-field>
              </v-flex>

              <v-flex xs12 sm4 >
                <v-text-field 
                  readonly
                  v-model="modelPatient.address2" label="Address Line 2"></v-text-field>
              </v-flex>
              <v-flex xs12 sm2 d-flex>
                <v-select
                  readonly
                  v-model="modelPatient.gender"
                  :items="['Male','Female']"
                  label="Gender"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2 >
                <v-text-field 
                  readonly
                  v-model="modelPatient.age" type="number" label="Age"></v-text-field>
              </v-flex>
              <v-flex 
                xs12 sm4 d-flex>
                <v-text-field 
                  readonly
                  label="Type of doctor selected"
                  v-model="modelPatient.typeD"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <!-- <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  full-width
                  max-width="700"
                  max-height="500"
                >
                  <v-text-field
                    prepend-icon="event"
                    slot="activator"
                    v-model="modelPatient.date"
                    clearable
                    label="Selected appointment day"
                    
                    readonly
                  ></v-text-field> -->
                  <v-date-picker
                    readonly
                    full-width
                    v-model="modelPatient.date"
                    @change="menu1 = false"
                  ></v-date-picker>
                <!-- </v-menu> -->
              </v-flex>
            </v-layout>
          </v-container>
    </v-dialog>
  </v-container>
</template>

<script>
  import moment from 'moment'
  import firebase from 'firebase'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
  export default {
  mixins: [validationMixin],
  validations: {
    doctorsDetailsProfile: {
    
    }
  },
  data() {
    return {
      dialog: false,
      search: '',
      headers: [
        { text: 'Name', value: 'firstname', sortable: false},
        { text: 'Date', value: 'adate',sortable: false},
        { text: 'Status', value: 'status',sortable: false},
        { text: 'Action', value: 'lastname',sortable: false},
      ],
      modelPatient: {
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        cnumber:'',
        address1: '',
        address2: '',
        gender:'',
        age:'',
        typeD: '',
        doctor: '',
        date: '',
        keyIndex:'',
      }
    }
  },
  computed: {
    currentDay() {
      var tday = moment().format('YYYY-MM-DD')
			// console.log("​currentDay -> tday", tday)
      return tday
    },
    next2day() {
      var today = moment()
      var format = today.add(1, 'days'); 
      return format.format('YYYY-MM-DD')
    },
    accountDetails() {
        var obUser = JSON.parse(localStorage.getItem('accountDetails') );
        // console.log(obUser.profilePic)
        return obUser
    },
    listofAppointments() {
      return this.$store.getters.listofAs
    },
    myRequest() {
      var filter = _.filter(this.listofAppointments,['doctor', this.accountDetails.fn+' '+this.accountDetails.ln])
      return filter
    }
  },
  methods: {
    viewDetails(data) {
      this.dialog = true
      this.modelPatient= {
        title: data.title ,
        firstname: data.firstname ,
        lastname: data.lastname ,
        email: data.email ,
        cnumber: data.cnumber ,
        address1: data.address1 ,
        address2: data.address2 ,
        gender: data.gender ,
        age: data.age ,
        typeD:  data.typeD ,
        doctor:  data.doctor ,
        date: data.adate ,
        keyIndex: data.keyIndex
      }
    },
    cancelA() {
      let vm = this
      firebase.database().ref('acceptedAs/'+vm.modelPatient.keyIndex).remove()
      vm.dialog= false
      vm.$notify({
        group: 'bottomright',
        type: 'error',
        title: 'Cancel successfully',
        text: `Full name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
        duration: 10000,
      })
    },
  }
}
</script>

<style>

</style>
