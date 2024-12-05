"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import * as FaIcons  from 'react-icons/fa'
interface Data {
    availabilityStatus: string
    brand:string
      category:string
    description:string
    discountPercentage:number,
    id:number,
    images:string[],
    price:number,
    rating:number,
    returnPolicy:string,
    reviews:any[],
    title:string,
    dimensions:{width:number,height:number,depth:number},
    meta:{createdAt:string,updatedAt:string,barcode:string,qrCode:string},
    minimumOrderQuantity:number,
     shippingInformation:string,
    sku:string,
    stock:number,
    tags:string[],
    thumbnail:string,
    warrantyInformation:string,
    weight:number,


   
 
}
const page = () => {
    const params= useParams()
    const {id}=params
    const [property, setData] = useState<Data>({availabilityStatus:"",brand:"",category:"",description:"",discountPercentage:0,id:0,images:[],price:0,rating:0,returnPolicy:"",reviews:[],title:"",dimensions:{width:0,height:0,depth:0},meta:{createdAt:"",updatedAt:"",barcode:"",qrCode:""},minimumOrderQuantity:0,shippingInformation:"",sku:"",stock:0,tags:[],thumbnail:"",warrantyInformation:"",weight:0}); 

useEffect(() => { 
    const Fetch= ()=>{
        fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data=>setData(data));
            }
            Fetch()
}, [id])
  console.log(property)
  return (
    <div className='w-full min-h-[100vh] flex justify-center'>
        <div className="card w-4/6  mx-auto mt-10 flex gap-4">
       <div className="shadow-xl flex gap-4"> <figure className='relative px-4 shadow-xl'>
    <img
      src={property.images[0]}
      alt={property.title} 
      className='md:h-[60vh] '/>
                  <div className="badge absolute right-8 top-10 text-white  bg-success border-0  ">
                            {property.discountPercentage}%
                        </div>
                       
                    {/* <div className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full absolute right-0 bottom-3 text-white  bg-red-600 border-0 ">
                            <FaIcons.FaHeart  size={20}/>
                        </div> */}</figure> 
  <div className="card-body">
    <h3 className="card-title">
      {property.title}
    </h3>
    <div className="flex justify-between item-center">
        <span>availabilityStatus: {property.availabilityStatus}</span>
        <span>Stock: {property.stock}</span>
    </div>
    <span>Brand: {property.brand}</span>
                        {/* <span>{property.description}</span> */}
                        <span>Shipping Information: {property.shippingInformation}</span>
                        <span>Price: ${property.price}</span>
                       <div className="flex gap-4 items-center">
                       <span>{`${property.reviews.length} (reviews)`}</span>
                       <span>{property.rating} rating</span>
                       </div>
                        {/* <span>Dimensions: {property.dimensions.width} x {property.dimensions.height} x {property.dimensions.depth}</span> */}
    <Button value="Add to cart"/>
   
    </div>
  </div>
  <div className='mt-10 shadow-xl  p-4 rounded-lg'>
    <h3>Product Description</h3>
    <p>{property.description}</p>
  </div>
</div>
    </div>
  )
}

export default page