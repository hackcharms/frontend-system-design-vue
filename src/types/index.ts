export type CalendarEvent = {
    id: number;
    startTime: number;
    endTime: number;
    title: string;
    readable?: string;
    description: string;
}