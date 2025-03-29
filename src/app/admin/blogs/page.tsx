"use client";

import { useState } from "react";
import { Plus, Trash2, Edit2, Image as ImageIcon, Tag, X, AlertCircle } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  author: string;
  tags: string[];
  status: "draft" | "published";
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([
    {
      id: "1",
      title: "The Importance of Community Engagement",
      date: "2024-03-15",
      content: "Community engagement plays a vital role in building strong, resilient neighborhoods. Through active participation and collaboration, we can create lasting positive change in our communities.",
      image: "/images/blogs/community.jpg",
      author: "John Smith",
      tags: ["Community", "Engagement", "Leadership"],
      status: "published"
    },
    {
      id: "2",
      title: "Youth Programs: Building Tomorrow's Leaders",
      date: "2024-03-20",
      content: "Our youth programs are designed to empower young people with the skills and confidence they need to become future leaders. We focus on mentorship, education, and hands-on experience.",
      image: "/images/blogs/youth.jpg",
      author: "Sarah Johnson",
      tags: ["Youth", "Education", "Leadership"],
      status: "draft"
    }
  ]);

  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    date: "",
    content: "",
    image: "",
    author: "",
    tags: [] as string[],
    status: "draft" as "draft" | "published"
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [newTag, setNewTag] = useState("");
  const [deletingBlog, setDeletingBlog] = useState<BlogPost | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        if (editingBlog) {
          setEditingBlog({ ...editingBlog, image: reader.result as string });
        } else {
          setNewBlog({ ...newBlog, image: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      const currentTags = editingBlog ? editingBlog.tags : newBlog.tags;
      if (!currentTags.includes(newTag.trim())) {
        if (editingBlog) {
          setEditingBlog({
            ...editingBlog,
            tags: [...editingBlog.tags, newTag.trim()]
          });
        } else {
          setNewBlog({ ...newBlog, tags: [...newBlog.tags, newTag.trim()] });
        }
      }
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    if (editingBlog) {
      setEditingBlog({
        ...editingBlog,
        tags: editingBlog.tags.filter(tag => tag !== tagToRemove)
      });
    } else {
      setNewBlog({ ...newBlog, tags: newBlog.tags.filter(tag => tag !== tagToRemove) });
    }
  };

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.date && newBlog.content && newBlog.author) {
      const blogPost: BlogPost = {
        id: Date.now().toString(),
        ...newBlog
      };
      setBlogs([...blogs, blogPost]);
      setNewBlog({ title: "", date: "", content: "", image: "", author: "", tags: [], status: "draft" });
      setImagePreview(null);
      setIsAddingBlog(false);
    }
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setImagePreview(blog.image || null);
  };

  const handleUpdateBlog = () => {
    if (editingBlog && editingBlog.title && editingBlog.date && editingBlog.content && editingBlog.author) {
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id ? editingBlog : blog
      ));
      setEditingBlog(null);
      setImagePreview(null);
    }
  };

  const handleDeleteBlog = () => {
    if (deletingBlog) {
      setBlogs(blogs.filter(item => item.id !== deletingBlog.id));
      setDeletingBlog(null);
    }
  };

  const handleCloseModal = () => {
    setIsAddingBlog(false);
    setEditingBlog(null);
    setDeletingBlog(null);
    setImagePreview(null);
  };

  const renderBlogForm = (isEditing: boolean) => {
    const blog = isEditing ? editingBlog : newBlog;
    if (!blog) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{isEditing ? "Edit Blog Post" : "Add New Blog Post"}</h2>
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
                  value={blog.title}
                  onChange={(e) => isEditing 
                    ? setEditingBlog({ ...editingBlog!, title: e.target.value })
                    : setNewBlog({ ...newBlog, title: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Blog post title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={blog.date}
                    onChange={(e) => isEditing
                      ? setEditingBlog({ ...editingBlog!, date: e.target.value })
                      : setNewBlog({ ...newBlog, date: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Author</label>
                  <input
                    type="text"
                    value={blog.author}
                    onChange={(e) => isEditing
                      ? setEditingBlog({ ...editingBlog!, author: e.target.value })
                      : setNewBlog({ ...newBlog, author: e.target.value })
                    }
                    className="w-full p-2 border rounded-md"
                    placeholder="Author name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  value={blog.content}
                  onChange={(e) => isEditing
                    ? setEditingBlog({ ...editingBlog!, content: e.target.value })
                    : setNewBlog({ ...newBlog, content: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
                  placeholder="Blog post content"
                  rows={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-primary/80"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Add tags (press Enter)"
                  />
                </div>
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
                              setEditingBlog({ ...editingBlog!, image: "" });
                            } else {
                              setNewBlog({ ...newBlog, image: "" });
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
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    value={blog.status}
                    onChange={(e) => isEditing
                      ? setEditingBlog({ ...editingBlog!, status: e.target.value as "draft" | "published" })
                      : setNewBlog({ ...newBlog, status: e.target.value as "draft" | "published" })
                    }
                    className="p-2 border rounded-md"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
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
                onClick={isEditing ? handleUpdateBlog : handleAddBlog}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                {isEditing ? "Update Post" : "Save Post"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDeleteConfirmation = () => {
    if (!deletingBlog) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-background rounded-lg shadow-lg max-w-md w-full">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <h2 className="text-xl font-semibold">Delete Blog Post</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to delete "{deletingBlog.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeletingBlog(null)}
                className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBlog}
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
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <button
          onClick={() => setIsAddingBlog(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          <Plus className="w-4 h-4" />
          Add Blog Post
        </button>
      </div>

      {/* Blog Form Modal */}
      {(isAddingBlog || editingBlog) && renderBlogForm(!!editingBlog)}

      {/* Delete Confirmation Modal */}
      {deletingBlog && renderDeleteConfirmation()}

      {/* Blog List */}
      <div className="grid gap-4">
        {blogs.map((item) => (
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
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  item.status === "published" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {item.status}
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">By {item.author}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground line-clamp-2">{item.content}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeletingBlog(item)}
                className="p-2 text-destructive hover:bg-destructive/10 rounded-md"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleEditBlog(item)}
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