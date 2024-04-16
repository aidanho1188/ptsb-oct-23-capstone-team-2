import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DashboardCards from '../../components/DashboardCards/DashboardCards'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import {toast} from 'react-toastify'

import './dashboard.css'

function Dashboard() {
  const [openWorkOrdersData, setOpenWorkOrdersData] = useState()
  const [onSiteData, setOnSiteData] = useState()
  const [incompleteData, setIncompleteData] = useState()
  const [missedCheckInData, setMissedCheckInData] = useState()
  const [awaitingQuoteData, setAwaitingQuoteData] = useState()
  const [completedData, setCompletedData] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let hasShownError = false
    const fetchData = async (url, setData) => {
      try {
        const response = await axios.get(url)
        setData(response.data.value)
      } catch (error) {
        if (!hasShownError) {
          toast.error(`Error fetching data: ${error.message}`, {autoClose: 50000})
          hasShownError = true
        }
        setHasError(true)
      }
    }

    async function fetchAllData() {
      try {
        await Promise.all([
          fetchData('http://localhost:8080/api/workorders/open', setOpenWorkOrdersData),
          fetchData('http://localhost:8080/api/workorders/onSite', setOnSiteData),
          fetchData('http://localhost:8080/api/workorders/incomplete', setIncompleteData),
          fetchData('http://localhost:8080/api/workorders/Proposal', setMissedCheckInData),
          fetchData('http://localhost:8080/api/workorders/awaitingQuote', setAwaitingQuoteData),
          fetchData('http://localhost:8080/api/workorders/completed', setCompletedData),
        ])
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchAllData()
  }, [])

  return (
    <div className='dashboard'>
      <DashboardCards title='Open' data={openWorkOrdersData} />
      <DashboardCards title='On Site' data={onSiteData} />
      <DashboardCards title='Incomplete' data={incompleteData} />
      <DashboardCards title='Approved Proposals' data={missedCheckInData} />
      <DashboardCards title='Awaiting For Quote' data={awaitingQuoteData} />
      <DashboardCards title='Completed' data={completedData} />

      <DashboardChart open={openWorkOrdersData} onSite={onSiteData} incomplete={incompleteData} missedCheckIn={missedCheckInData} awaitingQuote={awaitingQuoteData} completed={completedData} />
    </div>
  )
}

export default Dashboard
