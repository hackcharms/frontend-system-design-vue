<template>
  <div class="calender">
    <Grids :events :week-start-date />
  </div>
</template>

<script lang="ts" setup>
import Grids from '@/components/Calendar/Grids.vue';
import type { CalendarEvent } from '@/types';
import { add } from 'date-fns';
import { ref } from 'vue';
const events: CalendarEvent[] = [
  {
    "id": 1746798406349,
    "startTime": 1746712006349,
    "readable": "Thu May 08 2025 19:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1746715606349,
    "title": "event title  0 ",
    "description": "Event Description  0"
  },
  {
    "id": 1746798406350,
    "startTime": 1746974806349,
    "readable": "Sun May 11 2025 20:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1746976606349,
    "title": "event title  1 ",
    "description": "Event Description  1"
  },
  {
    "id": 1746798406351,
    "startTime": 1746719206349,
    "readable": "Thu May 08 2025 21:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1746722806349,
    "title": "event title  2 ",
    "description": "Event Description  2"
  },
  {
    "id": 1746798406352,
    "startTime": 1747500406349,
    "readable": "Sat May 17 2025 22:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1747502206349,
    "title": "event title  3 ",
    "description": "Event Description  3"
  },
  {
    "id": 1746798406353,
    "startTime": 1746726406349,
    "readable": "Thu May 08 2025 23:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1746730006349,
    "title": "event title  4 ",
    "description": "Event Description  4"
  },
  {
    "id": 1746798406354,
    "startTime": 1747334806349,
    "readable": "Fri May 16 2025 00:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1747336606349,
    "title": "event title  5 ",
    "description": "Event Description  5"
  },
  {
    "id": 1746798406355,
    "startTime": 1746733606349,
    "readable": "Fri May 09 2025 01:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1746737206349,
    "title": "event title  6 ",
    "description": "Event Description  6"
  },
  {
    "id": 1746798406356,
    "startTime": 1747946806349,
    "readable": "Fri May 23 2025 02:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1747948606349,
    "title": "event title  7 ",
    "description": "Event Description  7"
  },
  {
    "id": 1746798406357,
    "startTime": 1746740806349,
    "readable": "Fri May 09 2025 03:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1746744406349,
    "title": "event title  8 ",
    "description": "Event Description  8"
  },
  {
    "id": 1746798406358,
    "startTime": 1747867606349,
    "readable": "Thu May 22 2025 04:16:46 GMT+0530 (India Standard Time)",
    "endTime": 1747869406349,
    "title": "event title  9 ",
    "description": "Event Description  9"
  }
]
const TODAY = new Date();
const weekStartDate = ref(add(TODAY, { days: -TODAY.getDay() }))
</script>
<style scoped>
.calender {
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
}
</style>
