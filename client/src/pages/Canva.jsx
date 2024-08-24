import BackToDashboard from '../components/BackToDashboard/BackToDashboard'
import {useEffect, useRef} from 'react'

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
    <div>
      <BackToDashboard />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingTop: '56.2500%',
          paddingBottom: 0,
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform',
        }}
      >
        <iframe
          ref={iframeRef}
          loading='lazy'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src='https://www.canva.com/design/DAGCJqO_4Lw/8Z_YkBjpQn9HAPwqMorDDg/view?embed'
          allowFullScreen='allowFullScreen'
          allow='fullscreen'
        ></iframe>
      </div>
      <a href='https://www.canva.com/design/DAGCJqO_4Lw/8Z_YkBjpQn9HAPwqMorDDg/view' target='_blank' rel='noopener'></a>
    </div>
  )
}

export default Demo
