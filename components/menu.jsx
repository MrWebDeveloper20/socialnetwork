import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex flex-row gap-2'>
      <Link href={'/'} className='font-serif '>Main</Link>
      <Link href={'/contact'} className='font-serif '>Contact Us</Link>
    </div>
  )
} 

export default Menu
