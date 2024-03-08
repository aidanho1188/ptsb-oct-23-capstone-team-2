import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '../../../components/ui/card'
import './summary.css'

// Will need to extract this into summary layout file
function Summary() {
  return (
    <div className='summary-layout'>
      <h1>Summary</h1>
      <Card className='summary-card-layout'>
        <CardHeader>
          <CardTitle>Order Id: #123456789</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Requested By:</p>
          <p>Requested For:</p>
          <p>Location:</p>
          <p>Assigned To:</p>
          <p>Created Date:</p>
          <p>Due Date:</p>
          <p>Completed Date:</p>
          <p>Comments:</p>
        </CardContent>
      </Card>

      <Card className='summary-card-layout'>
        <CardHeader>
          <CardTitle>Order Id: #123456789</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Requested By:</p>
          <p>Requested For:</p>
          <p>Location:</p>
          <p>Assigned To:</p>
          <p>Created Date:</p>
          <p>Due Date:</p>
          <p>Completed Date:</p>
          <p>Comments:</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Summary
