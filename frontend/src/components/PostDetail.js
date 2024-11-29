import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchPost, deletePost } from "../services/api";
import "../styles/PostDetail.css";
import Header from "./Header";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      const { data } = await fetchPost(id);
      setPost(data);
    };
    loadPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate("/");
  };

  if (!post) return <div className="loading">Loading...</div>;

  return (
    <>
      <Header />
      <div className="post-detail-container">
        <div className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <p className="post-date">
            Posted on {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <div className="post-actions">
          <Link to={`/edit/${id}`} className="btn edit-btn">
            Edit Post
          </Link>
          <button onClick={handleDelete} className="btn delete-btn">
            Delete Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
