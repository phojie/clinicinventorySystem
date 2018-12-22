<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Employee's List</div>
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
        :items="docUsers"
        :search="search"
      >
        <template   slot="items" slot-scope="props">
          <td><v-avatar color="green lighten-5" size="40">
            <img class="pa-1" :src="props.item.profile">
          </v-avatar></td>
          <td class="">{{ props.item.fullname }}</td>
          <td class="">{{ props.item.email }}</td>
          <td class="">{{ props.item.cnumber }}</td>
          <td class=""> <v-chip small color="green lighten-5" text-color="green" > {{props.item.doctortype}}</v-chip> </td>
          <td class="justify-center ">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
        </td>
        </template>
        <v-alert slot="no-results" :value="true" color="error lighten-1" icon="warning">
          <span class="white--text">Your search for "{{ search }}" found no results :(</span>  
        </v-alert>
        <!-- <template slot="footer">
          <td :colspan="headers.length">
            <strong>Availability of Doctors type: </strong>
          </td>
        </template> -->
      </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>



   <!-- dialog doctor -->

    <v-dialog v-model="dialogDoctor" persistent max-width="600px">
      <v-form ref="doctorForm"  v-model="doctorValid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Update <span v-if="doctorsDetailsProfile.doctortype != ''"> {{doctorsDetailsProfile.doctortype}}</span> Profile</span>
          <v-progress-linear :indeterminate="disabledDoc"></v-progress-linear>
        </v-card-title>
        <v-card-text style="margin-top:-50px">
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                  <div v-if="!image && doctorsDetailsProfile.profile != ''">
                    <v-avatar color="blue lighten-5" size="100">
                      <img class="pa-1" :src="doctorsDetailsProfile.profile" />
                    </v-avatar>
                    <v-btn :disabled="disabledDoc" class="caption textNone" flat ml-2 @click="removeImage">Remove image</v-btn>
                  </div>
                  <div v-if="!image && doctorsDetailsProfile.profile == ''">
                    <h2>Profile Picture</h2>
                    <input :disabled="disabledDoc" accept="image/*"  type="file" @change="onFileChange">
                  </div>
                  <div v-if="image">
                    <v-avatar color="blue lighten-5" size="100">
                      <img class="pa-1" :src="image" />
                    </v-avatar>
                    <v-btn :disabled="disabledDoc" class="caption textNone" flat ml-2 @click="removeImage">Remove image</v-btn>
                  </div>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="First name*" 
                  :error-messages="fnErrors"
                  :disabled="disabledDoc"
                  @input="$v.doctorsDetailsProfile.fn.$touch()" @blur="$v.doctorsDetailsProfile.fn.$touch()" 
                  v-model="doctorsDetailsProfile.fn" ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field 
                    :error-messages="mnErrors"
                    :disabled="disabledDoc"
                    @input="$v.doctorsDetailsProfile.mn.$touch()" @blur="$v.doctorsDetailsProfile.mn.$touch()" 
                    v-model="doctorsDetailsProfile.mn" label="Middle name*" ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Last name*"
                    :error-messages="lnErrors"
                    :disabled="disabledDoc"
                    @input="$v.doctorsDetailsProfile.ln.$touch()" @blur="$v.doctorsDetailsProfile.ln.$touch()" 
                    v-model="doctorsDetailsProfile.ln"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field 
                  :disabled="disabledDoc"
                  @input="$v.doctorsDetailsProfile.email.$touch()" @blur="$v.doctorsDetailsProfile.email.$touch()" 
                  :error-messages="emailErrors"
                  v-model="doctorsDetailsProfile.email" label="Email*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field 
                  :disabled="disabledDoc"
                  type="number"
                  v-model="doctorsDetailsProfile.cnumber" label="Contact number" ></v-text-field>
                </v-flex>
                <v-flex  v-if="nurseYes" xs12>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="passwordErrors"
                  @input="$v.doctorsDetailsProfile.password.$touch()" @blur="$v.doctorsDetailsProfile.password.$touch()" 
                  v-model="doctorsDetailsProfile.password" label="Password*" type="password" required></v-text-field>
                </v-flex>
                <v-flex v-if="nurseYes" xs12 sm6>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="usernameErrors"
                  @input="$v.doctorsDetailsProfile.username.$touch()" @blur="$v.doctorsDetailsProfile.username.$touch()" 
                  v-model="doctorsDetailsProfile.username" label="Username*" type="text" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-autocomplete
                    :disabled="disabledDoc"
                    :error-messages="typeErrors"
                    @input="$v.doctorsDetailsProfile.doctortype.$touch()" @blur="$v.doctorsDetailsProfile.doctortype.$touch()" 
                    :items="doctorTypeItems.items"
                    v-model="doctorsDetailsProfile.doctortype"
                    label="Type*"
                  ></v-autocomplete>
                </v-flex>
              
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="resetDoctorForm">Reset</v-btn>
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="closedoctorDialog">Close</v-btn>
          <v-btn :loading="disabledDoc" :disabled="uniq" color="green darken-1" flat @click="saveDoctor">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>

    <!-- dialog doctor end -->

    <!-- dialog delete doctor -->
    <v-dialog
      v-model="dialogDeleteDoctor"
      width="300"
    >
      <v-card>
        <v-card-title>
          <span class="body-2 mb-2"> Are you sure you want to delete <span class="error--text"> {{doctorsDetailsProfile.fn}}  {{doctorsDetailsProfile.ln}}</span> as  a {{doctorsDetailsProfile.doctortype}}?  </span>
          <v-layout row wrap justify-center >
            <v-avatar size="100">
              <img :src="doctorsDetailsProfile.profile" alt="">  
            </v-avatar>
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            @click="dialogDeleteDoctor = false"
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
    <!-- end -->
    
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
      password: { required, minLength: minLength(6) },
      email: { required, email },
      fn:  { required },
      mn:  { required },
      ln:  { required },
      doctortype: { required },
      username: {required}
    }
  },
  data() {
    return {
      nurseYes: true,
      disabledDoc: false,
      image: '',
      doctorValid: true,
      dialogDoctor: false,
      dialogDeleteDoctor: false,
      search: '',
      headers: [
        { text: 'Profile', value: '', sortable: false,align: 'left'},
        { text: 'Full Name', value: 'fullname', sortable: false},
        { text: 'Email', value: 'email', sortable: false},
        { text: 'Contact info', value: 'cnumber', sortable: false},
        { text: 'Type', value: 'doctortype',sortable: false},
        { text: 'Actions', value: '',sortable: false},
      ],
      doctorTypeItems: {
        items: ['Nurse','Pharmacist', 'Medtech', 'Radiologist', 'Utility'],
      },
      doctorsDetailsProfile: {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        dummyEmail: '',
        password: '',
        dummyPassword: '',
        doctortype: [],
        profile: '',
        cnumber: '',
        username:'',
        dummyUsername: '',
        keyIndex: '',
      }
    }
  },
  computed: {
    docUsers() {
      var getDoc = _.filter(this.$store.getters.listofUsers, ['type', 2])
      var getDoc2 = _.filter(this.$store.getters.listofUsers, ['type', 3])
      var getDoc3 = _.filter(this.$store.getters.listofUsers, ['type', 4])

      var addeddoc = _.unionWith(getDoc, getDoc2, getDoc3, _.isEqual);

      var getdata = []
      _.forEach(addeddoc, function(value) {
        
        getdata.push({
          fn: value.fn,
          mn: value.mn,
          ln: value.ln,
          password: value.password,
          fullname: value.fn+' '+value.ln,
          email: value.email,
          doctortype: value.doctortype,
          profile: value.profile,
          cnumber: value.cnumber,
          username: value.username,
          keyIndex: value.keyIndex,
        })
      });
      return getdata
      // console.log("​docUsers -> addeddoc", addeddoc)
    },
    uniq() {
      var findUsername = _.find(this.listofUsers, ['Username', _.capitalize(this.doctorsDetailsProfile.username)])
      var findEmail = _.find(this.listofUsers, ['email', _.capitalize(this.doctorsDetailsProfile.email)])
      if(findUsername != null && this.doctorsDetailsProfile.username != this.doctorsDetailsProfile.dummyUsername || findEmail != null && this.doctorsDetailsProfile.email != this.doctorsDetailsProfile.dummyEmail) { 
        return true
      } else {
        return false
      }
    },
    listofUsers() {
      return this.$store.getters.listofUsers
    },
    accountDetails() {
      var obUser = JSON.parse(this.$store.getters.accountDetails);
      console.log(obUser.profilePic)
      return obUser
    },
    fnErrors () {
      const errors = []
      if (!this.$v.doctorsDetailsProfile.fn.$dirty) return errors
      !this.$v.doctorsDetailsProfile.fn.required && errors.push('Firstname is required')
      return errors
    },
    mnErrors () {
      const errors = []
      if (!this.$v.doctorsDetailsProfile.mn.$dirty) return errors
      !this.$v.doctorsDetailsProfile.mn.required && errors.push('Middlename is required')
      return errors
    },
    lnErrors () {
      const errors = []
      if (!this.$v.doctorsDetailsProfile.ln.$dirty) return errors
      !this.$v.doctorsDetailsProfile.ln.required && errors.push('Lastname is required')
      return errors
    },
    usernameErrors () {
      const errors = []
      var findUsername = _.find(this.listofUsers, ['username', _.capitalize(this.doctorsDetailsProfile.username)])
      if(findUsername != null && this.doctorsDetailsProfile.username != this.doctorsDetailsProfile.dummyUsername) { errors.push('Username already used') }
      if (!this.$v.doctorsDetailsProfile.username.$dirty) return errors
      !this.$v.doctorsDetailsProfile.username.required && errors.push('Username is required')
      return errors
    },
    emailErrors () {
      const errors = []
      var findEmail = _.find(this.listofUsers, ['email', _.capitalize(this.doctorsDetailsProfile.email)])
      if(findEmail != null && this.doctorsDetailsProfile.email != this.doctorsDetailsProfile.dummyEmail) { errors.push('Email already used') }
      if (!this.$v.doctorsDetailsProfile.email.$dirty) return errors
      !this.$v.doctorsDetailsProfile.email.email && errors.push('Must be valid e-mail')
      !this.$v.doctorsDetailsProfile.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      if(this.nurseYes) {
        const errors = []
        if (!this.$v.doctorsDetailsProfile.password.$dirty) return errors
        !this.$v.doctorsDetailsProfile.password.minLength && errors.push('Password must be at least 6 characters long')
        !this.$v.doctorsDetailsProfile.password.required && errors.push('Password is required.')
        return errors
      } else {
      }
    },
    typeErrors () {
      if(this.doctorsDetailsProfile.doctortype == 'Nurse' || this.doctorsDetailsProfile.doctortype == 'Pharmacist'){
        this.nurseYes = true
        if(this.doctorsDetailsProfile.dummyUsername == _.capitalize(this.doctorsDetailsProfile.keyIndex) ) {
          this.doctorsDetailsProfile.username = ''
          this.doctorsDetailsProfile.password = ''
        } else {
          this.doctorsDetailsProfile.username = this.doctorsDetailsProfile.dummyUsername
          this.doctorsDetailsProfile.password = this.doctorsDetailsProfile.dummyPassword
        }
      } else {
        // this.doctorsDetailsProfile.username = ''
        this.doctorsDetailsProfile.username =  this.doctorsDetailsProfile.keyIndex
        this.doctorsDetailsProfile.password =  this.doctorsDetailsProfile.keyIndex
        this.nurseYes = false
      }
      const errors = []
      if (!this.$v.doctorsDetailsProfile.doctortype.$dirty) return errors
      !this.$v.doctorsDetailsProfile.doctortype.required && errors.push('Type of employee is required')
      return errors
    },
    // aVdoctorstype() {
    //   var getDoc = _.filter(this.$store.getters.listofUsers, ['doctors', 1])
    //   return getDoc   
    // }
  },
  methods: {
    deleteNow() {
      let vm= this
      firebase.database().ref('accountUser/'+vm.doctorsDetailsProfile.keyIndex).remove()
      vm.image= ''
      vm.$notify({
        group: 'bottomright',
        type: 'error',
        title: 'Successfully deleted a '+vm.doctorsDetailsProfile.doctortype,
        text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
        duration: 10000,
      })
      vm.dialogDeleteDoctor = false
    },
    deleteItem(data) {
      this.doctorsDetailsProfile = {
        fn: data.fn,
        ln: data.ln,
        profile: data.profile,
        doctortype: data.doctortype,
        keyIndex: data.keyIndex,
      }
      this.dialogDeleteDoctor = true
    },
    editItem(data) {
      this.image = ''
      this.dialogDoctor = true
      this.doctorsDetailsProfile = {
        fn: data.fn,
        mn: data.mn,
        ln: data.ln,
        email: data.email,
        dummyEmail: data.email,
        password: data.password,
        dummyPassword: data.password,
        doctortype: data.doctortype,
        profile: data.profile,
        cnumber: data.cnumber,
        username: data.username,
        dummyUsername: data.username,
        keyIndex: data.keyIndex
      }
    },
    resetDoctorForm() {
      this.image= ''
      this.doctorsDetailsProfile= {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        Password: '',
        Username: '',
        doctortype: [],
        profile: '',
        cnumber: '',
      }
      this.$v.$reset()
    },
    saveDoctor() {
      // this.$v.$reset()
      let vm = this
      this.loadingPercent = 0
      // console.log(this.image)
      if(this.$v.$invalid) {
        this.$v.$touch()
      } else {
        vm.disabledDoc = true
        var storageRef = firebase.storage().ref();
        if(vm.doctorsDetailsProfile.doctortype == 'Nurse') {
          var numbertype = 2
        } else if(vm.doctorsDetailsProfile.doctortype == 'Pharmacist'){
          var numbertype = 3
        } else{
          var numbertype = 4
        }
        if(vm.image == '' && vm.doctorsDetailsProfile.profile == '') {
          vm.disabledDoc = false
          vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully updated a '+ vm.doctorsDetailsProfile.doctortype,
            text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
            duration: 10000,
          })
          var add = firebase.database().ref('accountUser/'+vm.doctorsDetailsProfile.keyIndex)
          add.set({
            fn: _.capitalize(vm.doctorsDetailsProfile.fn),
            mn: _.capitalize(vm.doctorsDetailsProfile.mn),
            ln: _.capitalize(vm.doctorsDetailsProfile.ln),
            email: _.capitalize(vm.doctorsDetailsProfile.email),
            password: vm.doctorsDetailsProfile.password,
            type: numbertype , //nurse
            doctortype: vm.doctorsDetailsProfile.doctortype,
            profile: "https://img.icons8.com/office/1600/000000/doctor-male.png" ,
            keyIndex: vm.doctorsDetailsProfile.keyIndex,
            cnumber: vm.doctorsDetailsProfile.cnumber,
            username:  _.capitalize(vm.doctorsDetailsProfile.username),
          })
          vm.image= ''
          vm.doctorsDetailsProfile= {
            fn: '',
            mn: '',
            ln: '',
            email: '',
            Password: '',
            Username: '',
            doctortype: [],
            profile: '',
            cnumber: '',
          }
          vm.$v.$reset()
          vm.dialogDoctor = false
        } else if(vm.doctorsDetailsProfile.profile != '' ){
          vm.disabledDoc = false
          vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully updated a '+ vm.doctorsDetailsProfile.doctortype,
            text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
            duration: 10000,
          })
          var add = firebase.database().ref('accountUser/'+vm.doctorsDetailsProfile.keyIndex)
          add.set({
            fn: _.capitalize(vm.doctorsDetailsProfile.fn),
            mn: _.capitalize(vm.doctorsDetailsProfile.mn),
            ln: _.capitalize(vm.doctorsDetailsProfile.ln),
            email: _.capitalize(vm.doctorsDetailsProfile.email),
            password: vm.doctorsDetailsProfile.password,
            type: numbertype , //nurse
            doctortype: vm.doctorsDetailsProfile.doctortype,
            profile: vm.doctorsDetailsProfile.profile,
            keyIndex: vm.doctorsDetailsProfile.keyIndex,
            cnumber: vm.doctorsDetailsProfile.cnumber,
            username:  _.capitalize(vm.doctorsDetailsProfile.username),
          })
          vm.image= ''
          vm.doctorsDetailsProfile= {
            fn: '',
            mn: '',
            ln: '',
            email: '',
            Password: '',
            Username: '',
            doctortype: [],
            profile: '',
            cnumber: '',
          }
          vm.$v.$reset()
          vm.dialogDoctor = false
        } else {
          var uploadTask = storageRef.child(`profileimages/` + doctorsDetailsProfile.keyIndex).putString(vm.image, 'data_url')
          uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, function(error) {
          }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              vm.disabledDoc = false
              vm.$notify({
                group: 'bottomright',
                type: 'success',
                title: 'Successfully updated a doctor',
                text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
                duration: 10000,
              })
              vm.doctorsDetailsProfile.profile = downloadURL
              var add = firebase.database().ref('accountUser/'+doctorsDetailsProfile.keyIndex)
              add.set({
                fn: _.capitalize(vm.doctorsDetailsProfile.fn),
                mn: _.capitalize(vm.doctorsDetailsProfile.mn),
                ln: _.capitalize(vm.doctorsDetailsProfile.ln),
                email: _.capitalize(vm.doctorsDetailsProfile.email),
                password: vm.doctorsDetailsProfile.password,
                type: numbertype , //doctor
                doctortype: vm.doctorsDetailsProfile.doctortype,
                profile: vm.doctorsDetailsProfile.profile ,
                keyIndex: vm.doctorsDetailsProfile.keyIndex,
                cnumber: vm.doctorsDetailsProfile.cnumber,
                username:  _.capitalize(vm.doctorsDetailsProfile.username),
              })
              vm.image= ''
              vm.doctorsDetailsProfile= {
                fn: '',
                mn: '',
                ln: '',
                email: '',
                Password: '',
                Username: '',
                doctortype: [],
                profile: '',
                cnumber: '',
              }
              vm.$v.$reset()
              vm.dialogDoctor = false
              // console.log('File available at', downloadURL);
            }, function() {
            });
          })
        }

     
      }
      
    },
    closedoctorDialog() {
      this.dialogDoctor = false
      this.$v.$reset()
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
      this.doctorsDetailsProfile.profile = ''
    }
  }
}
</script>

<style>

</style>
