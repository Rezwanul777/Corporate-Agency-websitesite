import React from 'react'
import { Container } from 'react-bootstrap'
import chooseImg from '../assets/images/choose.jpg.jpeg'
import * as Icon from 'react-bootstrap-icons';


const Choose = () => {
  return (
    <>
       <section id='choose-section'>
       <Container className='mt-5'>
            <div className="row">
           
                <div className="col-12 col-lg-6">
                   <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                   <div className="header-text">
                   <h1 className='text-primary '>Why choose us?</h1>
                    <h3 className='mt-2'>Our approach is pragmatic and supportive for  rigorous technical demands and integrity of accredited certification.</h3>
                    </div>
                   <div className="body-text" >
                   <div className="py-3 feature-text">
                   <p><Icon.ArrowRight size={30} style={{ 'color': "blue" }} />	Improvement focus</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "blue" }}/>Practical advice...</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "blue" }}/>Comprehensive service</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "blue" }}/>Value for money</p>
                        <p><Icon.ArrowRight size={30} style={{ 'color': "blue" }}/>The latest technical advice</p>
                       

                    
                  </div>
                   </div>
                   </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="choose-image-side"  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                      <img src={chooseImg} alt="img not found" className='rounded d-block img-fluid'/>
                    </div>
                </div>
            </div>
        </Container>
       </section>
    </>
  )
}

export default Choose