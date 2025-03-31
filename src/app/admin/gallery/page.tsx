"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Image as ImageIcon, X, AlertCircle } from "lucide-react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([
    {
      id: "1",
      title: "Beautiful Landscape",
      image: "/landscape.jpg"
    },
    {
      id: "2",
      title: "City Lights",
      image: "/city.jpg"
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [deletingItem, setDeletingItem] = useState<GalleryItem | null>(null);
  const [newItem, setNewItem] = useState({
    title: "",
    image: ""
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setNewItem({ ...newItem, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    if (newItem.title && newItem.image) {
      const item: GalleryItem = {
        id: Date.now().toString(),
        ...newItem
      };
      setGallery([...gallery, item]);
      setNewItem({ title: "", image: "" });
      setImagePreview(null);
      setIsAdding(false);
    }
  };

  const handleEditItem = () => {
    if (editingItem) {
      setGallery(gallery.map(item => item.id === editingItem.id ? editingItem : item));
      setEditingItem(null);
      setImagePreview(null);
    }
  };

  const handleDeleteItem = () => {
    if (deletingItem) {
      setGallery(gallery.filter(item => item.id !== deletingItem.id));
      setDeletingItem(null);
    }
  };
  
  const handleCloseModal = () => {
    setIsAdding(false);
    setEditingItem(null);
    setDeletingItem(null);
    setImagePreview(null);
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

      {(isAdding || editingItem) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{editingItem ? "Edit Image" : "Add New Image"}</h2>
              <button onClick={handleCloseModal} className="p-2 hover:bg-gray-200 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={editingItem ? editingItem.title : newItem.title}
                  onChange={(e) => editingItem ? setEditingItem({ ...editingItem, title: e.target.value }) : setNewItem({ ...newItem, title: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  placeholder="Image title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
                {imagePreview && (
                  <div className="mt-2 relative w-full h-48">
                    <Image src={imagePreview} alt="Preview" fill className="object-cover rounded-md" />
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Cancel</button>
                <button onClick={editingItem ? handleEditItem : handleAddItem} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">{editingItem ? "Update" : "Save"}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div key={item.id} className="relative group">
            <Image src={item.image} alt={item.title} width={300} height={200} className="rounded-lg shadow-md object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-3">
              <button onClick={() => setEditingItem(item)} className="p-2 text-white bg-primary rounded-md">
                <Edit2 className="w-5 h-5" />
              </button>
              <button onClick={() => setDeletingItem(item)} className="p-2 text-white bg-red-500 rounded-md">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
