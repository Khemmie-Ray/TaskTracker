import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../(assets)/logo.png'

const Header = () => {
  return (
    <header className='bg-[#121841] p-4 h-[10vh] sticky w-[100%] top-0 flex items-center'>
        <div className='flex justify-between items-center w-[90%] mx-auto'>
            <Image
            src={logo.src} 
            alt=''
            width={50}
            height={50}
            />
        <nav className='text-gray-400'>
            <Link href="" className='mr-8 hover:text-white'>Features</Link>
            <Link href="" className='mr-8 hover:text-white'>About</Link>
            <Link href="" className='mr-8 hover:text-white'>Features</Link>
        <button className='bg-[#4B80F7] text-white px-8 py-2 rounded-full hover:bg-white hover:text-[#4B80F7]'>Get Started</button>
        </nav>
        </div>
    </header>
  )
}

export default Header