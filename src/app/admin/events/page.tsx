"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Image as ImageIcon, X, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { set } from "mongoose";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deletingEvent, setDeletingEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState({ title: "",date: "",description: "",image: ""});
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_BASE = "http://localhost:5000/api/events";
  // Fetch events from the API

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_BASE}`);
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        // Check if the response is valid JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid JSON response");
        }
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, []);
 
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        if (editingEvent) {
          setEditingEvent({ ...editingEvent, image: reader.result as string });
        } else {
          setNewEvent({ ...newEvent, image: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };
 
  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description) {
      setError("Please fill in all required fields");
      return;
    }
    if (newEvent.title && newEvent.date) {
      try {
        const res = await fetch(`${API_BASE}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newEvent),
        });
        if (!res.ok) {
          throw new Error("Failed to create event");
        }
        const createdEvent = await res.json();
        setEvents([...events, createdEvent]);
        setNewEvent({ title: "", date: "", description: "", image: "" });
        setImagePreview(null);
        setIsAddingEvent(false);
      } catch (err) {
        console.error("Failed to create event:", err);
      }
    }
  };
    const handleEditEvent = (event: Event) => {
      setEditingEvent(event);
      setImagePreview(event.image || null);
    };

    const handleUpdateEvent = async () => {
      if (editingEvent && editingEvent.title && editingEvent.date) {
        try {
          const res = await fetch(`${API_BASE}/${editingEvent.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(editingEvent),
          });
    
          const updated = await res.json();
          setEvents(events.map(e => (e.id === updated.id ? updated : e)));
          setEditingEvent(null);
          setImagePreview(null);
        } catch (err) {
          console.error("Failed to update event:", err);
        }
      }
    };

    const handleDeleteEvent = async () => {
      if (deletingEvent) {
        try {
          const res = await fetch(`${API_BASE}/${deletingEvent.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
    
          if (res.ok) {
            setEvents(events.filter(e => e.id !== deletingEvent.id));
            setDeletingEvent(null);
          } else {
            console.error("Delete failed");
          }
        } catch (err) {
          console.error("Failed to delete event:", err);
        }
      }
    };
    
    const handleCloseModal = () => {
      setIsAddingEvent(false);
      setEditingEvent(null);
      setDeletingEvent(null);
      setImagePreview(null);
    };

    const renderEventForm = (isEditing: boolean) => {
      const event = isEditing ? editingEvent : newEvent;
      if (!event) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{isEditing ? "Edit Event" : "Add New Event"}</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-muted rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {error && (<div className="mb-4 text-red-600 text-sm">{error}</div>)}
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={event.title}
                  onChange={(e) => isEditing 
                    ? setEditingEvent({ ...editingEvent!, title: e.target.value })
                    : setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Event title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={event.date}
                  onChange={(e) => isEditing
                    ? setEditingEvent({ ...editingEvent!, date: e.target.value })
                    : setNewEvent({ ...newEvent, date: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={event.description}
                  onChange={(e) => isEditing
                    ? setEditingEvent({ ...editingEvent!, description: e.target.value })
                    : setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Event description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Event Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="relative w-full h-48">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          fill
                          className="object-cover rounded-md"
                        />
                        <button
                          onClick={() => {
                            setImagePreview(null);
                            if (isEditing) {
                              setEditingEvent({ ...editingEvent!, image: "" });
                            } else {
                              setNewEvent({ ...newEvent, image: "" });
                            }
                          }}
                          className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="flex text-sm text-muted-foreground">
                          <label
                            htmlFor="image-upload"
                            className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
                          >
                            <span>Upload an image</span>
                            <input
                              id="image-upload"
                              name="image-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
                >
                  Cancel
                </button>
                <button
                  onClick={isEditing ? handleUpdateEvent : handleAddEvent}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  {isEditing ? "Update Event" : "Save Event"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDeleteConfirmation = () => {
    if (!deletingEvent) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <h2 className="text-xl font-semibold">Delete Event</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to delete "{deletingEvent.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeletingEvent(null)}
                className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteEvent}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events Management</h1>
        <button
          onClick={() => setIsAddingEvent(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" />
          Add Event
        </button>
      </div>

      {/* Event Form Modal */}
      {(isAddingEvent || editingEvent) && renderEventForm(!!editingEvent)}

      {/* Delete Confirmation Modal */}
      {deletingEvent && renderDeleteConfirmation()}

      {/* Events List */}
      <div className="grid gap-4">
        {events.map((event, index) => (
          <div
            key={event.id || index}
            className="bg-background p-6 rounded-lg shadow-md flex gap-4"
          >
            {event.image && (
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-muted-foreground mb-2">{event.date}</p>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeletingEvent(event)}
                className="p-2 text-destructive hover:bg-destructive/10 rounded-md"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleEditEvent(event)}
                className="p-2 text-primary hover:bg-primary/10 rounded-md"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
