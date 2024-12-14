
import React from 'react'

import { redirect } from 'next/navigation'
import {auth} from './auth'
import Link from 'next/link'


const LandingPage = async() => {

const session = await auth()

if(!session){
  redirect('api/auth/signin')
}

  return (
    <div className=''>
      <div className='text-xl'>
    Welcome to My Application
</div>
   <Link href="/api/auth/signout">
    <button className='bg-red-500 hover:bg-red-700 text-white text-xl'>
    Logout
    </button>
    </Link>
    </div>
    
  )
}

export default LandingPage
