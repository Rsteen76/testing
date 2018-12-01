<template>
    <v-card>
      <v-toolbar class="primary primaryText--text">
      <v-toolbar-title > Add a User </v-toolbar-title>
      </v-toolbar>
      <v-container fluid>
        <v-card-text>

          <!-- Begin Input Row -->
          <v-form ref="form">
          <v-text-field label="Name" v-model="user.name" required> </v-text-field>
          <v-text-field label="Phone" v-model="user.phone" thumb-label step="1" required></v-text-field>
          <v-text-field label="Email" v-model="user.email" :rules="[rules.email]" required> </v-text-field>
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
import { http } from '../config/http'

export default {
  data: () => ({
    user: {
      phone: '',
      name: '',
      email: ''
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
        .post("/users", this.user)
        .then(response => {
          this.submit = true
          this.alert(true, 'Create', 'User')
          this.close()
        })
        .catch(e => {
          this.submit = true
          this.alert(false, 'Create', 'User')
        });
        this.submitDone = true
    },

    load() {
      this.user = {
        phone: '',
        email: '',
        name: ''
      }
      this.submitDone = true
    },

    close() {
      this.load()
      this.$emit('closeAdd')
    },
    // Add validation for phone number.
    checkForm() {
      if (this.user.phone <= 0 || this.user.name == '' || this.user.email == '') {
        return true
      } else {
        return false
      }
    },

    alert(success, callName, resource) {
      console.log('Add Alerting')
      this.$emit('alert', success, callName, resource)
    }
  }
}
</script>