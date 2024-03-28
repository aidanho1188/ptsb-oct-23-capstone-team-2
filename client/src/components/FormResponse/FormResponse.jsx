import * as React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'
import {Separator} from '@/components/ui/separator'
import './formResponse.css'

function FormResponse({form, formState, isLoading}) {
  function handleResponse(formState) {
    console.log('data:', formState)
    console.log('formState:', formState)
    console.log('formState.workorder:', formState.workorder)
    if (!formState.workorder.data.ErrorCode) {
      return `<strong>Success</strong>: Work Order found!`
    } else {
      return `<strong>Failed</strong>: ${formState.workorder.data.ErrorMessage}`
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

  return (
    <Card className='form-response-layout'>
      <CardHeader>
        <CardTitle dangerouslySetInnerHTML={{__html: handleResponse(formState)}} />
      </CardHeader>
      <Separator />
      <CardContent>
        <br />
        {/* TODO: shorten these dot notation! */}
        <p>
          <strong>User ID:</strong> {(formState.userId && formState.userId.data) || ''}
        </p>
        <p>
          <strong>Work Order Id:</strong> {(formState.workorder && formState.workorder.data && formState.workorder.data.Id) || ''}
        </p>
        <p>
          <strong>Status:</strong> {(formState.workorder && formState.workorder.data.Status && `${formState.workorder.data.Status.Primary} ${formState.workorder.data.Status.Extended ? '/' + formState.workorder.data.Status.Extended : ''}`) || ''}
        </p>
        <p>
          <strong>Location ID:</strong> {(formState.workorder && formState.workorder.data.LocationId) || ''}
        </p>
        <p>
          <strong>Trade:</strong> {(formState.workorder && formState.workorder.data.Trade) || ''}
        </p>
        <p>
          <strong>Latitude:</strong> {(formState.location && formState.location.data && formState.location.data.Latitude) || ''}
        </p>
        <p>
          <strong>Longitude:</strong> {(formState.location && formState.location.data && formState.location.data.Longitude) || ''}
        </p>
      </CardContent>
    </Card>
  )
}

export default FormResponse
