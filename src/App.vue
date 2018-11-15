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
  margin-top: 25px;
  height: 100%;
}
body {
  height: 100%;
  margin-top: 25px;
  font-family: 'Cinzel', serif !important;


}
/* font-family: 'Libre Baskerville', serif;
font-family: 'Open Sans Condensed', sans-serif;
font-family: 'Source Code Pro', monospace;
font-family: 'Abril Fatface', cursive;
font-family: 'Cinzel', serif; */
</style>
