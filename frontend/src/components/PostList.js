import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../services/api";
import "../styles/PostList.css";
import Header from "./Header";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const { data } = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="post-list">
        <h1 className="post-list-title">Latest Blog Posts</h1>
        <div className="post-cards">
          {posts.map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.content.slice(0, 100)}...</p>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
