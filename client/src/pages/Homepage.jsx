import Logo from '../components/Logo/Logo'
import NavMenu from '../components/NavMenu/NavigationMenu'
import './homepage.css'
import AccountMenu from '../components/AccountMenu/AccountMenu'

function Homepage() {
  return (
    <div className='homepage-container'>
      <h1 className='homepage-title'>Homepage</h1>
      <div className='nav-bar'>
        <Logo />
        <NavMenu />
        <AccountMenu />
      </div>
    </div>
  )
}

export default Homepage
