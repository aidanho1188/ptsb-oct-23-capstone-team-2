import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import './SearchID.css'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

function SearchID() {
  const form = useForm()

  return (
    <div className='search-form'>
      <div className='search-form-container'>
        <h4 className='search-form-title'>Work Order ID: </h4>
        <Form {...form} className='bg-gray-100 p-4 rounded-lg'>
          <form className='space-y-8'>
            <FormField
              control={form.control}
              name='Workorder ID'
              render={({ field }) => (
                <FormItem>
                  <div className='search-bar'>
                    <FormControl>
                      <Input
                        placeholder='Enter work order ID...'
                        {...field}
                        className='search-input'
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className='search-btn'>
        <Button type='search'>Search</Button>
      </div>
    </div>
  )
}

export default SearchID
