<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Patient's List</div>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-btn @click="newRoomdialog" color="primary" dark class="mb-2">New Patient</v-btn>
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
        :items="indexPatients"
        :search="search"
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td><span class="font-weight-bold">{{ props.item.name }}</span> </td>
            <td class="">{{ props.item.rmtype }}</td>
            <td class="">{{ props.item.email }}</td>
            <td class="">{{ props.item.age }}</td>
            <td class="">{{ props.item.gender }}</td>
            <!-- <td class=""> <v-chip small color="blue lighten-5" text-color="blue" > ₱ {{props.item.charges}}</v-chip> </td> -->
            <td class="justify-center ">
               <v-icon
                  class=" mr-2"
                  @click="unconfined(props.item)"
               >
                logout
              </v-icon>
              <v-icon
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
          </td>
        </tr>
      </template>
      <template  slot="expand" slot-scope="props">
        <v-card class="px-4" flat v-if="props.item.des != ''">
          <v-card-title class="blue--text">Patient Description</v-card-title>
          <v-card-text > {{props.item.des}}</v-card-text>
        </v-card>
        <v-card class="px-4" v-else>
          <v-card-title class="error--text">No Description added</v-card-title>
        </v-card>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>

   <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Patient's History</div>
      
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search2"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers2"
        :items="indexHistoryP"
        :search="search2"
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td><span class="font-weight-bold">{{ props.item.name }}</span> </td>
            <td class="">{{ props.item.rmtype }}</td>
            <td class="">{{ props.item.email }}</td>
            <td class="">{{ props.item.age }}</td>
            <td class="">{{ props.item.gender }}</td>
            <!-- <td class=""> <v-chip small color="blue lighten-5" text-color="blue" > ₱ {{props.item.charges}}</v-chip> </td> -->
         
        </tr>
      </template>
      <template  slot="expand" slot-scope="props">
        <v-card class="px-4" flat v-if="props.item.des != ''">
          <v-card-title class="blue--text">Patient Description</v-card-title>
          <v-card-text > {{props.item.des}}</v-card-text>
        </v-card>
        <v-card class="px-4" v-else>
          <v-card-title class="error--text">No Description added</v-card-title>
        </v-card>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>

  <!-- dialog area -->
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline textCapital" v-if="patientDetails.name != ''">{{patientDetails.name}}'s Profile</span>
        <span class="headline" v-if="patientDetails.name == ''"> New Patient </span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 >
              <v-text-field label="Patient name" :error-messages="nameError" v-model="patientDetails.name"
              @input="$v.patientDetails.name.$touch()" @blur="$v.patientDetails.name.$touch()" 
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                :items="['VIP Suite', 'Single Deluxe Patient', 'Two-Bedded Patient', 'Four-Bedded Patient', 'Intensive Care Unit (ICU)', 'Isolation Patient', 'Labour & Delivery Suite', 'Nursery']"
                label="Room type"
                @input="$v.patientDetails.rmtype.$touch()" @blur="$v.patientDetails.rmtype.$touch()" 
                :error-messages="rmtypeError"
                v-model="patientDetails.rmtype"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm6 >
              <v-text-field label="Email" :error-messages="emailError" v-model="patientDetails.email"
              @input="$v.patientDetails.email.$touch()" @blur="$v.patientDetails.email.$touch()" 
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm3  >
              <v-text-field label="Age" mask="########" :error-messages="ageError" v-model="patientDetails.age"
              @input="$v.patientDetails.age.$touch()" @blur="$v.patientDetails.age.$touch()" 
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm3 d-flex>
              <v-select
                v-model="patientDetails.gender"
                :error-messages="genderError" 
                @input="$v.patientDetails.gender.$touch()" @blur="$v.patientDetails.gender.$touch()" 
                :items="['Male','Female']"
                label="Gender"
              ></v-select>
            </v-flex>
            
            <v-flex xs12>
              <v-textarea auto-grow label="Patient Description (Optional)" 
                v-model="patientDetails.des"
              ></v-textarea>
            </v-flex>
            <!-- <v-flex xs6>
              <v-text-field mask="#######" label="Charges/Night" 
                hint="Value as ₱ "
                @input="$v.patientDetails.charges.$touch()" @blur="$v.patientDetails.charges.$touch()" 
                :error-messages="chargesError"
                v-model="patientDetails.charges"
                persistent-hint ></v-text-field>
            </v-flex> -->
           
            

         
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
        <v-btn v-if="btnType == 'add'" color="blue darken-1" flat @click="savePatient">Save</v-btn>
        <v-btn :disabled="uniq" v-else color="blue darken-1" flat @click="updatePatient">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
      v-model="deleteDialog"
      width="400"
    >
      <v-card>
        <v-card-title>
          <span class="body-2 mb-2"> Are you sure you want to delete <span class="error--text"> {{patientDetails.name}}</span> ?  </span>
          <v-layout row wrap >
            <!-- <v-card-text class="grey--text"> Description: {{patientDetails.des || 'No description added'}}</v-card-text> -->
                Patient Description: {{patientDetails.des || 'No description added'}}
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="deleteDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="error"
            flat
            @click="deleteNow"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

     <v-dialog
      v-model="unconfinedDialog"
      width="400"
    >
      <v-card>
        <v-card-title>
          <span class="body-2 mb-2"> Are you sure you want to unconfined <span class="error--text"> {{patientDetails.name}}</span> ?  </span>
          <v-layout row wrap >
            <!-- <v-card-text class="grey--text"> Description: {{patientDetails.des || 'No description added'}}</v-card-text> -->
                Patient Description: {{patientDetails.des || 'No description added'}}
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="unconfinedDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="success"
            flat
            @click="unconfinedNow"
          >
            unconfined NOW
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import firebase from 'firebase'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email, number } from 'vuelidate/lib/validators'
  export default {
  mixins: [validationMixin],
  validations: {
    patientDetails: {
      name:{required},
      rmtype:{required},
      age:{required},
      email:{required, email},
      gender: {required}
    }
  },
  data() {
    return {
       search2: '',
      btnType: '',
      deleteDialog: false,
      dialog: false,
      unconfinedDialog: false,
      search: '',
      headers: [
        { text: 'Patient name', value: 'name', sortable: true},
        { text: 'Room', value: 'rmtype', sortable: false},
        { text: 'Email', value: 'email', sortable: false},
        { text: 'Age', value: 'age', sortable: false},
        { text: 'Gender', value: 'gender', sortable: false},
        { text: 'Action', value: '0',sortable: false},
      ],
       headers2: [
        { text: 'Patient name', value: 'name', sortable: true},
        { text: 'Room', value: 'rmtype', sortable: false},
        { text: 'Email', value: 'email', sortable: false},
        { text: 'Age', value: 'age', sortable: false},
        { text: 'Gender', value: 'gender', sortable: false},
      ],
      patientDetails: {
        keyIndex:'',
        name:'',
        dummyName: '',
        email: '',
        gender: '',
        age: '',
        rmtype:'',
        des:'',
        charges:'',
      }
    }
  },
  computed: {
    uniq() {
      var findRoom = _.find(this.getPatients, ['name', _.capitalize(this.patientDetails.name)])
      if(findRoom != null && this.patientDetails.name != this.patientDetails.dummyName) { 
        return true
      } else {
        return false
      }

    },
    genderError() {
      const errors = []
      if (!this.$v.patientDetails.gender.$dirty) return errors
      !this.$v.patientDetails.gender.required && errors.push('Patient gender is required')
      return errors
    },
    ageError () {
      const errors = []
      if (!this.$v.patientDetails.age.$dirty) return errors
      !this.$v.patientDetails.age.required && errors.push('Patient age is required')
      return errors
    },
    emailError() {
      const errors = []
      if (!this.$v.patientDetails.email.$dirty) return errors
      !this.$v.patientDetails.email.email && errors.push('Must be valid e-mail')
      !this.$v.patientDetails.email.required && errors.push('E-mail is required')
      return errors
    },
    nameError() {
      const errors = []
      if (!this.$v.patientDetails.name.$dirty) return errors
      if(this.uniq) { errors.push('Already used, choose another name ') }
      !this.$v.patientDetails.name.required && errors.push('Patient name is required')
      return errors
    },
    rmtypeError () {
      const errors = []
      if (!this.$v.patientDetails.rmtype.$dirty) return errors
      !this.$v.patientDetails.rmtype.required && errors.push('Room type is required')
      return errors
    },
    chargesError () {
      const errors = []
      if (!this.$v.patientDetails.charges.$dirty) return errors
      !this.$v.patientDetails.charges.required && errors.push('Charges is required')
      return errors
    },
    getPatients () {
      return this.$store.getters.listofPatient
    },
    indexPatients () {
      var getindex = _.filter(this.getPatients, 'name');
      return getindex
    },
    indexHistoryP () {
       var data = _.filter(this.$store.getters.listofHistory)
      var getindex = _.filter(data, 'email');
      return getindex
    }
  },
  methods: {
     unconfinedNow(){
      let vm = this
      var newPostKey = firebase.database().ref().child('patientsHistory').push().key;
      var newpatient = firebase.database().ref('patientsHistory/'+newPostKey)
      newpatient.set({
         keyIndex: newPostKey,
         name: vm.patientDetails.name,
         dummyName: vm.patientDetails.name,
         email: vm.patientDetails.email,
         gender: vm.patientDetails.gender,
         age: vm.patientDetails.age,
         rmtype: vm.patientDetails.rmtype,
         des: vm.patientDetails.des,
         charges: vm.patientDetails.charges,
      })
      vm.unconfinedDialog = false

      firebase.database().ref('patients/'+vm.patientDetails.keyIndex).remove()
      vm.$notify({
        group: 'bottomright',
        type: 'success',
        title: 'Successfully unconfined patient',
        text: `Name : ${_.capitalize(vm.patientDetails.name)}` ,
        duration: 10000,
      })

      
     },
    unconfined(data) {
      this.unconfinedDialog = true
      this.patientDetails={
        keyIndex: data.keyIndex,
        name: data.name,
        dummyName: data.name,
        email: data.email,
        gender: data.gender,
        age: data.age,
        rmtype: data.rmtype,
        des: data.des,
        charges: data.charges,
      }
    },
    deleteNow() {
      let vm = this
      firebase.database().ref('patients/'+vm.patientDetails.keyIndex).remove()
      vm.$notify({
        group: 'bottomright',
        type: 'error',
        title: 'Successfully deleted patient',
        text: `Name : ${_.capitalize(vm.patientDetails.name)}` ,
        duration: 10000,
      })
      this.deleteDialog = false
    },
    deleteItem(data) {
      this.deleteDialog = true
      this.patientDetails={
        keyIndex: data.keyIndex,
        name: data.name,
        dummyName: data.name,
        email: data.email,
        gender: data.gender,
        age: data.age,
        rmtype: data.rmtype,
        des: data.des,
        charges: data.charges,
      }
    },
    updatePatient() {
      let vm = this
      if(this.$v.$invalid) {
        this.$v.$touch()
      } else {
        var getrooms = firebase.database().ref('patients/'+vm.patientDetails.keyIndex)
        getrooms.set({
          keyIndex: vm.patientDetails.keyIndex,
          name: _.capitalize(vm.patientDetails.name),
          rmtype: vm.patientDetails.rmtype,
          des: _.capitalize(vm.patientDetails.des),
          charges: vm.patientDetails.charges,
          email: _.capitalize(vm.patientDetails.email),
          gender: _.capitalize(vm.patientDetails.gender),
          age: vm.patientDetails.age,
        })
        vm.$notify({
          group: 'bottomright',
          type: 'success',
          title: 'Successfully added a Patient ',
          text: `Name: ${vm.patientDetails.name}` ,
          duration: 10000,
        })

        vm.$v.$reset()
        vm.patientDetails = {
          keyIndex:'',
          name:'',
          dummyName: '',
          email: '',
          gender: '',
          age: '',
          rmtype:'',
          des:'',
          charges:'',
        }
      }
    },
    editItem(data) {
      this.btnType = 'update'
      this.dialog = true
      this.patientDetails={
        keyIndex: data.keyIndex,
        name: data.name,
        dummyName: data.name,
        email: data.email,
        gender: data.gender,
        age: data.age,
        rmtype: data.rmtype,
        des: data.des,
        charges: data.charges,
      }
    },
    closeDialog() {
      this.dialog = false
      this.$v.$reset()
      this.patientDetails = {
        keyIndex:'',
        name:'',
        dummyName: '',
        email: '',
        gender: '',
        age: '',
        rmtype:'',
        des:'',
        charges:'',
      }

    },
    newRoomdialog() {
      this.btnType = 'add'
      this.dialog = true
    },
    savePatient() {
      let vm = this
      if(this.$v.$invalid) {
        this.$v.$touch()
      }
      else {
        var newPostKey = firebase.database().ref().child('patients').push().key;
        var getPatients = firebase.database().ref('patients/'+newPostKey)
        getPatients.set({
          keyIndex: newPostKey,
          name: _.capitalize(vm.patientDetails.name),
          rmtype: vm.patientDetails.rmtype,
          des: _.capitalize(vm.patientDetails.des),
          charges: vm.patientDetails.charges,
          email: _.capitalize(vm.patientDetails.email),
          gender: _.capitalize(vm.patientDetails.gender),
          age: vm.patientDetails.age,
        })
        vm.$notify({
          group: 'bottomright',
          type: 'success',
          title: 'Successfully added a Patient ',
          text: `Name: ${vm.patientDetails.name}` ,
          duration: 10000,
        })

        vm.$v.$reset()
        vm.patientDetails = {
          keyIndex:'',
          name:'',
          dummyName: '',
          email: '',
          gender: '',
          age: '',
          rmtype:'',
          des:'',
          charges:'',
        }
      }
    }
  }
}
</script>

<style>

</style>
