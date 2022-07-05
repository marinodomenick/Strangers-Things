import { NavBar } from "components"
import Register from "components/Register";
import Login from "components/Login";
import { useEffect, useState } from "react";
import { fetchMe } from "api/auth";
// import { Register } from "components"
// // import { Router } from "react-router-dom"

// export default function App() {
//   return (
//     <>
//   <NavBar />
//   <div>
//   {/* <Register /> */}
//   </div>
//   </>
//   )
// }



export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

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

  console.log("The current user is:", currentUser);

  return (
    <>
      <NavBar />
      <Register setToken={setToken} />
      <Login setToken={setToken} />
    </>
  );
}
