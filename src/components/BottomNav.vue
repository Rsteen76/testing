<template>
      <v-card-text
        class="text-xs-center text--white pb-0"
        style="bottom:0; position: absolute;"
      >
        <v-btn
          class="mx-2 white--text"
          icon
          href="https://www.facebook.com/groups/670598423038057/"
        >
          <v-icon large class="fa fa-facebook"></v-icon>
        </v-btn>
      </v-card-text>
</template>
</<script>
export default {
  data() { return {
     icons: [
        'fa fa-facebook',
        'fa fa-twitter',
        'fa fa-linkedin',
        'fa fa-instagram'
      ]
  }
}
}
</script>
