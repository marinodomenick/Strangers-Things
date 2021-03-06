import { NavBar, Posts, Create, Logout, Messages, Register } from "components";
import Login from "components/Login";
import { React, useEffect, useState } from "react";
import { fetchMe } from "api/auth";
import { Route, Routes } from "react-router-dom";
import { fetchPosts } from "./api/apiposts";
import "./components/Strangers.css"

export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  useEffect(() => {
    const getAllPost = async () => {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    };
    getAllPost();
  }, []);

  return (
    <>
      <NavBar />
      {currentUser?.username ? (
        <h3 className="header"
        >{`Logged in as: ${currentUser.username}`}</h3>
      ) : (
        <h3 className="header" style={{ color: "red" }}>!Please log in or register for access!</h3>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              setToken={setToken}
              posts={posts}
              setPosts={setPosts}
              currentUser={currentUser}
              token={token}
            />
          }
        />
        <Route
          path="/Messages"
          element={<Messages currentUser={currentUser} posts={posts} />}
        />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route
          path="/Create"
          element={<Create token={token} posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </>
  );
}
