import {Button} from '@/components/ui/button'
import logo from '@/assets/logo.svg'
import './logo.css'

function Logo() {
  const handleClick = () => {
    window.location.href = '/'
  }

  return (
    <div className='logo-layout'>
      <img src={logo} alt='Logo' onClick={handleClick} />
    </div>
  )
}

export default Logo
