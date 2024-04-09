import {Button} from '@/components/ui/button'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {useState} from 'react'
import './accountmenu.css'

const AccountMenu = () => {
  const [username, setUsername] = useState('Default User')

  let name = setUsername(JSON.stringify(localStorage.getItem('user')))
  console.log(name)

  return (
    <div className='account-menu-layout'>
      <DropdownMenu>
        <DropdownMenuTrigger className='dropdown-menu-trigger'>
          <Button variant='outline' className='account-btn'>
            Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='dropdown-menu-content'>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
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
