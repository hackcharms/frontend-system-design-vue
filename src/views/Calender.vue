<template>
  <div class="calender">
    <Grids :events :week-start-date />
  </div>
</template>

<script lang="ts" setup>
import Grids from '@/components/Calendar/Grids.vue';
import type { CalendarEvent } from '@/types';
import { ref } from 'vue';
const events: CalendarEvent[] = [
  {
    id: 1746794258237,
    startTime: 1746794257237,
    endTime: 1746794258237,
    title: 'Event - 1 ',
    description: 'description of Event - 1 ',
  },
  {
    id: 1746794248237,
    startTime: 1746794247237,
    endTime: 1746794248237,
    title: 'Event - 2 ',
    description: 'description of Event - 2 ',
  },
]
const weekStartDate = ref(new Date())
</script>
<style scoped>
.calender {
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
}
</style>
