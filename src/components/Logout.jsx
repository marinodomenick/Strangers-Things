const Logout = () => {
  localStorage.removeItem('token')


return (
  <button onClick={Logout}>
  Logout
</button>
)

}
console.log("The local storage is showing" , localStorage)

export default Logout
