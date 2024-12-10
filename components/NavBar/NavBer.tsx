import Link from 'next/link'
import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import Search from './Search'
const NavBer = () => {
  return (
    <div className="navbar bg-slate-300 shadow-lg text-slate-700 lg:px-28 ">
    <div className="navbar-start">
   
      <Link href="/" className="btn btn-ghost text-xl">Shoppify</Link>
    </div>
    <div className="navbar-center  ">
    <Search/>
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
        <FaIcons.FaBars size={25}/>
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