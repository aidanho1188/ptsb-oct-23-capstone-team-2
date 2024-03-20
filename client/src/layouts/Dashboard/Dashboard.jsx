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
  return (
    <div className='dashboard'>
      <OpenWorkorders />
      <OnSiteStatus />
      <IncompleteStatus />
      <TablePlaceholder />
      <AwaitingQuoteTable />
      <CompletednWO />

      <DashboardChart />
    </div>
  )
}

export default Dashboard
