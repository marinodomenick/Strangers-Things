import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/apiposts";
import Delete from "./Delete";
import Messenger from "./Messenger";

function Posts({ currentUser, token }) {
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
      <h1>Welcome to Stranger's Things!</h1>

      {posts.map((post, index) => {
        return (
          <>
            <h4 className="thebacon" key={`Key: ${index}`} post={post}>
              <section>
              <div>{post.title}</div>
              <div>{post.author.username}</div>
              <div>{post.price}</div>
              <div>{post.description}</div>
              <div>{`Location: ${post.location}`}</div>
              <div>
                {post.willDeliver ? "Will deliver: Yes" : "Will deliver: No"}{" "}
              </div>
              
              {currentUser._id === post.author._id ? (
                <Delete
                  postId={post._id}
                  token={token}
                  posts={posts}
                  setPosts={setPosts}
                />
              ) : null}
              {currentUser._id !== post.author._id ? (
                <Messenger postId={post._id} token={token} />
              ) : null}
              </section>
            </h4>
          </>
        );
      })}
    </>
  );
}
export default Posts;
