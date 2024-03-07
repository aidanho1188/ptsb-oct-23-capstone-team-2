import Logo from '../components/Logo/Logo'
import NavMenu from '../components/NavMenu/NavigationMenu'
import Dashboard from '../layouts/Dashboard/Dashboard'
import './homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
      <h1 className='homepage-title'>Homepage</h1>
      <div className='nav-bar'>
        <Logo />
        <NavMenu />
      </div>
      <Dashboard />
    </div>
  )
}

export default Homepage
