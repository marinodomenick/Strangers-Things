import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/apiposts";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    };
    getAllPost();
  }, []);

  return (
    <>
      {posts.map((post, index) => {
        console.log(posts);
        return (
          <h4 key={`Key: ${index}`} post={post}>
            <div>{post.title}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{post.description}</div>
            <div>{`Location: ${post.location}`}</div>
            <div>
              {post.willDeliver ? "Will deliver: Yes" : "Will deliver: No"}{" "}
            </div>
          </h4>
        );
      })}
    </>
  );
}
export default Posts;
