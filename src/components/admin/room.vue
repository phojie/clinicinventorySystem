<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Room's List</div>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-btn @click="newRoomdialog" color="primary" dark class="mb-2">New Room</v-btn>
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
        :items="indexRooms"
        :search="search"
        item-key="name"
      >
        <template slot="items" slot-scope="props">
          <tr @click="props.expanded = !props.expanded">
            <td>RM-<span class="font-weight-bold">{{ props.item.name }}</span> </td>
            <td class="">{{ props.item.rmtype }}</td>
            <td class="wgite"> 
              <v-chip small class="white--text amber lighten-1" v-if="props.item.avText == 'Occupied'">
                <!-- <v-avatar> <v-icon color="pink"> mdi-circle </v-icon> </v-avatar> -->
                Occupied
              </v-chip>
              <v-chip small class="white--text light-green lighten-1" v-if="props.item.avText == 'Available'" >
                <!-- <v-avatar class="light-green"></v-avatar> -->
                Available
              </v-chip> 
              <v-chip small class="white--text error lighten-1" v-if="props.item.avText == 'Out of order'" >
                <!-- <v-avatar class="light-green"></v-avatar> -->
                Out of order
              </v-chip> 
            </td>
            <td class="">₱ {{props.item.charges}} </td>
            <!-- <td class=""> <v-chip small color="blue lighten-5" text-color="blue" > ₱ {{props.item.charges}}</v-chip> </td> -->
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
        </tr>
      </template>
      <template  slot="expand" slot-scope="props">
        <v-card class="px-4" flat v-if="props.item.des != ''">
          <v-card-title class="blue--text">Room Description</v-card-title>
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
        <span class="headline" v-if="roomDetails.name != ''">RM-{{roomDetails.name}}</span>
        <span class="headline" v-if="roomDetails.name == ''"> New Room </span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 >
              <v-text-field label="Room name" :error-messages="nameError" v-model="roomDetails.name"
              :hint="` as RM-${roomDetails.name}`"
              @input="$v.roomDetails.name.$touch()" @blur="$v.roomDetails.name.$touch()" 
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                :items="['VIP Suite', 'Single Deluxe Room', 'Two-Bedded Room', 'Four-Bedded Room', 'Intensive Care Unit (ICU)', 'Isolation Room', 'Labour & Delivery Suite', 'Nursery']"
                label="Type"
                @input="$v.roomDetails.rmtype.$touch()" @blur="$v.roomDetails.rmtype.$touch()" 
                :error-messages="rmtypeError"
                v-model="roomDetails.rmtype"
              ></v-select>
            </v-flex>
            <v-flex xs12>
              <v-textarea auto-grow label="Room Description" 
                v-model="roomDetails.des"
              ></v-textarea>
            </v-flex>
            <v-flex xs6>
              <v-text-field mask="#######" label="Charges/Night" 
                hint="Value as ₱ "
                @input="$v.roomDetails.charges.$touch()" @blur="$v.roomDetails.charges.$touch()" 
                :error-messages="chargesError"
                v-model="roomDetails.charges"
                persistent-hint ></v-text-field>
            </v-flex>
            <v-flex xs6 v-if="!disAvcheck">
              <v-switch
                label="Availability"
                v-model="roomDetails.av"
              ></v-switch>
              <v-chip v-if="roomDetails.av == true" small class="white--text light-green"  >
                Available
              </v-chip>
              <v-chip v-else small class="white--text error" > Out of order</v-chip>
            </v-flex>
            <v-flex v-else>
              <div class="mt-3 grey--text">Availability: <v-chip small class="white--text amber" > Occupied </v-chip></div> 
            </v-flex>

         
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
        <v-btn v-if="btnType == 'add'" color="blue darken-1" flat @click="saveRoom">Save</v-btn>
        <v-btn :disabled="uniq" v-else color="blue darken-1" flat @click="updateRoom">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
      v-model="deleteDialog"
      width="300"
    >
      <v-card>
        <v-card-title>
          <span class="body-2 mb-2"> Are you sure you want to delete <span class="error--text"> RM-{{roomDetails.name}}</span> ?  </span>
          <v-layout row wrap justify-center >
            <!-- <v-card-text class="grey--text"> Description: {{roomDetails.des || 'No description added'}}</v-card-text> -->
            <v-chip tile class="white--text amber lighten-1" v-if="roomDetails.av == 'Occupied'">
                <!-- <v-avatar> <v-icon color="pink"> mdi-circle </v-icon> </v-avatar> -->
                Room is Occupied
              </v-chip>
              <v-chip tile class="white--text light-green lighten-1" v-if="roomDetails.av  == 'Available'" >
                <!-- <v-avatar class="light-green"></v-avatar> -->
                Room is Available
              </v-chip> 
              <v-chip tile class="white--text error lighten-1" v-if="roomDetails.av  == 'Out of order'" >
                <!-- <v-avatar class="light-green"></v-avatar> -->
                Room is Out of order
            </v-chip> 

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

  </v-container>
</template>

<script>
  import firebase from 'firebase'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
  export default {
  mixins: [validationMixin],
  validations: {
    roomDetails: {
      name:{required},
      rmtype:{required},
      charges:{required},
    }
  },
  data() {
    return {
      btnType: '',
      disAvcheck: false,
      deleteDialog: false,
      dialog: false,
      search: '',
      headers: [
        { text: 'Room name', value: 'name', sortable: true},
        { text: 'Room type', value: 'rmtype', sortable: false},
        { text: 'Availability', value: 'avText', sortable: false},
        { text: 'Charges/Night', value: 'charges',sortable: false},
        { text: 'Action', value: '0',sortable: false},
      ],
      roomDetails: {
        name:'',
        dummyName: '',
        rmtype:'',
        des:'',
        charges:'',
        av: '',
        keyIndex:'',
      }
    }
  },
  computed: {
    uniq() {
      var findRoom = _.find(this.getRooms, ['name', _.capitalize(this.roomDetails.name)])
      if(findRoom != null && this.roomDetails.name != this.roomDetails.dummyName) { 
        return true
      } else {
        return false
      }

    },
    nameError() {
      const errors = []
      if (!this.$v.roomDetails.name.$dirty) return errors
      if(this.uniq) { errors.push('Already used, choose another name ') }
      !this.$v.roomDetails.name.required && errors.push('Room name is required')
      return errors
    },
    rmtypeError () {
      const errors = []
      if (!this.$v.roomDetails.rmtype.$dirty) return errors
      !this.$v.roomDetails.rmtype.required && errors.push('Room type is required')
      return errors
    },
    chargesError () {
      const errors = []
      if (!this.$v.roomDetails.charges.$dirty) return errors
      !this.$v.roomDetails.charges.required && errors.push('Charges is required')
      return errors
    },
    getRooms () {
      return this.$store.getters.listofRooms
    },
    indexRooms () {
      var getindex = _.filter(this.getRooms, 'name');
      var getdata = []
      _.forEach(this.getRooms, function(value,key) {
        // console.log(key);
        if(value.av == 1) {
          var avValue = 'Available'
        } else if(value.av == 2) {
          var avValue ='Occupied'
        } else {
          var avValue ='Out of order'
        }
        getdata.push({
          name: value.name,
          rmtype: value.rmtype,
          des: value.des,
          charges: value.charges,
          av: value.av,
          avText: avValue,
          keyIndex: key,
        })
      });
      return getdata
    }

  },
  methods: {
    deleteNow() {
      let vm = this
      firebase.database().ref('rooms/'+vm.roomDetails.keyIndex).remove()
      vm.$notify({
        group: 'bottomright',
        type: 'error',
        title: 'Successfully deleted RM-'+vm.roomDetails.name,
        text: `Description : ${_.capitalize(vm.roomDetails.des)}` ,
        duration: 10000,
      })
      this.deleteDialog = false
    },
    deleteItem(data) {
      this.deleteDialog = true
      this.roomDetails = {
        name: data.name,
        rmtype: data.rmtype,
        des: data.des,
        av: data.avText,
        keyIndex: data.keyIndex,
      }
    },
    updateRoom() {
      let vm = this
      if(this.$v.$invalid) {
        this.$v.$touch()
      } else {
        if(vm.roomDetails.av) {
          var av = 1
        } else {
          var av = 3
        }
        var getrooms = firebase.database().ref('rooms/'+vm.roomDetails.keyIndex)
        getrooms.set({
          keyIndex: vm.roomDetails.keyIndex,
          name: _.capitalize(vm.roomDetails.name),
          rmtype: vm.roomDetails.rmtype,
          des: _.capitalize(vm.roomDetails.des),
          charges: vm.roomDetails.charges,
          av: av // 1.available 2.occupied // 3.out of order
        })

        if(av == 1) {
          var avtext = 'Available'
        } else {
          var avtext = 'Out of order'
        }
        vm.$notify({
          group: 'bottomright',
          type: 'success',
          title: 'Successfully updated RM-'+ vm.roomDetails.name,
          text: `Availability: ${avtext}` ,
          duration: 10000,
        })
        vm.dialog = false
        vm.$v.$reset()
        vm.roomDetails = {
          name:'',
          rmtype:'',
          des:'',
          charges:'',
          av: true,
        }
      }
    },
    editItem(data) {
      this.btnType = 'update'
      if(data.av == 1) {
        var avtext = true
      } else if(data.av == 3) {
        var avtext = false
      } else {
        this.disAvcheck = true
      }
      this.dialog = true
      this.roomDetails={
        name:data.name,
        dummyName: data.name,
        rmtype:data.rmtype,
        des:data.des,
        av: avtext,
        charges:data.charges,
        keyIndex: data.keyIndex,
      }
    },
    closeDialog() {
      this.dialog = false
      this.$v.$reset()
      this.roomDetails = {
        name:'',
        rmtype:'',
        des:'',
        charges:'',
        av: true,
      }

    },
    newRoomdialog() {
      this.btnType = 'add'
      this.disAvcheck = false
      this.dialog = true
      this.roomDetails.av = true
    },
    saveRoom() {
      let vm = this
      if(this.$v.$invalid) {
        this.$v.$touch()
      } else {
        if(vm.roomDetails.av) {
          var av = 1
        } else {
          var av = 3
        }
        var newPostKey = firebase.database().ref().child('rooms').push().key;
        var getrooms = firebase.database().ref('rooms/'+newPostKey)
        getrooms.set({
          keyIndex: newPostKey,
          name: _.capitalize(vm.roomDetails.name),
          rmtype: vm.roomDetails.rmtype,
          des: _.capitalize(vm.roomDetails.des),
          charges: vm.roomDetails.charges,
          av: av // 1.available 2.occupied // 3.out of order
        })

        if(av == 1) {
          var avtext = 'Available'
        } else {
          var avtext = 'Out of order'
        }
        vm.$notify({
          group: 'bottomright',
          type: 'success',
          title: 'Successfully added RM-'+ vm.roomDetails.name,
          text: `Availability: ${avtext}` ,
          duration: 10000,
        })

        vm.$v.$reset()
        vm.roomDetails = {
          name:'',
          rmtype:'',
          des:'',
          charges:'',
          av: true,
        }
        
        
      }
    }
  }
}
</script>

<style>

</style>
