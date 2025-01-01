import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const BlogCreate = () => {

  const [title,settitle]=useState("")
  const [author,setauthor]=useState("")
  const [content,setcontent]=useState("")
  const [tags,settags]=useState("")
  const [publishedDate,setpublishedDate]=useState("")

  // Handle form submission
  const handleSubmit =  (e) => {
    e.preventDefault();

    const blogdata={title,author,content,tags,publishedDate}

    axios.post("http://localhost:8080/blog/createblog", blogdata, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      toast.success(res?.data?.message || "Blog Created Successfully");
      settitle("");
      setauthor("");
      setcontent("");
      settags("");
      setpublishedDate("");
    })
    .catch((err) => {
      console.error(err.response);
      toast.error(err.response?.data?.message || "Error Occurred");
    });
  }

  return (
    <div
      className="container p-3 max-w-3xl mx-auto min-vh-100"
      style={{ maxWidth: "60%" }}
    >
      <h1 className="text-center my-4">Create a Blog</h1>
      <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Title"
           value={title}
           onChange={(e) => settitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            placeholder="Enter Content"
            rows={5}
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            name="tags"
            placeholder="Enter Tags (comma-separated)"
            value={tags}
            onChange={(e) => settags(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Published Date</Form.Label>
          <Form.Control
            type="date"
            name="publishedDate"
            value={publishedDate}
            onChange={(e) => setpublishedDate(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Publish
        </Button>
      </Form>
    </div>
  );
};

export default BlogCreate;
