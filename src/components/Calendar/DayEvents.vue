<template>
    <!-- <div class="day-events"> -->
    <div class="event" v-for="event in props.events" :key="event.id" :style="calculatePosition(event)">
        {{ event.title }}
    </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import type { CalendarEvent } from '@/types';
import { differenceInHours } from 'date-fns';
const props = defineProps<{
    events: CalendarEvent[],
}>()
const CELL_HEIGHT = 35.837;
function calculatePosition(event: CalendarEvent) {
    const startTime = new Date(event.startTime);
    const endTime = new Date(event.endTime);
    const eventHrs = differenceInHours(endTime, startTime);
    const row = startTime.getHours() + startTime.getMinutes() / 60;
    const top = row * CELL_HEIGHT;
    const height = CELL_HEIGHT * eventHrs;
    const style = {
        top: top + 'px',
        height: height + 'px',
        left: 0
    };
    return style;
}
</script>
<style scoped>
.event:hover {
    cursor: pointer;
    transform: scale(1.02);
}

.event {
    position: absolute;
    background-color: lightskyblue;
    padding: 4px 8px;
    width: 100%;
    transition: all 200ms ease-in;
}

.day-events {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
