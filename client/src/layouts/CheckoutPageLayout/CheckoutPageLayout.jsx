import './checkoutPageLayout.css'
import WorkorderSearch from '../../components/WorkorderSearch/WorkorderSearch'
import FormResponse from '../../components/FormResponse/FormResponse'
import GpsForm from '../../components/Gps/GpsForm'

function CheckoutPageLayout() {
  return (
    <div className='checkout-page-layout'>
      <WorkorderSearch />
      <div className='popup-form'>
        <div
          className='form-response'
          style={{
            width: '50%',
            height: '100%',
            display: 'flex',
            lineHeight: '3.0'
          }}
        >
          {/* 50% */}
          <FormResponse style={{ flex: 1 }} />
        </div>

        {/* this will be a component with 50%*/}
        <div className='gps-form' style={{ width: '50%' }}>
          <GpsForm />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPageLayout
