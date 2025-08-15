import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

const Ragister2 = () => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

const onSubmit=(data)=>{
  if(data.password!==data.confirmPassword){
    form.setError("confirmPassword",{
      type:"manual",
      message:"password do not match"
    })
    return
  }
  const userinfo={
    name:data.username,
    email:data.email,
    password:data.password
  }
  fetch("http://localhost:5000/api/createuserRouter",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(userinfo)
  })
  .then(res=>res.json())
  .then(result=>{
    if(result.success){
      alert("Registation successful");
      form.reset()
    }else(
      result.message||"something went wrong"
    )
  })
  .catch(error=>{
    console.error(error);
    alert("server errror")
  })
}
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900  ">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Create an acount
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <FormField
              control={form.control}
              name="username"
              rules={{ required: "Username is required" }}
              render={({ field }) => {
                return (
                  <FormItem className="mb-4">
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="username is required" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="username"
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Ragister2;
