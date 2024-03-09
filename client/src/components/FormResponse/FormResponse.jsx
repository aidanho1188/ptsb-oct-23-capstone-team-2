import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card'
import './formResponse.css'

// Will need to extract this into summary layout file
function FormResponse() {
  return (
    <Card className='form-response-layout'>
      <CardHeader>
        <CardTitle>Update Success!</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Work Order Id: #123456789</p>
        <p>Status: In Progess</p>
        <p>Requested For:</p>
        <p>Location:</p>
        <p>Assigned To:</p>
        <p>Created Date:</p>
      </CardContent>
    </Card>
  )
}

export default FormResponse
