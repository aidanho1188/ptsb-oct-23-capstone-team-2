import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {Button} from '../ui/button'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '../ui/form'
import {Input} from '../ui/input'
import './GpsForm.css'

function GpsForm({btnName}) {
  const form = useForm()

  return (
    <div className='gps-layout'>
      <Form {...form}>
        <form className='space-y-8'>
          <FormField
            control={form.control}
            name='workTypeId'
            render={({field}) => (
              <FormItem>
                <FormLabel>Work Type ID</FormLabel>
                <FormControl>
                  <Input placeholder='Work Type ID' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='UserID'
            render={({field}) => (
              <FormItem>
                <FormLabel>User ID</FormLabel>
                <FormControl>
                  <Input placeholder='Enter User ID' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='techsCount'
            render={({field}) => (
              <FormItem>
                <FormLabel>Number of Technicians</FormLabel>
                <FormControl>
                  <Input placeholder='Number of Technicians Present' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Latitude'
            render={({field}) => (
              <FormItem>
                <FormLabel>Latitude</FormLabel>
                <FormControl>
                  <Input placeholder='Latitude' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Longitude'
            render={({field}) => (
              <FormItem>
                <FormLabel>Longitude</FormLabel>
                <FormControl>
                  <Input placeholder='Longitude' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br></br>
          <Button type='submit'>{btnName}</Button>
        </form>
      </Form>
    </div>
  )
}
export default GpsForm
