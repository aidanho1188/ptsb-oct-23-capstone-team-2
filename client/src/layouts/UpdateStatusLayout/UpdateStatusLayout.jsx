import WorkOrder from '../../components/WorkOrder/WorkOrder'
import FormResponse from '../../components/FormResponse/FormResponse'
import Summary from '../../components/Summary/Summary'
import './updateStatusLayout.css'

function UpdateStatusLayout() {
  return (
    <div>
      <WorkOrder />
      <FormResponse />
      <Summary />
    </div>
  )
}

export default UpdateStatusLayout
