export const fetchPosts = async () => {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts')
    const result =  await response.json();
    return result


}
  
 