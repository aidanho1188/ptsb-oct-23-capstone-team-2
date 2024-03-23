import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Skeleton} from '@/components/ui/skeleton'
import {ScrollArea} from '@/components/ui/scroll-area'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './summary.css'

// TODO: RENAME THIS COMPONENT
function Summary({title, data}) {
  const [workorders, setWorkorders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (data) {
      setWorkorders(data)
      setIsLoading(false)
    }
  }, [data])

  return (
    <div className='summary-layout'>
      <h2>Recent Updates</h2>
      <Table className='summary-table-container'>
        <ScrollArea className='summary-scroll rounded-md border p-4'>
          <TableHeader>
            <TableRow className='table-headers'>
              <TableHead className='w-[100px]'>Work Order</TableHead>
              <TableHead>Previous Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location Id</TableHead>
              <TableHead>Trade</TableHead>
              <TableHead>Caller Date</TableHead>
              <TableHead className='text-right'>Update Date</TableHead>
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
              {Array.isArray(data) &&
                data.map((workorder) => (
                  <TableRow key={workorder.Id}>
                    <TableCell className='w-[100px]'>{workorder.Id}</TableCell>
                    <TableCell>{workorder.Status.Extended || workorder.Status.Primary || 'None'}</TableCell>
                    <TableCell>{workorder.LocationId}</TableCell>
                    <TableCell className='text-right'>{workorder.Trade}</TableCell>
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
