import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import './dashboard.css'

function Dashboard() {
  const [openWorkOrdersData, setOpenWorkOrdersData] = useState()
  const [onSiteData, setOnSiteData] = useState()
  const [incompleteData, setIncompleteData] = useState()
  const [missedCheckInData, setMissedCheckInData] = useState()
  const [awaitingQuoteData, setAwaitingQuoteData] = useState()
  const [completedData, setCompletedData] = useState()

  useEffect(() => {
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(url)
        setData(response.data.value)
      } catch (error) {
        console.log('error', error)
        if (error.response.status === 502) {
          alert('Service Channel is down. Please try again later.')
        }
        console.error(`Error fetching data from ${url}: `, error)
      }
    }

    async function fetchAllData() {
        await Promise.all([
          fetchData('http://localhost:8080/api/workorders/open', setOpenWorkOrdersData),
          fetchData('http://localhost:8080/api/workorders/onSite', setOnSiteData),
          fetchData('http://localhost:8080/api/workorders/incomplete', setIncompleteData),
          fetchData('http://localhost:8080/api/workorders/open', setMissedCheckInData),
          fetchData('http://localhost:8080/api/workorders/awaitingQuote', setAwaitingQuoteData),
          fetchData('http://localhost:8080/api/workorders/completed', setCompletedData),
        ])
    }

    fetchAllData()
  }, [])

  return (
    <div className='dashboard'>
      <TablePlaceholder title='Open' data={openWorkOrdersData} />
      <TablePlaceholder title='On Site' data={onSiteData} />
      <TablePlaceholder title='Incomplete' data={incompleteData} />
      <TablePlaceholder title='Missed Check In' data={missedCheckInData} />
      <TablePlaceholder title='Awaiting For Quote' data={awaitingQuoteData} />
      <TablePlaceholder title='Completed' data={completedData} />

      <DashboardChart open={openWorkOrdersData} onSite={onSiteData} imcomplete={incompleteData} missedCheckIn={missedCheckInData} awaitingQuote={awaitingQuoteData} completed={completedData} />
    </div>
  )
}

export default Dashboard
