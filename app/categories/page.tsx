import CartegoryList from '@/components/categoryList'
import ItemCategory from '@/components/itemCategory'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-full gap-20'>
        <div className='relative w-80 flex justify-center py-5'>
            <CartegoryList/>
        </div>
        <div className="flex-1 w-full px-4">
           <ItemCategory/> 
        </div>
    
    </div>
  )
}

export default page