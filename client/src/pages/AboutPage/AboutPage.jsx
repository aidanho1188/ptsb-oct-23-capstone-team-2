import './AboutPage.css'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import AboutPageLayout from '../../layouts/AboutPageLayout/AboutPageLayout'

function AboutPage() {
  return (
    <div className='about-page-container'>
      <BackToDashboard />
      <AboutPageLayout />
    </div>
  )
}

export default AboutPage
