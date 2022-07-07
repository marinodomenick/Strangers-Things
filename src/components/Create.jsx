import React, { useState } from "react";
import { CreateNewPost } from "../api/apiposts";
import { useNavigate } from "react-router-dom";

function Create({ token, posts, setPosts }) {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [location, setLocation] = useState(["On Request"]);

  const navigate = useNavigate();
  return (
    <div>
      <h3>Tell us what you have Stranger!</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await CreateNewPost(
            { price, description, title, willDeliver },
            token
          );
          const newPosts = [...posts, result.data.post];
          setPosts(newPosts);
          navigate("/");
        }}
      >
        {" "}
        <label>
          <div className="info-header">Title:</div>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required={true}
            maxLength={50}
            placeholder="Required"
            size={50}
          />
          <br />
          <span className="remainder">
            {"(" + (50 - title.length) + ") characters remaining"}
          </span>
        </label>
        {"\n"}
        <label>
          <div className="info-header">Description:</div>
          <textarea
            rows="11"
            cols="50"
            placeholder="Required"
            required={true}
            maxLength={500}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <span className="remainder">
            {"(" + (500 - description.length) + ") characters remaining"}
          </span>
        </label>
        {"\n"}
        <label>
          <div className="info-header">Price:</div>
          <input
            type="text"
            required={true}
            maxLength={10}
            placeholder="Required"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        {"\n"}
        <label>
          <div className="info-header">Location:</div>
          <input
            type="text"
            placeholder="Optional"
            size={50}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        {"\n"}
        <label>
          <div className="info-header">Will You Deliver?:</div>
          <select onChange={(e) => setWillDeliver(e.target.value)}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
          <br></br>
        </label>
        {"\n"}
        <button type="submit">Create!</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Create;
