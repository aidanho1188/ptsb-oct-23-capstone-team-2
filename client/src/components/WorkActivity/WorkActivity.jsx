import './WorkActivity.css'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'


export function WorkActivity() {
  return (
    <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
      <Card className='card-container'>
        <div className='card'>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Time In</Label>
                  <Input id='name' placeholder='Time Checked In' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Time Out</Label>
                  <Input id='name' placeholder='Time Checked Out' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>User Id</Label>
                  <Input id='name' placeholder='User Name' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Location Id</Label>
                  <Input id='name' placeholder='GPS location' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Resolution Code</Label>
                  <Input id='name' placeholder='Res Code' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Techs Count</Label>
                  <Input id='name' placeholder='Number of Techs Present' />
                </div>
              </div>
            </form>
          </CardContent>
        </div>
      </Card>
    </ScrollArea>
  )
}

export default WorkActivity
