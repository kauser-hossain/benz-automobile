import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";


const Ragister2 = () => {
    const form=useForm()
    return (
        <Form {...form}>
            <FormField
            controll={form.control}
            name="username"
            render={
                ({field})=>{
                
                 <FormItem>
                    <FormLabel>lab</FormLabel>
                    <FormControl>
                        <Input placeholder="enter your name" {...field}/>
                    </FormControl>
                 </FormItem>

                }
            }
            
            />
        </Form>
    );
};

export default Ragister2;