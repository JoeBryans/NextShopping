"use client"
import Button from '@/components/Button'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as MdIcons from 'react-icons/md';
import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
const schema = yup.object({
    // firstName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(10).max(50),
  })
  .required()


type Inputs = {
  email: string
  password: string
}

const page = () => {
  const {register, handleSubmit, formState:{errors}} = useForm<Inputs>({resolver: yupResolver(schema)});
  const router = useRouter()
  const onSubmit = async (data:Inputs) =>{
    console.log(data)
    try {
       const res =  await signIn('credentials', {
        email: data.email,
        password: data.password,
  
      }) 
      router.push("/")
 
    //   if(res?.error){
    //  console.log(res.error);
    //   }       
     console.log(res);
     
    } catch (error) {
      console.log(error);
      
    }
}
  return (
    <div className=' h-[100vh] flex items-center justify-center'>
        <form className='max-w-md flex flex-col gap-4 bg-slate-300 drop-shadow-lg p-4 relative ' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='text-center text-2xl font-bold'>Signin</h3>  
          <label className="input input-bordered flex items-center gap-2">
<MdIcons.MdEmail className='text-slate-400'/>

  <input type="text" className="grow" id="email" {...register("email")} placeholder="Email"  
 />
</label>

<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdPassword className='text-slate-400'/>

  <input type="password" className="grow" id="password" {...register("password")} placeholder="Password" 
    />

</label>


  {/* <Link href="" className='absolute right-5 underline bottom-[6.5rem] mb-1'>Forgot password</Link> */}
 <div className=' mt-3'>
 <button className="btn border-0 hover:bg-[#059669] bg-[#047857] text-white mt-2 w-full">Singin</button>
 </div>

  </form>  
  {/* <span>Don't have an account? <Link href="/signup" className='underline'>Signup</Link></span> */}
</div>
  )
}

export default page