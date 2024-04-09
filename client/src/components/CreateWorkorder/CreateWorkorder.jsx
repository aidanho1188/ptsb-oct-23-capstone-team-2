// import * as React from 'react'
// import {Button} from '@/components/ui/button'
// import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
// import {Input} from '@/components/ui/input'
// import {Label} from '@/components/ui/label'
// import {Tabs, TabsContent} from '@/components/ui/tabs'
// import {CalendarIcon} from '@radix-ui/react-icons'
// import {format} from 'date-fns'
// import {Separator} from '@/components/ui/separator'

// import {cn} from '@/lib/utils'
// import {Calendar} from '@/components/ui/calendar'
// import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
// import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
// import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'

// export function CreateWorkorder() {
//   const [callDate, setCallDate] = React.useState(new Date())
//   const [scheduledDate, setScheduledDate] = React.useState(new Date())
//   const tradeNames = [
//     'TRAINING',
//     'DOORS',
//     'ELECTRIC',
//     'BUILDING EXTERIOR',
//     'GATE REPAIR',
//     'GLASS REPAIR',
//     'PLUMBING',
//     'CARPENTRY',
//     'SITECOMPLI',
//     'LANDSCAPE',
//     'SNOW REMOVAL',
//     'BACKFLOW PREVENTOR',
//     'DOOR-MANUAL',
//     'DELI-AUTO MEAT WRAPPER',
//     'DELI-SLICER',
//     'DELI-PIZZA EQUIPMENT',
//     'DELI-ROTISSERIE',
//     'COMPACTOR',
//     'BALER',
//     'DOOR-OVERHEAD DOOR',
//     'DOOR-ROLL DOWN FIRE',
//     'BAKERY/MISC-BAKERY OVEN',
//     'CONVEYOR',
//     'BAKERY/MISC-MISC FOOD EQUIP',
//     'DOOR-PHARMACY SHUTTER',
//     'BAKERY/MISC-BREAD SLICER',
//     'BAKERY/MISC-ICE MACHINE',
//     'DELI-KNIFE SHARPENING',
//     'BAKERY/MISC-THERMOGLAZER',
//     'DELI-FRYER',
//     'DELI-HOT CASE',
//     'DELI-MANUAL MEAT WRAPPER',
//     'DELI-MEAT GRINDER/MIXER',
//     'DELI-MEAT SAW',
//     'BAKERY/MISC-RACK/PAN WASHER',
//     'BAKERY/MISC-SCALE',
//     'DELI-ICE CREAM MACHINE',
//     'DOCK EQUIPMENT',
//     'DOOR-ROLL SEAL',
//     'DOOR-WON ACCORDION',
//     'ELECTRIC CARTS',
//     'ELECTRICAL',
//     'ELEVATORS',
//     'EMERGENCY LIGHTING',
//     'ESCALATORS',
//     'EXTERIOR LIGHTING',
//     'FENCING',
//     'FLAG POLES',
//     'FLOOR CLEANING EQUIPMENT',
//     'FLOORING REPAIR',
//     'FORKLIFT BATTERY',
//     'FORKLIFTS',
//     'GEN EQ-BELTED CHECKOUT',
//     'GEN EQ-COLOR MATCH SYSTEM',
//     'GEN EQ-FIRE EXTINGUISHER',
//     'GEN EQ-FISH TANK',
//     'GEN EQ-GENERAL EQUIPMENT',
//     'GEN EQ-GREASE HOOD',
//     'GEN EQ-PAINT DISPENSER',
//     'GEN EQ-PAINT SHAKER',
//     'GEN EQ-PNEUMATIC TUBES',
//     'GEN EQ-REPAIRABLE FIXTURE',
//     'GEN EQ-ROLLING RACK',
//     'GEN EQ-SHREDDER',
//     'GEN EQ-TRANSACTION DRAWER',
//     'GLASS/WINDOW',
//     'HANDYPERSON REPAIRS',
//     'HVAC',
//     'INTERIOR FINISHES',
//     'INTERIOR LIGHTING',
//     'LANDSCAPING',
//     'LANDSCAPING/IRRIGATION',
//     'MATERIAL HANDLING NONFORKLIFT',
//     'PAINTING',
//     'PARKING LOT REPAIR',
//     'PARKING LOT SWEEPING',
//     'POWER WASHING',
//     'ROOFING',
//     'SHOPPING CARTS',
//     'STRUCTURE & BLDG REPAIRS',
//     'TLE SUMP PUMP',
//     'TLE/ACC-AIR COMPRESSOR',
//     'TLE/ACC-LUBE EQUIP',
//     'TLE/ACC-MISC EQUIP',
//     'DOOR-VESTIBULE GATE',
//     'PORTERING',
//     'GREASE TRAP PUMPING',
//     'ELECTRICAL',
//     'JANITORIAL',
//     'GENERAL REPAIRS',
//     'GLASS',
//     'CARPET/FLOOR',
//     'FORKLIFT RENTAL',
//   ]

//   const categories = ['CAPEX', 'EMS', 'MAINTENANCE', 'PARTS ORDER', 'REPAIR', 'WARRANTY']
//   const priorities = ['P1 - 4 Hours', 'P2 - 8 Hours', 'P3 - 24 Hours', 'P4 - 72 Hours', 'P5 - 1 Week', 'Project/Schedule', 'NORMAL', 'EMERGENCY']
//   return (
//     <Tabs defaultValue='account' className='w-[400px]'>
//       <TabsContent value='account'>
//         <Card>
//           <CardContent className='space-y-2'>
//             <h2>Contact Information</h2>
//             <div className='contract-info'>
//               <Label htmlFor='store-id'>Store ID</Label>
//               <Input id='store-id' placeholder='Enter Store Id' />

//               <Label htmlFor='trade-name'>Trade Name</Label>
//               <Select id='trade-name'>
//                 <SelectTrigger>
//                   <SelectValue placeholder='Select' />
//                 </SelectTrigger>
//                 <SelectContent position='popper'>
//                   {tradeNames.map((tradeName, index) => (
//                     <SelectItem key={index} value={tradeName.toLowerCase()}>
//                       {tradeName}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Label htmlFor='provider-id'>Provider Id</Label>
//               <Input id='provider-id' placeholder='Enter Provider Id' />
//             </div>
//             <Separator />
//             <div className='category'>
//               <Label htmlFor='category'>Category</Label>
//               <Select id='category'>
//                 <SelectTrigger>
//                   <SelectValue placeholder='Select' />
//                 </SelectTrigger>
//                 <SelectContent position='popper'>
//                   {categories.map((category, index) => (
//                     <SelectItem key={index} value={category.toLowerCase()}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className='priority'>
//               <Label htmlFor='priority'>Priority</Label>
//               <Select id='priority'>
//                 <SelectTrigger>
//                   <SelectValue placeholder='Select' />
//                 </SelectTrigger>
//                 <SelectContent position='popper'>
//                   {priorities.map((priority, index) => (
//                     <SelectItem key={index} value={priority.toLowerCase()}>
//                       {priority}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor='nte'>Nte</Label>
//               <Input id='nte' placeholder='Enter Nte' />
//             </div>

//             <div className='space-y-1'>
//               <Label htmlFor='callDate'>Call Date</Label>
//               <br />
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button variant={'outline'} className={cn('w-[240px] justify-start text-left font-normal', !callDate && 'text-muted-foreground')}>
//                     <CalendarIcon className='mr-2 h-4 w-4' />
//                     {callDate ? format(callDate, 'PPP') : <span>Pick a date</span>}
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className='w-auto p-0' align='start'>
//                   <Calendar mode='single' selected={callDate} onSelect={setCallDate} initialFocus />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             <div className='space-y-1'>
//               <Label htmlFor='scheduled-date'>Scheduled Date</Label>
//               <br />
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button variant={'outline'} className={cn('w-[240px] justify-start text-left font-normal', !scheduledDate && 'text-muted-foreground')}>
//                     <CalendarIcon className='mr-2 h-4 w-4' />
//                     {scheduledDate ? format(scheduledDate, 'PPP') : <span>Pick a date</span>}
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className='w-auto p-0' align='start'>
//                   <Calendar mode='single' selected={scheduledDate} onSelect={setScheduledDate} initialFocus />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             <div className='description'>
//               <Label htmlFor='description'>Description</Label>
//               <Input id='description' placeholder='Enter Description' />
//             </div>

//             <Separator />
//             <div className='status'>
//               <h2>Status</h2>
//               <Label htmlFor='primary'>Primary Status</Label>
//               <Select id='primary'>
//                 <SelectTrigger>
//                   <SelectValue placeholder='Select' />
//                 </SelectTrigger>
//                 <SelectContent position='popper'>
//                   <SelectItem value='open'>Open</SelectItem>
//                   <SelectItem value='in-progress'>In Progress</SelectItem>
//                 </SelectContent>
//               </Select>

//               <Label htmlFor='extended'>Extended Status (optional)</Label>
//               <Select id='extended'>
//                 <SelectTrigger>
//                   <SelectValue placeholder='Select' />
//                 </SelectTrigger>
//                 <SelectContent position='popper'>
//                   <SelectItem value=' '>None</SelectItem>
//                   <SelectItem value='completed'>DISPATCH CONFIRMED</SelectItem>
//                   <SelectItem value='declined'>INCOMPLETE</SelectItem>
//                   <SelectItem value='in-progress'>ON SITE</SelectItem>
//                   <SelectItem value='on-hold'>PARTS ON ORDER</SelectItem>
//                   <SelectItem value='scheduled'>PROPOSAL APPROVED</SelectItem>
//                   <SelectItem value='submitted'>UNSATISFACTORY</SelectItem>
//                   <SelectItem value='submitted'>WAITING FOR QUOTE</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Separator />
//             <div className='space-y-1'>
//               <h2>Attachments (Optional)</h2>
//               <Label htmlFor='file'>Attach Image</Label>
//               <Input type='file' id='file' accept='image/*' />
//               <Input id='description' placeholder='Description' />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button type='submit'>Create New Work Order</Button>
//           </CardFooter>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   )
// }

// export default CreateWorkorder
