import {Button} from '@/components/ui/button'
import './logo.css'

function Logo() {
  const handleClick = () => {
    window.location.href = '/'
  }

  return (
    <div className='logo-layout'>
      <img src='https://www.outsideunlimited.com/wp-content/uploads/2023/07/logo.svg' alt='Logo' onClick={handleClick} />
    </div>
  )
}

export default Logo
