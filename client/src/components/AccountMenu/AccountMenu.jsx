import {Button} from '@/components/ui/button'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import './accountmenu.css'

const AccountMenu = () => {
  return (
    <div className='account-menu-layout'>
      <DropdownMenu>
        <DropdownMenuTrigger className='dropdown-menu-trigger'>
          <Button variant='outline' className='account-btn'>
            Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='dropdown-menu-content'>
          <DropdownMenuLabel>Name</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
          {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AccountMenu
