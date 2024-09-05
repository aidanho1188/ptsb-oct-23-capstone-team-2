import Footer from './components/Footer/Footer'
import NavBar from './layouts/Navbar/NavBar'
import PropTypes from 'prop-types'
import {useEffect} from 'react'

const Layout = ({children}) => {
  useEffect(() => {
    const navBar = document.querySelector('.nav-bar')
    const shadowClass = 'shadow'
    const scrolledClass = 'scrolled'
    const scrollThreshold = 15

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        navBar.classList.add(shadowClass)
        navBar.classList.add(scrolledClass)
      } else {
        navBar.classList.remove(shadowClass)
        navBar.classList.remove(scrolledClass)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
