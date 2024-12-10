import { NextResponse } from 'next/server'
import User from '@/model/use'
import { getSession } from 'next-auth/react'
import connectDb from '@/lib/connectDb'
import bcrypt from 'bcrypt'
export async function POST(request: Request) {
//   const session = await getSession({ req: request })
//   if (!session) {
//     return NextResponse.json({ message: 'You are not signed in' }, { status: 401 })
//   }
  const { name, email, password, phone } = await request.json()
  try {  
    if(!name|| !email|| !password|| !phone){
        return NextResponse.json({ message: 'All Fields aare required' }, { status: 400 })
    }
    if( password.length<10){
        return NextResponse.json({ message: 'Passworm must be minimum 0f 10 characters' }, { status: 400 })
    }
    await connectDb()
     const user= await User.findOne({email})
     if(user){
       return NextResponse.json({ message: 'Email already exists' }, { status: 400 })
     }  
    const hash=await bcrypt.hash(password,10)
    console.log(hash)
    
      const result = new User({ name, email, password:hash, phone })
   const newUser=await result.save()
  //  const{password,...rest}=newUser._doc
    return NextResponse.json({ message: 'User created successfully',  })
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user', error }, { status: 500 })
  }
}