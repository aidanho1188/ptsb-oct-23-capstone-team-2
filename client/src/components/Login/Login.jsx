import React, { useState } from 'react'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'example@example.com' && password === 'password') {
      setErrorMessage('') // successful login
    } else {
      setErrorMessage('Invalid email or password. Please try again.') // failed login
    }
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
          />
          <span className='password-toggle' onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <button type='submit'>Login</button>
      </form>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </div>
  )
}

export default Login
