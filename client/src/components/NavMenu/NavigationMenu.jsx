import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from '@/components/ui/navigation-menu'
import {useLocation} from 'react-router-dom'
import './navigationMenu.css'

function NavMenu() {
  const location = useLocation()
  return (
    <div className='nav-menu-layout'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='/' className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <rect x='3' y='3' width='7' height='9'></rect>
                <rect x='14' y='3' width='7' height='5'></rect>
                <rect x='14' y='12' width='7' height='9'></rect>
                <rect x='3' y='16' width='7' height='5'></rect>
              </svg>
              Dashboard
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/about' className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='12' y1='16' x2='12' y2='12'></line>
                <line x1='12' y1='8' x2='12' y2='8'></line>
              </svg>
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/workorder-checkin' className={`nav-links ${location.pathname === '/workorder-checkin' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                <circle cx='8.5' cy='7' r='4'></circle>
                <polyline points='17 11 19 13 23 9'></polyline>
              </svg>
              Check In
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/workorder-checkout' className={`nav-links ${location.pathname === '/workorder-checkout' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                <circle cx='8.5' cy='7' r='4'></circle>
                <line x1='18' y1='8' x2='23' y2='13'></line>
                <line x1='23' y1='8' x2='18' y2='13'></line>
              </svg>
              Check Out
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/workorder-create' className={`nav-links ${location.pathname === '/workorder-create' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M3 3h18v18H3zM12 8v8m-4-4h8' />
              </svg>
              Create Work Order
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/update-status' className={`nav-links ${location.pathname === '/update-status' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'></path>
                <polygon points='18 2 22 6 12 16 8 16 8 12 18 2'></polygon>
              </svg>
              Update Status
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/work-activity' className={`nav-links ${location.pathname === '/work-activity' ? 'active' : ''}`}>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#61CE70' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M3 3v18h18' />
                <path d='M18.7 8l-5.1 5.2-2.8-2.7L7 14.3' />
              </svg>
              Work Order Activity
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavMenu
