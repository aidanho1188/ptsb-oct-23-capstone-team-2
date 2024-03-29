import React, { useState } from 'react'; // Import useState
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useForm } from 'react-hook-form';
import { Form, FormItem, FormLabel, Popover, PopoverTrigger, FormControl } from '@/components/ui/form';

export function CreateWorkorder() {


  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Create Work Order</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>New Work Order</CardTitle>
            <CardDescription>Create a new work order here.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='contract'>Contract Information</Label>
              <Input id='contract' defaultValue='Contract Info' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='category'>Category</Label>
              {/* dropdown here on categories */}
            </div>
            <Select>
              <SelectTrigger id='framework'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent position='popper'>
                <SelectItem value='next'>Category1</SelectItem>
                <SelectItem value='sveltekit'>Category2</SelectItem>
                <SelectItem value='astro'>Category3</SelectItem>
                <SelectItem value='nuxt'>Category4</SelectItem>
              </SelectContent>
            </Select>
            <div className='space-y-1'>
              <Label htmlFor='contract'>Contract Information</Label>
              <Input id='contract' defaultValue='Contract Info' />
            </div>
            <br />
            <Label htmlFor='contract'>Priority</Label>
            <RadioGroup defaultValue='comfortable'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='default' id='r1' />
                <Label htmlFor='r1'>High Priority</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='comfortable' id='r2' />
                <Label htmlFor='r2'>Medium Priority</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='compact' id='r3' />
                <Label htmlFor='r3'>Low Priority</Label>
              </div>
            </RadioGroup>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormItem>
                  <FormLabel>Select a date:</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant={'outline'}>
                          <span>Pick a date</span>
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        onSelect={handleDateSelect}
                        selected={selectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
                <FormItem>
                  <Button type='submit'>Submit</Button>
                </FormItem>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Button type='submit'>Submit New Work Order</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default CreateWorkorder;
