<template>
    <div class="grids">
        <div class="grid-rows-24">
            <span />
            <span class="hours" v-for="i in HRS_IN_DAY" :key="i">
                {{ getTime(i) }}
            </span>
        </div>
        <div v-for="(_, day) in DAYS_IN_WEEK" :key="day" class="week-day grid-rows-24">
            <DayEvents :events="weekEvent[getWeekDate(day)]" />
            <div class="day-hours-title">{{ getWeekDateHuman(day) }}</div>
            <div class="day-hours" v-for="hr in HRS_IN_DAY" :key="hr" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { CalendarEvent } from '@/types';
import { add, format } from "date-fns";
import DayEvents from './DayEvents.vue';
import { reactive } from 'vue';

const DAYS_IN_WEEK = 7;
const HRS_IN_DAY = 24;
const props = defineProps<{
    events: CalendarEvent[],
    weekStartDate: Date;
}>()
function getWeekDate(days: number) {
    return format(add(props.weekStartDate, { days }), 'P');
}

function getWeekDateHuman(days: number) {
    return format(add(props.weekStartDate, { days }), 'iii LLL do');
}

const weekEvent = reactive(props.events.reduce((acc, curr) => {
    const date = format(curr.startTime, 'P');
    if (acc[date]) {
        acc[date].push(curr);
    } else {
        acc[date] = [];
    }
    return acc;
}, {} as Record<string, CalendarEvent[]>))

function getTime(index: number) {
    const hrs = index > 12 ? index - 12 : index;
    const meridiem = index > 11 && index < 24 ? 'PM' : 'AM';
    return `${hrs.toString().padStart(2, '0')} ${meridiem}`;
}
</script>
<style scoped>
.grids {
    display: contents;
}

.day-hours-title {}

.day-hours:hover {
    transform: scale(1.02);
    background-color: gray;
}

.day-hours {
    outline: 1px solid gray;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.grid-rows-24 {
    display: grid;
    grid-template-rows: repeat(24, 1fr);
}

.hours {
    text-align: end;
    padding: 0 12px 16px 12px;
}

.week-day {
    height: 100%;
    position: relative;
}
</style>
