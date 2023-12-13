"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../(assets)/logo.png'
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    function handleShowMenu() {
        setShowMenu(!showMenu)
    }

      return (
    <header className='bg-[#121841] p-4 h-[10vh] sticky w-[100%] top-0 flex items-center'>
        <div className='lg:flex justify-between items-center w-[90%] mx-auto hidden'>
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
        <div className='flex justify-between items-center w-[100%] mx-auto lg:hidden relative'>
            <Image
            src={logo.src} 
            alt=''
            width={50}
            height={50}
            />
            <RiMenu3Fill onClick={handleShowMenu} className="text-white text-[2rem]" />
     {showMenu && (   <nav className='text-gray-400 flex flex-col absolute top-16 bg-black text-center w-[100%] p-8'>
            <Link href="" className='mb-4 hover:text-white'>Features</Link>
            <Link href="" className='mb-4 hover:text-white'>About</Link>
            <Link href="" className='mb-4 hover:text-white'>Features</Link>
            <button className='bg-[#4B80F7] text-white px-8 py-2 rounded-full hover:bg-white hover:text-[#4B80F7]'>Get Started</button>
        </nav>)}
        </div>
    </header>
  )
}

export default Header