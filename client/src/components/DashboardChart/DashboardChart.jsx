import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import './dashboardChart.css'

function DashboardChart() {
  const data = [
    {
      name: 'Page A',
      'Check In': 4000,
      'Work Orders': 2400,
    },
    {
      name: 'Page B',
      'Check In': 3000,
      'Work Orders': 1398,
    },
    {
      name: 'Page C',
      'Check In': 2000,
      'Work Orders': 9800,
    },
    {
      name: 'Page D',
      'Check In': 2780,
      'Work Orders': 3908,
    },
    {
      name: 'Page E',
      'Check In': 1890,
      'Work Orders': 4800,
    },
    {
      name: 'Page F',
      'Check In': 2390,
      'Work Orders': 3800,
    },
    {
      name: 'Page G',
      'Check In': 3490,
      'Work Orders': 4300,
    },
  ]

  return (
    <div className='dashboard-chart'>
      <BarChart width={900} height={250} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Check In' fill='#00541A' />
        <Bar dataKey='Work Orders' fill='#007BFF' />
      </BarChart>
    </div>
  )
}

export default DashboardChart
