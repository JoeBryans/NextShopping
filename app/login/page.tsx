"use client"
import Button from '@/components/Button'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
// import { useSignUp } from '@clerk/nextjs'
const schema = yup
  .object({
    // firstName: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(10).max(50),
    phone: yup.string().required(),
  })
  .required()


type Inputs = {
  // firstName: string
  name: string
  email: string
  password: string
  phone: string
}
const SignUp = () => {
  const [formData,setFormData]=useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  })

  // const HandleChang=(e:React.FormEvent)=>{
  // setFormData({...formData,[e.target.id]:e.target.value})
  // }
   const {register, handleSubmit, formState:{errors}} = useForm<Inputs>({resolver: yupResolver(schema)});
  const onSubmit = async (data:Inputs) =>{
    try {
       const res =  await axios.post('/api/auth/signup',data,{        headers: { "Content-Type": "application/json" },
      })        
    
     console.log(res);
     
    } catch (error) {
      console.log(error);
      
    }
}
  return (
    <div className=' h-[100vh] flex items-center justify-center'>
       <div className='max-w-md flex flex-col gap-4 bg-slate-300 text-pretty drop-shadow-lg p-4 '>  <form onSubmit={handleSubmit(onSubmit)} className='max-w-md flex flex-col gap-4 bg-slate-300 p-4 '>
        <h3 className='text-center text-2xl font-bold'>Signin</h3>  

        <label className="input input-bordered flex items-center  gap-2">
        <FaIcons.FaUser className='text-slate-400'/><input type="text" id="name" className="grow" {...register("name")} placeholder="Name"
/>

</label>
      
<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdEmail className='text-slate-400'/>

  <input type="text" className="grow" id="email" {...register("email")} placeholder="Email"  
 />
</label>

<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdPhone className='text-slate-400'/>

  <input type="text" className="grow" id="phone" {...register("phone")} placeholder="Phone" 
    />

</label>
<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdKey className='text-slate-400'/>

  <input type="password" id="password" className="grow" {...register("password")} placeholder="password"

  />
<FaIcons.FaEyeSlash className='text-slate-400'/>
{/* <FaIcons.FaEye className='text-slate-400'/> */}

</label>
<button className="btn border-0 hover:bg-[#059669] bg-[#047857] text-white mt-2 w-full">Singup</button>

</form>
<div className="px-5 flex flex-col">
<span>Already have an account? <Link href="/signin" className='underline'>Signin</Link></span>

<span className='mt-2'>By creating an account you agree to our <Link href="" className='underline'>Terms of Service</Link> and <Link href="" className='underline'>Privacy Policy</Link></span>

</div>
</div>
    </div>
  )
}

export default SignUp