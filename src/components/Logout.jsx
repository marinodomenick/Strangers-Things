const Logout = () => {
  localStorage.removeItem('token')
  window.location.href = '/';
  
}
console.log("The local storage is showing" , localStorage)

export default Logout
