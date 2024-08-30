import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import './FAQ.css'

function FAQ() {
  return (
    <div className='FAQ-container'>
      <h1>FAQ</h1>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>What are work orders?</AccordionTrigger>
          <AccordionContent>These are work orders pulled directly from the Service Channel in real time. They are created by clients like the Home Depot. Outside Unlimited&apos;s services will then fulfill these work orders.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>What is the Service Channel?</AccordionTrigger>
          <AccordionContent>ServiceChannel is a leading facilities management software platform that helps businesses streamline their maintenance and repair operations. It provides a centralized system for managing work orders, service providers, assets, and invoices. By automating these processes, ServiceChannel helps businesses improve efficiency, reduce costs, and enhance customer satisfaction.</AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Who is the default user?</AccordionTrigger>
          <AccordionContent>
            At this time, the default users are logged in through the Service Channel sandbox mode. You can find more information about sandbox mode{' '}
            <a href='https://developer.servicechannel.com/basics/introduction/sandbox-mode/' target='_blank' rel='noopener noreferrer' style={{color: '#006400'}}>
              here.
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQ
