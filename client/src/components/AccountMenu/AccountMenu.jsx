import {Button} from '@/components/ui/button'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {useEffect, useState} from 'react'
import './accountmenu.css'

const AccountMenu = () => {
  const [username, setUsername] = useState('Default User')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      const username = user.username || 'Guest'
      setUsername(username)
    }
  }, [])

  return (
    <div className='account-menu-layout'>
      <DropdownMenu>
        {/* <DropdownMenuTrigger className='dropdown-menu-trigger'> */}
        {/* <Button variant='outline' className='account-btn'> */}
        <div className='account-name'>{username}</div>
        {/* </Button> */}
        {/* </DropdownMenuTrigger> */}
        {/* <DropdownMenuContent className='dropdown-menu-content'> */}
        {/* <DropdownMenuLabel>{username}</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuItem>Login</DropdownMenuItem> */}
        {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
        {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
        {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
        {/* <DropdownMenuItem>Logout</DropdownMenuItem> */}
        {/* </DropdownMenuContent> */}
      </DropdownMenu>
    </div>
  )
}

export default AccountMenu
