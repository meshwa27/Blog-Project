const express = require('express');
const { getAllBlogs, createBlog, updateBlog, deleteBlog, getSingleBlog } = require('../controllers/blogController');
const blogrouter = express.Router();

blogrouter.get('/getblog', getAllBlogs);
blogrouter.post('/createblog', createBlog);
blogrouter.put('/updateblog/:id',updateBlog );
blogrouter.get('/getSingleBlog/:id',getSingleBlog);
blogrouter.delete('/deleteblog/:id', deleteBlog);

module.exports = blogrouter;
