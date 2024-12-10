import Link from 'next/link'
import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
const NavBer = () => {
  return (
    <div className="navbar bg-slate-300 shadow-lg text-slate-700 lg:px-28 ">
    <div className="navbar-start">
   
      <Link href="/" className="btn btn-ghost text-xl">Shoppify</Link>
    </div>
    <div className="navbar-center hidden lg:flex ">
    <form className="  rounded-lg w-96 shadow-md ">
      <div className="flex w-full justify-between items-center p-2">
      <input type="text" placeholder="Search" className="  w-36 p-2 rounded border-none focus:outline-0  md:w-60 bg-transparent text-slate-700" />
      <FaIcons.FaSearch size={30} className='cursor-pointer'/>
   {/* <button className='btn bg-red-800 w-fit font-semibold text-white h-10 text-center'>Search</button> */}
   </div>  </form>
    </div>
    <div className="navbar-end mx-2 gap-5">
         <ul className=" px-1 hidden lg:flex items-center gap-4">
         <li><Link href="">Order</Link></li>
          <li><Link href="">Saved</Link></li>
          <li><Link href="">Inbox</Link></li>
          
      </ul>
      <div className="relative">
        
      <Link href='' className=" hidden lg:flex">
        <span className='absolute -top-2 left-6 z-20 font-bold text-xl  text-white'>20</span>
  {/* <FaIcons.FaShoppingBasket size={40} className='cursor-pointer'/> */}
  <MdIcons.MdOutlineShoppingBasket size={40} className='cursor-pointer'/>

</Link>
      </div>
      <Link href='/signin' className=" rounded-lg hidden lg:flex">singin</Link>
    
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