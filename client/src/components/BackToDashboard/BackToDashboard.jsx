import {ArrowLeftIcon} from '@radix-ui/react-icons'
import React from 'react'
import './backToDashboard.css'

function BackToDashboard() {
  const goBackToHomePage = () => {
    window.location.href = '/'
  }
  return (
    <button onClick={goBackToHomePage} className='back-to-dashboard-btn'>
      <ArrowLeftIcon style={{width: 30, height: 30}} />
    </button>
  )
}

export default BackToDashboard
