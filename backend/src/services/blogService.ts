// src/services/blogService.ts
const API_URL = 'http://localhost:5000/api';

export const blogService = {
  async getAllBlogs() {
    const response = await fetch(`${API_URL}/blogs`);
    return response.json();
  },

  async createBlog(blogData: any) {
    const response = await fetch(`${API_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(blogData),
    });
    return response.json();
  },

  async updateBlog(id: string, blogData: any) {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(blogData),
    });
    return response.json();
  },

  async deleteBlog(id: string) {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },
};