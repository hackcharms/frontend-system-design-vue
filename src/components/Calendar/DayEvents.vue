<template>
    <!-- <div class="day-event"> -->
    <div class="event" v-for="event in props.events" :key="event.id" :style="calculatePosition(event)">
        {{ event.title }}
    </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import type { CalendarEvent } from '@/types';
const props = defineProps<{
    events: CalendarEvent[],
}>()
function calculatePosition(event: CalendarEvent) {
    const row = 2;
    // const height=
    return ``;
}
</script>
<style scoped>
.event {
    position: absolute;
}
</style>
