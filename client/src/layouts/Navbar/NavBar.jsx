import Logo from '../../components/Logo/Logo'
import NavMenu from '../../components/NavMenu/NavigationMenu'
import AccountMenu from '../../components/AccountMenu/AccountMenu'
import './navBar.css'

function NavBar() {
  return (
    <nav className='nav-bar'>
      <Logo />
      <NavMenu className='nav-menu' />
      <AccountMenu />
    </nav>
  )
}

export default NavBar
