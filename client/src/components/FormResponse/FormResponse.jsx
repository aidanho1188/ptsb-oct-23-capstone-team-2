import * as React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'
import {Separator} from '@/components/ui/separator'

import './formResponse.css'

function FormResponse({form, formState, isLoading}) {
  function handleResponse(formState) {

    console.log("data:", formState)
    if (form === 'updateStatus') {
      if (formState.statusText === 'OK') {
        if (formState.data.result === '') {
          return 'Nothing changed.'
        } else if (formState.data.status) {
          return formState.data.message
        } else {
          return formState.data.result
        }
      } else {
        return formState.data.message
      }
    } else if (form === 'workOrderSearch') { 
      if (formState.statusText === 'OK') {
        return "Work Order found!"
      } else {
        return "Work Order not found!"
      }
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
        <p>
          <strong>Work Order Id:</strong> {formState.data.Id}
        </p>
        <p>
          <strong>Status:</strong> {formState.data.Status.Extended || "None" }
        </p>
        <p>
          <strong>Location ID:</strong> {formState.data.LocationId}
        </p>
        <p>
          <strong>Trade:</strong> {formState.data.Trade}
        </p>
      </CardContent>
    </Card>
  )
}

export default FormResponse
