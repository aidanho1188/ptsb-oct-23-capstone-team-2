import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TablePlaceholder from '../../components/DashboardPlaceholder/TablePlaceholder'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import OpenWorkorders from '../../components/OpenWorkorders/OpenWorkorders'
import OnSiteStatus from '../../components/OnSiteStatus/OnSiteStatus'
import './dashboard.css'

function Dashboard() {
  const [totalWorkOrder, setTotalWorkOrder] = useState([])
  const [openStatus, setOpenStatus] = useState([])
  const [onSiteStatus, setOnSiteStatus] = useState([])

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/workorders/${endpoint}`)
      setWorkorders(response.data.value)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    const fetchAllData = async () => {
      const [openStatus, onSiteStatus] = await Promise.all([fetchData('open'), fetchData('onSite')])
      setWorkorders([...openStatus, ...onSiteStatus])
      setTotalWorkOrder([...openStatus, ...onSiteStatus])
    }

    fetchAllData()
    // on fetch complete, set the data
    // temp data
    // setTotalWorkOrder()
    // if new data is added, the chart will update
  }, [])
  return (
    <div className='dashboard'>
      <OpenWorkorders setTotalWorkOrder={setTotalWorkOrder} openStatus={openStatus} />
      <OnSiteStatus setTotalWorkOrder={setTotalWorkOrder} onSiteStatus={onSiteStatus} />
      {/* <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder />
      <TablePlaceholder /> */}
      <DashboardChart data={totalWorkOrder} />
    </div>
  )
}

export default Dashboard
