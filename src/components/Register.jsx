import React from 'react'
import { useState } from 'react'

function Register() {

  // Registration States
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState ('')

  //Error check States
  const [submitted, setSubmitted] = useState ('')
  const [error, setError] = useState ('')

  //Name Change Handler
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  }

  // Email Change Handler
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false)
  }

  //Password Change Handler
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false)
  }

  //Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault ();
    if (name === '' || email === '' || password === ''){
      setError(true)
    } else {
      setSubmitted(true)
      setError(false)
    }
  }

  //Successful Message STOPPED HERE
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  //Showing Errors if Empty Strings
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Registration Form</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );

}

export default Register;
