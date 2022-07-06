import React from "react";

// function Posts() {
//   return <div></div>;
// }

// export default Posts;

const Posts = () => {
  fetch("https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TOKEN_STRING_HERE",
    },
    body: JSON.stringify("I added this"),
  });
};

export default Posts;
