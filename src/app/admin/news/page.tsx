"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Image as ImageIcon, X, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  category: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([
  
  ]);
  const API_BASE = "http://localhost:5000/api/blogs";
  // Fetch news from the server
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(API_BASE);
        if (!res.ok) throw new Error(`Failed to fetch news: ${res.statusText}`);
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const [isAddingNews, setIsAddingNews] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newNews, setNewNews] = useState({
    title: "",
    date: "",
    content: "",
    image: "",
    category: ""
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [deletingNews, setDeletingNews] = useState<NewsItem | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const res = await fetch(`${API_BASE}`, {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) {
        throw new Error(`Image upload failed: ${res.statusText}`);
      }
  
      const data = await res.json();
      const imageUrl = data.url;
  
      setImagePreview(imageUrl);
      if (editingNews) {
        setEditingNews({ ...editingNews, image: imageUrl });
      } else {
        setNewNews({ ...newNews, image: imageUrl });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleAddNews = async () => {
    if (newNews.title && newNews.date && newNews.content && newNews.category) {
      try {
        const res = await fetch(`${API_BASE}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newNews),
        });
  
        if (!res.ok) {
          throw new Error(`Failed to add news: ${res.statusText}`);
        }
  
        const createdNews = await res.json();
        setNews([...news, createdNews]);
        setNewNews({ title: "", date: "", content: "", image: "", category: "" });
        setImagePreview(null);
        setIsAddingNews(false);
      } catch (error) {
        console.error("Error adding news:", error);
      }
    }
  };

  const handleEditNews = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setImagePreview(newsItem.image || null);
  };

  const handleUpdateNews = async () => {
    if (editingNews && editingNews.title && editingNews.date && editingNews.content && editingNews.category) {
      try {
        const res = await fetch(`${API_BASE}${editingNews.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingNews),
        });
  
        if (!res.ok) {
          throw new Error(`Failed to update news: ${res.statusText}`);
        }
  
        const updatedNews = await res.json();
        setNews(news.map(item => (item.id === updatedNews.id ? updatedNews : item)));
        setEditingNews(null);
        setImagePreview(null);
      } catch (error) {
        console.error("Error updating news:", error);
      }
    }
  };

  const handleDeleteNews = async () => {
    if (deletingNews) {
      try {
        const res = await fetch(`${API_BASE}${deletingNews.id}`, {
          method: "DELETE",
        });
  
        if (!res.ok) {
          throw new Error(`Failed to delete news: ${res.statusText}`);
        }
  
        setNews(news.filter(item => item.id !== deletingNews.id));
        setDeletingNews(null);
      } catch (error) {
        console.error("Error deleting news:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsAddingNews(false);
    setEditingNews(null);
    setDeletingNews(null);
    setImagePreview(null);
  };

  const renderNewsForm = (isEditing: boolean) => {
    const newsItem = isEditing ? editingNews : newNews;
    if (!newsItem) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{isEditing ? "Edit Article" : "Add New Article"}</h2>
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
                  value={newsItem.title}
                  onChange={(e) => isEditing 
                    ? setEditingNews({ ...editingNews!, title: e.target.value })
                    : setNewNews({ ...newNews, title: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Article title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={newsItem.date}
                    onChange={(e) => isEditing
                      ? setEditingNews({ ...editingNews!, date: e.target.value })
                      : setNewNews({ ...newNews, date: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <input
                    type="text"
                    value={newsItem.category}
                    onChange={(e) => isEditing
                      ? setEditingNews({ ...editingNews!, category: e.target.value })
                      : setNewNews({ ...newNews, category: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., Announcements, Events"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  value={newsItem.content}
                  onChange={(e) => isEditing
                    ? setEditingNews({ ...editingNews!, content: e.target.value })
                    : setNewNews({ ...newNews, content: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Article content"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Featured Image</label>
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
                              setEditingNews({ ...editingNews!, image: "" });
                            } else {
                              setNewNews({ ...newNews, image: "" });
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
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
              >
                Cancel
              </button>
              <button
                onClick={isEditing ? handleUpdateNews : handleAddNews}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                {isEditing ? "Update Article" : "Save Article"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDeleteConfirmation = () => {
    if (!deletingNews) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <h2 className="text-xl font-semibold">Delete Article</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to delete "{deletingNews.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeletingNews(null)}
                className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteNews}
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
        <h1 className="text-2xl font-bold">News Management</h1>
        <button
          onClick={() => setIsAddingNews(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" />
          Add News
        </button>
      </div>

      {/* News Form Modal */}
      {(isAddingNews || editingNews) && renderNewsForm(!!editingNews)}

      {/* Delete Confirmation Modal */}
      {deletingNews && renderDeleteConfirmation()}

      {/* News List */}
      <div className="grid gap-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-background p-6 rounded-lg shadow-md flex gap-4"
          >
            {item.image && (
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-primary">{item.category}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{item.content}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeletingNews(item)}
                className="p-2 text-destructive hover:bg-destructive/10 rounded-md"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleEditNews(item)}
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