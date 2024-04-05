import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts'
import './dashboardChart.css'
import {useEffect} from 'react'

function DashboardChart({isLoading, open, onSite, incomplete, missedCheckIn, awaitingQuote, completed}) {
  let data = [
    {
      name: 'Open',
      Open: open ? open.length : 0,
      fill: '#5FC6FF',
    },
    {
      name: 'Awaiting Quote',
      'Awaiting Quote': awaitingQuote ? awaitingQuote.length : 0,
      fill: '#000000',
    },
    {
      name: 'On Site',
      'On Site': onSite ? onSite.length : 0,
      fill: '#000080',
    },
    {
      name: 'In Progress',
      'In Progress': onSite ? onSite.length : 0,
      fill: '#8B0000',
    },
    {
      name: 'Incomplete',
      Incomplete: incomplete ? incomplete.length : 0,
      fill: '#FFD700',
    },
    {
      name: 'Completed',
      Completed: completed ? completed.length : 0,
      fill: '#800080',
    },
  ]

  return (
    <BarChart width={1500} height={450} data={data}>
      <CartesianGrid strokeDasharray='1 1' fill='#4f4f4f' />
      <XAxis dataKey='name' stroke='white' />
      <YAxis
        stroke='white'
        label={{
          value: 'No. Work Orders',
          angle: -90,
          position: 'insideBottomLeft',
          fill: 'black',
          offset: 15,
          fontSize: 18,
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey='Open' stackId='a' fill='#5FC6FF' />
      <Bar dataKey='Awaiting Quote' stackId='a' fill='#000000' />
      <Bar dataKey='On Site' stackId='a' fill='#000080' />
      <Bar dataKey='In Progress' stackId='a' fill='#8B0000' />
      <Bar dataKey='Incomplete' stackId='a' fill='#FFD700' />
      <Bar dataKey='Completed' stackId='a' fill='#800080' />
    </BarChart>
  )
}

export default DashboardChart
