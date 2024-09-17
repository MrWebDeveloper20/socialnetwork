import React from 'react'
import Menu from '@/components/menu'
import Menutools from '@/components/menutools'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-fit bg-gray-100 ring-1'>
      <div className="menu">
        <Menu />
      </div>
      <div className="tool">
        <Menutools />
      </div>
    </div>
  )
}

export default Navbar
