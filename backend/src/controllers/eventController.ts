/* eslint-disable @typescript-eslint/no-unused-vars */
// controller/eventController.ts

import { Request, Response } from "express";
import { eventService } from "../services/eventService";

export const eventController = {
  getAllEvents: async (req: Request, res: Response): Promise<void> => {
    try {
      const events = await eventService.getAllEvents(); // Updated to use eventService
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  },

  getEvent: async (req: Request, res: Response): Promise<void> => {
    try {
      const event = await eventService.getEvent(req.params.id); // Updated to use eventService
      if (!event) {
        res.status(404).json({ error: "Event not found" });
        return;
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch event" });
    }
  },

  createEvent: async (req: Request, res: Response): Promise<void> => {
    try {
      const newEvent = await eventService.createEvent(req.body); // Updated to use eventService
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(400).json({ error: "Failed to create event" });
    }
  },

  updateEvent: async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedEvent = await eventService.updateEvent(req.params.id, req.body); // Updated to use eventService
      if (!updatedEvent) {
        res.status(404).json({ error: "Event not found" });
        return;
      }
      res.json(updatedEvent);
    } catch (error) {
      res.status(400).json({ error: "Failed to update event" });
    }
  },

  deleteEvent: async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await eventService.deleteEvent(req.params.id); // Updated to use eventService
      if (!result) {
        res.status(404).json({ error: "Event not found" });
        return;
      }
      res.json({ message: "Event deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete event" });
    }
  },
};
