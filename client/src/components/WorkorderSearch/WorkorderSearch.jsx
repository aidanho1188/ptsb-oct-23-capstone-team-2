import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import './workorderSearch.css'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function WorkorderSearch() {
  const form = useForm();

  return (
    <div className="flex justify-center">
    <Form {...form} className="bg-gray-100 p-4 rounded-lg">
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="Workorder ID"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter workorder ID..." 
                {...field}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500" />
              </FormControl>
            <br></br>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="search">Search</Button>
      </form>
    </Form>
    </div>
  );
}

export default WorkorderSearch;
