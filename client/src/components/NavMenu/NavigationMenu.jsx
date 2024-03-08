import {GridIcon, GroupIcon} from '@radix-ui/react-icons'
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger} from '@//components/ui/navigation-menu'
import './navigationMenu.css'

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='nav-menu-layout'>
        <NavigationMenuItem>
          <NavigationMenuLink className='nav-link'>Check In</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className='nav-link'>Check Out</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className='nav-link'>Update Status</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className='nav-link'>Work Order Activity</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
