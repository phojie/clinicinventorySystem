<template>
  <v-container grid-list-lg>
    <v-card full-width>
      <v-layout row wrap >
        <v-flex sm12 class="mb-5">
          <v-card-title>
            <div class="font-weight-black"> Pending list </div>
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
            :items="pedingAppointments"
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
                <v-chip small label color="amber " darken-2 text-color="white">
                <v-icon left>label</v-icon> Tomorrow
                </v-chip> 
              </td>
              <td v-else>
                <v-chip small label color="blue " darken-2 text-color="white">
                  <!-- <v-icon left>label</v-icon> -->
                  {{ props.item.adate }}
                </v-chip> 
              </td>
              <td class="text-xs-"> <span class="green--text text--darken-2">Dr.</span> {{ props.item.doctor }}</td>
              <td class="text-xs-">  {{ props.item.status }}</td>
              <td class="text-xs-center">
                <v-btn v-if="props.item.status == 'Pending'" @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View Form</v-btn> 
                <v-btn v-else @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View prescription code</v-btn> 
                <v-btn v-if="props.item.status != 'Admitted'" @click="admitDetails(props.item)" small  flat class="blue--text textNone caption"  text-color="" >Admit Patient</v-btn> 
              </td>
            </template>
            <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert> -->
          </v-data-table>

        </v-flex>

        <v-flex sm12 class="mb-5">
          <v-card-title>
            <div class="font-weight-black"> Admitted list </div>
            <v-spacer></v-spacer>
            <!-- <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field> -->
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="admittedAppoitments"
            :search="search"
           >
            <template v-if="props.item.status == 'Admitted'"  slot="items" slot-scope="props">
              <td class="text-xs-">{{ props.item.firstname }} {{ props.item.lastname }}</td>
              <td class="text-xs-" v-if="currentDay == props.item.adate"> 
                <v-chip small label color="green" text-color="white">
                <v-icon left>label</v-icon> Today
                </v-chip> 
              </td>
              <td class="text-xs-" v-else-if="next2day == props.item.adate"> 
                <v-chip small label color="amber " darken-2 text-color="white">
                <v-icon left>label</v-icon> Tomorrow
                </v-chip> 
              </td>
              <td v-else>
                <v-chip small label color="blue " darken-2 text-color="white">
                  <!-- <v-icon left>label</v-icon> -->
                  {{ props.item.adate }}
                </v-chip> 
              </td>
              <td class="text-xs-"> <span class="green--text text--darken-2">Dr.</span> {{ props.item.doctor }}</td>
              <td class="text-xs-">  {{ props.item.status }}</td>
              <td class="text-xs-center">
                <v-btn v-if="props.item.status == 'Pending'" @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View Form</v-btn> 
                <v-btn v-else @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View prescription code</v-btn> 
                <v-btn v-if="props.item.status != 'Admitted'" @click="admitDetails(props.item)" small  flat class="blue--text textNone caption"  text-color="" >Admit Patient</v-btn> 
              </td>
            </template>
            <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert> -->
          </v-data-table>

        </v-flex>

         <v-flex sm12 class="mb-5">
          <v-card-title>
            <div class="font-weight-black"> Done list </div>
            <v-spacer></v-spacer>
            <!-- <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field> -->
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="doneAppointments"
            :search="search"
           >
            <template v-if="props.item.status == 'Done'"  slot="items" slot-scope="props">
              <td class="text-xs-">{{ props.item.firstname }} {{ props.item.lastname }}</td>
              <td class="text-xs-" v-if="currentDay == props.item.adate"> 
                <v-chip small label color="green" text-color="white">
                <v-icon left>label</v-icon> Today
                </v-chip> 
              </td>
              <td class="text-xs-" v-else-if="next2day == props.item.adate"> 
                <v-chip small label color="amber " darken-2 text-color="white">
                <v-icon left>label</v-icon> Tomorrow
                </v-chip> 
              </td>
              <td v-else>
                <v-chip small label color="blue " darken-2 text-color="white">
                  <!-- <v-icon left>label</v-icon> -->
                  {{ props.item.adate }}
                </v-chip> 
              </td>
              <td class="text-xs-"> <span class="green--text text--darken-2">Dr.</span> {{ props.item.doctor }}</td>
              <td class="text-xs-">  {{ props.item.status }}</td>
              <td class="text-xs-center">
                <v-btn v-if="props.item.status == 'Pending'" @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View Form</v-btn> 
                <v-btn v-else @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View prescription code</v-btn> 
                <v-btn v-if="props.item.status != 'Admitted'" @click="admitDetails(props.item)" small  flat class="blue--text textNone caption"  text-color="" >Admit Patient</v-btn> 
              </td>
            </template>
            <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert> -->
          </v-data-table>

        </v-flex>




        <v-flex sm12>
          <v-card  flat>
          <v-card-title>
            <div class="font-weight-black">Appointments History</div>
            <v-spacer></v-spacer>
            <!-- <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field> -->
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="appointsHistory"
            :search="search"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-">{{ props.item.firstname }} {{ props.item.lastname }}</td>
              <td class="text-xs-" v-if="currentDay == props.item.adate"> 
                <v-chip small label color="green" text-color="white">
                <v-icon left>label</v-icon> Today
                </v-chip> 
              </td>
              <td>
                <v-chip small label color="grey" darken-2 text-color="white">
                  {{ props.item.adate }} 
                </v-chip> 
              </td>
              <td class="text-xs-"> <span class="green--text text--darken-2">Dr.</span> {{ props.item.doctor }}</td>
              <td class="text-xs-">  {{ props.item.status }}</td>
              <td class="">
                <v-btn @click="viewDetailsHistory(props.item)" small  flat class="green--text textNone caption"  text-color="" >View Form</v-btn> 
              </td>
            </template>
            <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert> -->
          </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
      </v-card>
    <v-dialog
      v-model="dialog"
      width="800"
      :persistent="clearedAct"
      >
      <v-container v-if="modelPatient.codecode != null" style="" class="mx-0 lighten-4 grey" grid-list-lg>
        <v-card-title class="mb-1">
          <div>
            <v-avatar tile size="50">
              <img src="https://img.icons8.com/ios/1600/1B5E20/pharmacy-filled.png">
            </v-avatar>
            <span class="headline">
              {{`${modelPatient.title}. ${modelPatient.firstname} ${modelPatient.lastname}`}}
            </span>
            </div>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-2" flat @click="dialog =false" >Close</v-btn>
        </v-card-title>
        <v-layout  row wrap justify-center >
          <v-card class="pa-5 mt-3">
            <div class="text-xs-center">
            <span class="title grey--text">Prescription code</span> <br>
            <span style="letter-spacing:5px !important" class="display-3 font-weight-black orange--text">{{modelPatient.codecode}}</span>
            </div>
          </v-card>
        </v-layout>
      </v-container>
      <v-container  v-if="clearedAct == true && modelPatient.codecode == null"  style="" class="mx-0 lighten-4 grey" grid-list-lg>
        <v-card-title class="mb-1">
          <div>
            <v-avatar tile size="50">
              <img src="https://img.icons8.com/ios/1600/1B5E20/pharmacy-filled.png">
            </v-avatar>
            <span class="headline">
              {{`${modelPatient.title}. ${modelPatient.firstname} ${modelPatient.lastname}`}}
            </span>
       
            </div>
          <v-spacer></v-spacer>
          <v-btn color="success darken-2"  flat @click="submitCleared" >Submit</v-btn>
          <v-btn color="primary darken-2"  flat @click="clearedAct = false" >Back</v-btn>
          <v-btn color="primary darken-2" flat @click="dialog =false" >Close</v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-layout wrap>
          <v-flex xs12>
            <v-layout class="pa-3" row wrap justify-end>

              <v-text-field  class="pr-2"  ref="prescribeIn" label="Enter medicine Name" v-model="prescribeIn">
              </v-text-field>
              <v-text-field class="pr-2" mask="########" label="Quantity" v-model="medicineIn">
              </v-text-field>
              <v-text-field  class="pr-2"  label="Strength" v-model="strengthIn">
              </v-text-field>
              <v-text-field  class="pr-2"  label="Description" v-model="descriptionIn">
              </v-text-field>
              <v-btn @click="submitPrescribe" large icon color="">
              <v-avatar
                size="40"
                color="blue"
              >
              <img src="https://img.icons8.com/ios/16000/ffffff/plus.png">
              </v-avatar>
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex class="px-2"  xs12>
            <div v-for="(pr, index) in prescribe" :key="index">
             <v-chip text-color="blue darken-3"  @input="remove(index)" close>{{index+1}}.</v-chip> <span class="blue--text">Medicine</span>: {{pr.Description}} <span class="green--text">({{pr.Quantity}})</span>,  <span class="blue--text">Strength</span>: {{pr.Strength}}, <span class="blue--text">Description</span>: {{pr.Description}} 
            </div>
          </v-flex>
      
        </v-layout>
       
       </v-container>

       <v-container  v-if="clearedAct == false  && modelPatient.codecode == null"  style="" class="mx-0 lighten-4 grey" grid-list-lg>
        <v-card-title class="mb-1">
          <span class="headline">Appointment Information</span>
          <v-spacer></v-spacer>
          <v-btn color="error darken-2" v-if="!historyForm" flat @click="cancelA" >Delete appointment</v-btn>
          <v-btn color="success darken-2" flat v-if="modelPatient.dummyDate != modelPatient.date" @click="updateA" >Save</v-btn>
          <v-btn color="error darken-2" v-if="historyForm" flat @click="cancelA" >Delete permanent</v-btn>
          <v-btn color="success darken-2"  v-if="!historyForm" flat @click="cleared" >Add Pres..</v-btn>
          <v-btn color="primary darken-2" flat @click="dialog = false" >Close</v-btn>
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
                  <!-- <v-date-picker
                    readonly
                    full-width
                    v-model="modelPatient.date"
                    @change="menu1 = false"
                  ></v-date-picker> -->
                <v-menu
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
                    label="Select your appointment day"
                    readonly
                  ></v-text-field>
                    <!-- :allowed-dates="testerf" -->
                  <v-date-picker
                    full-width
                    :min="minDate"
                    landscape
                    v-model="modelPatient.date"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-flex>
            </v-layout>
          </v-container>
    </v-dialog>

    <v-dialog
      v-model="dialogAdmit"
      width="800"
      >
       <v-container  style="" class="mx-0 lighten-4 grey" grid-list-lg>
        <v-card-title class="mb-1">
          <span class="headline">Patient Information</span>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-2" flat @click="dialogAdmit = false" >Close</v-btn>
          <v-btn color="success darken-2" flat @click="submitAdmit" > Admit</v-btn>

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
              <v-flex 
                xs12 sm4 d-flex>
                <v-text-field 
                  readonly
                  label="Doctor"
                  v-model="modelPatient.doctor"
                ></v-text-field>
              </v-flex>

              <v-flex 
                xs12 sm6 d-flex>
                <v-select
                  :error-messages="lectedRoomError"
                  @input="$v.modelPatient.lectedRoom.$touch()" @blur="$v.modelPatient.lectedRoom.$touch()" 
                  v-model="modelPatient.lectedRoom"
                  :items="['VIP Suite', 'Single Deluxe Room', 'Two-Bedded Room', 'Four-Bedded Room', 'Intensive Care Unit (ICU)', 'Isolation Room', 'Labour & Delivery Suite', 'Nursery']"
                  label="Select type of Rooms"
                ></v-select>
              </v-flex>
              <v-flex 
                xs12 sm6 d-flex>
                <v-select
                  @input="$v.modelPatient.lectedRoomNa.$touch()" @blur="$v.modelPatient.lectedRoomNa.$touch()" 
                  :error-messages="lectedRoomNaError"
                  v-model="modelPatient.lectedRoomNa"
                  :items="sars"
                  label="Select Available Rooms"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-textarea auto-grow label="Patient Description (Optional)" 
                  v-model="modelPatient.des"
                ></v-textarea>
              </v-flex>
              <!-- <v-flex xs12> -->
                  <!-- <v-date-picker
                    readonly
                    full-width
                    v-model="modelPatient.date"
                    @change="menu1 = false"
                  ></v-date-picker> -->
              <!-- </v-flex> -->
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
    modelPatient: {
      lectedRoom: {required},
      lectedRoomNa: {required},
    }
  },
  data() {
    return {
      medicineIn:'',
      descriptionIn: '',
      strengthIn: '',
      prescribeIn:'',

      validCode: '',
      prescribe:[],
      clearedAct: false,
      dialogAdmit: false,
      historyForm: false,
      menu1: false,
      dialog: false,
      search: '',
      headers: [
        { text: 'Name', value: 'firstname', sortable: true},
        { text: 'Date', value: 'adate',sortable: true},
        { text: 'Doctor', value: 'doctor',sortable: true},
        { text: 'Status', value: 'status',sortable: true},
        { text: 'Action', value: 'lastname',align: 'center',sortable: true},
      ],
      modelPatient: {
        codecode: '', 
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        cnumber:'',
        dummyDate:'',
        address1: '',
        address2: '',
        gender:'',
        age:'',
        des: '',
        typeD: '',
        doctor: '',
        date: '',
        keyIndex:'',
        lectedRoom: '',
        lectedRoomNa: '',
      }
    }
  },
  computed: {
    lectedRoomError() {
    this.modelPatient.lectedRoomNa = this.sars[0]
      const errors = []
        if (!this.$v.modelPatient.lectedRoom.$dirty) return errors
        !this.$v.modelPatient.lectedRoom.required && errors.push('Select type of Room')
        return errors
    },
    lectedRoomNaError() {
      const errors = []
        if (!this.$v.modelPatient.lectedRoomNa.$dirty) return errors
        !this.$v.modelPatient.lectedRoomNa.required && errors.push('Select Room name')
        return errors
    },
    minDate() {
      var today = moment()
      var format = today.add(2, 'days'); 
      return format.format('YYYY-MM-DD')
      // return   
    },
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
    doneAppointments() {
        var historyList = []
      _.forEach(this.myDone, function(data){
         // var event = a - b
        var today = moment().format("YYYY-MM-DD")
        var yesterday = data.adate
        var a = moment(today)
        var b = moment(yesterday)
        var event = b.diff(a, 'days', true)      
        var signVar = Math.sign(event)
        if(signVar != -1) {
					// console.log("​appointsHistory -> signVar", data)
          // go push
          historyList.push(data)
        }
      })
      return historyList
    },
     myDone() {
      var filter = _.filter(this.listofAppointments,['status', 'Done'])
      // var filter = _.filter(this.listofAppointments,['doctor', this.accountDetails.fn+' '+this.accountDetails.ln])
      // var filter = _.filter(this.listofAppointments,'doctor')
      // console.log("​myRequest -> filter", filter)
      return filter
    },
    myAdmitted() {
      var filter = _.filter(this.listofAppointments,['status', 'Admitted'])
      // var filter = _.filter(this.listofAppointments,['doctor', this.accountDetails.fn+' '+this.accountDetails.ln])
      // var filter = _.filter(this.listofAppointments,'doctor')
      // console.log("​myRequest -> filter", filter)
      return filter
    },
    admittedAppoitments() {
      var historyList = []
      _.forEach(this.myAdmitted, function(data){
         // var event = a - b
        var today = moment().format("YYYY-MM-DD")
        var yesterday = data.adate
        var a = moment(today)
        var b = moment(yesterday)
        var event = b.diff(a, 'days', true)      
        var signVar = Math.sign(event)
        if(signVar != -1) {
					// console.log("​appointsHistory -> signVar", data)
          // go push
          historyList.push(data)
        }
      })
      return historyList
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
      var filter = _.filter(this.listofAppointments,'doctor')
      // var filter = _.filter(this.listofAppointments,['doctor', this.accountDetails.fn+' '+this.accountDetails.ln])
      // var filter = _.filter(this.listofAppointments,'doctor')
      // console.log("​myRequest -> filter", filter)
      return filter
    },
    myPending() {
      var filter = _.filter(this.listofAppointments,['status', 'Pending'])
      // var filter = _.filter(this.listofAppointments,['doctor', this.accountDetails.fn+' '+this.accountDetails.ln])
      // var filter = _.filter(this.listofAppointments,'doctor')
      // console.log("​myRequest -> filter", filter)
      return filter
    },
    pedingAppointments() {
      var historyList = []
      _.forEach(this.myPending, function(data){
         // var event = a - b
        var today = moment().format("YYYY-MM-DD")
        var yesterday = data.adate
        var a = moment(today)
        var b = moment(yesterday)
        var event = b.diff(a, 'days', true)      
        var signVar = Math.sign(event)
        if(signVar != -1) {
					// console.log("​appointsHistory -> signVar", data)
          // go push
          historyList.push(data)
        }
      })
      return historyList
    },
    incompingAppointments() {
      var historyList = []
      _.forEach(this.myRequest, function(data){
         // var event = a - b
        var today = moment().format("YYYY-MM-DD")
        var yesterday = data.adate
        var a = moment(today)
        var b = moment(yesterday)
        var event = b.diff(a, 'days', true)      
        var signVar = Math.sign(event)
        if(signVar != -1) {
					// console.log("​appointsHistory -> signVar", data)
          // go push
          historyList.push(data)
        }
      })
      return historyList
    },
    appointsHistory() {
      var historyList = []
      _.forEach(this.myRequest, function(data){
         // var event = a - b
        var today = moment().format("YYYY-MM-DD")
        var yesterday = data.adate
        var a = moment(today)
        var b = moment(yesterday)
        var event = b.diff(a, 'days', true)      
        var signVar = Math.sign(event)
        if(signVar == -1) {
					// console.log("​appointsHistory -> signVar", data)
          // go push
          historyList.push(data)
        }
      })
      return historyList
    },
    getRooms () {
      return this.$store.getters.listofRooms
    },
    sars() {
      var data = []
      var filter = _.filter(this.getRooms, {'rmtype': this.modelPatient.lectedRoom, 'av': 1})
      _.forEach(filter, function(value) {
        data.push(`Rm- ${value.name}`)
      })
      // alert(this.modelPatient.lectedRoomNa)
      return data
    }
  },
  methods: {
    remove(data) {
      this.prescribe.splice(data, 1);
    },
    submitPrescribe() {
      if(this.prescribeIn != '')  {
        this.prescribe.push({
         Name: _.capitalize(this.prescribeIn),
         Description: _.capitalize(this.descriptionIn),
         Quantity: this.medicineIn,
         Strength:  _.capitalize(this.strengthIn),
        })
        this.prescribeIn = ''
        this.medicineIn= ''
        this.descriptionIn= ''
        this.strengthIn= ''
        this.$refs.prescribeIn.focus()
      }
    },
    submitCleared() {
      let vm = this
      vm.validCode = false
      var codeId1 = _.random(0, 9)
      var codeId2 = _.random(0, 9)
      var codeId3 = _.random(0, 9)
      var codeId4 = _.random(0, 9)
      var codeId5 = _.random(0, 9)
      var codeId6 = _.random(0, 9)
      var codeId = `${codeId1}${codeId2}${codeId3}${codeId4}${codeId5}${codeId6}`
      vm.modelPatient.codecode = codeId
      // var codeId = '229477'
      var getData = firebase.database().ref('prescriptions')
      getData.on('value', function(snapshot) {
        // console.log(snapshot.val())
        var filter = _.filter(snapshot.val(),['codeId',codeId])
        if(filter.length >= 1) {
          vm.validCode = false
        } else {
          vm.validCode = true
        }
      })
      if(vm.validCode == true) {
        var newPostKey = firebase.database().ref().child('prescriptions').push().key
        var newData = firebase.database().ref('prescriptions/'+newPostKey)
        newData.set({
          codeId: codeId,
          doctor: vm.accountDetails.fn + ' ' + vm.accountDetails.ln,
          userKey: vm.modelPatient.keyIndex,
          pData: vm.prescribe,
          fullname: vm.modelPatient.firstname + ' ' +vm.modelPatient.lastname,
          keyIndex: newPostKey,
          created: moment().format(),
        }, function(error){
          if(!error) {
            vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Success',
            text: `Account name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
            duration: 10000,
            })
            vm.prescribe = []
            vm.clearedAct = false
          }
        })
        var updateApp = firebase.database().ref().child('acceptedAs/'+vm.modelPatient.keyIndex)
        updateApp.update({
          status: 'Done',
          codecode: codeId
        })
     
      }

    },
    cleared() {
      let vm = this
      vm.clearedAct = true
    },
    submitAdmit() {
      let vm = this
      if(this.$v.modelPatient.$invalid) {
        this.$v.$touch()
      } else {
        var newPostKey = firebase.database().ref().child('admissions').push().key;
        var storageRef = firebase.storage().ref();
        var updateApp = firebase.database().ref().child('acceptedAs/'+vm.modelPatient.keyIndex)
        updateApp.update({
          status: 'Admitted'
        })
        var newAdmission = firebase.database().ref('admissions/'+newPostKey)
        newAdmission.set({
          title: vm.modelPatient.title ,
          firstname: vm.modelPatient.firstname ,
          lastname: vm.modelPatient.lastname ,
          email: vm.modelPatient.email ,
          des: vm.modelPatient.des ,
          cnumber: vm.modelPatient.cnumber ,
          address1: vm.modelPatient.address1 ,
          address2: vm.modelPatient.address2 ,
          gender: vm.modelPatient.gender ,
          age: vm.modelPatient.age ,
          typeD: vm.modelPatient.typeD ,
          doctor: vm.modelPatient.doctor ,
          date: vm.modelPatient.date ,
          keyIndex: newPostKey ,
          lectedRoom: vm.modelPatient.lectedRoom ,
          lectedRoomNa: vm.modelPatient.lectedRoomNa ,
        },
        function(error) {
          if(error) {
            vm.$notify({
              group: 'bottomright',
              type: 'error',
              title: 'Something is wrong',
              duration: 10000,
            })
          } else {
            vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully admitted',
            text: `Account name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
            duration: 10000,
            })
            vm.$v.modelPatient.$reset()
            vm.modelPatient= {
              title: '',
              firstname: '',
              lastname: '',
              email: '',
              cnumber:'',
              dummyDate:'',
              address1: '',
              address2: '',
              gender:'',
              des:'',
              age:'',
              typeD: '',
              doctor: '',
              date: '',
              keyIndex:'',
              lectedRoom: '',
              lectedRoomNa: '',
            }
            vm.dialogAdmit = false
          }
        })
        
      }
    },
    admitDetails(data) {
      this.historyForm = false
      this.dialogAdmit = true
      this.modelPatient= {
        title: data.title ,
        firstname: data.firstname ,
        lastname: data.lastname ,
        email: data.email ,
        cnumber: data.cnumber ,
        address1: data.address1 ,
        des: data.des,
        address2: data.address2 ,
        gender: data.gender ,
        age: data.age ,
        typeD:  data.typeD ,
        doctor:  data.doctor ,
        dummyDate: data.adate,
        date: data.adate ,
        keyIndex: data.keyIndex
      }
    },
    viewDetailsHistory(data) {
      this.historyForm = true
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
        des: data.des,
        codecode: data.codecode,
        doctor:  data.doctor ,
        dummyDate: data.adate,
        date: data.adate ,
        keyIndex: data.keyIndex
      }
    },
    viewDetails(data) {
      this.historyForm = false
      this.dialog = true
      this.modelPatient= {
        title: data.title ,
        firstname: data.firstname ,
        lastname: data.lastname ,
        email: data.email ,
        cnumber: data.cnumber ,
        address1: data.address1 ,
        address2: data.address2 ,
        des: data.des,
        gender: data.gender ,
        codecode: data.codecode,
        age: data.age ,
        typeD:  data.typeD ,
        doctor:  data.doctor ,
        dummyDate: data.adate,
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
        title: 'Appointment cancelled',
        text: `Full name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
        duration: 10000,
      })
    },
    updateA() {
      let vm = this
      if(this.$v.$invalid) {
        this.$v.$touch()
        console.log('err')
      } else {
        var updateDate = firebase.database().ref('acceptedAs/'+vm.modelPatient.keyIndex)
        updateDate.update({
          adate: vm.modelPatient.date,
        })
        vm.$notify({
          group: 'bottomright',
          type: 'success',
          title: 'Successfully updated an appointment',
          text: `Account name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
          duration: 10000,
        })
        vm.dialog= false
      }
    }
  }
}
</script>

<style>

</style>
