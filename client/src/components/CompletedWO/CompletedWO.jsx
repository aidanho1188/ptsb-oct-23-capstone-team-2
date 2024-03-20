import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {ScrollArea} from '@/components/ui/scroll-area'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './completedWO.css'

function CompletednWO() {
  const [workorders, setWorkorders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/workorders/completed')
        setWorkorders(response.data.value)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='table'>
      <h2>Completed</h2>
      <Table className='table-container'>
        <TableHeader>
          <ScrollArea>
            <TableRow className='table-headers'>
              <TableHead className='px-1' style={{width: '110px'}}>
                Work Order
              </TableHead>
              <TableHead className='px-1'>Status</TableHead>
              <TableHead className='px-1'>Store ID</TableHead>
              <TableHead className='px-1' style={{width: '80px'}}>
                Trade
              </TableHead>
            </TableRow>
          </ScrollArea>
        </TableHeader>
        <ScrollArea className='scroll rounded-md border p-4'>
          <TableCaption>A list of completed work orders.</TableCaption>
          <TableBody>
            {workorders.map((workorder) => (
              <TableRow key={workorder.Id} className='row'>
                <TableCell className='font-medium w-[100px]'>{workorder.Id}</TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell>{workorder.Status.Primary || 'None'}</TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell>{workorder.LocationId}</TableCell>
                <TableCell className='text-right'>{workorder.Trade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  )
}
export default CompletednWO
