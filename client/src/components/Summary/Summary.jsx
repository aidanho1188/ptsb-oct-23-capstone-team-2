import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Skeleton} from '@/components/ui/skeleton'
import {ScrollArea} from '@/components/ui/scroll-area'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './summary.css'

function Summary({isResponseLoading}) {
  const [workorders, setWorkorders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
  }, [])

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
              <TableHead>Status</TableHead>
              <TableHead>Location Id</TableHead>
              {/*  combine these */}
              <TableHead>Trade</TableHead>
              <TableHead>Call Date</TableHead>
              <TableHead className='text-right'>Updated Time</TableHead>
            </TableRow>
          </TableHeader>
          {isLoading ? (
            <TableBody>
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
            </TableBody>
          ) : (
            <TableBody>
              {Array.isArray(workorders) &&
                workorders.map((workorder) => (
                  <TableRow key={workorder.workorderId}>
                    <TableCell className='w-[100px]'>{workorder.workorderId}</TableCell>
                    <TableCell>{workorder.preStatus || 'None'}</TableCell>
                    <TableCell>{workorder.newStatus || 'None'}</TableCell>
                    <TableCell>{workorder.locationId}</TableCell>
                    <TableCell>{workorder.trade}</TableCell>
                    <TableCell>{workorder.callDate}</TableCell>
                    <TableCell className='text-right'>{workorder.updatedTime}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </ScrollArea>
      </Table>
    </div>
  )
}

export default Summary
