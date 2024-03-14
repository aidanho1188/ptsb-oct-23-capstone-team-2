import WorkOrder from '../../components/WorkOrder/WorkOrder'
import FormResponse from '../../components/FormResponse/FormResponse'
import Summary from '../../components/Summary/Summary'
import './updateStatusLayout.css'

function UpdateStatusLayout() {
  return (
    <div className='update-status-layout'>
      <div className='left-column'>
        <WorkOrder />
        <FormResponse />
      </div>
      <div className='right-column'>
        <Summary />
      </div>
    </div>
  )
}

export default UpdateStatusLayout
