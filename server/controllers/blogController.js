const BlogModel = require("../models/blog");


// Create a blog
const createBlog = async (req, res) => {
    const {title,author,content,tags,publishedDate} =req.body;

    if(!title || !author || !content || !tags || !publishedDate)
    {
        return res.status(400).json({message: "Please fill in all fields"});
    }
    try {
        await BlogModel.create({title,author,content,tags,publishedDate})
        res.status(201).json({message: "Blog created successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error creating blog"});
    }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
    
    try {
        const blog=await BlogModel.find();
        if(!(blog.length) >0){
            return res.status(404).json({error:"Notes Not Found."})
        }
        return res.status(200).json({message:"notes get successfully",blog})
    } catch (error) {
        return res.status(400).json({message:error})
    }


};

const getSingleBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);
        
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching blog", error });
    }
};


// Update a blog
const updateBlog = async (req, res) => {
    try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id,req.body);
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog updated successfully", updatedBlog });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "Error updating blog", error });
    }
};

// Delete a blog
const deleteBlog = async (req, res) => {
    
    try {
        const { id } = req.params;
        await BlogModel.findByIdAndDelete(id)
        res.status(200).send({message:"Notes Deleted successfully"})


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error deleteing blog', error });
    }
};

module.exports={getAllBlogs,createBlog,updateBlog,deleteBlog,getSingleBlog}