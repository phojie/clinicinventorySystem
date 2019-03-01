<template>
  <!-- :dark="dark" -->
  <v-app
    id="inspire"
  >
      <!-- style="background-color:#000c21" -->
    <v-navigation-drawer
      v-model="drawer"
      dark
      width="250"
      app
    >
    
      <v-layout justify-center class="mt-3 mr-1">
        <v-avatar color="white" size="100">
          <img src="https://img.icons8.com/color/1600/000000/administrative-tools.png">
        </v-avatar>
      </v-layout>
      <v-layout justify-center class="mt-4 mr-1">
        <span class="title white--text"> Admin Panel</span>
      </v-layout>
      <v-divider class="mt-4 mx-4 green" ></v-divider>
      <v-list dense class="">
        <v-card class="pa-4" flat width="250">
        <v-btn  class="textNone caption transparent" exact-active-class="green"  depressed block to="Administrator">
          <v-list-tile-action>
            <v-avatar size="21">
              <img src="https://img.icons8.com/ios/50/ffffff/services-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Dashboard
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/Admission">
            <v-list-tile-action>
              <v-avatar tile size="18">
                <img src="https://img.icons8.com/ios/50/ffffff/overview-pages-3-filled.png">
              </v-avatar>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Admission
              </v-list-tile-title>
            </v-list-tile-content>
          </v-btn>  

        <v-subheader class="mt-3 green--text">MANAGE</v-subheader>

          <v-btn  class="textNone caption transparent" exact-active-class="green"  depressed block to="/Doctor">
          <v-list-tile-action>
            <v-avatar size="23">
              <img src="https://img.icons8.com/ios/50/ffffff/doctor-male-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Doctor
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          
          <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/Appointments">
          <v-list-tile-action>
            <v-avatar tile size="19">
              <img src="https://img.icons8.com/ios/50/ffffff/calendar-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Appointments
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/Request">
          <v-list-tile-action>
            <v-avatar tile size="19">
              <img src="https://img.icons8.com/ios/50/ffffff/invite-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Requests
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/Employees">
          <v-list-tile-action>
            <v-avatar tile size="21">
              <img src="https://img.icons8.com/ios/50/ffffff/employee-card-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Employee
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <!-- <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/Rooms">
          <v-list-tile-action>
            <v-avatar size="20">
              <img src="https://img.icons8.com/ios/50/ffffff/bed-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Rooms
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn> -->

        <v-btn  class="textNone caption transparent" exact-active-class="green"  depressed block to="/Patient">
          <v-list-tile-action>
            <v-avatar size="23">
              <img src="https://img.icons8.com/ios/50/ffffff/cast-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Patient
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

          <v-btn class="textNone caption transparent" exact-active-class="green"  depressed block to="/Rooms">
          <v-list-tile-action>
            <v-avatar size="20">
              <img src="https://img.icons8.com/ios/50/ffffff/bed-filled.png">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Rooms
            </v-list-tile-title>
          </v-list-tile-content>
          </v-btn>

        </v-card>

        <!-- <v-list-tile class="mt-3" @click="Theme">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Theme</v-list-tile-title>
        </v-list-tile> -->
        <v-list-tile @click="Theme">
          <v-list-tile-action>
            <v-icon color="grey darken-1">copyright</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">2018 Computer Science </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <!-- class="bgLandingjie" -->
      <!-- class="bgLandingjie2" -->
      <!-- clipped-left -->
    <v-toolbar
      flat
      style="border-bottom:1px solid #607d8b17 !important"
      color="white"
      app
      fixed
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-icon class="mx-3">fab fa-youtube</v-icon> -->
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Asentista Doctors Hospital {{tester}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout> -->
      <v-menu left offset-y >
        <v-btn  
        dark
        
        class="green lighten-1 caption"
        slot="activator" flat >
          Create
        <v-icon size="18" class="">mdi-menu-down</v-icon>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="openDoctorDialog">
            <v-list-tile-title style="font-size:12px"> <v-icon small color="green darken-3">mdi-account-plus </v-icon> Doctor </v-list-tile-title>
          </v-list-tile>
          <v-list-tile  @click="openNurseDialog">
            <v-list-tile-title style="font-size:12px"><v-icon small color="green darken-3">mdi-account-plus  </v-icon> Nurse / Pharmacist</v-list-tile-title>
          </v-list-tile>
          <v-list-tile  @click="openEmployeeDialog">
            <v-list-tile-title style="font-size:12px"><v-icon small color="green darken-3">mdi-account-plus  </v-icon> Other Employee </v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
       <!-- <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn> -->
      <v-btn to="/Appointments" :ripple="false" flat outline small class="caption grey--text textNone transparent"  >
        <v-avatar
          size="20"
          tile
        >
        <img src="https://img.icons8.com/ios-glyphs/64/9E9E9E/today.png">
        </v-avatar>
        <span v-if="appointmentNumber > 1">{{appointmentNumber}} Appointments</span>
        <span v-else>{{appointmentNumber}} Appointment</span>
      </v-btn>
      <v-btn  to="/Request"  :ripple="false" flat outline small class="caption grey--text textNone transparent"  >
        <v-avatar
          size="20"
          tile
        >
        <img src="https://img.icons8.com/ios-glyphs/30/9E9E9E/repository.png">
        </v-avatar>
        <span v-if="requestNumber > 1">{{requestNumber}} Requests</span>
        <span v-else>{{requestNumber}} Request</span>
      </v-btn>
      <!-- <v-btn :ripple="false" flat outline small class="caption grey--text textNone transparent"  >
        <v-icon size="18" class="mr-2">mdi-settings</v-icon>
        Settings
      </v-btn> -->
      <!-- <v-divider vertical  inset class=""></v-divider> -->
      <v-menu left offset-y min-width="140">
        <v-btn  
        slot="activator" icon large>
        <v-avatar size="32px" >
          <img
            :src="accountDetails.profile"
            alt="Profile"
          >
        </v-avatar>
        </v-btn>
        <v-list dense>
          <v-list-tile @click="openAccountDialog">
            <v-list-tile-title style="font-size:12px"> <v-icon small color="blue darken-3">mdi-account-edit </v-icon> Account</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="openPasswordDialog">
            <v-list-tile-title style="font-size:12px"><v-icon small color="blue darken-3">mdi-account-key </v-icon> Change pass</v-list-tile-title>
          </v-list-tile>
           <v-list-tile @click="logoutAccount">
            <v-list-tile-title style="font-size:12px"><v-icon small color="blue darken-3">mdi-logout-variant </v-icon> Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
    </v-toolbar>
    <v-content >
        <router-view/>
    </v-content>



    <!-- //dialogs area -->

    <!-- dialog doctor -->

    <v-dialog v-model="dialogDoctor" persistent max-width="600px">
      <v-form ref="doctorForm"  v-model="doctorValid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Doctor Profile</span>
          <v-progress-linear :indeterminate="disabledDoc"></v-progress-linear>
        </v-card-title>
        <v-card-text style="margin-top:-50px">
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                  <div v-if="!image">
                    <h2>Profile Picture</h2>
                    <input :disabled="disabledDoc" accept="image/*"  type="file" @change="onFileChange">
                  </div>
                  <div v-else>
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
                <v-flex xs12>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="passwordErrors"
                  @input="$v.doctorsDetailsProfile.password.$touch()" @blur="$v.doctorsDetailsProfile.password.$touch()" 
                  v-model="doctorsDetailsProfile.password" label="Password*" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
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
                    multiple
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
    
    <!-- nurse dialog -->
     <v-dialog v-model="dialogNurse" persistent max-width="600px">
      <v-form ref="doctorForm"  v-model="doctorValid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline"><span v-if="doctorsDetailsProfile.doctortype != ''">{{doctorsDetailsProfile.doctortype }}</span> Profile</span>
          <v-progress-linear :indeterminate="disabledDoc"></v-progress-linear>
        </v-card-title>
        <v-card-text style="margin-top:-50px">
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                  <div v-if="!image">
                    <h2>Profile Picture</h2>
                    <input :disabled="disabledDoc" accept="image/*"  type="file" @change="onFileChange">
                  </div>
                  <div v-else>
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
                <v-flex xs12>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="passwordErrors"
                  @input="$v.doctorsDetailsProfile.password.$touch()" @blur="$v.doctorsDetailsProfile.password.$touch()" 
                  v-model="doctorsDetailsProfile.password" label="Password*" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
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
                    :items="EmployeeTypeItems.items"
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
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="closeNurseDialog">Close</v-btn>
          <v-btn :loading="disabledDoc" :disabled="uniq" color="green darken-1" flat @click="saveNurse">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
    <!-- nurse end dialog -->

      <!-- employee dialog -->
    <v-dialog v-model="dialogEmployee" persistent max-width="600px">
      <v-form ref="doctorForm"  v-model="doctorValid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline"><span v-if="doctorsDetailsProfile.doctortype != ''">{{doctorsDetailsProfile.doctortype }}</span> Profile</span>
          <v-progress-linear :indeterminate="disabledDoc"></v-progress-linear>
        </v-card-title>
        <v-card-text style="margin-top:-50px">
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                  <div v-if="!image">
                    <h2>Profile Picture</h2>
                    <input :disabled="disabledDoc" accept="image/*"  type="file" @change="onFileChange">
                  </div>
                  <div v-else>
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
                <v-flex xs12 sm6>
                  <v-autocomplete
                    :disabled="disabledDoc"
                    :error-messages="typeErrors"
                    @input="$v.doctorsDetailsProfile.doctortype.$touch()" @blur="$v.doctorsDetailsProfile.doctortype.$touch()" 
                    :items="otherEmployeeTypeItems.items"
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
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="closeEmployeeDialog">Close</v-btn>
          <v-btn :loading="disabledDoc" :disabled="uniq" color="green darken-1" flat @click="saveNurse">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
    <!-- employee end dialog -->

    <!-- admin dialog -->
    <v-dialog v-model="dialogAdminPass" persistent max-width="600px">
      <v-form ref="doctorForm"  v-model="doctorValid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Update your password</span>
          <v-progress-linear :indeterminate="disabledDoc"></v-progress-linear>
        </v-card-title>
        <v-card-text style="margin-top:-50px">
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 md6>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="currentPasswordError"
                  @input="$v.doctorsDetailsProfile.currentPassword.$touch()" @blur="$v.doctorsDetailsProfile.currentPassword.$touch()" 
                  v-model="doctorsDetailsProfile.currentPassword" label="Current password*" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="passwordErrors"
                  @input="$v.doctorsDetailsProfile.password.$touch()" @blur="$v.doctorsDetailsProfile.password.$touch()" 
                  v-model="doctorsDetailsProfile.password" label="New password" type="password" ></v-text-field>
                </v-flex>
                
                <v-flex xs12 sm6>
                  <!-- <v-autocomplete
                    :disabled="disabledDoc"
                    :error-messages="typeErrors"
                    @input="$v.doctorsDetailsProfile.doctortype.$touch()" @blur="$v.doctorsDetailsProfile.doctortype.$touch()" 
                    :items="doctorTypeItems.items"
                    v-model="doctorsDetailsProfile.doctortype"
                    label="Type*"
                    multiple
                  ></v-autocomplete> -->
                </v-flex>
              
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="closedoctorDialog">Close</v-btn>
          <v-btn :loading="disabledDoc" v-if="doctorsDetailsProfile.dummyPassword == doctorsDetailsProfile.currentPassword" :disabled="uniq2" color="green darken-1" flat @click="updateAccount">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>


     <v-dialog v-model="dialogAdmin" persistent max-width="600px">
      <v-form ref="doctorForm"  v-model="doctorValid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline">Update your Profile</span>
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
               
                <v-flex xs12 sm6>
                  <v-text-field  
                  :disabled="disabledDoc"
                  :error-messages="usernameErrors"
                  @input="$v.doctorsDetailsProfile.username.$touch()" @blur="$v.doctorsDetailsProfile.username.$touch()" 
                  v-model="doctorsDetailsProfile.username" label="Username*" type="text" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <!-- <v-autocomplete
                    :disabled="disabledDoc"
                    :error-messages="typeErrors"
                    @input="$v.doctorsDetailsProfile.doctortype.$touch()" @blur="$v.doctorsDetailsProfile.doctortype.$touch()" 
                    :items="doctorTypeItems.items"
                    v-model="doctorsDetailsProfile.doctortype"
                    label="Type*"
                    multiple
                  ></v-autocomplete> -->
                </v-flex>
              
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="resetDoctorForm">Reset</v-btn>
          <v-btn :disabled="disabledDoc" color="blue darken-1" flat @click="closedoctorDialog">Close</v-btn>
          <v-btn :loading="disabledDoc" v-if="doctorsDetailsProfile.dummyPassword == doctorsDetailsProfile.currentPassword" :disabled="uniq" color="green darken-1" flat @click="updateAccount">Save</v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>


    <!-- loading Dialog -->

    <v-dialog
      v-model="loadingDialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="blue darken-4"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- end loading Dialog -->

  </v-app>
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
        password: { required, minLength: minLength(6) },
        email: { required, email },
        fn:  { required },
        mn:  { required },
        ln:  { required },
        doctortype: { required },
        username: {required},
        currentPassword: { required }
      }
     
    },
    data: () => ({
      dialogAdminPass: false,
      dialogAdmin: false,
      disabledDoc: false,
      image: '',
      doctorValid: true,
      dialogDoctor: false,
      dialogNurse: false,
      dialogEmployee: false,
      dark: false,
      drawer: null,
      doctorTypeItems: {
        items: ['Pediatrician', 'Internal Doctor', 'General Doctor', 'Obstercian'],
      },
      EmployeeTypeItems: {
        items: ['Nurse','Pharmacist'],
      },
      otherEmployeeTypeItems: {
        items: ['Medtech','Radiologist','Utility'],
      },
      doctorsDetailsProfile: {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        dummyEmail: '',
        password: '',
        dummyPassword: '',
        currentPassword: '',
        doctortype: [],
        profile: '',
        cnumber: '',
        username:'',
        dummyUsername: '' ,
        type: '',
      },
      loadingPercent: 0,
    }),
    props: {
      source: String
    },
    mounted() {
      this.enterNotiEvent()
    },
    computed: {
      requestNumber() {
        var data = this.$store.getters.listofAppointments
        var filter = _.filter(data,'doctor')
        if(filter.length != 0) {
          return filter.length
        }
      },
      appointmentNumber() {
        var myRequest = this.$store.getters.listofAs
        var historyList = []
        _.forEach(myRequest, function(data){
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
        var filter = _.filter(historyList,'doctor')
        if(filter.length != 0) {
          return filter.length
        }
      },
      loadingDialog() {
        if(this.loadingPercent == 100) {
          return true
        } else {
          return false
        }
      },
      tester() {
        this.loadingDialog
      },
      uniq2() {
        var findUsername = _.find(this.listofUsers, ['username', _.capitalize(this.doctorsDetailsProfile.username)])
        var findEmail = _.find(this.listofUsers, ['email', _.capitalize(this.doctorsDetailsProfile.email)])
        if(findUsername != null && this.doctorsDetailsProfile.username != this.doctorsDetailsProfile.dummyUsername || findEmail != null && this.doctorsDetailsProfile.email != this.doctorsDetailsProfile.dummyEmail || this.doctorsDetailsProfile.currentPassword != this.doctorsDetailsProfile.dummyPassword) { 
          return true
        } else {
          return false
        }
      },
      uniq() {
        var findUsername = _.find(this.listofUsers, ['username', _.capitalize(this.doctorsDetailsProfile.username)])
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
        var obUser = JSON.parse(localStorage.getItem('accountDetails') );
        var getDetails = _.filter(this.listofUsers,['keyIndex',obUser.keyIndex])
        // console.log(getDetails)
        // console.clear()
        return getDetails[0]
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
        if (!this.$v.doctorsDetailsProfile.username.$dirty) return errors
        if(findUsername != null && this.dialogAdminPass == false ) { errors.push('Username already used') }
        if(findUsername != null && this.doctorsDetailsProfile.username != this.doctorsDetailsProfile.dummyUsername && this.dialogAdmin == true ) { errors.push('Username already used') }
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
        const errors = []
        if (!this.$v.doctorsDetailsProfile.password.$dirty) return errors
        !this.$v.doctorsDetailsProfile.password.minLength && errors.push('Password must be at least 6 characters long')
        !this.$v.doctorsDetailsProfile.password.required && errors.push('Password is required.')
        return errors
      },
      currentPasswordError () {
        const errors = []
        if (!this.$v.doctorsDetailsProfile.currentPassword.$dirty) return errors
        if(this.doctorsDetailsProfile.currentPassword != this.doctorsDetailsProfile.dummyPassword) {
          errors.push('Current password is wrong')
        } 
        !this.$v.doctorsDetailsProfile.currentPassword.required && errors.push('Current password is required.')
        return errors
      },
      typeErrors () {
        const errors = []
        if (!this.$v.doctorsDetailsProfile.doctortype.$dirty) return errors
        !this.$v.doctorsDetailsProfile.doctortype.required && errors.push('Type is required')
        return errors
      },

    },
    methods: {
    enterNotiEvent() {
      // alert('wer')
      let vm = this
      async function test() {
        var listofUsers =  await vm.$store.getters.listofUsers
        var obUser = await JSON.parse(localStorage.getItem('accountDetails') );
        var getDetails = await  _.filter(listofUsers,['keyIndex',obUser.keyIndex])
        console.log(getDetails[0])
      }
      test()
    },
   
    createDoctor() {

    },
    test() {
      alert('test')
    },
    logoutAccount() {
      let vm = this
      try {
        localStorage.removeItem("accountDetails");
      } catch(error) {
        alert('something is wrong!')
      } finally {
        vm.$router.push({
          path:'/auth',
        })
      }
    },
    Theme() {
      this.dark = !this.dark
    },
    resetDoctorForm() {
      this.image= ''
      this.doctorsDetailsProfile= {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        password: '',
        username: '',
        doctortype: [],
        profile: '',
        cnumber: '',
      }
      this.$v.$reset()
    },
    openAccountDialog() {
      var data = this.accountDetails
      this.doctorsDetailsProfile= {
        fn: data.fn,
        mn: data.mn,
        ln:  data.ln,
        email: data.email,
        dummyEmail: data.email,
        password: data.password,
        dummyPassword: data.password,
        currentPassword: data.password,
        doctortype: data.doctortype,
        keyIndex: data.keyIndex,
        username: data.username,
        dummyUsername: data.username,
        profile: data.profile,
        cnumber: data.cnumber,
        type: data.type
      }
      this.dialogAdmin = true
    },  
    openPasswordDialog() {
      var data = this.accountDetails
      this.doctorsDetailsProfile= {
        fn: data.fn,
        mn: data.mn,
        ln:  data.ln,
        email: data.email,
        dummyEmail: data.email,
        password: '',
        dummyPassword: data.password,
        currentPassword: '',
        doctortype: data.doctortype,
        keyIndex: data.keyIndex,
        username: data.username,
        dummyUsername: data.username,
        profile: data.profile,
        cnumber: data.cnumber,
        type: data.type
      }
      this.dialogAdminPass = true
    },
    updateAccount() {
      // this.$v.$reset()
      let vm = this
      this.loadingPercent = 0
      // console.log(this.image)
      if(this.$v.$invalid) {
        this.$v.$touch()
      } else {
        vm.disabledDoc = true
        var storageRef = firebase.storage().ref();
        if(vm.image == '' && vm.doctorsDetailsProfile.profile == '') {
          vm.disabledDoc = false
          vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully updated your account',
            duration: 10000,
          })
          var add = firebase.database().ref('accountUser/'+vm.doctorsDetailsProfile.keyIndex)
          add.set({
            fn: _.capitalize(vm.doctorsDetailsProfile.fn),
            mn: _.capitalize(vm.doctorsDetailsProfile.mn),
            ln: _.capitalize(vm.doctorsDetailsProfile.ln),
            email: _.capitalize(vm.doctorsDetailsProfile.email),
            password: vm.doctorsDetailsProfile.password,
            type: 0, //admin
            doctortype: vm.doctorsDetailsProfile.doctortype,
            profile: "https://img.icons8.com/office/1600/000000/doctor-male.png" ,
            keyIndex: vm.doctorsDetailsProfile.keyIndex,
            cnumber: vm.doctorsDetailsProfile.cnumber,
            username:  _.capitalize(vm.doctorsDetailsProfile.username),
          })
          vm.image= ''
          localStorage.setItem("accountDetails", JSON.stringify(vm.doctorsDetailsProfile));
          vm.doctorsDetailsProfile= {
            fn: '',
            mn: '',
            ln: '',
            email: '',
            password: '',
            username: '',
            doctortype: [],
            profile: '',
            cnumber: '',
          }
          vm.$v.$reset()
          vm.dialogAdminPass = false
          vm.dialogAdmin = false
        } else if(vm.doctorsDetailsProfile.profile != '' ){
          vm.dialogAdmin = false
          vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully updated your account',
            duration: 10000,
          })
          var add = firebase.database().ref('accountUser/'+vm.doctorsDetailsProfile.keyIndex)
          add.set({
            fn: _.capitalize(vm.doctorsDetailsProfile.fn),
            mn: _.capitalize(vm.doctorsDetailsProfile.mn),
            ln: _.capitalize(vm.doctorsDetailsProfile.ln),
            email: _.capitalize(vm.doctorsDetailsProfile.email),
            password: vm.doctorsDetailsProfile.password,
            type: 0 , //doctor
            doctortype: vm.doctorsDetailsProfile.doctortype,
            profile: vm.doctorsDetailsProfile.profile,
            keyIndex: vm.doctorsDetailsProfile.keyIndex,
            cnumber: vm.doctorsDetailsProfile.cnumber,
            username:  _.capitalize(vm.doctorsDetailsProfile.username),
          })
          vm.image= ''
          localStorage.setItem("accountDetails", JSON.stringify(vm.doctorsDetailsProfile));
          vm.doctorsDetailsProfile= {
            fn: '',
            mn: '',
            ln: '',
            email: '',
            password: '',
            username: '',
            doctortype: [],
            profile: '',
            cnumber: '',
          }
          vm.$v.$reset()
          vm.disabledDoc = false
          vm.dialogAdmin = false
          vm.dialogAdminPass = false

        } else {
          var uploadTask = storageRef.child(`profileimages/` + vm.doctorsDetailsProfile.keyIndex).putString(vm.image, 'data_url')
          uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, function(error) {
          }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              vm.dialogAdmin = false
              vm.$notify({
                group: 'bottomright',
                type: 'success',
                title: 'Successfully updated your account',
                duration: 10000,
              })
              vm.doctorsDetailsProfile.profile = downloadURL
              var add = firebase.database().ref('accountUser/'+vm.doctorsDetailsProfile.keyIndex)
              add.set({
                fn: _.capitalize(vm.doctorsDetailsProfile.fn),
                mn: _.capitalize(vm.doctorsDetailsProfile.mn),
                ln: _.capitalize(vm.doctorsDetailsProfile.ln),
                email: _.capitalize(vm.doctorsDetailsProfile.email),
                password: vm.doctorsDetailsProfile.password,
                type: 0 , //doctor
                doctortype: vm.doctorsDetailsProfile.doctortype,
                profile: vm.doctorsDetailsProfile.profile ,
                keyIndex: vm.doctorsDetailsProfile.keyIndex,
                cnumber: vm.doctorsDetailsProfile.cnumber,
                username:  _.capitalize(vm.doctorsDetailsProfile.username),
              })
              vm.image= ''
              localStorage.setItem("accountDetails", JSON.stringify(vm.doctorsDetailsProfile));
              vm.doctorsDetailsProfile= {
                fn: '',
                mn: '',
                ln: '',
                email: '',
                password: '',
                username: '',
                doctortype: [],
                profile: '',
                cnumber: '',
              }
              vm.$v.$reset()
              vm.disabledDoc = false
              vm.dialogAdmin = false
              vm.dialogAdminPass = false

              // console.log('File available at', downloadURL);
            }, function() {
            });
          })
        }
      }
    },
    saveDoctor() {
      // this.$v.$reset()
      this.doctorsDetailsProfile.currentPassword = 'tester'
      let vm = this
      this.loadingPercent = 0
      // console.log(this.image)
      if(this.$v.$invalid) {
        this.$v.$touch()
      } else {
        vm.disabledDoc = true
        var newPostKey = firebase.database().ref().child('accountUser').push().key;
        var storageRef = firebase.storage().ref();
       
        if(vm.image == '') {
          vm.disabledDoc = false
          vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully added a doctor',
            text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
            duration: 10000,
          })
          var add = firebase.database().ref('accountUser/'+newPostKey)
          add.set({
            fn: _.capitalize(vm.doctorsDetailsProfile.fn),
            mn: _.capitalize(vm.doctorsDetailsProfile.mn),
            ln: _.capitalize(vm.doctorsDetailsProfile.ln),
            email: _.capitalize(vm.doctorsDetailsProfile.email),
            password: vm.doctorsDetailsProfile.password,
            type: 1 , //doctor
            doctortype: vm.doctorsDetailsProfile.doctortype,
            profile: "https://img.icons8.com/office/1600/000000/doctor-male.png" ,
            keyIndex: newPostKey,
            cnumber: vm.doctorsDetailsProfile.cnumber,
            username:  _.capitalize(vm.doctorsDetailsProfile.username),
          })
          vm.image= ''
          vm.doctorsDetailsProfile= {
            fn: '',
            mn: '',
            ln: '',
            email: '',
            password: '',
            username: '',
            doctortype: [],
            profile: '',
            cnumber: '',
          }
          vm.$v.$reset()
        } else {
          var uploadTask = storageRef.child(`profileimages/` + newPostKey).putString(vm.image, 'data_url')
          uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, function(error) {
          }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              vm.disabledDoc = false
              vm.$notify({
                group: 'bottomright',
                type: 'success',
                title: 'Successfully added a doctor',
                text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
                duration: 10000,
              })
              vm.doctorsDetailsProfile.profile = downloadURL
              var add = firebase.database().ref('accountUser/'+newPostKey)
              add.set({
                fn: _.capitalize(vm.doctorsDetailsProfile.fn),
                mn: _.capitalize(vm.doctorsDetailsProfile.mn),
                ln: _.capitalize(vm.doctorsDetailsProfile.ln),
                email: _.capitalize(vm.doctorsDetailsProfile.email),
                password: vm.doctorsDetailsProfile.password,
                type: 1 , //doctor
                doctortype: vm.doctorsDetailsProfile.doctortype,
                profile: vm.doctorsDetailsProfile.profile ,
                keyIndex: newPostKey,
                cnumber: vm.doctorsDetailsProfile.cnumber,
                username:  _.capitalize(vm.doctorsDetailsProfile.username),
              })
              vm.image= ''
              vm.doctorsDetailsProfile= {
                fn: '',
                mn: '',
                ln: '',
                email: '',
                password: '',
                username: '',
                doctortype: [],
                profile: '',
                cnumber: '',
              }
              vm.$v.$reset()
              console.log('File available at', downloadURL);
            }, function() {
            });
          })
        }

     
      }
      
    },
    closedoctorDialog() {
      this.doctorsDetailsProfile= {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        password: '',
        username: '',
        doctortype: [],
        profile: '',
        cnumber: '',
      }
      this.dialogAdminPass = false
      this.dialogAdmin = false
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
      this.image = ''
      this.doctorsDetailsProfile.profile = ''
    },
    
    // employee
    closeEmployeeDialog() {
      this.dialogEmployee = false
      this.image = ''
      this.$v.$reset()
      this.doctorsDetailsProfile= {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        password: '',
        username: '',
        doctortype: [],
        profile: '',
        cnumber: '',
      }
    },
    openEmployeeDialog() {
      this.dialogEmployee = true
    },
    // end employee

    // nurse
    closeNurseDialog() {
      this.image = ''
      this.dialogNurse = false
      this.$v.$reset()
      this.doctorsDetailsProfile= {
        fn: '',
        mn: '',
        ln: '',
        email: '',
        password: '',
        username: '',
        doctortype: [],
        profile: '',
        cnumber: '',
      }
    },
    openDoctorDialog() {
      this.dialogDoctor = true
 
    },
    openNurseDialog() {
      this.dialogNurse = true
      this.doctorsDetailsProfile.doctortype = this.EmployeeTypeItems.value
    },
    saveNurse() {
    // this.$v.$reset()
    let vm = this
    this.loadingPercent = 0
    // console.log(this.image)
    if(vm.doctorsDetailsProfile.doctortype == 'Nurse' || vm.doctorsDetailsProfile.doctortype == 'Pharmacist'  ){
      jie()
    } else {
      this.doctorsDetailsProfile.username = this.doctorsDetailsProfile.email
      this.doctorsDetailsProfile.password = this.doctorsDetailsProfile.email
      this.doctorsDetailsProfile.currentPassword = 'tester'
      console.log(this.doctorsDetailsProfile)
      jie()
    }
    function jie() {
      vm.doctorsDetailsProfile.currentPassword =  vm.doctorsDetailsProfile.password
      if(vm.$v.$invalid) {
        vm.$v.$touch()
      } else {
        vm.disabledDoc = true
        var newPostKey = firebase.database().ref().child('accountUser').push().key;
        var storageRef = firebase.storage().ref();
        if(vm.image == '') {
          vm.disabledDoc = false
          if(vm.doctorsDetailsProfile.doctortype == 'Nurse') {
            var numbertype = 2
          } else {
            vm.doctorsDetailsProfile.password = newPostKey
            vm.doctorsDetailsProfile.username = newPostKey
            var numbertype = 3
          }
          vm.$notify({
            group: 'bottomright',
            type: 'success',
            title: 'Successfully added a '+ vm.doctorsDetailsProfile.doctortype,
            text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
            duration: 10000,
          })
          var add = firebase.database().ref('accountUser/'+newPostKey)
          add.set({
            fn: _.capitalize(vm.doctorsDetailsProfile.fn),
            mn: _.capitalize(vm.doctorsDetailsProfile.mn),
            ln: _.capitalize(vm.doctorsDetailsProfile.ln),
            email: _.capitalize(vm.doctorsDetailsProfile.email),
            password: vm.doctorsDetailsProfile.password,
            doctortype: vm.doctorsDetailsProfile.doctortype ,
            type: numbertype, //nurse
            profile: "https://img.icons8.com/office/1600/000000/nurse-female.png" ,
            keyIndex: newPostKey,
            cnumber: vm.doctorsDetailsProfile.cnumber,
            username:  _.capitalize(vm.doctorsDetailsProfile.username),
          })
          vm.image= ''
          vm.doctorsDetailsProfile= {
            fn: '',
            mn: '',
            ln: '',
            email: '',
            password: '',
            username: '',
            doctortype: [],
            profile: '',
            cnumber: '',
          }
          vm.$v.$reset()
        } else {
          var uploadTask = storageRef.child(`profileimages/` + newPostKey).putString(vm.image, 'data_url')
          uploadTask.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, function(error) {
          }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              vm.disabledDoc = false
              vm.$notify({
                group: 'bottomright',
                type: 'success',
                title: 'Successfully added a '+ vm.doctorsDetailsProfile.doctortype,
                text: `Account name: ${_.capitalize(vm.doctorsDetailsProfile.fn)} ${_.capitalize(vm.doctorsDetailsProfile.ln)}` ,
                duration: 10000,
              })
              vm.doctorsDetailsProfile.profile = downloadURL
              if(vm.doctorsDetailsProfile.doctortype == 'Nurse') {
                var numbertype = 2
              } else if (vm.doctorsDetailsProfile.doctortype == 'Pharmacist') {
                var numbertype = 3
              }
              else {
                var numbertype = 4
              }
              var add = firebase.database().ref('accountUser/'+newPostKey)
              add.set({
                fn: _.capitalize(vm.doctorsDetailsProfile.fn),
                mn: _.capitalize(vm.doctorsDetailsProfile.mn),
                ln: _.capitalize(vm.doctorsDetailsProfile.ln),
                email: _.capitalize(vm.doctorsDetailsProfile.email),
                doctortype: vm.doctorsDetailsProfile.doctortype ,
                password: vm.doctorsDetailsProfile.password,
                type: numbertype, //nurse
                doctortype: vm.doctorsDetailsProfile.doctortype,
                profile: vm.doctorsDetailsProfile.profile ,
                keyIndex: newPostKey,
                cnumber: vm.doctorsDetailsProfile.cnumber,
                username:  _.capitalize(vm.doctorsDetailsProfile.username),
              })
              vm.image= ''
              vm.doctorsDetailsProfile= {
                fn: '',
                mn: '',
                ln: '',
                email: '',
                password: '',
                username: '',
                doctortype: [],
                profile: '',
                cnumber: '',
              }
              vm.$v.$reset()
              console.log('File available at', downloadURL);
            }, function() {
            });
          })
          }
      }
    }
    },
    
  }
}
</script>
