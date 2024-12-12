"use client"

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
  return (
    <div className='p-4'>
        <table className='table-auto border-collapse border border-gray-300 w-full'>
            <thead>
                <tr>
            <th className="border border-gray-300 px-4 py-2">Mobile Id</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Model</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
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

                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Page