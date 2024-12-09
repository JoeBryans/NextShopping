"use client"
import Button from '@/components/Button'
import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useRouter } from 'next/router'
import Link from 'next/link'
// import { useSignUp } from '@clerk/nextjs'
const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    emailAddress: yup.string().email().required(),
    password: yup.string().required().min(10).max(50),
    phone: yup.string().required(),
  })
  .required()


type Inputs = {
  firstName: string
  lastName: string
  emailAddress: string
  password: string
  phone: string
}
const SignUp = () => {
  // const { isLoaded, signUp, setActive } = useSignUp()
  // const [emailAddress, setEmailAddress] = React.useState('')
  // const [password, setPassword] = React.useState('')
  // const [verifying, setVerifying] = React.useState(false)
  // const [code, setCode] = React.useState('')
  // const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })


  // Handle submission of the sign-up form
  // const handleSubmitClark = async (e: React.FormEvent) => {
  //   e.preventDefault()


  // const onSubmit = async (data:Inputs) => {

  //   if (!isLoaded) return

  //   // Start the sign-up process using the email and password provided
  //   try {
  //     await signUp.create({
  //       emailAddress,
  //       password,
  //     })

  //     // Send the user an email with the verification code
  //     await signUp.prepareEmailAddressVerification({
  //       strategy: 'email_code',
  //     })

  //     // Set 'verifying' true to display second form
  //     // and capture the OTP code
  //     setVerifying(true)
  //   } catch (err: any) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2))
  //   }
  // }

  // Handle the submission of the verification form
  // const handleVerify = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (!isLoaded) return

  //   try {
  //     // Use the code the user provided to attempt verification
  //     const signUpAttempt = await signUp.attemptEmailAddressVerification({
  //       code,
  //     })

  //     // If verification was completed, set the session to active
  //     // and redirect the user
  //     if (signUpAttempt.status === 'complete') {
  //       await setActive({ session: signUpAttempt.createdSessionId })
  //       router.push('/')
  //     } else {
  //       // If the status is not complete, check why. User may need to
  //       // complete further steps.
  //       console.error(JSON.stringify(signUpAttempt, null, 2))
  //     }
  //   } catch (err: any) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error('Error:', JSON.stringify(err, null, 2))
  //   }
  // }

  // // Display the verification form to capture the OTP code
  // if (verifying) {
  //   return (
  //     <>
  //       <h1>Verify your email</h1>
 //       <form onSubmit={handleVerify}>
  //         <label id="code">Enter your verification code</label>
  //         <input value={code} id="code" name="code" onChange={(e) => setCode(e.target.value)} />
  //         <button type="submit">Verify</button>
  //       </form>
  //     </>
  //   )
  // }


  const onSubmit = (data:Inputs) => console.log(data.emailAddress)
  return (
    <div className=' h-[100vh] flex items-center justify-center'>
       <div className='max-w-md flex flex-col gap-4 bg-slate-300 text-pretty drop-shadow-lg p-4 '>  <form onSubmit={handleSubmit(onSubmit)} className='max-w-md flex flex-col gap-4 bg-slate-300 p-4 '>
        <h3 className='text-center text-2xl font-bold'>Signin</h3>  

        <label className="input input-bordered flex items-center  gap-2">
        <FaIcons.FaUser className='text-slate-400'/><input type="text" className="grow" placeholder="Name"{...register("firstName")}/>

</label>
      
<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdEmail className='text-slate-400'/>

  <input type="text" className="grow" placeholder="Email"{...register("emailAddress")} />
</label>

<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdPhone className='text-slate-400'/>

  <input type="text" className="grow" placeholder="Phone" {...register("phone")}/>

</label>
<label className="input input-bordered flex items-center gap-2">
<MdIcons.MdKey className='text-slate-400'/>

  <input type="password" className="grow" placeholder="password"{...register("password")} />
<FaIcons.FaEyeSlash className='text-slate-400'/>
{/* <FaIcons.FaEye className='text-slate-400'/> */}

</label>
<Button value="Singup"/>
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