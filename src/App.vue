<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { add } from 'date-fns';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
// const events = Array(10).fill(0).map((el, i) => {
//   const startTime = add(Date.now(), { hours: i, days: i % 2 == 0 ? -1 : 1 * i + Math.floor(Math.random() * 7) });
//   const event = {
//     id: Date.now() + i,
//     startTime: startTime.getTime(),
//     readabel: startTime.toString(),
//     endTime: add(startTime, { hours: i % 2 == 0 ? 1 : .5 }).getTime(),
//     title: `event title  ${i} `,
//     description: `Event Description  ${i}`,
//   }
//   return event;
// })
</script>

<template>
  <Navbar />
  <div>
    <!-- <pre>
      {{ events }}
</pre> -->
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
