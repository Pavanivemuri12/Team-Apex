import React from "react";
import DBConnection from "@/app/lib/config/connection";
import MobileModel from "@/app/lib/models/mobile";


interface Mobile {
    _id: string;
    title: string;
    devicemodel: string;
    price: string | number;
  }

export default async function MobileProducts():Promise<React.JSX.Element>{
    await DBConnection();

    const allMobiles: Mobile[] = await MobileModel.find({})

    return(
      <>
        {allMobiles.map((item)=>{
            return(
                 <div key={item._id}>
                    <div>Mobile Name:{item.title}</div>
                    <div>Model:{item.devicemodel}</div>
                    <div>Price:{item.price}</div>
                    <hr/>
                 </div> 
      )  })}
        </>  
    )
}