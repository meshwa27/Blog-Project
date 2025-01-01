import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogUpdate = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: '',
    author: '',
    content: '',
    tags: '',
    publishedDate: '',
  });

  // Fetch the existing blog details
  useEffect(() => {
    axios.get(`http://localhost:8080/blog/getblog/${id}`, { withCredentials: true })
      .then((response) => {
        setBlog(response.data.blog);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/blog/updateblog/${id}`, blog, { withCredentials: true })
      .then(() => {
        alert('Blog updated successfully');
        navigate('/blog'); // Navigate back to the blog list
      })
      .catch((error) => {
        console.error('Error updating blog:', error);
        alert('Failed to update blog');
      });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            name="title" 
            value={blog.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input 
            type="text" 
            className="form-control" 
            name="author" 
            value={blog.author} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea 
            className="form-control" 
            name="content" 
            rows="5" 
            value={blog.content} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tags</label>
          <input 
            type="text" 
            className="form-control" 
            name="tags" 
            value={blog.tags} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Published Date</label>
          <input 
            type="date" 
            className="form-control" 
            name="publishedDate" 
            value={blog.publishedDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default BlogUpdate;
