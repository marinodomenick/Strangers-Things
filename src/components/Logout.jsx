import react from "react"
import { useNavigate } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/';
  
}
console.log("The local storage is showing" , localStorage)

export default Logout
