import React from 'react'
import * as FaIcons  from 'react-icons/fa'

const Search = () => {
  return (
    <div>
        <form className="  rounded-full w-48 sm:w-96 shadow-md  mx-5 md:mx-0">
      <div className="flex w-full justify-between items-center p-1 md:p-2">
      <input type="text" placeholder="Search" className="  w-36 p-1 md:p-2 rounded border-none focus:outline-0  md:w-60 bg-transparent text-slate-700" />
      <FaIcons.FaSearch size={30} className='cursor-pointer'/>
   {/* <button className='btn bg-red-800 w-fit font-semibold text-white h-10 text-center'>Search</button> */}
   </div>  </form>
    </div>
  )
}

export default Search