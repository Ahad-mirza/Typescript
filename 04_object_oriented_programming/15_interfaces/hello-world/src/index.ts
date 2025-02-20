interface Calendar {
  name: string;

  addEvent(event: string): void;
  removeEvent(event: string): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(event: string): void {
    console.log(`Adding event: ${event} to ${this.name}`);
  }

  removeEvent(event: string): void {
    console.log(`Removing event: ${event} from ${this.name}`);
  }
}

let calendar = new GoogleCalendar('Google Calendar');
calendar.addEvent('Meeting');
calendar.removeEvent('Meeting');