import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch blogs from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/blog/getblog', { withCredentials: true })
      .then((response) => {
        setBlogs(response.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  // Delete blog function
  const handleDelete = (blogId) => {
    axios.delete(`http://localhost:8080/blog/deleteblog/${blogId}`, { withCredentials: true })
      .then(() => {
        console.log('Deleted:', blogId);
        setBlogs(blogs.filter((blog) => blog._id !== blogId));
        alert('Blog deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting blog:', error.response || error);
        alert(error.response?.data?.message || 'Failed to delete blog');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">All Blogs</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{blog.author}</h6>
                <p className="card-text">
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + '...'
                    : blog.content}
                </p>
                <p className="card-text">
                  <small className="text-muted">Published: {new Date(blog.publishedDate).toLocaleDateString()}</small>
                </p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate(`/update/${blog._id}`)} // Navigate to edit page
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(blog._id)} // Call delete function
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
