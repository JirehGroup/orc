// services/eventService.ts

import { EventInput, EventSchema } from "../schemas/eventSchema";
import EventModel, { IEvent } from "../models/eventModels";

export const eventService = {
  getAllEvents: async (): Promise<IEvent[]> => {
    return await EventModel.find();
  },

  getEvent: async (id: string): Promise<IEvent | null> => {
    return await EventModel.findById(id);
  },

  createEvent: async (data: EventInput): Promise<IEvent> => {
    const validatedData = EventSchema.parse(data);
    const newEvent = new EventModel(validatedData);
    return await newEvent.save();
  },

  updateEvent: async (id: string, data: Partial<IEvent>): Promise<IEvent | null> => {
    return await EventModel.findByIdAndUpdate(id, data, { new: true });
  },

  deleteEvent: async (id: string): Promise<IEvent | null> => {
    return await EventModel.findByIdAndDelete(id);
  },
};