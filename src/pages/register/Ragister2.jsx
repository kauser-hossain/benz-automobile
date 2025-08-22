import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthContext from "@/context/AuthContext";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const Ragister2 = () => {


  const context=useContext(AuthContext);
  console.log(context);
  
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit=data=>{
    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    alert("Registration successful!");
    console.log(data);
    form.reset();
    
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900  ">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Create an acount
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            {/* Username */}
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
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              }}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              rules={{ required: "Please confirm your password" }}
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Ragister2;
// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import SocialLogin from "../../components/SocialLogin/SocialLogin";

// const SignUp = () => {
//     const axiosPublic = useAxiosPublic();
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const onSubmit = data => {

//         createUser(data.email, data.password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 updateUserProfile(data.name, data.photoURL)
//                     .then(() => {
//                         // create user entry in the database
//                         const userInfo = {
//                             name: data.name,
//                             email: data.email
//                         }
//                         axiosPublic.post('/users', userInfo)
//                             .then(res => {
//                                 if (res.data.insertedId) {
//                                     console.log('user added to the database')
//                                     reset();
//                                     Swal.fire({
//                                         position: 'top-end',
//                                         icon: 'success',
//                                         title: 'User created successfully.',
//                                         showConfirmButton: false,
//                                         timer: 1500
//                                     });
//                                     navigate('/');
//                                 }
//                             })

//                     })
//                     .catch(error => console.log(error))
//             })
//     };

//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Sign Up</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Sign up now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
//                                 {errors.name && <span className="text-red-600">Name is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo URL</span>
//                                 </label>
//                                 <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
//                                 {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
//                                 {errors.email && <span className="text-red-600">Email is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password"  {...register("password", {
//                                     required: true,
//                                     minLength: 6,
//                                     maxLength: 20,
//                                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
//                                 })} placeholder="password" className="input input-bordered" />
//                                 {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
//                                 {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
//                                 {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
//                                 {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                             </div>
//                         </form>
//                         <p className="px-6"><small>Already have an account <Link to="/login">Login</Link></small></p>
//                         <SocialLogin></SocialLogin>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignUp;
