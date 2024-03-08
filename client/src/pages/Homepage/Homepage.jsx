import NavBar from '../../layouts/Navbar/NavBar'
import Dashboard from '../../layouts/Dashboard/Dashboard'
import './homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
      <NavBar />
      <Dashboard />
    </div>
  )
}

export default Homepage
