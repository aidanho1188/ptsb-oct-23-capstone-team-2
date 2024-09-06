import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'
import {Separator} from '@/components/ui/separator'
import './formResponse.css'

import PropTypes from 'prop-types'

function FormResponse({formState, isLoading}) {
  FormResponse.propTypes = {
    formState: PropTypes.object,
    isLoading: PropTypes.bool,
  }
  function handleResponse(formState) {
    console.log('data:', formState)
    console.log('formState:', formState)
    // console.log('formState.workorder:', formState.workorder)

    console.log(formState.data && Object.prototype.hasOwnProperty.call(formState.data, 'ErrorCode') === false)
    console.log(formState.data.result !== '')
    console.log(formState.data.result !== undefined)

    if (formState.data && Object.prototype.hasOwnProperty.call(formState.data, 'ErrorCode') === false && formState.data.result !== undefined) {
      if (formState.data.result !== '') {
        return `<strong>Success</strong>: ${formState.data.result}`
      } else {
        return `<strong>Success</strong>: Status has already been updated`
      }
    } else {
      return `<strong>Failed</strong>: ${formState.data.ErrorMessage}`
    }
  }

  if (isLoading) {
    return (
      <Card className='rounded-md form-response-layout'>
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
      <Card className='rounded-md form-response-layout'>
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
    <Card className='rounded-md form-response-layout'>
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
