import * as React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'
import {Separator} from '@/components/ui/separator'
import Map from '../../components/Map/Map'
import './formResponse.css'

function FormResponse({form, formState, isLoading}) {
  function handleResponse(formState) {
    console.log('data:', formState)
    console.log('formState:', formState)
    console.log('formState.workorder:', formState.workorder)
    if (!formState.workorder.data.ErrorCode && typeof formState.workorder.data !== 'string') {
      return `<strong>Success</strong>: ${formState.success}`
    } else {
      return `<strong>Failed</strong>: ${formState.workorder.data.ErrorMessage || formState.workorder.data}`
    }
  }

  if (isLoading) {
    return (
      <Card className='form-response-layout'>
        <CardHeader>
          <CardTitle>
            <div className='form-loading-skeleton'>
              <Skeleton className='h-4' />
            </div>
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className='form-loading-skeleton'>
            <Skeleton className='h-4' />
            <Skeleton className='h-1' />
            <Skeleton className='h-1' />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!formState) {
    return (
      <Card className='form-response-layout'>
        <CardHeader>
          <CardTitle>Form Response</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <br />
          <p>Waiting for form submission...</p>
        </CardContent>
      </Card>
    )
  }
  const {userId, workorder, location} = formState

  return (
    <Card className='form-response-layout'>
      <CardHeader>
        <CardTitle dangerouslySetInnerHTML={{__html: handleResponse(formState)}} />
      </CardHeader>
      <Separator />
      <CardContent>
        <br />
        <p>
          <strong>User ID:</strong> {userId?.data || ''}
        </p>
        <p>
          <strong>Work Order ID:</strong> {workorder?.data?.Id || ''}
        </p>
        <p>
          <strong>Status:</strong> {workorder?.data?.Status?.Primary} {workorder?.data?.Status?.Extended ? `/${workorder.data.Status.Extended}` : '' || ''}
        </p>
        <p>
          <strong>Location ID:</strong> {workorder?.data?.LocationId || ''}
        </p>
        <p>
          <strong>Trade:</strong> {workorder?.data?.Trade || ''}
        </p>
        <p>
          <strong>Latitude:</strong> {location?.data?.Latitude || ''}
        </p>
        <p>
          <strong>Longitude:</strong> {location?.data?.Longitude || ''}
        </p>
      </CardContent>
      <Map lat={location?.data?.Latitude} lng={location?.data?.Longitude} />
    </Card>
  )
}

export default FormResponse
