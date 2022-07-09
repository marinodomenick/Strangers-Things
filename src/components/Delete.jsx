import { DeletePost } from "api/apiposts";

export default function Delete({ postId, token, posts, setPosts }) {

  return (
    <span>
      <button
        onClick={async (e) => {
          console.log("post id troubleshoot: ", e.postId);
          e.preventDefault();
          const result = await DeletePost(postId, token);
          console.log(result);
          if (result.success) {
            const filteredPosts = posts.filter((post) => {
              return post._id !== postId;
            });
            setPosts(filteredPosts);
          }
        }}
      >
        Delete
      </button>
    </span>
  );
}