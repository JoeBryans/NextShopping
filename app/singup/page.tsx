"use client"
import Button from '@/components/Button'
import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from 'next/router'
import { useSignUp } from '@clerk/nextjs'
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
  const { isLoaded, signUp, setActive } = useSignUp()
  // const [emailAddress, setEmailAddress] = React.useState('')
  // const [password, setPassword] = React.useState('')
  const [verifying, setVerifying] = React.useState(false)
  const [code, setCode] = React.useState('')
  const router = useRouter()


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
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-md flex flex-col gap-4 bg-slate-300 drop-shadow-lg p-4 text-white'>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="FirstName"{...register("firstName")}/>
</label>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="LastName"{...register("lastName")}/>
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email"{...register("emailAddress")} />
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow" placeholder="Phone" {...register("phone")}/>

</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder="password"{...register("password")} />
</label>
<Button value="Singup"/>
</form>
    </div>
  )
}

export default SignUp