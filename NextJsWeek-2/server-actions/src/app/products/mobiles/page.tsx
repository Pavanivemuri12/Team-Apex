import DBConnection from '@/app/lib/config/connection'
import MobileModel from '@/app/lib/models/mobile'
import React from 'react'

const page = () => {
    const addProductHandler=async(formData:FormData):Promise<void>=>{
        "use server"
         await  DBConnection()
         const title = formData.get("title") as string
         const model = formData.get("devicemodel") as string
         const price = formData.get("price") as string
     

        if (!title || !model || !price) {
            console.error("Missing required fields");
            return;
          }
          console.log({title,model,price});

       await MobileModel.create({title:title,devicemodel:model,price:price})
       console.log("mobile addedd successfully")
    }
  return (
    <div>
     
        <form action={addProductHandler}>
               <h1>Server-actions</h1>
               <input type="text" name='title' className=' border-4' /><br />
               <input type="text" name='devicemodel'  className='border-4'  /><br />
               <input type="text" name='price'  className='border-4'  /><br />
               <button type='submit'>Add Mobile</button>
        </form>
    </div>
  )
}

export default page