import { Event, CreateEventDto, UpdateEventDto } from '../models/eventModel';

// This would be replaced with actual database calls
const events: Event[] = [];

export const eventService = {
  async getAllEvents(): Promise<Event[]> {
    return events;
  },

  async getEvent(id: string): Promise<Event | undefined> {
    return events.find(event => event.id === id);
  },

  async createEvent(data: CreateEventDto): Promise<Event> {
    const newEvent: Event = {
      id: Date.now().toString(),
      ...data
    };
    events.push(newEvent);
    return newEvent;
  },

  async updateEvent(id: string, data: UpdateEventDto): Promise<Event | undefined> {
    const index = events.findIndex(event => event.id === id);
    if (index === -1) return undefined;

    events[index] = {
      ...events[index],
      ...data
    };
    return events[index];
  },

  async deleteEvent(id: string): Promise<boolean> {
    const index = events.findIndex(event => event.id === id);
    if (index === -1) return false;

    events.splice(index, 1);
    return true;
  }
};