import { useState } from 'react'
import './loginForm.css'
import { FaUser, FaLock } from 'react-icons/fa'

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
    // email.endsWith('@outsideunlmited.com')
    if (email === 'example@example.com' && password === 'password') {
      setErrorMessage('') // successful login
    } else {
      setErrorMessage('Invalid email or password. Please try again.') // failed login
    }
  }

  return (
    <div className='login-form-layout'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='input-box'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <FaLock className='icon' />
          <span className='password-toggle' onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <a href='#'>Forgot Password</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>
            Don&apos;t have an account? <a href='#'>Register</a>
          </p>
        </div>
      </form>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </div>
  )
}

export default Login
