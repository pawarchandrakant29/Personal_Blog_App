import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../services/api";
import "../styles/CreatePost.css";
import Header from "./Header";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="mt-10">
        <div className="create-post">
          <h1>Create New Post</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter post content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
