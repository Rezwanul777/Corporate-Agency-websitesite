import React from 'react'
import Banner from '../../Components/Banner'
import Choose from '../../Components/Choose'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Testimonial from '../../Components/Testimonial'


const Home = () => {
  return (
   <>
    <main>
        <Banner/>
        <Choose/>
        <Services/>
        <Team/>
         <Testimonial/> 
    </main>
   </>
  )
}

export default Home