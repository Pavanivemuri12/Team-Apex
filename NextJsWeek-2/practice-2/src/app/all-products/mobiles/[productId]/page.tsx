"use client";

import { useState, useEffect } from "react";
import { use } from "react"; // Import React.use()

interface PageProps {
  params: Promise<{
    productId: string; // Ensure 'productId' is typed correctly
  }>;
}

const Page: React.FC<PageProps> = ({ params }) => {
  // Use `React.use()` to unwrap the params promise
  const { productId } = use(params);

  // Log the value of 'productId' for debugging
  //console.log("Product ID from params:", productId);

// const id= params.productId

  const [title, setTitle] = useState<string>("");
  const [devicemodel, setDevicemodel] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProductHandler = async (): Promise<void> => {
      try {
        setLoading(true);
        if (!productId) {
          throw new Error("Product ID is missing");
        }

        const response = await fetch(`http://localhost:3000/api/products/mobiles/update/${productId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const singleRecord = await response.json();
        console.log("Fetched record:", singleRecord);

        // Update state
        setTitle(singleRecord.productsRecord.title || "");
        setDevicemodel(singleRecord.productsRecord.devicemodel || "");
        setPrice(singleRecord.productsRecord.price || "");
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      getProductHandler();
    } else {
      console.error("Product ID is missing");
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const productUpdateHandler = async(e:React.FormEvent):Promise<void> =>{
    e.preventDefault()
    const response= await fetch(`http://localhost:3000/api/products/mobiles?id=${productId}`,{
      method:'PUT',
      body:JSON.stringify({ newTitle:title,newModel:devicemodel,newPrice:price})
    })

    const result = await response.json();
    console.log("this is updated product",result)
    alert("Product Updated")
  }

  return (
    <div>
      <h1>Dynamic Routing</h1>
      <form className="flex flex-col items-center justify-center gap-2 border border-r-8 border-l-8 border-spacing-y-3 border-b-4 border-t-2 border-spacing-x-20 border-red-400" onSubmit={productUpdateHandler}>
        <div>
          <h3>Name</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-black"
          />
        </div>
        <div>
          <h3>Model</h3>
          <input
            type="text"
            value={devicemodel}
            onChange={(e) => setDevicemodel(e.target.value)}
            className="border border-black"
          />
        </div>
        <div>
          <h3>Price</h3>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-black"
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-400 border border-green-400">
       Update Product
        </button>
      </form>
    </div>
  );
};

export default Page;


// "use client"
// import React, { useState } from 'react'
// interface PageProps {
//   params: {
//     productId: string; // Ensure the 'ProductId' is typed correctly
//  };
// }
// const Page :React.FC<PageProps>= ({params}) => {

//   console.log("This is params:",params)

//   const id = params.productId

//  const[title,setTitle] =useState<string>("")
//  const[devicemodel,setDevicemodel] =useState<string>("")
//  const[price,setPrice] =useState<string>("")



//   return (
//     <div>Dynamic Routing
//     <form className='flex flex-col items-center justify-center gap-2 border border-r-8 border-l-8 border-spacing-y-3 border-b-4 border-t-2 border-spacing-x-20 border-red-400'  >
//     <div>
//         <h3>Name</h3>  
//         <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='border border-black'/>
//     </div>
//     <div>
//         <h3>Model</h3>  
//         <input type="text" value={devicemodel} onChange={(e)=>setDevicemodel(e.target.value)} className='border border-black'/>
//     </div>
//     <div>
//         <h3>Price</h3>  
//         <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className='border border-black'/>
//     </div>
//     <button type='submit' className='bg-green-500 hover:bg-green-400 border border-green-400' >Add Mobile</button>
//     </form>
//     </div>
//   )
// }

// export default Page