"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";

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
    {
      id: "1",
      title: "Community Center Opens New Youth Wing",
      date: "2024-03-15",
      content: "The community center is excited to announce the opening of our new youth wing, providing dedicated space for young people to learn, grow, and connect.",
      image: "/images/news/youth-wing.jpg",
      category: "Announcements"
    },
    {
      id: "2",
      title: "Local Artist Exhibition",
      date: "2024-03-20",
      content: "Join us for an exhibition featuring works from local artists, showcasing the vibrant creative spirit of our community.",
      image: "/images/news/exhibition.jpg",
      category: "Events"
    }
  ]);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        if (editingNews) {
          setEditingNews({ ...editingNews, image: reader.result as string });
        } else {
          setNewNews({ ...newNews, image: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNews = () => {
    if (newNews.title && newNews.date && newNews.content && newNews.category) {
      const newsItem: NewsItem = {
        id: Date.now().toString(),
        ...newNews
      };
      setNews([...news, newsItem]);
      setNewNews({ title: "", date: "", content: "", image: "", category: "" });
      setImagePreview(null);
      setIsAddingNews(false);
    }
  };

  const handleEditNews = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setImagePreview(newsItem.image || null);
  };

  const handleUpdateNews = () => {
    if (editingNews && editingNews.title && editingNews.date && editingNews.content && editingNews.category) {
      setNews(news.map(item => 
        item.id === editingNews.id ? editingNews : item
      ));
      setEditingNews(null);
      setImagePreview(null);
    }
  };

  const handleDeleteNews = (id: string) => {
    setNews(news.filter(item => item.id !== id));
  };

  const handleCancelEdit = () => {
    setEditingNews(null);
    setImagePreview(null);
  };

  const renderNewsForm = (isEditing: boolean) => {
    const newsItem = isEditing ? editingNews : newNews;
    if (!newsItem) return null;

    return (
      <div className="bg-background p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{isEditing ? "Edit Article" : "Add New Article"}</h2>
          {isEditing && (
            <button
              onClick={handleCancelEdit}
              className="p-2 hover:bg-muted rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          )}
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
          <div className="flex gap-2">
            <button
              onClick={isEditing ? handleUpdateNews : handleAddNews}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            >
              {isEditing ? "Update Article" : "Save Article"}
            </button>
            <button
              onClick={isEditing ? handleCancelEdit : () => {
                setIsAddingNews(false);
                setImagePreview(null);
              }}
              className="bg-muted px-4 py-2 rounded-md hover:bg-muted/80"
            >
              Cancel
            </button>
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

      {/* News Form */}
      {(isAddingNews || editingNews) && renderNewsForm(!!editingNews)}

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
                onClick={() => handleDeleteNews(item.id)}
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