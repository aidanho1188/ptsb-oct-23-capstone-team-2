import * as React from 'react'

import { Button } from '../../../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select'
import './workorder.css'

export function WorkOrder() {
  return (
    <Card className='w-[350px]'>
      {/* <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader> */}
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-8'>
            <div className='flex flex-col space-y-3.5'>
              <Label htmlFor='workorder'>Work Order ID </Label>
              <Input id='name' placeholder='Enter work order ID' />
            </div>
            <div className='flex flex-col space-y-3.5'>
              <Label htmlFor='status'>Status</Label>
              <Select>
                <SelectTrigger id='status'>
                  <SelectValue placeholder='Select Status' />
                </SelectTrigger>
                <SelectContent position='Select'>
                  <SelectItem value='completed'>Completed</SelectItem>
                  <SelectItem value='progress'>In Progress</SelectItem>
                  <SelectItem value='declined'>Declined</SelectItem>
                  <SelectItem value='hold'>On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline'>Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}

export default WorkOrder
