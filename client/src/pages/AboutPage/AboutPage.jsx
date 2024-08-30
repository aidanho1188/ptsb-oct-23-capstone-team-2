import './AboutPage.css'
import NavBar from '../../layouts/Navbar/NavBar'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'

function AboutPage() {
  return (
    <div className='about-page-container'>
      <NavBar />
      <BackToDashboard />
      <div>This is the About Page for the Workorder App.</div>
      {/* add more contents here */}
    </div>
  )
}

export default AboutPage
