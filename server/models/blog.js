const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String},
    author: { type: String },
    content: { type: String },
    tags: { type: [String]  },
    publishedDate: { type: Date }
   
},{
    timestamps:true,
    versionKey:false
}

);

const BlogModel=mongoose.model("Blog", blogSchema)
module.exports = BlogModel;

