import './checkoutPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsCheckoutForm from '../../components/Gps/GpsCheckoutForm'
import {useState} from 'react'

function CheckoutPageLayout() {
  const [workorderInfo, setWorkorderInfo] = useState(null) //state to store workorder info
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='checkout-page-layout'>
      <WorkorderSearch setWorkorderInfo={setWorkorderInfo} setIsLoading={setIsLoading} />
      <div className='popup-form'>
        <div className='form-response' style={{ width: '50%' }}>
          <FormResponse formState={workorderInfo} isLoading={isLoading} />
        </div>

        <div className='gps-form' style={{ width: '50%' }}>
          {/* create & use a separate GPSCheckoutForm */}
          <GpsCheckoutForm btnName={'Check Out'} formState={workorderInfo} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPageLayout