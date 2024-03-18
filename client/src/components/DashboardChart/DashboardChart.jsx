import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import './dashboardChart.css'

function DashboardChart(props) {
  const data = props.data
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
