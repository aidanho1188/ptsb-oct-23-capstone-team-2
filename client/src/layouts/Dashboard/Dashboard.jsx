import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import DashboardHoverCard from '../../components/DashboardHoverCard/DashboardHoverCard'
import './dashboard.css'

function Dashboard() {
  const [openWorkOrdersData, setOpenWorkOrdersData] = useState()
  const [onSiteData, setOnSiteData] = useState()
  const [incompleteData, setIncompleteData] = useState()
  const [missedCheckInData, setMissedCheckInData] = useState()
  const [awaitingQuoteData, setAwaitingQuoteData] = useState()
  const [completedData, setCompletedData] = useState()

  const [hoveredWorkOrderId, setHoveredWorkOrderId] = useState(null)

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(url)
        setData(response.data.value)
      } catch (error) {
        if (error.response.status === 502) {
          alert('Service Channel is down. Please try again later.')
        }
        console.error(`Error fetching data from ${url}: `, error)
      }
    }

    fetchData('http://localhost:8080/api/workorders/open', setOpenWorkOrdersData)
    fetchData('http://localhost:8080/api/workorders/onSite', setOnSiteData)
    fetchData('http://localhost:8080/api/workorders/incomplete', setIncompleteData)
    fetchData('http://localhost:8080/api/workorders/open', setMissedCheckInData)
    fetchData('http://localhost:8080/api/workorders/awaitingQuote', setAwaitingQuoteData)
    fetchData('http://localhost:8080/api/workorders/completed', setCompletedData)
  }, [])

  return (
    <div className='dashboard'>
      <TablePlaceholder title='Open' data={openWorkOrdersData} onHover={setHoveredWorkOrderId} />
      <TablePlaceholder title='On Site' data={onSiteData} onHover={setHoveredWorkOrderId} />
      <TablePlaceholder title='Incomplete' data={incompleteData} onHover={setHoveredWorkOrderId} />
      <TablePlaceholder title='Missed Check In' data={missedCheckInData} onHover={setHoveredWorkOrderId} />
      <TablePlaceholder title='Awaiting For Quote' data={awaitingQuoteData} onHover={setHoveredWorkOrderId} />
      <TablePlaceholder title='Completed' data={completedData} onHover={setHoveredWorkOrderId} />

      <DashboardChart />
      {hoveredWorkOrderId && (<DashboardHoverCard workOrderId={hoveredWorkOrderId} />)}
    </div>
  )
}

export default Dashboard
