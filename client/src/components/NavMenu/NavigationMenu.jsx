import {GridIcon, GroupIcon} from '@radix-ui/react-icons'
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger} from '../../../components/ui/navigation-menu'

import './navigationMenu.css'

function NavMenu() {
  return (
    <div className='nav-menu-layout'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='#' className='nav-link'>
              <GroupIcon /> Check In
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='#' className='nav-link'>
              <GroupIcon />
              Check Out
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='/update-status' className='nav-link'>
              <GroupIcon />
              Update Status
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href='#' className='nav-link'>
              <GroupIcon />
              Work Order Activity
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default NavMenu
