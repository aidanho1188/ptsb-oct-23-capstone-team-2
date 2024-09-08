import './WorkActivity.css'
import {Card, CardContent} from '@/components/ui/card'
import {Label} from '@/components/ui/label'
import {ScrollArea} from '@/components/ui/scroll-area'
import {useEffect, useState} from 'react'
import {Separator} from '@/components/ui/separator'
import {toast} from 'react-toastify'

export function WorkActivity({workorderActivity}) {
  function reformatTime(time) {
    if (!time) {
      return 'N/A'
    }
    let date = new Date(time)
    let formattedDate = date.toLocaleString()
    return formattedDate
  }

  if (!workorderActivity) {
    return (
      <ScrollArea className='activity-scroll rounded-md p-4'>
        <Card className='card-container rounded-md'>
          <div className='card'>
            <CardContent>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Time In</Label>
                  <div className='rounded p-2'>Time In</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Time Out</Label>
                  <div className='rounded p-2'>Time Out</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>User Id</Label>
                  <div className='rounded p-2'>User Id</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Store Id</Label>
                  <div className='rounded p-2'>Store Id</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Resolution Code</Label>
                  <div className='rounded p-2'>Resolution Code</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Techs Count</Label>
                  <div className='rounded p-2'>Techs Count</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </ScrollArea>
    )
  }

  if (workorderActivity.value.length === 0) {
    toast.error('No work order activity data found')
    return (
      <ScrollArea className='activity-scroll rounded-md p-4'>
        <Card className='card-container rounded-md'>
          <div className='card'>
            <CardContent>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Time In</Label>
                  <div className='rounded p-2'>No Data</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Time Out</Label>
                  <div className='rounded p-2'>No Data</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>User Id</Label>
                  <div className='rounded p-2'>No Data</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Store Id</Label>
                  <div className='rounded p-2'>No Data</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Resolution Code</Label>
                  <div className='rounded p-2'>No Data</div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Techs Count</Label>
                  <div className='rounded p-2'>No Data</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </ScrollArea>
    )
  }

  return (
    <ScrollArea className='activity-scroll rounded-md p-4'>
      {workorderActivity.value &&
        [...workorderActivity.value].reverse().map((activity, index) => (
          <Card className='card-container rounded-md'>
            <div className='card'>
              <CardContent>
                <div key={index} className='grid w-full items-center gap-4'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label>Time In</Label>
                    <div className='rounded p-2'>{reformatTime(activity.TimeIn)}</div>
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label>Time Out</Label>
                    <div className='rounded p-2'>{reformatTime(activity.TimeOut)}</div>
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label>User Id</Label>
                    <div className='rounded p-2'>{activity.User.Id}</div>
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label>Full Name</Label>
                    <div className='rounded p-2'>{activity.User.FullName}</div>
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label>Resolution Code</Label>
                    <div className='rounded p-2'>{activity.ResolutionCode}</div>
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label>Techs Count</Label>
                    <div className='rounded p-2'>{activity.TechsCount}</div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
    </ScrollArea>
  )
}

export default WorkActivity
