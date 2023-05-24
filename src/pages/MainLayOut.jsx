import React from 'react'
import Header from '../Components/Header'
import Footer from './common/Footer'

const MainLayOut = ({children}) => {
  return (
   <>
     <Header />
      <main className='min-h-[50vh]'>{children}</main>
      <Footer />
   </>
  )
}

export default MainLayOut