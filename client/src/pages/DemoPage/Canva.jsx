import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import {useEffect, useRef} from 'react'
import './demoPage.css'

function Demo() {
  const iframeRef = useRef(null)

  const handleFullscreen = () => {
    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen()
    } else if (iframeRef.current.mozRequestFullScreen) {
      /* Firefox */
      iframeRef.current.mozRequestFullScreen()
    } else if (iframeRef.current.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      iframeRef.current.webkitRequestFullscreen()
    } else if (iframeRef.current.msRequestFullscreen) {
      /* IE/Edge */
      iframeRef.current.msRequestFullscreen()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'f') {
        handleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <div className='demo-layout'>
      <BackToDashboard />
      <h1>Demo Presentation</h1>
      <div className='iframe-container'>
        <iframe ref={iframeRef} loading='lazy' src='https://www.canva.com/design/DAGCJqO_4Lw/8Z_YkBjpQn9HAPwqMorDDg/view?embed' allowFullScreen='allowFullScreen' allow='fullscreen'></iframe>
      </div>
      <a href='https://www.canva.com/design/DAGCJqO_4Lw/8Z_YkBjpQn9HAPwqMorDDg/view' target='_blank' rel='noopener'></a>
    </div>
  )
}

export default Demo
