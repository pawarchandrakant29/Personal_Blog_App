import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPost, updatePost } from "../services/api";
import "../styles/EditPost.css";
import Header from "./Header";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      const { data } = await fetchPost(id);
      setTitle(data.title);
      setContent(data.content);
    };
    loadPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, { title, content });
    navigate("/");
  };

  return (
    <>
    <Header/>
      <div className="edit-post-container">
        <div className="edit-post-form">
          <h1>Edit Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label>Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;
