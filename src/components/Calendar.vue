<template>
  <v-container class="calendar">
    <v-layout row wrap class="scroll">
      <v-flex xs12 mb-3>
        <v-expansion-panel popout>
          <v-expansion-panel-content
            v-for="(n, index) in 4"
            :key="index"
          >
            <div slot="header"><span class="display-1">{{schedules[index].location}}</span>  <h3>{{moment(schedules[index].date).format('MMMM Do YYYY')}}</h3></div>
            <v-card class="elevation-5">
              <v-card-text class="schedule-content"><strong>Meeting Leader: </strong>{{schedules[index].meetingLeader }} </v-card-text>
              <v-card-text class="schedule-content"><strong>Worship Leader: </strong>{{schedules[index].worshipLeader }} </v-card-text>
              <v-card-text class="schedule-content"><strong>Teacher: </strong>{{schedules[index].teacher }} </v-card-text>
              <v-card-text class="schedule-content"><strong>Busy Bees: </strong>{{schedules[index].busyBees }} </v-card-text>
              <v-card-text class="schedule-content"><strong>Nursery: </strong>{{schedules[index].nursery }} </v-card-text>
              <v-card-text class="schedule-content"><strong>Logistics: </strong>{{schedules[index].logistics }} </v-card-text>
              <v-card-text class="schedule-content"><strong>Meal Theme: </strong>{{schedules[index].mealTheme }} </v-card-text>
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
      index: '',
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
  padding: 0;
  /* font-family: 'Libre Baskerville', serif !important; */
  font-size: 1.1em;
}
.scroll {
    max-height: 80vh;
    overflow-y: auto;
}
.schedule-content {
  font-size: 1.5em;
}
</style>
