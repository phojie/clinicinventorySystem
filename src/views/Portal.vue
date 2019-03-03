<template>
   <v-app light>
    <v-card
      color="white"
      flat
      height=""
      tile
    >
        <v-toolbar class="px-5 py-1 white elevation-1 "   >
          <v-avatar size="52">
            <img src="https://img.icons8.com/color/1600/000000/spring-logo.png">
          </v-avatar>
          <v-toolbar-title>Asentista Doctors Hospital</v-toolbar-title>
          <v-spacer></v-spacer>
          <span class="blue--text text--darken-3 caption "> 800.223.2273</span> 
          <v-divider class="mx-3" inset vertical></v-divider>
          <router-link to="" style="text-decoration: none" class="black--text caption mr-3">Need help?</router-link> 
          <router-link to="" style="text-decoration: none" class="black--text caption mr-3">Giving</router-link> 
          <router-link to="" style="text-decoration: none" class="black--text caption mr-3">Careers</router-link> 

          <v-btn href="https://www.facebook.com/pages/Asentista-Doctors-Hospital/204919656350518" icon>
            <v-avatar
              size="30"
              color="transparent"
              tile
            >
              <img src="https://img.icons8.com/color/48/000000/facebook.png">
            </v-avatar>
          </v-btn>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          
          <!-- <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn> -->
        </v-toolbar>
    </v-card>

    <v-content>
      <section 
      >
      <v-carousel 
        hide-delimiters
        height="450"
        interval="10000"
        hide-controls
        >
        <v-carousel-item
          touchless
          src="https://my.clevelandclinic.org/-/scassets/images/org/hero/img-home-hero-2.ashx"
        >
        <v-card 
          height="100%"
          style=" background: linear-gradient(90deg, rgba(0, 0, 0, 0.45), rgba(0, 9, 14, 0.46)) 50% center !important; "
        >
        
            <v-layout column align-center justify-center  fill-height >
            <h1 class=" font-weight-black white--text mb-2 display-3 text-xs-center">Access Anytime Anywhere</h1>
            <div class="white--text headline font-weight-medium mb-5 text-xs-center">Find your way to the best care</div>

            <!-- <img 
              src="https://img.icons8.com/color/1600/000000/spring-logo.png"
             height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div> -->

            <v-btn @click="dialog = true" color="blue darken-1" large  class="mb-4">Book an Appointment</v-btn>
            </v-layout>
        </v-card>
        
        </v-carousel-item>
      </v-carousel>
      </section>
    

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-2">
            <div class="text-xs-center">
              <h2 class="headline"> The Asentista Doctors Hospital</h2>
              <span class="subheading">
                "Hospital sayings dre -__- "
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap >
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar
                        size="120"
                        color="blue lighten-4"
                      >
                      <img class="pa-3" src="https://img.icons8.com/color/1600/000000/doctor-male.png">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"> Our Doctors </div>
                    </v-card-title>
                    <v-card-text>
                      Our find a doctor tool assists you in choosing from our diverse pool of health specialists. Discover better health & wellness by using our doctor ratings & reviews to make your choice. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar
                        size="120"
                        color="green lighten-4"
                      >
                      <img class="pa-3" src="https://img.icons8.com/color/1600/000000/point-objects.png">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"> Locations & Directions </div>
                    </v-card-title>
                    <v-card-text>
                      慢艺姐界赛听片土 动笑儿兰洗语晚庭早离素其？称方等叫划自总居呀毕？产势孤洲增提班民女向。讲欢放闻行？血意决于后吸号李录放开板赶密简世觉！算清妇雪皮章用叫车举机恶线？欧差两你爱卡追请败马毕跑它法希解。退突唱范华面蜖约义？普模轻约低团英身脑支忙相？
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar
                        size="120"
                        color="amber lighten-4"
                      >
                      <img class="pa-3" src="https://img.icons8.com/color/1600/000000/planner.png">
                      </v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"> Appointments </div>
                    </v-card-title>
                    <v-card-text>
                      慢艺姐界赛听片土狗音就皇初么洗语晚庭早离素其 。讲欢放闻行？血意决于后吸号李录放开板赶密简世觉！算清妇雪皮章用叫车举机恶线？欧差两你爱卡追请败马毕跑它法希解。退突唱范华面蜖约义？普模轻约低团英身脑支忙相？
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

 


      <section 
      >
        <v-card
          style="background-image:url('https://www.mountsinai.org/mshealth/themes/default/media/images/at-a-glance-bkgd.jpg')"
          height="5"
        >

        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row align-center wrap >
                <!-- <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-avatar
                        size="150"
                        style="border:5px solid white"
                      >
                      <v-icons>

                      </v-icons>
                      </v-avatar>
                    </v-card-text>
                  </v-card>
                </v-flex> -->
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        </v-card>
      </section>

      <!-- <section>
        <v-parallax src="imgs/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section> -->

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Hospital info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Maranding, PH</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon
                      class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>asentista@vuejs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card elevation-10>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.8684322378183!2d123.77060473802482!3d7.9225297842151985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254351efc597dc7%3A0xd2dcd2e5f279901e!2sAsentista+Doctors+Hospital!5e0!3m2!1sen!2sph!4v1545407751133" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              &copy; 2018
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="#" target="_blank">Laravel</a>
              and <a class="white--text" href="#">Christ the king students</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>

    <!-- dialogs -->

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Book an appointment  {{tester || ''}}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat v-if="!submitedALready" @click="saveAppointment">Submit</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="grey--text pa-5">
          <div class="body-2">
            Request an Appointment
          </div>
          <div>
            To request an appointment using our website, please complete the form below.  
            <br>
            If you have a medical emergency, dial 911.
          </div>
        </div>

        <v-card-title class="px-5">
          <span class="headline">Appointment Information</span>
        </v-card-title>
        <v-card-text class="px-5">
          <v-container v-if="!submitedALready" style="" class="mx-0 lighten-4 grey" grid-list-lg>
            <v-layout wrap>
              <v-flex xs12 sm1 d-flex>
                <v-select
                  :items="['Mr','Mrs','Ms','Fr','Sr','Reve.','Dr']"
                  label="Title"
                  @input="$v.modelPatient.title.$touch()" @blur="$v.modelPatient.title.$touch()" 
                  :error-messages="titleErrors" 
                  v-model="modelPatient.title"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md3>
                <v-text-field 
                  @input="$v.modelPatient.firstname.$touch()" @blur="$v.modelPatient.firstname.$touch()" 
                  :error-messages="fnErrors" 
                  v-model="modelPatient.firstname" label="First name"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md3>
                <v-text-field 
                  @input="$v.modelPatient.lastname.$touch()" @blur="$v.modelPatient.lastname.$touch()" 
                  :error-messages="lnErrors" 
                  v-model="modelPatient.lastname" label="Last name"></v-text-field>
              </v-flex>
             
              <v-flex xs12 sm6 md5>
                <v-text-field v-model="modelPatient.email"
                  @input="$v.modelPatient.email.$touch()" @blur="$v.modelPatient.email.$touch()" 
                  :error-messages="emailErrors" 
                  label="E-mail">
                </v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md4>
                <v-text-field 
                  @input="$v.modelPatient.cnumber.$touch()" @blur="$v.modelPatient.cnumber.$touch()" 
                  :error-messages="cnumberErrors" 
                  v-model="modelPatient.cnumber" label="Phone #"></v-text-field>
              </v-flex>

               <v-flex xs12 sm4 >
                <v-text-field 
                  @input="$v.modelPatient.address1.$touch()" @blur="$v.modelPatient.address1.$touch()" 
                  :error-messages="address1Errors" 
                  v-model="modelPatient.address1" label="Address Line 1"></v-text-field>
              </v-flex>

              <v-flex xs12 sm4 >
                <v-text-field v-model="modelPatient.address2" label="Address Line 2"></v-text-field>
              </v-flex>
              <v-flex xs12 sm2 d-flex>
                <v-select
                  @input="$v.modelPatient.gender.$touch()" @blur="$v.modelPatient.gender.$touch()" 
                  :error-messages="genderError" 
                  v-model="modelPatient.gender"
                  :items="['Male','Female']"
                  label="Gender"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm2 >
                <v-text-field 
                  @input="$v.modelPatient.age.$touch()" @blur="$v.modelPatient.age.$touch()" 
                  :error-messages="ageErrors" 
                  v-model="modelPatient.age" type="number" label="Age"></v-text-field>
              </v-flex>
              <v-flex 
                xs12 sm4 d-flex>
                <v-select
                  @input="$v.modelPatient.typeD.$touch()" @blur="$v.modelPatient.typeD.$touch()" 
                  :error-messages="typeDErrors" 
                  :items="typeItems"
                  label="Type of doctor"
                  v-model="modelPatient.typeD"
                ></v-select>
              </v-flex>
              <v-flex 
                xs12 sm4 d-flex>
                <v-select
                  @input="$v.modelPatient.doctor.$touch()" @blur="$v.modelPatient.doctor.$touch()" 
                  :error-messages="doctorErrors" 
                  v-model="modelPatient.doctor"
                  :items="listofSelect"
                  label="Select your Doctor"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm4>
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
                    :error-messages="dateErrors" 
                    @input="$v.modelPatient.date.$touch()" @blur="$v.modelPatient.date.$touch()" 
                    :value="computedDateFormattedMomentjs"
                    clearable
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
          <v-card  class="light-green lighten-5 pa-5 text-xs-center" v-else>
            <div class="light-green--text text--darken-1 display-2"> We Received Your Request! </div>
            <div class="subheading mt-2">Thank you for submitting your appointment request. A representative will contact you by phone within this day.</div>
            <v-btn flat @click="submitedALready = false" class="textNone darken-4 white--text amber mt-4">New Appointment</v-btn>
          </v-card>
        </v-card-text>
      </v-card>
  </v-dialog>
  </v-app>
</template>

<script>
import moment from 'moment'
import publicIp from 'public-ip'
import firebase from 'firebase'
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    modelPatient: {
      title: {required},
      firstname: {required},
      lastname: {required},
      email: {required, email},
      cnumber: {required},
      address1: {required},
      gender: {required},
      age: {required},
      typeD: {required},
      doctor: {required},
      date: {required}
    },
  },
  data() {
    return {
      submitedALready:false,
      dialog: false,
      menu1: false,
      doctorSe: [],
      typeItems: ['Pediatrician', 'Internal Doctor', 'General Doctor', 'Obstercian'],
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
      },
    }
  },
  methods: {
  
    testerf(){
      var el = ["2018-03-03", "2018-03-05"]
      val => el.indexOf(val) !== -1
    },
    // testerf: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    saveAppointment() {
      let vm = this
      var searchDate = _.find(this.listofDisabled, ['date',this.modelPatient.date])
      var count = _.filter(this.listofAdmission, ['adate',this.modelPatient.adate])
      

      if(this.$v.$invalid || searchDate || count.length>15) {
        this.$v.$touch()
      } else {
        var newPostKey = firebase.database().ref().child('appointments').push().key;
        var sendtodb = firebase.database().ref('appointments/'+newPostKey)
        sendtodb.set({
          keyIndex: newPostKey,
          title:_.capitalize(vm.modelPatient.title),
          firstname: _.capitalize(vm.modelPatient.firstname),
          lastname: _.capitalize(vm.modelPatient.lastname),
          email: _.capitalize(vm.modelPatient.email),
          cnumber: _.capitalize(vm.modelPatient.cnumber),
          address1: _.capitalize(vm.modelPatient.address1),
          address2: _.capitalize(vm.modelPatient.address2),
          gender: _.capitalize(vm.modelPatient.gender),
          age: _.capitalize(vm.modelPatient.age),
          typeD: _.capitalize(vm.modelPatient.typeD),
          doctor: vm.modelPatient.doctor,
          adate: vm.modelPatient.date,
        }, function(error) {
          if(error) {
            alert("Hinay kayu connection nimu :'(")
          } else {
            vm.modelPatient = {
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
            }
            vm.submitedALready = true
            vm.$v.$reset()
          }
        })
      }
    }
  },
  computed: {
    minDate() {
      var today = moment()
      var format = today.add(2, 'days'); 
      return format.format('YYYY-MM-DD')
      // return   
    },
    tester() {
      // return moment().format('dddd, MMMM Do YYYY')  
    },
    emailErrors () {
      const errors = []
      if (!this.$v.modelPatient.email.$dirty) return errors
      !this.$v.modelPatient.email.email && errors.push('Must be valid e-mail')
      !this.$v.modelPatient.email.required && errors.push('E-mail is required')
      return errors
    },
    titleErrors () {
      const errors = []
      if (!this.$v.modelPatient.title.$dirty) return errors
      !this.$v.modelPatient.title.required && errors.push('Title is required')
      return errors
    },
    fnErrors () {
      const errors = []
      if (!this.$v.modelPatient.firstname.$dirty) return errors
      !this.$v.modelPatient.firstname.required && errors.push('Firstname is required')
      return errors
    },
    lnErrors () {
      const errors = []
      if (!this.$v.modelPatient.lastname.$dirty) return errors
      !this.$v.modelPatient.lastname.required && errors.push('Lastname is required')
      return errors
    },
    cnumberErrors () {
      const errors = []
      if (!this.$v.modelPatient.cnumber.$dirty) return errors
      !this.$v.modelPatient.cnumber.required && errors.push('Phone number is required')
      return errors
    },
    address1Errors () {
      const errors = []
      if (!this.$v.modelPatient.address1.$dirty) return errors
      !this.$v.modelPatient.address1.required && errors.push('Adress is required')
      return errors
    },
    genderError () {
      const errors = []
      if (!this.$v.modelPatient.gender.$dirty) return errors
      !this.$v.modelPatient.gender.required && errors.push('Gender is required')
      return errors
    },
    ageErrors () {
      const errors = []
      if (!this.$v.modelPatient.age.$dirty) return errors
      !this.$v.modelPatient.age.required && errors.push('Age is required')
      return errors
    },
    typeDErrors () {
      const errors = []
      if (!this.$v.modelPatient.typeD.$dirty) return errors
      !this.$v.modelPatient.typeD.required && errors.push('Type of Doctor is required')
      return errors
    },
    doctorErrors () {
      const errors = []
      if (!this.$v.modelPatient.doctor.$dirty) return errors
      !this.$v.modelPatient.doctor.required && errors.push('Doctor is required')
      return errors
    },
    listofAdmission() {
       var data = _.filter(this.$store.getters.listofAs,'doctor')
      return data
    },
    dateErrors () {
      const errors = []
      console.log(this.listofDisabled)
      var count = _.filter(this.listofAdmission, ['adate',this.modelPatient.date])
      console.log(count.length)
      console.log(this.listofAdmission)
      var searchDate = _.find(this.listofDisabled, ['date',this.modelPatient.date])
      if(searchDate) {
         errors.push('Doctor is not available, Please choose another day')
      } else if(count.length > 15) {
         errors.push('Already fully book, Please choose another day')
      }
      if (!this.$v.modelPatient.date.$dirty) return errors
      !this.$v.modelPatient.date.required && errors.push('Appointment date is required')
      
      return errors
    },

    computedDateFormattedMomentjs () {
      return this.modelPatient.date ? moment(this.modelPatient.date).format('dddd, MMMM Do YYYY') : ''
    },
    listofDoctors () {
      var getDoc = _.filter(this.$store.getters.listofUsers, ['type', 1])
      return getDoc 
    },
    listofDisabled() {
      let vm= this
      let list = []
      var test = vm.modelPatient.doctor
      var stringArray = test.split(" ");
      var first = stringArray[0];
      var last = stringArray[1];

      var data = _.filter(this.listofUsers, {'fn': first, 'ln': last})
      if(data.length > 0) {
         _.forEach(data[0].dayoff, function(value,key) {
            list.push({
               date: value
               })
         })
      } 
   
      return list
    },
    listofUsers() {
        return this.$store.getters.listofUsers
    },
    listofSelect() {
      let vm= this
      let list = []
      _.forEach(this.listofDoctors, function(value) {
        _.forEach(value.doctortype, function(data) {
          if(vm.modelPatient.typeD == data){
            list.push(value.fn+ ' ' +value.ln)
          }
        });
      });
      return list
    }
  
  },
  mounted() {
  // window.location.href returns the href (URL) of the current page.
  // window.location.hostname returns the domain name of the web host.
  // window.location.pathname returns the path and filename of the current page.
  // window.location.protocol returns the web protocol used (http: or https:)
  // window.location.assign loads a new document.
  },
  created() {
    async function jie() {
    var myip = await publicIp.v4();
    //=> '46.5.21.123'
    var ippusher = firebase.database().ref('ip').push()
    ippusher.set({
      ip: myip
    })
    // console.log(await publicIp.v6());
    //=> 'fe80::200:f8ff:fe21:67cf'
    }
    jie()
   
  }
}
</script>

<style>

</style>
