<template>
  <v-card>
    <v-toolbar class="primary primaryText--text">
      <v-toolbar-title> Add a Schedule </v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-card-text>
        <v-form ref="form">
        <v-flex>
        <v-menu 
          ref="menu" 
          :close-on-content-click="true" 
          v-model="menu" 
          :nudge-right="0" 
          :return-value.sync="schedule.date"
          lazy transition="scale-transition" 
          offset-y full-width min-width="290px">
          <v-text-field slot="activator" 
            :value="computedDateFormattedMomentjs" 
            label="Date" 
            prepend-icon="event" 
            readonly>
          </v-text-field>
          <v-date-picker 
            v-model="schedule.date"
            @input="formatDate">
          </v-date-picker>
        </v-menu>
        </v-flex>
        <v-text-field label="Location" v-model="schedule.location"> </v-text-field>
        <v-text-field label="Meeting Leader" v-model="schedule.meetingLeader"> </v-text-field>
        <v-text-field label="Worship Leader" v-model="schedule.worshipLeader"> </v-text-field>
        <v-text-field label="Teacher Leader" v-model="schedule.teacher"> </v-text-field>
        <v-text-field label="Busy Bees Leader" v-model="schedule.busyBees"> </v-text-field>
        <v-text-field label="Nursery Leader" v-model="schedule.nursery"> </v-text-field>
        <v-text-field label="Logistic Leader" v-model="schedule.logistics"> </v-text-field>
        <v-text-field label="Meal Theme" v-model="schedule.mealTheme"> </v-text-field>
        </v-form>
        <v-card-actions>
          <v-btn @click="btnsubmit()" class="green lighten-1 white--text" :disabled="checkForm()" :loading="!submitDone">Submit</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="close()" class="red white--text">Close</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-container>
  </v-card>

</template>

<script>
import { http } from "../config/http";
import moment from 'moment'

export default {
  data: () => ({
    menu: false,
    schedule: {
      date: new Date().toISOString().substr(0, 10),
      location: "",
      meetingLeader: "",
      worshipLeader: "",
      teacher: "",
      busyBees: "",
      nursery: "",
      logistics: "",
      mealTheme: ""
    },
    submitDone: true,
  }),

  props: {
    rules: {
      type: Object
    }
  },

  methods: {
    btnsubmit() {
      this.submitDone = false
      http
        .post("/schedules", this.schedule, { headers: { 'Authorization': 'Bearer ' + localStorage.auth }})
        .then(response => {
          this.submit = true;
          this.alert(true, "Create", "Schedule");
          this.close();
        })
        .catch(err => {
          this.submit = true;
          console.log(err)
          this.$swal('Duplicate Date Entered');
        });
      this.submitDone = true

    },
   formatDate() {
     console.log(this.schedule.date)
     this.$refs.menu.save(moment(this.schedule.date).format())
   },
    load() {
      this.schedule = {
        date: '',
        location: "",
        meetingLeader: "",
        worshipLeader: "",
        teacher: "",
        busyBees: "",
        nursery: "",
        logistics: "",
        mealTheme: ""
      };
      this.submitDone = true;
    },

    close() {
      this.load();
      this.$emit("closeAdd");
    },

    checkForm() {
      if (this.schedule.location == '') {
        return true
      } else if (this.schedule.date == '') {
        return true
      } else {
        return false
      }
    },

    alert(success, callName, resource) {
      console.log("Add Alerting");
      this.$emit("alert", success, callName, resource);
    }
  },
  computed: {
    computedDateFormattedMomentjs () {
      return this.schedule.date ? moment(this.schedule.date).format('dddd, MMMM Do YYYY') : ''
    },
  }
};
</script>