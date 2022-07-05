import React from 'react'
import { useState } from 'react'

export default function Form() {

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
    setEmail(e.target.value)
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
      <div className='success' style={{
        display: submitted ? '' : 'none',
      }}> 

      </div>
    )
  }
}
