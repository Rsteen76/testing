<template>

<div id="home" class="cd-fixed-bg cd-fixed-bg--1">
    <Nav py-5 />
    <Hero />
    <v-layout align-center justify-center py-5>
      <About />
    </v-layout>
    <v-layout align-center justify-center py-5>
      <Quotes />
    </v-layout>
    <v-layout align-center justify-center py-5>
      <Children />
    </v-layout>
    <v-layout align-center justify-center py-5>
      <Calendar/>
    </v-layout>

</div>

</template>

<script>
// @ is an alias to /src
import Parallax from "vue-parallaxy";

import Nav from "../components/Nav.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Quotes from "../components/Quotes.vue";
import Children from "../components/Children.vue";
import Calendar from "../components/Calendar.vue";

export default {
  name: "home",
  components: {
    Parallax,
    Nav,
    Hero,
    About,
    Quotes,
    Children,
    Calendar
  }
};
</script>
<style lang="stylus" scoped>
// #home {
//   height: 100%;
// }
.cd-fixed-bg {  
  min-height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
}

.cd-fixed-bg.cd-fixed-bg--1 {
  background-color: black;
  // background-image: url("/static/tree2.jpg");
}
</style>
