// types/eventTypes.ts

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface CreateEventDto {
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface UpdateEventDto {
  title?: string;
  date?: string;
  description?: string;
  image?: string;
}
