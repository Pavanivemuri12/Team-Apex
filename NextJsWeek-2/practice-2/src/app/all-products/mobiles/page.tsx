"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react'


interface Mobile{
    _id: string;
    title: string;
    devicemodel: string;
    price: number;
}



const Page = () => {
    const [mobiles, setMobiles]=useState<Mobile[]>([]);
    const ProductHandler = async():Promise<void>=>{
        try {
            const response = await fetch("http://localhost:3000/api/products/mobiles")
        const resData:{mobileData: Mobile[]} = await response.json(); 
        console.log("checking for products", resData)
        setMobiles(resData.mobileData);
        } catch (error) {
                console.error(error)
        }      
    }

    useEffect(()=>{
        ProductHandler()
    },[])

    const productDeleteHandler = async(productId:string)=>
    {
        console.log("dynamic id", productId)
        const response =await fetch(`http://localhost:3000/api/products/mobiles?id=${productId}`,
            {
                method: 'DELETE'

            })
            const result = await response.json()
            console.log("product deleted:",result)
            setMobiles(mobiles.filter((item)=>item._id !== productId))
            alert("Product Deleted Successsfully")
    }




  return (
    <div className='p-4'>
        <table className='table-auto border-collapse border border-gray-300 w-full'>
            <thead>
                <tr>
            <th className="border border-gray-300 px-4 py-2">Mobile Id</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Model</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              
            </thead>
            <tbody>
            {mobiles.map((item)=>{
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.title}</td>
                        <td>{item.devicemodel}</td>
                        <td>{item.price}</td>
                        <td className='flex justify-center items-center text-center align-middle'>
                           <Link href={`/all-products/mobiles/${item._id}`}>
                            <button className=' bg-green-400 hover:bg-green-500'>
                               Update 
                            </button>
                            </Link>
                        </td>
                        <td className=' text-center align-middle'>
                            <button onClick={()=>productDeleteHandler(item._id)} className='bg-red-400 hover:bg-red-600'>
                               Delete 
                            </button>
                        </td>

                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Page