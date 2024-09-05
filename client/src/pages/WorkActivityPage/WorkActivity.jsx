import WorkActivityPageLayout from '../../layouts/WorkActivityPageLayout/WorkActivityPageLayout'
import BackToDashboard from '../../components/BackToDashboard/BackToDashboard'
import './WorkActivity.css'

function WorkActivityPage() {
  return (
    <div className='work-activity-page-layout'>
      <BackToDashboard />
      <WorkActivityPageLayout />
    </div>
  )
}

export default WorkActivityPage
