import Link from 'next/link'
import React from 'react'

const NavBer = () => {
  return (
    <div className="navbar bg-slate-300 shadow-lg text-slate-700 lg:px-28 ">
    <div className="navbar-start">
   
      <a className="btn btn-ghost text-xl">Shoppify</a>
    </div>
    <div className="navbar-center hidden lg:flex ">
    <form className=" bg-[#2084A2] rounded-lg w-96  ">
      <div className="flex w-full justify-between px-2">
      <input type="text" placeholder="Search" className="input shadow-md w-24  md:w-60 bg-transparent text-slate-700" />
   <button className='btn bg-red-800 w-fit font-semibold text-white h-10 text-center'>Search</button>
   </div>  </form>
    </div>
    <div className="navbar-end mx-2 gap-5">
         <ul className=" px-1 hidden lg:flex gap-4">
         <li><Link href="">Order</Link></li>
          <li><Link href="">Saved</Link></li>
          <li><Link href="">Inbox</Link></li>
          
      </ul>
      <a className="btn rounded-full">Cart</a>
      <a className="btn rounded-lg hidden lg:flex">singin</a>
    
    <div className="dropdown relative">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-slate-300 text-slate-700 rounded-box z-[1] mt-2 w-52 absolute right-0 p-2 shadow">
          <li><Link href="">Order</Link></li>
          <li><Link href="">Saved</Link></li>
          <li><Link href="">Inbox</Link></li>
          <li><Link href="">Account</Link></li>
          
        
        </ul>
      </div></div>
  </div>
  )
}

export default NavBer