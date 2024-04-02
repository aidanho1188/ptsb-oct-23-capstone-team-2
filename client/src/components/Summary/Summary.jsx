import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Skeleton} from '@/components/ui/skeleton'
import {ScrollArea} from '@/components/ui/scroll-area'
import {HoverCard, HoverCardTrigger, HoverCardContent} from '@/components/ui/hover-card'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './summary.css'

function Summary({isResponseLoading}) {
  const [workorders, setWorkorders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function reformatTime(time) {
    let date = new Date(time)
    let formattedDate = date.toLocaleString()
    return formattedDate
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/workorders/recents')
        setWorkorders(response.data)
        setIsLoading(false)
        console.log('Summary:', response.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    fetchData()
  }, [isResponseLoading])

  return (
    <div className='summary-layout'>
      <h2>Recent Updates</h2>
      <Table className='summary-table-container'>
        <ScrollArea className='summary-scroll rounded-md border p-4'>
          <TableHeader>
            {/* add card hover */}
            <TableRow className='table-headers'>
              <TableHead className='w-[100px]'>Work Order</TableHead>
              <TableHead>Previous Status</TableHead>
              <TableHead>Current Status</TableHead>
              <TableHead>Location ID</TableHead>
              <TableHead className='text-right'>Updated Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7}>
                  <div className='summary-loading-skeleton'>
                    <Skeleton className='space-y-3 h-4 rounded-xl' />
                    <Skeleton className='h-4 rounded-xl' />
                    <Skeleton className='h-4 rounded-xl' />
                    <Skeleton className='h-4 rounded-xl' />
                    <Skeleton className='h-4 rounded-xl' />
                    <Skeleton className='h-4 rounded-xl' />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {Array.isArray(workorders) &&
                  workorders.map((workorder) => (
                    <TableRow key={workorder.workorderId}>
                      <HoverCard>
                        <HoverCardTrigger>
                          <TableCell className='w-[100px]'>{workorder.workorderId}</TableCell>
                        </HoverCardTrigger>
                        <HoverCardContent className='card-main-content'>
                          <div>
                            <p>
                              <strong>Work Order:</strong> {workorder.workorderId}
                            </p>
                            <p>
                              <strong>Call Date:</strong> {reformatTime(workorder.callDate) || 'Invalid Date'}
                            </p>
                            <p>
                              <strong>Trade:</strong> {workorder.trade}
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                      <TableCell>{workorder.preStatus || 'None'}</TableCell>
                      <TableCell>{workorder.newStatus || 'None'}</TableCell>
                      <TableCell>{workorder.locationId}</TableCell>
                      <TableCell className='text-right'>{reformatTime(workorder.updatedTime)}</TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  )
}

export default Summary
