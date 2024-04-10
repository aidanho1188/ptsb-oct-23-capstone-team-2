import * as React from 'react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {CalendarIcon} from '@radix-ui/react-icons'
import {format} from 'date-fns'
import {Separator} from '@/components/ui/separator'
import {toast} from 'react-toastify'
import {cn} from '@/lib/utils'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import axios from 'axios'

export function CreateWorkorder() {
  const [callDate, setCallDate] = React.useState(new Date())
  const [scheduledDate, setScheduledDate] = React.useState(new Date())
  const [tradeName, setTradeName] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [priority, setPriority] = React.useState('')
  const [primaryStatus, setPrimaryStatus] = React.useState('')
  const [extendedStatus, setExtendedStatus] = React.useState('')
  const handleTradeNameChange = (value) => {
    setTradeName(value)
  }

  const handleCategoryChange = (value) => {
    setCategory(value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  const handlePrimaryStatusChange = (value) => {
    setPrimaryStatus(value)
  }

  const handleExtendedStatusChange = (value) => {
    setExtendedStatus(value)
  }

  const tradeNames = [
    'TRAINING',
    'DOORS',
    'ELECTRIC',
    'BUILDING EXTERIOR',
    'GATE REPAIR',
    'GLASS REPAIR',
    'PLUMBING',
    'CARPENTRY',
    'SITECOMPLI',
    'LANDSCAPE',
    'SNOW REMOVAL',
    'BACKFLOW PREVENTOR',
    'DOOR-MANUAL',
    'DELI-AUTO MEAT WRAPPER',
    'DELI-SLICER',
    'DELI-PIZZA EQUIPMENT',
    'DELI-ROTISSERIE',
    'COMPACTOR',
    'BALER',
    'DOOR-OVERHEAD DOOR',
    'DOOR-ROLL DOWN FIRE',
    'BAKERY/MISC-BAKERY OVEN',
    'CONVEYOR',
    'BAKERY/MISC-MISC FOOD EQUIP',
    'DOOR-PHARMACY SHUTTER',
    'BAKERY/MISC-BREAD SLICER',
    'BAKERY/MISC-ICE MACHINE',
    'DELI-KNIFE SHARPENING',
    'BAKERY/MISC-THERMOGLAZER',
    'DELI-FRYER',
    'DELI-HOT CASE',
    'DELI-MANUAL MEAT WRAPPER',
    'DELI-MEAT GRINDER/MIXER',
    'DELI-MEAT SAW',
    'BAKERY/MISC-RACK/PAN WASHER',
    'BAKERY/MISC-SCALE',
    'DELI-ICE CREAM MACHINE',
    'DOCK EQUIPMENT',
    'DOOR-ROLL SEAL',
    'DOOR-WON ACCORDION',
    'ELECTRIC CARTS',
    'ELECTRICAL',
    'ELEVATORS',
    'EMERGENCY LIGHTING',
    'ESCALATORS',
    'EXTERIOR LIGHTING',
    'FENCING',
    'FLAG POLES',
    'FLOOR CLEANING EQUIPMENT',
    'FLOORING REPAIR',
    'FORKLIFT BATTERY',
    'FORKLIFTS',
    'GEN EQ-BELTED CHECKOUT',
    'GEN EQ-COLOR MATCH SYSTEM',
    'GEN EQ-FIRE EXTINGUISHER',
    'GEN EQ-FISH TANK',
    'GEN EQ-GENERAL EQUIPMENT',
    'GEN EQ-GREASE HOOD',
    'GEN EQ-PAINT DISPENSER',
    'GEN EQ-PAINT SHAKER',
    'GEN EQ-PNEUMATIC TUBES',
    'GEN EQ-REPAIRABLE FIXTURE',
    'GEN EQ-ROLLING RACK',
    'GEN EQ-SHREDDER',
    'GEN EQ-TRANSACTION DRAWER',
    'GLASS/WINDOW',
    'HANDYPERSON REPAIRS',
    'HVAC',
    'INTERIOR FINISHES',
    'INTERIOR LIGHTING',
    'LANDSCAPING',
    'LANDSCAPING/IRRIGATION',
    'MATERIAL HANDLING NONFORKLIFT',
    'PAINTING',
    'PARKING LOT REPAIR',
    'PARKING LOT SWEEPING',
    'POWER WASHING',
    'ROOFING',
    'SHOPPING CARTS',
    'STRUCTURE & BLDG REPAIRS',
    'TLE SUMP PUMP',
    'TLE/ACC-AIR COMPRESSOR',
    'TLE/ACC-LUBE EQUIP',
    'TLE/ACC-MISC EQUIP',
    'DOOR-VESTIBULE GATE',
    'PORTERING',
    'GREASE TRAP PUMPING',
    'ELECTRICAL',
    'JANITORIAL',
    'GENERAL REPAIRS',
    'GLASS',
    'CARPET/FLOOR',
    'FORKLIFT RENTAL',
  ]

  const categories = ['CAPEX', 'EMS', 'MAINTENANCE', 'PARTS ORDER', 'REPAIR', 'WARRANTY']
  const priorities = ['P1 - 4 Hours', 'P2 - 8 Hours', 'P3 - 24 Hours', 'P4 - 72 Hours', 'P5 - 1 Week', 'Project/Schedule', 'NORMAL', 'EMERGENCY']

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('callDate', callDate)
    console.log('scheduledDate', scheduledDate)
    console.log('tradeName', tradeName)
    console.log('category', category)
    console.log('priority', priority)
    console.log('primaryStatus', primaryStatus)
    console.log('extendedStatus', extendedStatus)
    console.log('Nte', event.target['nte'].value)
    console.log('Description', event.target['description'].value)
    console.log('Store ID', event.target['store-id'].value)
    try {
      // Call the API to create a new work order
      const response = await axios.post('http://localhost:8080/api/workorders/create', {
        CallDate: callDate,
        ScheduledDate: scheduledDate,
        TradeName: tradeName,
        Category: category,
        Priority: priority,
        Primary: primaryStatus,
        Extended: extendedStatus,
        ProviderId: event.target['provider-id'].value,
        Nte: event.target['nte'].value,
        Description: event.target['description'].value,
        StoreId: event.target['store-id'].value,
      })
      const workorderId = response.data.workOrderId
      toast.success(`Work order created successfully! ID: ${workorderId}`, {autoClose: false})
    } catch (error) {
      toast.error(`Error creating work order: ${error.message}`, {autoClose: 10000})
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Information</h2>
      <div className='contract-info'>
        <Label htmlFor='store-id'>Store ID</Label>
        <Input id='store-id' placeholder='Enter Store Id' />

        <Label htmlFor='trade-name'>Trade Name</Label>
        <Select id='trade-name' onValueChange={handleTradeNameChange}>
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            {tradeNames.map((tradeName, index) => (
              <SelectItem key={index} value={tradeName.toLowerCase()}>
                {tradeName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Label htmlFor='provider-id'>Provider Id</Label>
        <Input id='provider-id' placeholder='Enter Provider Id' />
      </div>

      <div className='category'>
        <Label htmlFor='category'>Category</Label>
        <Select id='category' onValueChange={handleCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            {categories.map((category, index) => (
              <SelectItem key={index} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='priority'>
        <Label htmlFor='priority'>Priority</Label>
        <Select id='priority' onValueChange={handlePriorityChange}>
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            {priorities.map((priority, index) => (
              <SelectItem key={index} value={priority.toLowerCase()}>
                {priority}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor='nte'>Nte</Label>
        <Input id='nte' placeholder='Enter Nte' />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='callDate'>Call Date</Label>
        <br />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'} className={cn('w-[240px] justify-start text-left font-normal', !callDate && 'text-muted-foreground')}>
              <CalendarIcon className='mr-2 h-4 w-4' />
              {callDate ? format(callDate, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar mode='single' selected={callDate} onSelect={setCallDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className='space-y-1'>
        <Label htmlFor='scheduled-date'>Scheduled Date</Label>
        <br />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'} className={cn('w-[240px] justify-start text-left font-normal', !scheduledDate && 'text-muted-foreground')}>
              <CalendarIcon className='mr-2 h-4 w-4' />
              {scheduledDate ? format(scheduledDate, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar mode='single' selected={scheduledDate} onSelect={setScheduledDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className='description'>
        <Label htmlFor='description'>Description</Label>
        <Input id='description' placeholder='Enter Description' />
      </div>

      <div className='status'>
        <h2>Status</h2>
        <Label htmlFor='primary'>Primary Status</Label>
        <Select id='primary' onValueChange={handlePrimaryStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='open'>Open</SelectItem>
            <SelectItem value='In Progress'>In Progress</SelectItem>
          </SelectContent>
        </Select>

        <Label htmlFor='extended'>Extended Status (optional)</Label>
        <Select id='extended' onValueChange={handleExtendedStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value=' '>None</SelectItem>
            <SelectItem value='DISPATCH CONFIRMED'>DISPATCH CONFIRMED</SelectItem>
            <SelectItem value='INCOMPLETE'>INCOMPLETE</SelectItem>
            <SelectItem value='ON SITE'>ON SITE</SelectItem>
            <SelectItem value='PARTS ON ORDER'>PARTS ON ORDER</SelectItem>
            <SelectItem value='PROPOSAL APPROVED'>PROPOSAL APPROVED</SelectItem>
            <SelectItem value='UNSATISFACTORY'>UNSATISFACTORY</SelectItem>
            <SelectItem value='WAITING FOR QUOTE'>WAITING FOR QUOTE</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <Separator /> */}
      {/* <div className='space-y-1'>
        <h2>Attachments (Optional)</h2>
        <Label htmlFor='file'>Attach Image</Label>
        <Input type='file' id='file' accept='image/*' />
        <Input id='description' placeholder='Description' />
      </div> */}

      <Button type='submit'>Create New Work Order</Button>
    </form>
  )
}

export default CreateWorkorder
