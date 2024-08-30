import './AboutPage.css'
import NavBar from '../../layouts/Navbar/NavBar'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import AboutPageLayout from '../../layouts/AboutPageLayout/AboutPageLayout'

function AboutPage() {
  return (
    <div className='about-page-container'>
      <NavBar />
      <BackToDashboard />
      <AboutPageLayout />
    </div>
  )
}

export default AboutPage
