import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { useState } from 'react'
import axios from 'axios'

import {Button} from '@/components/ui/button'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

import './workorderSearch.css'


function WorkorderSearch() {
  const form = useForm()
  const [workorderId, setWorkorderId] = useState(''); //state to store workorder id
  const [workorderInfo, setWorkorderInfo] = useState(null); //state to store workorder info

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/workorders/${workOrderId}`);
      setWorkorderInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching work order:', error);
    }
  }
      
    const handleInputChange = (event) => {
      setWorkorderId(event.target.value); //update workorderId state with input value
  }
  
    return (
      <div className='search-form-container'>
        <h4 className='search-form-title'>Work Order: </h4>
        <Form {...form} className='bg-gray-100 p-4 rounded-lg'>
          <form className='form-container space-y-8' onChange={handleSubmit}>
            <FormField
              control={form.control}
              name='workorderId'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Enter work order ID...' {...field} onChange={handleInputChange} className='search-input' />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <Button type='search' className='search-btn'>Search</Button>
          </form>
          </Form>
        </div>
  )
}

export default WorkorderSearch;
