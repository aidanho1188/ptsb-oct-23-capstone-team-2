import {Button} from '@/components/ui/button'
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useState} from 'react'
import './SearchID.css'

function SearchID({handleSearch}) {
  const [workOrderId, setWorkOrderId] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(workOrderId)
  }

  return (
    <div className='search-form'>
      <div className='search-form-container'>
        <h4 className='search-form-title'>Work Order ID: </h4>
        <form className='search-activity space-y-8' onSubmit={handleSubmit}>
          <div className='search-bar'>
            <Input placeholder='Enter work order ID...' value={workOrderId} onChange={(e) => setWorkOrderId(e.target.value)} className='search-input' />
          </div>
          <div className='search-btn'>
            <Button type='submit'>Search</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchID
