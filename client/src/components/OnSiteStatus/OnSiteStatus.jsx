import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {ScrollArea} from '@/components/ui/scroll-area'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './onsitestatus.css'

function OnSiteStatus() {
  const [workorders, setWorkorders] = useState([])

  useEffect(() => {
    // TODO: remove this if the fetch in Dashboard.jsx is working
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/workorders/onSite')
        setWorkorders(response.data.value)
        console.log(response.data.value)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // fetchData()
  }, [])

  return (
    <div className='table'>
      <h2>On Site</h2>
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
          <TableCaption>A list of on site workorders.</TableCaption>
          <TableBody>
            {workorders.map((workorder) => (
              <TableRow key={workorder.Id} className='row'>
                <TableCell className='font-medium w-[100px]'>{workorder.Id}</TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell>{workorder.Status.Extended || 'None'}</TableCell>
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

export default OnSiteStatus
