import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Skeleton} from '@/components/ui/skeleton'
import {ScrollArea} from '@/components/ui/scroll-area'
import {HoverCard, HoverCardTrigger, HoverCardContent} from '@/components/ui/hover-card'
import {useEffect, useState} from 'react'
import './dashboardCards.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PropType from 'prop-types'
// TODO: RENAME THIS COMPONENT
function DashboardCards({title, data}) {
  // eslint-disable-next-line no-unused-vars
  const [workorders, setWorkorders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const handleCopyToClipboard = (id, idType) => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        toast.success(`${idType} ID copied to clipboard`)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  useEffect(() => {
    setIsLoading(!data)

    if (data) {
      setWorkorders(data)
      setIsLoading(false)
    }
  }, [data])

  function reformatTime(time) {
    let date = new Date(time)
    let formattedDate = date.toLocaleString()
    return formattedDate
  }

  return (
    <div className='table'>
      <h2>{title}</h2>
      <Table className='table-container'>
        <ScrollArea className='scroll rounded-md border p-4'>
          <TableHeader>
            <TableRow className='table-headers'>
              <TableHead className='p-1'>Work Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location Id</TableHead>
              <TableHead className='text-right'>Trade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <div className='loading-skeleton'>
                    <Skeleton className='h-4' />
                    <Skeleton className='h-4' />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {Array.isArray(data) &&
                  data.map((workorder) => (
                    <TableRow key={workorder.Id}>
                      <HoverCard>
                        <HoverCardTrigger>
                          <TableCell className='ID w-[100px]' onClick={() => handleCopyToClipboard(workorder.Id, 'Work Order')}>
                            {workorder.Id}
                          </TableCell>
                        </HoverCardTrigger>
                        <HoverCardContent className='card-main-content'>
                          <p>
                            <strong>Work Order:</strong> {workorder.Id}
                          </p>
                          <p>
                            <strong>Full Status:</strong> {`${workorder.Status.Primary} ${workorder.Status.Extended ? '/ ' + workorder.Status.Extended : ''}`}
                          </p>
                          <p>
                            <strong>Call Date:</strong> {reformatTime(workorder.CallDate)}
                          </p>
                          <p>
                            <strong>Last Updated:</strong> {reformatTime(workorder.UpdatedDate)}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                      <TableCell>{workorder.Status.Extended || workorder.Status.Primary || 'None'}</TableCell>
                      <TableCell className='ID' onClick={() => handleCopyToClipboard(workorder.LocationId, 'Location')}>
                        {workorder.LocationId}
                      </TableCell>
                      <TableCell className='text-right'>{workorder.Trade}</TableCell>
                    </TableRow>
                  ))}
              </>
            )}
          </TableBody>
          {data && Array.isArray(data) && data.length === 0 ? <TableCaption>No data available</TableCaption> : null}
        </ScrollArea>
      </Table>
    </div>
  )
}

DashboardCards.propTypes = {
  title: PropType.string.isRequired,
  data: PropType.array.isRequired,
}
export default DashboardCards
