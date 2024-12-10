"use client"


import React, { useState } from 'react'

const Page: React.FC = () => {
    const [name,setName] =useState<string>("")
    const [model,setModel] = useState<string>("")
    const [price,setPrice] = useState<string>("")

        const mobileDataHandler = async(e: React.FormEvent<HTMLFormElement>):Promise<void>=>{
            e.preventDefault()
            try{
            const response =await fetch("http://localhost:3000/api/products/mobiles",{
                method: 'POST',
                headers:{
                "Content-Type":"application/json"},
                body:JSON.stringify({
                    title:name,
                     devicemodel:model,
                      price:price})
            })
            if(response.ok){
                alert("Laptop added successfully")
                setName("")
                setModel("")
                setPrice("")
            } else{
                alert("Failed to add mobile.Please try again");
            }
        }
        catch(error){
            console.error("Error submitting form:",error);
            alert("An error occurred.Please try again.");
        }          
        }
  return (
    <div>
        <form className='flex flex-col items-center justify-center gap-2 border border-r-8 border-l-8 border-spacing-y-3 border-b-4 border-t-2 border-spacing-x-20 border-red-400' onSubmit={mobileDataHandler} >
        <div>
            <h3>Name</h3>  
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='border border-black'/>
        </div>
        <div>
            <h3>Model</h3>  
            <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className='border border-black'/>
        </div>
        <div>
            <h3>Price</h3>  
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className='border border-black'/>
        </div>
        <button type='submit' className='bg-green-500 hover:bg-green-400 border border-green-400' >Add Mobile</button>
        </form>
    </div>
  )
}

export default Page