import React from 'react'
import Menu from '@/components/menu'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full h-16 bg-gray-100 ring-1'>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
