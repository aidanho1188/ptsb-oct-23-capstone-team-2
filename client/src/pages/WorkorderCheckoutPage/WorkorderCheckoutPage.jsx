import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import CheckoutPageLayout from '../../layouts/CheckinoutPageLayout/CheckoutPageLayout'
import './workorderCheckoutPage.css'

function WorkorderCheckoutPage() {
  return (
    <div className='workorder-checkout-page-container'>
      <BackToDashboard />
      <h1 className='checkout-page-title'>Check-out</h1>
      <CheckoutPageLayout />
    </div>
  )
}

export default WorkorderCheckoutPage
