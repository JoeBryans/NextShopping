import axios from 'axios';
import * as FaIcons  from 'react-icons/fa';
import Link from 'next/link'
import Button from './Button';

  interface Props {
    Wears: any;
  }
const Wears = async() => {
    const response = await axios.get('https://dummyjson.com/products/category/womens-dresses')
    const woman = response.data;
    
    const res = await axios.get('https://dummyjson.com/products/category/mens-shirts')
    const men = res.data;
    
    const {data} = await axios.get('https://dummyjson.com/products/category/mens-shoes')
    const Shoe = data;
    
    
  return (
    <>
    <div className="flex flex-wrap gap-5">
    {woman.products.slice(0,4).map((item:any) => (
           <div className="card card-compact w-64 shadow-xl px-3 mx-auto rounded relative py-4">  
            <div className="relative mb-2">
            <figure>
                  <Link href={`/product/${item.id}`}>
                  <img
                       src={item.images[0]} alt={item.title}   className="h-60" />
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
    <div className="flex flex-wrap gap-5">
    {men.products.slice(0,4).map((item:any) => (
           <div className="card card-compact w-64 shadow-xl px-3 mx-auto rounded relative py-4">  
            <div className="relative mb-2">
            <figure>
                  <Link href={`/product/${item.id}`}>
                  <img
                       src={item.images[0]} alt={item.title}   className="h-60" />
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
    <div className="flex flex-wrap gap-5">
    {Shoe.products.slice(0,4).map((item:any) => (
           <div className="card card-compact w-64 shadow-xl px-3 mx-auto rounded relative py-4">  
            <div className="relative mb-2">
            <figure>
                  <Link href={`/product/${item.id}`}>
                  <img
                       src={item.images[0]} alt={item.title}   className="h-60" />
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
    
    
    
    </>
  )
}

export default Wears