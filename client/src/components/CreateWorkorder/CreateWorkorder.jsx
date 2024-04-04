import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function CreateWorkorder() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>New Work Order</CardTitle>
            <CardDescription>Creating a new work order form</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='workOrderNumber'>Work Order Number</Label>
              <Input id='workOrderNumber' placeholder='#00000000' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='callDate'>Call Date</Label>
              <br />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[240px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground',
                    )}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className='space-y-1'>
              <Label htmlFor='priority'>Priority</Label>
              <RadioGroup defaultValue='comfortable'>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='default' id='r1' />
                  <Label htmlFor='r1'>Low Priority</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='comfortable' id='r2' />
                  <Label htmlFor='r2'>Standard Priority</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='compact' id='r3' />
                  <Label htmlFor='r3'>High Priority</Label>
                </div>
              </RadioGroup>

            </div>
            <div className='space-y-1'>
              <Label htmlFor='contactInfo'>Contact Information</Label>
              <Input id='contactInfo' placeholder='Contact Info' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='category'>Category</Label>
              <Select id='category'>
                <SelectTrigger>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='category1'>Category1</SelectItem>
                  <SelectItem value='category2'>Category2</SelectItem>
                  <SelectItem value='category3'>Category3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-1'>
              <Label htmlFor='problemCode'>Problem Code</Label>
              <Input id='problemCode' placeholder='Enter problem code' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='file'>Attach Image</Label>
              <Input type='file' id='file' accept='image/*' />
              <Input id='description' placeholder='Description' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create New Work Order</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default CreateWorkorder
