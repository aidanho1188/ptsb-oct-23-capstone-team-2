import './checkoutPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsForm from '../../components/Gps/GpsForm'

function CheckoutPageLayout() {
  return (
    <div className='checkout-page-layout'>
      <WorkorderSearch />
      <div className='popup-form'>
        {/* 50% */}
        <FormResponse />

        {/* this will be a component with 50%*/}
        <div className=''>
          <GpsForm  />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPageLayout
