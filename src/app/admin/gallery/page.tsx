"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Image as ImageIcon, X, AlertCircle } from "lucide-react";
import Image from "next/image";


interface GalleryItem {
  id: string;
  title: string;
  image?: string;
}

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [deletingItem, setDeletingItem] = useState<GalleryItem | null>(null);
  const [newItem, setNewItem] = useState({ title: "", image: "" });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_BASE = "http://localhost:5000/api/gallery";

  
  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const res = await fetch(API_BASE);
        if (!res.ok) {
          throw new Error("Failed to fetch gallery items");
        }
        const data = await res.json();
        setGallery(data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
        setError("Failed to load gallery");
      } finally {
        setLoading(false);
      }
    };
  
    fetchGallery();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setImagePreview(imageData);
        if (editingItem) {
          setEditingItem({ ...editingItem, image: imageData });
        } else {
          setNewItem((prev) => ({ ...prev, image: imageData }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleAddItem = async () => {
    if (newItem.title && newItem.image) {
      const item: GalleryItem = {
        id: Date.now().toString(),
        ...newItem,
      };
  
      try {
        const res = await fetch(`${API_BASE}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        });
  
        if (!res.ok) throw new Error("Failed to add gallery item");
  
        const data = await res.json();
        setGallery([...gallery, data]);
        setNewItem({ title: "", image: "" });
        setImagePreview(null);
        setIsAdding(false);
      } catch (error) {
        console.error("Error adding gallery item:", error);
      }
    }
  };
  
  const handleEditItem = async (item: GalleryItem) => {
    if (!editingItem) return;
  
    try {
      const res = await fetch(`${API_BASE}/${editingItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem),
      });
  
      if (!res.ok) throw new Error("Failed to update gallery item");
  
      const updated = await res.json();
      setGallery(gallery.map((item) => (item.id === updated.id ? updated : item)));
      setEditingItem(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Error editing gallery item:", error);
    }
  };

  const handleDeleteItem = async () => {
    if (!deletingItem) return;
  
    try {
      const res = await fetch(`${API_BASE}/${deletingItem.id}`, {
        method: "DELETE",
      });
  
      if (!res.ok) throw new Error("Failed to delete gallery item");
  
      setGallery(gallery.filter((item) => item.id !== deletingItem.id));
      setDeletingItem(null);
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };
  

  
  const handleCloseModal = () => {
    setIsAdding(false);
    setEditingItem(null);
    setDeletingItem(null);
    setImagePreview(null);
  };

  const renderGalleryForm = (isEditing: boolean) => {
    const item = isEditing ? editingItem : newItem;
    if (!item) return null;


    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{isEditing ? "Edit Image" : "Add New image"}</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-muted rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    if (isEditing && editingItem) {
                      setEditingItem({ ...editingItem, title });
                    } else {
                      setNewItem({ ...newItem, title });
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter image title"
                />
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
                              setEditingItem({ ...editingItem!, image: "" });
                            } else {
                              setNewItem({ ...newItem, image: "" });
                            }
                          }}
                          className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                        >
                          <Trash2 className="w-8 h-8" />
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
                  onClick={isEditing ? () => handleEditItem(editingItem!) : handleAddItem}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  {isEditing ? "Update Image" : "Save Image"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDeleteConfirmation = () => {
      if (!deletingItem) return null;

      return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg shadow-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-destructive" />
                <h2 className="text-xl font-semibold">Delete Image</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Are you sure you want to delete "{deletingItem.title}"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setDeletingItem(null)}
                  className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteItem}
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
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" />
          Add Image
        </button>
      </div>

      {/* Event Form Modal */}
      {(isAdding || editingItem) && renderGalleryForm(!!editingItem)}

      {/* Delete Confirmation Modal */}
      {deletingItem && renderDeleteConfirmation()}

      {/* Events List */}
      <div className="justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
          {gallery.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-background p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              {item.image && (
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <div className="w-full text-center">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setDeletingItem(item)}
                  className="p-2 text-destructive hover:bg-destructive/10 rounded-md"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleEditItem(item)}
                  className="p-2 text-primary hover:bg-primary/10 rounded-md"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
