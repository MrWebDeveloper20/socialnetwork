import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex flex-row gap-2 my-2 text-xl text-blue-600 font-light'>
      <Link href={'/en/'} className='font-serif '>Main</Link>
      <Link href={'/en/contact'} className='font-serif '>ContactUs</Link>
      <Link href={'/en/about'} className='font-serif '>AboutUs</Link>
    </div>
  )
} 

export default Menu
