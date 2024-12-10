
import User from '@/model/use'
import connectDb from '@/lib/connectDb'
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from 'next-auth/next'
const handler=NextAuth({
  session:{
    strategy:'jwt'
  },
  providers: [
    CredentialsProvider({ name: "Credentials",
     credentials: { email: {}, password: { } },
      async authorize(credentials, req) {
     try {
      await connectDb()

       const user = await User.findOne({ email: credentials?.email })
       if (!user) {
        throw new Error("")
       }
       const passwordMatch = await bcrypt.compare(credentials?.password ?? '', user.password as string)
       if (!passwordMatch) {
        throw new Error("")
       }
       return user
     } catch (error) {
      console.log(error);
      
       return null
     }
    } })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if(token){
        session.user={
          email: token.email,
          name: token.name
        }
      }
      return session
    }
  },
  pages: {
    signIn: '/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
  },
  secret: process.env.NEXTAUTH_SECRET,

})

export {handler as GET, handler as POST}