import React from 'react'
import Image from 'next/image'
//import images from '../../../public/images.jpeg'
const page = () => {
  return (
    <>
        <div className='bg-purple-400 min-h-screen'>
    <div>Sunday Page</div>
    <p>Sunday is a Holiday</p>
    <img src='images.jpeg' alt='not avail'/>
    <hr/>
    <Image src="https://theseer.in/wp-content/uploads/2020/05/heidi-1024x576-1.jpg" alt='img not available'  width={1024} // Image width
        height={576} // Image height
        className="rounded-md border border-gray-300"/>
    </div>
    </>
    )
}

export default page