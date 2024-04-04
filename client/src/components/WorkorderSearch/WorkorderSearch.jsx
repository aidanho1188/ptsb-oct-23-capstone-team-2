import {useState} from 'react'
import axios from 'axios'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'

import './workorderSearch.css'

function WorkorderSearch({setWorkorderInfo, setIsLoading, handleSubmit, handleInputChange}) {
  return (
    <div className='search-form-container'>
      <h4 className='search-form-title'>Work Order: </h4>
      <form className='form-container space-y-8' onSubmit={handleSubmit}>
        <Input placeholder='Enter work order ID...' onChange={handleInputChange} className='search-input' required />
        <Button type='search' className='search-btn'>
          Search
        </Button>
      </form>
    </div>
  )
}

export default WorkorderSearch
