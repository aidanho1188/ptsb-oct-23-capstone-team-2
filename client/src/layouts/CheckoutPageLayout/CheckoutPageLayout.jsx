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
        <div className='form-response' style={{width: '50%'}}>
          <FormResponse />
        </div>

        {/* this will be a component with 50%*/}
        <div className='gps-form' style={{width: '50%'}}>
          <GpsForm btnName={'Check Out'} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPageLayout
