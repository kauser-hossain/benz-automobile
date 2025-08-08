// import React from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useForm } from "react-hook-form";

// const Register = () => {
//   const form = useForm({
//     mode: "onChange",
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = (data) => {
//     if (data.password !== data.confirmPassword) {
//       form.setError("confirmPassword", {
//         type: "manual",
//         message: "Passwords do not match",
//       });
//       return;
//     }
//     alert("Registration successful!");
//     console.log(data);
//     form.reset();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
//           Create an Account
//         </h2>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
//             {/* Username */}
//             <FormField
//               control={form.control}
//               name="username"
//               rules={{ required: "Username is required" }}
//               render={({ field }) => (
//                 <FormItem className="mb-4">
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter username" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Email */}
//             <FormField
//               control={form.control}
//               name="email"
//               rules={{
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: "Invalid email address",
//                 },
//               }}
//               render={({ field }) => (
//                 <FormItem className="mb-4">
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Enter email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Password */}
//             <FormField
//               control={form.control}
//               name="password"
//               rules={{
//                 required: "Password is required",
//                 minLength: { value: 6, message: "Minimum 6 characters" },
//               }}
//               render={({ field }) => (
//                 <FormItem className="mb-4">
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="Enter password"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Confirm Password */}
//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               rules={{ required: "Please confirm your password" }}
//               render={({ field }) => (
//                 <FormItem className="mb-6">
//                   <FormLabel>Confirm Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="Confirm password"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button type="submit" className="w-full">
//               Register
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;
// import { Button } from '@/components/ui/button';
// import React from 'react';

// const Register = () => {
//     return (
//         <div>
//             <form>
//                 <input  type="text" placeholder='enter your name' />
//                 <input type="email" placeholder='enter your email' />
//                 <input type="password" name="password" id="" />
//                 <Button>register</Button>
//             </form>
//         </div>
//     );
// };

// export default Register;
import { Button } from "@/components/ui/button";
import AuthContext from "@/context/AuthContext";
import React, { useContext, useState } from "react";

const Register = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createuser, googleSignIn } = useContext(AuthContext);


  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent page reload
    try {
      const result = await createuser(email, password);
      // console.log(result,"result by regiser")
      
    } catch (error) {
      console.log(error);
    }

    
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      // console.log("Google SignInnnnnnnnnnnnnnnnnnn:", result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // update email state
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // update password state
        />
        <Button type="submit">Register</Button>
      </form>
      <Button onClick={handleGoogleSignIn}>google</Button>
      <Button>github</Button>
    </div>
  );
};

export default Register;
