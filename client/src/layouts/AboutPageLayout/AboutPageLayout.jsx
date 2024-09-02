import './aboutPageLayout.css'
import {useState} from 'react'
import FAQ from '../../components/FAQ/FAQ'
import {Separator} from '@/components/ui/separator'
import TeamCarousel from '../../components/TeamCarousel/TeamCarousel'
import aidavielaImage from '../../assets/aidaviela.jpeg'
import outsideunlimitedImage from '../../assets/outsideunlimited.jpg'
import checkin from '../../assets/checkin.gif'
import checkout from '../../assets/checkout.gif'
import createWorkOrder from '../../assets/createWorkOrder.gif'
import updateStatus from '../../assets/updateStatus.gif'
import workOrderActivity from '../../assets/workOrderActivity.gif'

function AboutPageLayout() {
  const [activePage, setActivePage] = useState('dashboard')

  const handleLinkClick = (page) => {
    setActivePage(page)
  }

  return (
    <div className='about-page-content'>
      <h2>About Us</h2>
      <div className='about-page-content-block'>
        <img className='about-page-content-block-image' alt='Picture Here' src={aidavielaImage} />
        <p>Our mission is to provide a user-friendly and efficient workorder management solution that helps businesses streamline their operations and improve productivity. </p>
      </div>

      <Separator className='separator' />
      <h2>What is the purpose?</h2>
      <div className='about-page-content-block'>
        <p>This app is built for Outside Unlimited to help manage work orders without the need for using the &quot;Service Channel&quot; UI.</p>
        <img className='about-page-content-block-image' alt='Picture Here' src={outsideunlimitedImage} />
      </div>

      <Separator className='about-page-separator' />
      <h2>How it work?</h2>
      <div className='how-it-works'>
        <aside className='-mx-4 w-1/5'>
          <nav className='how-it-works-nav'>
            <a href='#dashboard' className='block px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white' onClick={() => handleLinkClick('dashboard')}>
              Dashboard
            </a>
            <a href='#check-in-out' className='block px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white' onClick={() => handleLinkClick('check-in-out')}>
              Check-In and Check-Out Pages
            </a>
            <a href='#create-work-order' className='block px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white' onClick={() => handleLinkClick('create-work-order')}>
              Create Work Order
            </a>
            <a href='#update-status' className='block px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white' onClick={() => handleLinkClick('update-status')}>
              Update Status Page
            </a>
            <a href='#work-order-activity' className='block px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white' onClick={() => handleLinkClick('work-order-activity')}>
              Work Order Activity
            </a>
          </nav>
        </aside>
        <div className='how-it-works-content'>
          {activePage === 'dashboard' && <p>The Dashboard gives you an overview of the app's key features and current status. It's the central hub for accessing other pages and monitoring general activity. It displays information about work orders, including their status such as open, on site, incomplete, approved proposals, awaiting for quote, and completed. In addition, it has a graph plotted on this data for an overview.</p>}

          {activePage === 'check-in-out' && (
            <p>
              Use the Check-In and Check-Out pages to manage specific work orders. Check in or check out a work order to update its status accordingly.
              <img src={checkin} alt='Check-In and Check-Out GIF' />
            </p>
          )}

          {activePage === 'create-work-order' && (
            <p>
              The Create Work Order page allows you to generate new work orders. Fill in the necessary details, and the system will create a work order and assign a unique ID.
              <img src={createWorkOrder} alt='Create Work Order GIF' />
            </p>
          )}

          {activePage === 'update-status' && (
            <p>
              On the Update Status page, you can change the status of any work order. This page also records the status update in our database for future reference.
              <img src={updateStatus} alt='Update Status GIF' />
            </p>
          )}

          {activePage === 'work-order-activity' && (
            <p>
              Visit the Work Order Activity page to view all activities related to a specific work order. This includes a log of changes and actions taken on that work order.
              <img src={workOrderActivity} alt='Work Order Activity GIF' />
            </p>
          )}
        </div>
      </div>

      <Separator className='about-page-separator' />
      <h2>Our Team</h2>
      <div className='about-page-content-team-block'>
        <TeamCarousel />
      </div>

      <Separator className='about-page-separator' />
      <FAQ />
    </div>
  )
}

export default AboutPageLayout
