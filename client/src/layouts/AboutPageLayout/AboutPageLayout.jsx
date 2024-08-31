import './aboutPageLayout.css'
import FAQ from '../../components/FAQ/FAQ'
import {Separator} from '@/components/ui/separator'
import TeamCarousel from '../../components/TeamCarousel/TeamCarousel'

function AboutPageLayout() {
  return (
    <div className='about-page-content'>
      <h2>About Us</h2>
      <div className='about-page-content-block'>
        <img className='about-page-content-block-image' alt='Picture Here' src='../src/assets/aidaviela.webp' />
        <p>Our mission is to provide a user-friendly and efficient workorder management solution that helps businesses streamline their operations and improve productivity. </p>
      </div>

      <Separator />
      <h2>What is the purpose?</h2>
      <div className='about-page-content-block'>
        <p>This app is built for Outside Unlimited to help manage work orders without the need for using the &quot;Service Channel&quot; UI.</p>
        <img className='about-page-content-block-image' alt='Picture Here' src='../src/assets/outsideunlimited_logo.jpeg' />
      </div>

      <Separator />
      <h2>How it works?</h2>
      <div className='about-page-content-block flex-col'>
        {/* a Carousel here could work */}
        <p>Data are pulled directly from the Service Channel. Each work orders have its own Id, category and status. </p>
        <img className='about-page-content-block-image' alt='Picture Here' />
        <p>More texts</p>
        <img className='about-page-content-block-image' alt='Picture Here' />
        <p>and more texts</p>
      </div>

      <Separator />
      <h2>Our Team</h2>
      <div className='about-page-content-team-block'>
        <TeamCarousel />
      </div>

      <Separator />
      <FAQ />
    </div>
  )
}

export default AboutPageLayout
