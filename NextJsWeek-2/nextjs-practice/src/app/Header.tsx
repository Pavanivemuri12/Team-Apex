import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className='flex flex-row bg-purple-500 gap-7'>
    <Link href='/Sunday' >
        <div className='bg-black text-white'>Sunday</div>
    </Link>
  <Link href='/Monday'>
    <div className='bg-white text-black'>Monday</div>
  </Link>

  <Link href='/Tuesday'>
  <div className='bg-black text-white'>
    Tuesday
    </div></Link>

    <Link href='/DAY-1'>
  <div className='bg-white text-black'>
    DAY-1
    </div></Link>
    </div>
    </>
  )
}

export default Header