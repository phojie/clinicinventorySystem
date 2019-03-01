<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Admission List </div>
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
        :items="listofAdmission"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-"><span class="font-weight-black">{{props.item.title}}.</span> {{ props.item.firstname }} {{ props.item.lastname }}</td>
          <td class="text-xs-">{{ props.item.cnumber }}</td>
          <td class="text-xs-">{{ props.item.email }}</td>
          <td class="text-xs- font-weight-black blue--text text--darken-3">{{ props.item.date }}</td>
          <td class="">
            <v-btn @click="viewDetails(props.item)" small  flat class="green--text textNone caption"  text-color="" >View Form</v-btn> 
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
          <span class="headline">Admission Information</span>
          <v-spacer></v-spacer>
          <!-- <v-btn color="error darken-2" flat @click="declineA" >Decline</v-btn>
          <v-btn color="success darken-2" flat @click="acceptA" >Accept</v-btn> -->
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
               <v-flex xs4   >
                <v-text-field 
                  readonly
                  v-model="modelPatient.lectedRoom" type="text" label="Room type"></v-text-field>
              </v-flex>
              <v-flex  xs4 >
                <v-text-field 
                  readonly
                  v-model="modelPatient.lectedRoomNa" type="text" label="Room name"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
    </v-dialog>
  </v-container>
</template>

<script>
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
        { text: 'Name', value: 'firstname', sortable: true},
        { text: 'Phone', value: 'cnumber', sortable: true},
        { text: 'Email', value: 'email', sortable: true},
        { text: 'Date', value: 'adate',sortable: true},
        { text: 'Action', value: 'lastname',sortable: true},
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
        lectedRoom: '',
        lectedRoomNa: '',
      }
    }
  },
  computed: {
    accountDetails() {
        var obUser = JSON.parse(localStorage.getItem('accountDetails') );
        // console.log(obUser.profilePic)
        return obUser
    },
    listofAdmission() {
       var data = _.filter(this.$store.getters.listofAdmission,'doctor')
      return data
    },
    myRequest() {
      var filter = _.filter(this.listofAppointments,'doctor')
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
        date: data.date ,
        keyIndex: data.keyIndex,
        lectedRoom: data.lectedRoom,
        lectedRoomNa: data.lectedRoomNa,
      }
    },
    acceptA() {
      let vm = this
      var newPostKey = firebase.database().ref().child('acceptedAs').push().key;
      var submitA = firebase.database().ref('acceptedAs/'+newPostKey)
      submitA.set({
        keyIndex: newPostKey,
        title: vm.modelPatient.title ,
        firstname: vm.modelPatient.firstname ,
        lastname: vm.modelPatient.lastname ,
        email: vm.modelPatient.email ,
        cnumber: vm.modelPatient.cnumber ,
        address1: vm.modelPatient.address1 ,
        address2: vm.modelPatient.address2 ,
        gender: vm.modelPatient.gender ,
        age: vm.modelPatient.age ,
        typeD:  vm.modelPatient.typeD ,
        doctor:  vm.modelPatient.doctor ,
        adate: vm.modelPatient.date ,
        status: 'Pending'
      })
      firebase.database().ref('appointments/'+vm.modelPatient.keyIndex).remove()
      vm.dialog= false
      vm.$notify({
        group: 'bottomright',
        type: 'success',
        title: 'Verified successfully',
        text: `Full name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
        duration: 10000,
      })
    },
    declineA() {
      let vm = this
      firebase.database().ref('appointments/'+vm.modelPatient.keyIndex).remove()
      vm.dialog= false
      vm.$notify({
        group: 'bottomright',
        type: 'error',
        title: 'Decline successfully',
        text: `Full name: ${_.capitalize(vm.modelPatient.firstname)} ${_.capitalize(vm.modelPatient.lastname)}` ,
        duration: 10000,
      })
    }
  },
}
</script>

<style>

</style>
