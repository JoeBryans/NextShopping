"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import * as FaIcons  from 'react-icons/fa'
import  Link  from 'next/link';


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
    const [product, setProduct] = useState<Data>({availabilityStatus:"",brand:"",category:"",description:"",discountPercentage:0,id:0,images:[],price:0,rating:0,returnPolicy:"",reviews:[],title:"",dimensions:{width:0,height:0,depth:0},meta:{createdAt:"",updatedAt:"",barcode:"",qrCode:""},minimumOrderQuantity:0,shippingInformation:"",sku:"",stock:0,tags:[],thumbnail:"",warrantyInformation:"",weight:0}); 
    // const [product, setProduct] = useState<any>({}); 
    //  const [similar, setSimilar] = useState<Data>({availabilityStatus:"",brand:"",category:"",description:"",discountPercentage:0,id:0,images:[],price:0,rating:0,returnPolicy:"",reviews:[],title:"",dimensions:{width:0,height:0,depth:0},meta:{createdAt:"",updatedAt:"",barcode:"",qrCode:""},minimumOrderQuantity:0,shippingInformation:"",sku:"",stock:0,tags:[],thumbnail:"",warrantyInformation:"",weight:0});
 const [similar, setSimilar] = useState<any>([]);
useEffect(() => { 
    const Fetch= ()=>{
        fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data=>setProduct(data));
            }
            Fetch()
            
}, [id])
fetch(`https://dummyjson.com/products/category/${product.category}`)
.then(res => res.json())
.then(data=>setSimilar(data))
  console.log(similar)
  console.log(product)
  return (
    <div className='w-full min-h-[100vh] flex justify-center'>
        <div className="card w-4/6  mx-auto mt-10 flex gap-4">
       <div className="shadow-xl flex gap-4"> <figure className='relative px-4 shadow-xl'>
    <img
      src={product?.images?.[0]}
      alt={product.title} 
      className='md:h-[60vh] '/>
                  <div className="badge absolute right-8 top-10 text-white  bg-success border-0  ">
                            {product.discountPercentage}%
                        </div>
                       
                    {/* <div className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full absolute right-0 bottom-3 text-white  bg-red-600 border-0 ">
                            <FaIcons.FaHeart  size={20}/>
                        </div> */}</figure> 
  <div className="card-body">
    <h3 className="card-title">
      {product.title}
    </h3>
    <div className="flex justify-between item-center">
        <span>availabilityStatus: {product.availabilityStatus}</span>
        <span>Stock: {product.stock}</span>
    </div>
    <span>Brand: {product.brand}</span>
                        {/* <span>{product.description}</span> */}
                        <span>Shipping Information: {product.shippingInformation}</span>
                        <span>Price: ${product.price}</span>
                       <div className="flex gap-4 items-center">
                       <span>{`${product?.reviews?.length} (reviews)`}</span>
                       <span>{product.rating} rating</span>
                       </div>
                        {/* <span>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</span> */}
    <Button value="Add to cart"/>
   
    </div>
  </div>
  <div className='mt-10 shadow-xl  p-4 rounded-lg'>
    <h3>Product Description</h3>
    <p>{product.description}</p>
  </div>



  <div className='mt-10   p-4 rounded-lg'> 
  <h3>Similar Products</h3>
  <div className="flex flex-wrap gap-5">  {similar?.products?.slice(0,3).map((item:any) => (
           <div key={item.id} className="card card-compact w-64 shadow-xl px-3 mx-auto rounded relative py-4">  
            <div className="relative mb-2">
            <figure>
                  <Link href={`/product/${item.id}`}>
                  
                      <img  src={item?.images[0]} alt={item.title}   className="h-60" />
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
                {/* <span className=""> {item.reviews.length} reviews  </span> */}
                <span className=""> {`${item.rating}rating`}  </span>
               </div>
                   {/* <button className="btn btn-primary mt-2">Buy Now</button>     */}
                   <Button value="Add To Cart"/>

           
               </div>             
    ))}
      
 
  </div>
  </div>
</div>
    </div>
  )
}

export default page