import React from 'react'
import Banner from '../../Components/Banner'
import Choose from '../../Components/Choose'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Testimonial from '../../Components/Testimonial'
import Blogs from '../../Components/Blogs'
import Verification from '../../Components/Verification'
import Footer from '../common/Footer'


const Home = () => {
  return (
   <>
    <main>
        <Banner/>
        <Choose/>
        <Services/>
        <Team/>
         <Testimonial/> 
         <Blogs/>
         <Verification/>
         <Footer/>
    </main>
   </>
  )
}

export default Home