import { sendMessage } from "api/apiposts";
import { useState } from "react";

function Messenger({ postId, token }) {
  const [message, setMessage] = useState("");
  return (
    <span>
      <form
        onSubmit={async (e) => {        
          console.log(message);
          await sendMessage(message, token, postId);
        }}
      >
        <input
          value={message}
          placeholder="Type your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="MessageButton">
          Send!
        </button>
      </form>
    </span>
  );
}

export default Messenger;