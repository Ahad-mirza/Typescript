"use strict";
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent(event) {
        console.log(`Adding event: ${event} to ${this.name}`);
    }
    removeEvent(event) {
        console.log(`Removing event: ${event} from ${this.name}`);
    }
}
let calendar = new GoogleCalendar('Google Calendar');
calendar.addEvent('Meeting');
calendar.removeEvent('Meeting');
