<template>
  <v-container class="pa-0 w-100" style="max-width:1500px">
      <template>
        <v-layout row wrap class="w-100">
          <v-flex>
            <v-card>
              <v-toolbar class="primary primaryText--text">
                <v-toolbar-title> Schedules </v-toolbar-title>
                <v-spacer></v-spacer>

                <!-- Add Dialog Button -->
                <v-dialog v-model="addDialog" lazy absolute max-width="50%">
                  <v-btn class="primaryText--text" icon slot="activator">
                    <v-icon> control_point </v-icon>
                  </v-btn>

                  <!-- Add Dialog -->
                  <addSchedule  @closeAdd="addDialog = false" @alert="alert">
                  </addSchedule>
                </v-dialog>
              </v-toolbar>

              <!-- Build the table -->
              <v-data-table 
                :headers="headers" 
                :items="schedules" 
                select-all 
                class="elevation-5">
                <template slot="headers" slot-scope="props">
                    <th>
                    <th v-for="header in props.headers" :key="header._id" class="body-2">
                      {{ header.text }}
                    </th>
                    <th>Action</th>
                </template>
                <template slot="items" slot-scope="props">
                    <td></td>
                    <td class="text-xs-center">{{ props.item.date | moment('M/D/Y')}}</td>
                    <td class="text-xs-center">{{ props.item.location }}</td>
                    <td class="text-xs-center">{{ props.item.meetingLeader }}</td>
                    <td class="text-xs-center">{{ props.item.worshipLeader }}</td>
                    <td class="text-xs-center">{{ props.item.teacher }}</td>
                    <td class="text-xs-center">{{ props.item.busyBees }}</td>
                    <td class="text-xs-center">{{ props.item.nursery }}</td>
                    <td class="text-xs-center">{{ props.item.logistics }}</td>
                    <td class="text-xs-center">{{ props.item.mealTheme }}</td>
                    <td class="justify-center layout px-0">
                      
                      <v-dialog v-model="editDialog" lazy absolute max-width="50%">
                        <v-btn class="" icon slot="activator"> 
                          <v-icon small  @click="setupEdit(props.item)">
                          edit 
                          </v-icon>
                        </v-btn>
                        <editSchedule 
                          :schedule="editedSchedule"
                          @closeEdit="close" 
                          @alert="alert">
                        </editSchedule>
                      </v-dialog>
                      
                      <v-dialog v-model="deleteDialog" lazy absolute max-width="50%">
                        <v-btn class="" icon slot="activator"> 
                        <v-icon small class="mr-1" @click="setupDelete(props.item)">
                        delete 
                      </v-icon>
                      </v-btn>
                      <deleteSchedule :schedule="scheduleToDelete" @closeDelete="deleteDialog = false" @alert="alert"></deleteSchedule>
                      </v-dialog>
                    </td>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-container>
</template>

<script>

import { http } from "../config/http.js"
import addSchedule from "../components/addSchedule.vue"
import deleteSchedule from "../components/deleteSchedule.vue"
import editSchedule from "../components/editSchedule.vue"

export default {
    data: () => ({
        schedule: [],
        selected: [],
        errors: [],
        schedules: [],
        scheduleToDelete: {},
        alertSettings: {},
        scheduleToEdit: {},
        newSchedule: {},
        addDialog: false,
        deleteDialog: false,
        editDialog: false,
        editSchedule: "",
        editedIndex: -1,
        editedSchedule: '',
        headers: [
           { text: "Date", align: 'center' },
           { text: "Location", align: 'center'},
           { text: "Meeting Leader", align: 'center'},
           { text: "Worship Leader", align: 'center'},
           { text: "Teacher", align: 'center' },
           { text: "Busy Bees", align: 'center'},
           { text: "Nursery", align: 'center'},
           { text: "Logistics", align: 'center'},
           { text: "Meal Theme", align: 'centet'}
        ]
    }),
    components: {
      addSchedule: addSchedule,
      deleteSchedule: deleteSchedule,
      editSchedule: editSchedule
    },

    methods: {
        //Load all schedules from database
        load() {
            http
                .get("/schedules/", { headers: { 'Authorization': 'Bearer ' + localStorage.auth }})
                .then(response => {
                    this.schedules = response.data.schedules;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },

        //opens delete dialog
        setupDelete(schedule) {
            this.scheduleToDelete = schedule;
            this.deleteDialog = true;
        },

        //opens edit dialog
        setupEdit(schedule) {
            this.editedSchedule = this.schedules.indexOf(schedule)
            this. editedSchedule = Object.assign({}, schedule)
            this.editDialog = true
        },

        alert(success, callName, resource){
            console.log('Page Alerting')
            this.$emit('alert', success, callName, resource)
            this.load()
        },

        close() {
          this.schedule = {}
          this.editDialog = false
        setTimeout(() => {
          this.editedSchedule = Object.assign({}, {})
          this.editedIndex = -1
        }, 300)
        }
    },
    mounted() {
        this.load();
    }
}
</script>
