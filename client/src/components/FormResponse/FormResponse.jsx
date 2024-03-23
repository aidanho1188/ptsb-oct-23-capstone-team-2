import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'

import './formResponse.css'

function FormResponse({formState}) {
  if (!formState) {
    return (
      <Card className='form-response-layout'>
        <CardHeader>
          <CardTitle>Form Response</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <p>Waiting for form submission...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='form-response-layout'>
      <CardHeader>
        <CardTitle dangerouslySetInnerHTML={{__html: formState.result ? formState.result : formState.message}} />
      </CardHeader>
      <Separator />
      <CardContent>
        <p>
          <strong>Work Order Id:</strong> {formState.id}
        </p>
        <p>
          <strong>Status:</strong> {formState.status}
        </p>
      </CardContent>
    </Card>
  )
}

export default FormResponse
