import { Request, Response } from 'express';
import { eventService } from '../services/eventService';
import { Event } from '../models/eventModel';

export const eventController = {
  getAllEvents: async (req: Request, res: Response) => {
    try {
      const events = await eventService.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  },

  getEvent: async (req: Request, res: Response) => {
    try {
      const event = await eventService.getEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch event' });
    }
  },

  createEvent: async (req: Request, res: Response) => {
    try {
      const newEvent = await eventService.createEvent(req.body);
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create event' });
    }
  },

  updateEvent: async (req: Request, res: Response) => {
    try {
      const updatedEvent = await eventService.updateEvent(req.params.id, req.body);
      if (!updatedEvent) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(updatedEvent);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update event' });
    }
  },

  deleteEvent: async (req: Request, res: Response) => {
    try {
      const result = await eventService.deleteEvent(req.params.id);
      if (!result) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete event' });
    }
  }
};