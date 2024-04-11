import './WorkActivity.css'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect, useState } from 'react'

export function WorkActivity({ workorderActivity }) {
  if (!workorderActivity) {
    return <div>Loading...</div>
  }

  return (
    <ScrollArea className='activity-scroll rounded-md p-4'>
      <Card className='card-container rounded-md'>
        <div className='card'>
          <CardContent>
            {workorderActivity.map((activity, index) => (
              <div key={index} className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Time In</Label>
                  <div className='rounded p-2'>{activity.timeIn}</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Time Out</Label>
                  <div className='rounded p-2'>{activity.timeOut}</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>User Id</Label>
                  <div className='rounded p-2'>{activity.userId}</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Store Id</Label>
                  <div className='rounded p-2'>{activity.storeId}</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Resolution Code</Label>
                  <div className='rounded p-2'>{activity.resolutionCode}</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Techs Count</Label>
                  <div className='rounded p-2'>{activity.techsCount}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </div>
      </Card>
    </ScrollArea>
  )
}

export default WorkActivity
