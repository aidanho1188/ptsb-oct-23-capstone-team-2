import {useState} from 'react'
import './loginForm.css'
import {FaUser, FaLock} from 'react-icons/fa'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //get data from form and send to server

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username: username,
        password: password,
      })
      console.log('response', response.data)
      // userName.endsWith('@outsideunlmited.com')
      if (response.data.success === true) {
        // save user to local storage
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setErrorMessage(response.data.message)
        // redirect to home page
        window.location = '/'
      } else if (response.data.success === false) {
        setErrorMessage(response.data.message)
      }
    } catch (error) {
      console.log('error', error)
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <div className='login-form-layout'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='input-box'>
          <input type='username' placeholder='Username' value={username} onChange={handleUsernameChange} required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={handlePasswordChange} required />
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
