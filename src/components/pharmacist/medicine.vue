<template>
   <v-container grid-list-xs>
      <v-layout row wrap>
         <v-flex xs12>
            <v-data-table
               :headers="headers"
               :items="prescriptions"
               class="elevation-1"
            >
               <template slot="items" slot-scope="props">
                  <td class="primary--text body-2 font-weight-black">{{ props.item.codeId }}</td>
                  <td>{{ props.item.fullname }}</td>
                  <td >  {{ isReady(props.item.created) }}</td>
                  <td>Dr. {{ props.item.doctor }}</td>
                  <td><v-btn color="success" @click="viewPresDialog(props.item)" small  class="textNone caption green lighten-1" >View</v-btn></td>
               </template>
               <!-- <template slot="footer">
                  <td :colspan="headers.length">
                  <strong>This is an extra footer</strong>
                  </td>
               </template> -->
            </v-data-table>
         </v-flex>
      </v-layout>


      <v-dialog v-model="viewDialog" persistent max-width="600px">
         <v-card>
           <v-card-title class="mb-1">
            <div>
               <v-avatar tile size="50">
               <img src="https://img.icons8.com/ios/1600/1B5E20/pharmacy-filled.png">
               </v-avatar>
               <span class="headline">
               {{presDetails.fullname}}
               </span>
               </div>
            <v-spacer></v-spacer>
            <v-btn color="green darken-2" flat @click="savePr" >Issued</v-btn>
            <v-btn color="primary darken-2" flat @click="viewDialog =false" >Close</v-btn>
         </v-card-title>
         <v-card-text>
            <v-container grid-list-md>
               <!-- <v-data-table
                  v-model="selected"
                  :headers="headers2"
                  :items="presDetails.pData"
                  :pagination.sync="pagination"
                  select-all
                  item-key="Description"
                  class="elevation-1"
                >
                  <template slot="headers" slot-scope="props">
                     <tr>
                     <th>
                        <v-checkbox
                           :input-value="props.all"
                           :indeterminate="props.indeterminate"
                           primary
                           hide-details
                           @click.stop="toggleAll"
                        ></v-checkbox>
                     </th>
                     <th
                        v-for="header in props.headers"
                        :key="header.text"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                     >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                     </th>
                     </tr>
                  </template>
                  <template slot="items" slot-scope="props">
                     <tr :active="props.selected" @click="props.selected = !props.selected">
                     <td>
                        <v-checkbox
                           :input-value="props.selected"
                           primary
                           hide-details
                        ></v-checkbox>
                     </td>
                     <td >
                          <span class="blue--text">Description</span>: {{props.item.Description}} <span class="blue--text">({{props.item.Quantity}})</span>
                    
                     </td>
                     </tr>
                  </template>
               </v-data-table> -->

                <v-data-table
                  :headers="headers2"
                  :items="presDetails.pData"
                  class="elevation-1"
               >
                  <template slot="items" slot-scope="props">
                     <td >
                          <span class="blue--text">{{props.item.Description}} </span>
                     </td>
                     <td >
                          <span class="blue--text"> {{props.item.Quantity}} </span>
                     </td>
                  </template>
               </v-data-table>
            </v-container>
         </v-card-text>
         <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="viewDialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="SubmitPres">Save</v-btn>
         </v-card-actions> -->
         </v-card>
      </v-dialog>
   </v-container>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
export default {
   data: () => ({
      viewDialog: false,

      drawer: null,
      headers: [
         {
            text: 'Code ID',
            align: 'left',
            sortable: false,
            value: 'codeId'
         },
         { text: 'Fulname', value: 'fullname' },
         { text: 'Date issued', value: 'created' },
         { text: 'Doctor', value: 'doctor',sortable: true},
         { text: 'Action', value: 'userKey' },
      ],
      pagination: {
        sortBy: 'Description'
      },
      selected: [],
      headers2: [
         {
            text: 'Prescribe Medicine',
            align: 'left',
            sortable: false,
            value: 'codeId'
         },
         {
            text: 'Quantity',
            align: 'left',
            sortable: false,
            value: 'Quantity'
         },
      ],
      presDetails: {
         codeId: '',
         created: '',
         doctor: '', 
         fullname: '',
         keyIndex:'',
         pData: [],
      }
   
   }),
   computed: {
      prescriptions() {
         var data = _.filter(this.$store.getters.listofPrescriptions,'keyIndex')
         return data
      }
   },
   methods: {
      savePr() {
         let vm = this
         let myLord = vm.selected
         // _.forEach(vm.selected, function(value, key) {
         //    _.isEqual(vm.presDetails.pData)
         // })
         console.log(vm.selected)
         var newData = firebase.database().ref('prescriptions/'+vm.presDetails.keyIndex)
         newData.remove()
         // newData.update({
         //    pData: vm.selected
         // }, function(error){
         //    if(!error) {
         //       vm.$notify({
         //       group: 'bottomright',
         //       type: 'success',
         //       title: 'Success',
         //       text: `Success` ,
         //       duration: 10000,
         //       })
         //       vm.prescribe = []
         //       vm.clearedAct = false
         //    }
         // })
           vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Success',
            text: `Success` ,
            duration: 10000,
            })
            vm.viewDialog = false
      },
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.presDetails.pData.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      isReady(data) {
         return moment(data).format('MMMM Do YYYY, h:mm:ss a')
      },
      viewPresDialog(data) {
         this.viewDialog = true
         this.presDetails = {
            codeId: data.codeId,
            created: data.created,
            doctor: data.doctor, 
            fullname: data.fullname,
            keyIndex: data.keyIndex,
            pData: data.pData,
         }
      },
      SubmitPres() {

      }
      
   }
}
</script>

<style>

</style>
