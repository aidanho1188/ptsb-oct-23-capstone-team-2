import * as React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'
import {Separator} from '@/components/ui/separator'
import './formResponse.css'

function FormResponse({formState, isLoading}) {
  function handleResponse(formState) {
    console.log('data:', formState)
    if (!formState.data.ErrorCode) {
      return `<strong>Success</strong>: ${formState.data.result}`
    } else {
      return `<strong>Failed</strong>: ${formState.data.ErrorMessage}`
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
          <strong>Work Order Id:</strong> {formState.data.id}
        </p>
      </CardContent>
    </Card>
  )
}

export default FormResponse
