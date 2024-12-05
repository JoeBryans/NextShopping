'use client'
import Link from 'next/link'
import React, {  useEffect, useState } from 'react'
import * as FaIcons  from 'react-icons/fa'

interface Data {
    availabilityStatus: string,
    brand:string,
      category:string,
    description:string,
    discountPercentage:number,
    id:number,
    images:string[],
    price:number,
    rating:number,
    returnPolicy:string,
    reviews:any[],
    title:string
 
}
    

const ItemCategory = () => {
    const [products, setProducts] = useState([]);   
    useEffect(() => {
         function fetchPosts() {
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data=>setProducts(data.products));
        }
        fetchPosts()
      }, [])

// const res=await fetch('https://dummyjson.com/products')
//  const datas:data[] = await res.json()

// console.log(datas);
console.log(products);

  return (

        <div className="flex flex-wrap gap-5">
         {products.slice(0,20).map((item:Data) => (
                <div className="card card-compact w-64 shadow-xl px-3 rounded relative py-4">  
                 <div className="relative mb-2">
                 <figure>
                       <Link href={`/product/${item.id}`}>
                       <img
                            src={item.images[0]}
                            alt={item.title}   className="h-60" />
                   </Link> </figure>
                    <div className="badge absolute left-0 bottom-3 text-white  bg-success border-0 ">
                            {item.discountPercentage}%
                        </div>
                    <div className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full absolute right-0 bottom-3 text-white  bg-red-600 border-0 ">
                            <FaIcons.FaHeart  size={20}/>
                        </div>
                 </div>
                    <h3 className="card-title line-clamp-1">{item.title}</h3>
                                        <h4 className=''>${item.price}</h4>
 <div className="flex gap-5">
                     <span className=""> {item.reviews.length} reviews  </span>
                     <span className=""> {`${item.rating}rating`}  </span>
                    </div>
                        <button className="btn btn-primary mt-2">Buy Now</button>    
                      
                
                    </div>             
         ))}
               
            
    </div>
  )
}

export default ItemCategory