import React from 'react'
import Header from './(components)/header'
import Content from './(components)/content'
import Footer from './(components)/Footer'

const Home = () => {
  return (
    <div className='w-[100%] max-w-[1440px] mx-auto'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home