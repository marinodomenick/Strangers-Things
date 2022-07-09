function Messages({ currentUser }) {
    return (
      <div>
        {currentUser.messages.map((message, index) => {
          return (
            <>
              <div>
                <p>Post Title: {message.post.title}</p>
                <p>From: {message.fromUser.username}</p>
                <p>{currentUser.messages[index].content}</p>
              </div>
            </>
          );
        })}
      </div>
    );
  }
  export default Messages;