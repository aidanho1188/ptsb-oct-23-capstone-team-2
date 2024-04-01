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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import * as React from 'react'
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

export function createWorkorder() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      {/* <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>New Work Order</TabsTrigger>
      </TabsList> */}
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>New Work Order</CardTitle>
            <CardDescription>Creating a new work order form</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='name'>Work Order Number</Label>
              <Input id='name' placeholder='#00000000' />
            </div>
            <Label htmlFor='name'>Call Date</Label>
            <br></br>
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
            <div className='space-y-1'>
              <Label htmlFor='username'>Priority</Label>
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
                <div className='space-y-1'>
                  <Label htmlFor='name'>Contact Information</Label>
                  <Input id='name' placeholder='Contact Info' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='framework'>Category</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Category1</SelectItem>
                      <SelectItem value='sveltekit'>Category2</SelectItem>
                      <SelectItem value='astro'>Category4</SelectItem>
                      <SelectItem value='nuxt'>Category5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='name'>Problem Code</Label>
                  <Input id='name' placeholder='Enter problem code' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='file'>Attach Image</Label>
                  <Input type='file' id='file' accept='image/*' />
                  <Input id='name' placeholder='Description' />
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default createWorkorder
