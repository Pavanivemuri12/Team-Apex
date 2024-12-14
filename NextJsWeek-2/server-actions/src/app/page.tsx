
import React from 'react'

import { redirect } from 'next/navigation'
import {auth} from './auth'


const LandingPage = async() => {

const session = await auth()

if(!session){
  redirect('/api/auth/signin')
}

  return (
    <div>Welcome to My Application</div>
  )
}

export default LandingPage
