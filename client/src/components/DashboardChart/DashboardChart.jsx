import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import './dashboardChart.css'
import {useEffect} from 'react'

function DashboardChart({isLoading, open, onSite, incomplete, missedCheckIn, awaitingQuote, completed}) {
  let data = [
    {
      name: 'Open',
      'Work Order': open ? open.length : 0,
      // fill: '#5FC6FF',
    },
    {
      name: 'On Site',
      'Work Order': onSite ? onSite.length : 0,
      // fill: '#000080',
    },
    {
      name: 'Incomplete',
      'Work Order': incomplete ? incomplete.length : 0,
      // fill: '#8B0000',
    },
    {
      name: 'Approved Proposals',
      'Work Order': missedCheckIn ? missedCheckIn.length : 0,
      // fill: '#8B0000',
    },
    {
      name: 'Waiting For Quote',
      'Work Order': awaitingQuote ? awaitingQuote.length : 0,
      // fill: '#F48FB1',
    },
    {
      name: 'Completed',
      'Work Order': completed ? completed.length : 0,
      // fill: '#800080',
    },
  ]

  return (
    <BarChart width={1500} height={450} data={data}>
      <CartesianGrid strokeDasharray='1 2' fill='#00541A' />
      <XAxis dataKey='name' stroke='white' />
      <YAxis
        stroke='white'
        label={{
          value: 'No. Work Orders',
          angle: -90,
          position: 'insideBottomLeft',
          fill: 'white',
          offset: 15,
          fontSize: 18,
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey='Work Orders' stackId='a' fill='#61CE70' radius={[10, 10, 0, 0]} />
      {/* <Bar
        dataKey="Awaiting Quote"
        stackId="a"
        fill="#F48FB1"
        radius={[10, 10, 0, 0]}
      /> */}
      {/* <Bar
        dataKey="On Site"
        stackId="a"
        fill="#000080"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="In Progress"
        stackId="a"
        fill="#8B0000"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="Incomplete"
        stackId="a"
        fill="#FFD700"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="Completed"
        stackId="a"
        fill="#800080"
        radius={[10, 10, 0, 0]}
      /> */}
    </BarChart>
  )
}

export default DashboardChart
