export const fetchPosts = async () => {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts')
    const result =  await response.json();
    return result


}
  
  export const CreateNewPost = async (postObject, token) => {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: postObject,
        }),
      }
    );
    const result = await response.json();
    return result;
  };