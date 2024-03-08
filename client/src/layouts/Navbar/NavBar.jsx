import Logo from '../../components/Logo/Logo'
import NavMenu from '../../components/NavMenu/NavigationMenu'
import AccountMenu from '../../components/AccountMenu/AccountMenu'
import './navBar.css'

function NavBar() {
  return (
    <div className='nav-bar'>
      <Logo />
      <NavMenu className='nav-menu' />
      <AccountMenu />
    </div>
  )
}

export default NavBar
