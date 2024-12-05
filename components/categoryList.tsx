import Link from 'next/link'
import React from 'react'

const CategoryList = async() => {
  const res= await fetch('https://dummyjson.com/products/category-list')
   const data:any[] = await res.json()
   console.log(data)

  return (
    <div className='w-72 bg-slate-300 drop-shadow-md p-4 sticky top-0 left-0 h-[100vh] overflow-y-scroll'>CartegoryList
    
    <ul className=" px-1 hidden lg:flex flex-col gap-4 ">
    {data.slice(0,15).map((item:any,i:number)=>{
      return <li key={i} className='hover:bg-slate-200 rounded-lg p-3 cursor-pointer'>{item}</li>
    })} 
         
      </ul>
      {/* <li className='hover:bg-slate-200 rounded-lg p-3'><Link href="">Electronics</Link></li>
         <li className='hover:bg-slate-200 rounded-lg p-3'><Link href="">Fashion</Link></li>
         <li className='hover:bg-slate-200 rounded-lg p-3'><Link href="">Computer & Accessories</Link></li>
         <li className='hover:bg-slate-200 rounded-lg p-3'><Link href="">Phone & Accessories</Link></li>
         <li className='hover:bg-slate-200 rounded-lg p-3'><Link href="">Office Furnish</Link></li>
         <li className='hover:bg-slate-200 rounded-lg p-3'><Link href="">Office Furnish</Link></li>
      */}
    </div>
  )
}

export default CategoryList