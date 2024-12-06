import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className='flex flex-row bg-black gap-7'>
    <Link href='/Sunday' >
        <div className='bg-black text-white'>Sunday</div>
    </Link>
  <Link href='/Monday'>
    <div className='bg-black text-white'>Monday</div>
  </Link>

  <Link href='/Tuesday'>
  <div className='bg-black text-white'>
    Tuesday
    </div></Link>

    <Link href='/DAY-1'>
  <div className='bg-black text-white'>
    DAY-1
    </div></Link>
    </div>
    </>
  )
}

export default Header