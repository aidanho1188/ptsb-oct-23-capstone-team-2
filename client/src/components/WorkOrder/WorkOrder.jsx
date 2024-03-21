import * as React from 'react'

import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import './workorder.css'

export function WorkOrder() {
  return (
    <Card className='w-[350px]'>
      <div className='order-layout'>
        <CardContent>
          <form>
            <div className='work-order-layout'>
              <div className='flex flex-col space-y-3'>
                <Label htmlFor='workorder'>Work Order ID </Label>
                <div className='form-btn'>
                  <Input id='name' placeholder='Enter work order ID' />
                  <Button className='search-btn' variant='outline'>
                    Search
                  </Button>
                </div>
              </div>
              <div className='flex flex-col space-y-3'>
                <Label htmlFor='status'>Status</Label>
                <div className='form-btn'>
                  <Select>
                    <SelectTrigger id='status'>
                      <SelectValue placeholder='Select Status' />
                    </SelectTrigger>
                    <SelectContent position='Select'>
                      <SelectItem value='dispatched'>IN PROGRESS / DISPATCHED CONFIRMED</SelectItem>
                      <SelectItem value='incomplete'>IN PROGRESS / INCOMPLETE</SelectItem>
                      <SelectItem value='waiting'>IN PROGRESS / WAITING FOR APPROVAL</SelectItem>
                      <SelectItem value='quote'>IN PROGRESS / WAITING FOR QUOTE</SelectItem>
                      <SelectItem value='quote'>IN PROGRESS / WAITING FOR QUOTE</SelectItem>
                      <SelectItem value='charge'>COMPLETED / NO CHARGE</SelectItem>
                      <SelectItem value='confirmation'>COMPLETED / PENDING CONFIRMATION</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className='submit'>Submit</Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </div>
    </Card>
  )
}

export default WorkOrder
