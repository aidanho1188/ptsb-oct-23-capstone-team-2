import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import './dashboardChart.css'
import {useEffect} from 'react'

function DashboardChart() {
  let data = [
    {
      name: 'Open',
      'Work Orders': 15,
    },
    {
      name: 'On Site',
      'Work Orders': 5,
    },
    {
      name: 'In Progress',
      'Work Orders': 8,
    },
    {
      name: 'Completed',
      'Work Orders': 12,
    },
    {
      name: 'Incomplete',
      'Work Orders': 3,
    },
    {
      name: 'Awaiting Quote',
      'Work Orders': 2,
    },
  ]

  return (
    <div className='dashboard-chart'>
      <BarChart width={900} height={250} data={data}>
        <CartesianGrid strokeDasharray='3 3' fill='#00541A' />
        <XAxis dataKey='name' stroke='white' />
        <YAxis stroke='white' />
        <Tooltip />
        <Legend />
        <Bar dataKey='Work Orders' fill='#61CE70' />
      </BarChart>
    </div>
  )
}

export default DashboardChart
