import './dashboardChart.css'
import {TrendingUp} from 'lucide-react'
import {Bar, BarChart, CartesianGrid, LabelList, XAxis} from 'recharts'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {ChartContainer, ChartTooltip, ChartTooltipContent} from '@/components/ui/chart'

export const description = 'A bar chart with a label'

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
}

const getCurrentWeekDates = () => {
  const currentDate = new Date()
  const dayOfWeek = currentDate.getDay()
  currentDate.setDate(currentDate.getDate() - 28)
  // current date - day of week + (if sunday then -6 else +1) = monday
  const diffToMonday = currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)

  const monday = new Date(currentDate)
  monday.setDate(diffToMonday)

  const sunday = new Date(currentDate)
  sunday.setDate(monday.getDate() + 6)

  const formatDate = (date) => {
    const options = {month: 'long', day: 'numeric', year: 'numeric'}
    return date.toLocaleDateString(undefined, options)
  }

  return {
    monday: formatDate(monday),
    sunday: formatDate(sunday),
  }
}

export function DashboardChart({isLoading, open, onSite, incomplete, missedCheckIn, awaitingQuote, completed}) {
  const openSize = open ? open.length : 0
  const onSiteSize = onSite ? onSite.length : 0
  const incompleteSize = incomplete ? incomplete.length : 0
  const missedCheckInSize = missedCheckIn ? missedCheckIn.length : 0
  const awaitingQuoteSize = awaitingQuote ? awaitingQuote.length : 0
  const completedSize = completed ? completed.length : 0

  const chartData = [
    {status: 'Open', total: openSize},
    {status: 'On Site', total: onSiteSize},
    {status: 'Incomplete', total: incompleteSize},
    {status: 'Approved Proposals', total: missedCheckInSize},
    {status: 'Waiting For Quote', total: awaitingQuoteSize},
    {status: 'Completed', total: completedSize},
  ]

  const {monday, sunday} = getCurrentWeekDates()
  const totalWorkOrders = openSize + onSiteSize + incompleteSize + missedCheckInSize + awaitingQuoteSize + completedSize
  return (
    <Card className='dashboard-chart-container'>
      <CardHeader>
        <CardTitle>Work Orders Chart</CardTitle>
        <CardDescription>{`${monday} - ${sunday}`}</CardDescription>
      </CardHeader>
      <CardContent className='dashboard-chart'>
        <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey='status' tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 20)} />
            <ChartTooltip cursor={false} className='tooltip' content={<ChartTooltipContent indicator={'dot'} />} />
            <Bar dataKey='total' fill='var(--secondary-color)' radius={8}>
              <LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Total work orders this week: {totalWorkOrders} <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>Showing the total number of work orders for 6 statuses from 4 weeks ago</div>
      </CardFooter>
    </Card>
  )
}

export default DashboardChart
