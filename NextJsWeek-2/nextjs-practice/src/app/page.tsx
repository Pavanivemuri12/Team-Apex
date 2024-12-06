"use client"
import {useRouter} from "next/navigation"
import { useState } from "react"

const Heade = () => {
  const [user,setUser] = useState(true)
  const router= useRouter()
  console.log("checking for router properties", router)

  const userHandler=()=>{
    if(user){
      router.push('/dashboard')
    }  else{
       setUser(true);
      router.push('/login')
      }
    }
  

  return (
    <>
    <div className="bg-purple-400 min-h-screen">
    
    <br></br>
    <div className='flex flex-row gap-7'>
   <h1>Hello! Welcome to  NextJs</h1>
   <br></br>
  <button onClick={userHandler}>Login</button>
    </div>
   
    </div>
    </>
  )

}
export default Heade