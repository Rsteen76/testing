<template>
<v-app>
<router-view></router-view>
</v-app>
</template>

<script>


export default {
  data () {
    return {
      name: 'App'
    }
  }
}
</script>
<style>
html {
  height: 100vh;
}
body {
  height: 100vh;
  font-family: 'Cinzel', serif !important;
}
/* font-family: 'Libre Baskerville', serif;
font-family: 'Open Sans Condensed', sans-serif;
font-family: 'Source Code Pro', monospace;
font-family: 'Abril Fatface', cursive;
font-family: 'Cinzel', serif; */
</style>
