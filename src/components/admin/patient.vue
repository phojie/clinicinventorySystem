<template>
  <v-container grid-list-lg>
  <v-layout row wrap >
    <v-flex sm12>
      <v-card>
      <v-card-title>
        <div class="font-weight-black">Patient List</div>
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
        :items="desserts"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
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
      search: '',
      headers: [
        { text: 'Identification Number', value: 'id', sortable: false},
        { text: 'Name', value: 'name', sortable: false},
        { text: 'Place', value: 'place', sortable: false},
        { text: 'Date', value: 'date',sortable: false},
        { text: 'View', value: 'date',sortable: false},
      ],
    }
  }
}
</script>

<style>

</style>
