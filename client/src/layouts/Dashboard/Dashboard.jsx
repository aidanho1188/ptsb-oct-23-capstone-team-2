import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import OpenWorkorders from '../../components/OpenWorkorders/OpenWorkorders'
import OnSiteStatus from '../../components/OnSiteStatus/OnSiteStatus'
import CompletednWO from '../../components/CompletedWO/CompletedWO'
import './dashboard.css'
import IncompleteStatus from '../../components/IncompleteStatus/IncompleteStatus'
import AwaitingQuoteTable from '../../components/AwaitingQuoteTable/AwaitingQuoteTable'

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
        console.log(typeof response.data.value)
      } catch (error) {
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
      <TablePlaceholder title='Open' data={openWorkOrdersData} />
      <TablePlaceholder title='On Site' data={onSiteData} />
      <TablePlaceholder title='Incomplete' data={incompleteData} />
      <TablePlaceholder title='Missed Check In' data={missedCheckInData} />
      <TablePlaceholder title='Awaiting Quote' data={awaitingQuoteData} />
      <TablePlaceholder title='Complete' data={completedData} />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
