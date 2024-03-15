import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {ScrollArea} from '@/components/ui/scroll-area'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './tablePlaceholder.css'

function TablePlaceholder(prop) {
  const [workorders, setWorkorders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/workorders/open')
        setWorkorders(response.data.value)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='table'>
      <h2>Work orders</h2>
      <Table className='table-container'>
        <TableHeader>
          <ScrollArea>
            <TableRow className='table-headers'>
              <TableHead className='table-headers'>Workorder</TableHead>
              <TableHead className='table-headers'>Status</TableHead>
              <TableHead className='table-headers'>Subscriber</TableHead>
              <TableHead className='table-headers'>Trade</TableHead>
            </TableRow>
          </ScrollArea>
        </TableHeader>
        <ScrollArea className='scroll'>
          <TableCaption>A list of open workorders.</TableCaption>
          <TableBody>
            {workorders.map((workorder) => (
              <TableRow key={workorder.Id} className='row'>
                <TableCell className='font-medium w-[100px]'>{workorder.Id}</TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell>{workorder.Status.Primary || 'None'}</TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell className='temp-block'></TableCell>
                <TableCell>{workorder.Caller}</TableCell>
                <TableCell className='text-right'>{workorder.Trade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  )
}

export default TablePlaceholder
