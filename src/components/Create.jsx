// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { createPost } from 'api/apicreatepost';
// import { fetchPosts } from 'api/apiposts';

// const Create = ({ token, setPosts, posts }) => {

//     const navigate = useNavigate();

//     const [ title, setTitle ] = useState('')
//     const [ description, setDescription ] = useState('')
//     const [ price , setPrice ] = useState('')
//     const [ postLocation, setLocation ] = useState('[On Request]')
//     const [ willDeliver , setWillDeliver ] = useState(false)

//     const handleCreate = async (e) => {
//         e.preventDefault();

//         const postObject = {
//             method: "Post",
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 post: {
//                     title: title,
//                     description: description,
//                     price: price,
//                     willDeliver: willDeliver,
//                     location : postLocation
//                 }
//             })
//         }

//         let response = await createPost(postObject);

//         if (response.success) {
//             const postCopy = [posts]
//             postCopy.push(response.data.post)
//             setPosts(postCopy);
//             const newPosts = await fetchPosts();
//             setPosts(newPosts);
//             navigate.push('/home')
//         }

//     }

//     return (
//         <aside className='right-aside'>
//             <div className='right-header'>
//                 <h2>Create New Posting</h2>
//                 <h3>Tell us what you have Stranger!</h3>
//             </div>
//                 <div className='right-body'>
//                     <form id='createForm' onSubmit={handleCreate}>
//                         <label>
//                             <div className='info-header'>Title:</div>
//                             <input type='text' onChange={ (e)=>{
//                                 setTitle(e.target.value)
//                                 }} required={true} maxLength={50} placeholder='Required' size={50}/>
//                                 <br/>
//                            <span className='remainder'>{'(' + (50 - title.length) +') characters remaining'}</span>
//                         </label>
//                         <br/>
//                         <label>
//                             <div className='info-header'>Description:</div>
//                             <textarea rows="5" cols="50" placeholder='required' required={true} maxLength={500} onChange={ (e) => setDescription(e.target.value)}/>
//                             <br/>
//                             <span className='remainder'>{'('+ (500-description.length) + ') characters remaining' }</span>
//                         </label>
//                         <br/>
//                         <label>
//                             <div className='info-header'>Price:</div>
//                             <input type='text' required={true} maxLength={10} placeholder='required' onChange={ (e)=> setPrice(e.target.value)}/>
//                         </label>
//                         <br/>
//                         <label>
//                         <div className='info-header'>Location:</div>
//                            <input type='text' placeholder='Optional' size={50} onChange={ (e)=> setLocation(e.target.value)}/>
//                         </label>
//                         <br/>
//                         <label>
//                             <div className='info-header'>Will You Deliver?:</div>
//                             <select onChange={ (e)=> setWillDeliver(e.target.value) } >
//                                 <option value={false}>No</option>
//                                 <option value={true}>Yes</option>
//                             </select>
//                         </label>
//                         <div className='formActions'>
//                             <span>
//                                 <input type='submit' onSubmit={handleCreate} value="Create!"/><input type='reset' />
//                             </span>
//                         </div>
//                     </form>
//             </div>
//         </aside>
//     )

// }

// export default Create

import React, { useState } from "react";
import { CreateNewPost } from "../api/apiposts";
import { useNavigate } from "react-router-dom";

function Create({ token, posts, setPosts }) {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <h4>What are you selling Stranger?</h4>
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
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {"\n"}
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {"\n"}
        <input
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        {"\n"}
        <input
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        {"\n"}
        <label>Will Deliver</label>
        <input
          checked={willDeliver}
          type={"checkbox"}
          onChange={(e) => setWillDeliver(e.target.checked)}
        />
        {"\n"}
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}

export default Create;
