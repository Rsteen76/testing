<template>
  <v-container class="calendar">
    <v-layout row wrap class="scroll">
      <v-flex xs12  mb-3>
        <v-expansion-panel popout class="custom-style">
          <v-expansion-panel-content
            v-for="(n, index) in 4"
            :key="index"
          >
            <div slot="header"><span class="display-1">{{schedules[index].location}}</span> - <h3>{{moment(schedules[index].date).format('MMMM Do YYYY')}}</h3></div>
            <v-card class="elevation-5">
              <v-card-text class="headline">Meeting Leader: {{schedules[index].meetingLeader }} </v-card-text>
              <v-card-text class="headline">Worship Leader: {{schedules[index].worshipLeader }} </v-card-text>
              <v-card-text class="headline">Teacher: {{schedules[index].teacher }} </v-card-text>
              <v-card-text class="headline">Busy Bees: {{schedules[index].busyBees }} </v-card-text>
              <v-card-text class="headline">Nursery: {{schedules[index].nursery }} </v-card-text>
              <v-card-text class="headline">Logistics: {{schedules[index].logistics }} </v-card-text>
              <v-card-text class="headline">Meal Theme: {{schedules[index].mealTheme }} </v-card-text>
              <img src="" alt="">
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { http } from "../config/http.js"
import moment from 'moment'

  export default {
    data: ()  => ({
      schedules: [],
      index: ''
    }),
    methods: {
      // Load all Schedules from database
      load() {
            http
                .get("schedules")
                .then(response => {
                    this.schedules = response.data.schedules;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
      moment: function (date) {
        return moment(date);
      },
    },
    mounted() {
      this.load();
    },
    computed: {
      
    }
  }
</script>

<style scoped>
.calendar,.headline,.display-1 {
  font-family: 'Libre Baskerville', serif !important;
  font-size: .85em;

}
.scroll {
    max-height: 80vh;
    overflow-y: auto;
}
.custom-style {
  border-radius: 10px !important;
}
</style>
