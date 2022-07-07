import { NavBar } from "components"
import Register from "components/Register";
import Login from "components/Login";
import { React, useEffect, useState } from "react";
import { fetchMe } from "api/auth";
import { Posts } from "components";
import { Route, Routes } from "react-router-dom";
import { Create } from "components";
import { fetchPosts } from "./api/apiposts";



export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      console.log("result from fetch me", result);
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

  console.log("The current user is:", currentUser);

  return (
    <>
      <NavBar />
      <Routes>
      <Route path ="/" element = {<Posts setToken={setToken} posts={posts} setPosts = {setPosts} /> } />
      {/* <Route path = "/Posts" element={<Posts/>} /> */}
      <Route path = "/Login" element = {<Login setToken={setToken} /> } />
      <Route path = "/Register" element = {<Register setToken={setToken}/>} />
      <Route path = "/Create" element = {<Create token = {token} posts={posts} setPosts = {setPosts} /> } />
      </Routes>
    </>
  );
}