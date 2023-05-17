import React from 'react'
import { Container } from 'react-bootstrap'
import chooseImg from '../assets/images/choose.jpg.jpeg'

const Choose = () => {
  return (
    <>
       <section id='choose-section'>
       <Container className='mt-5'>
            <div className="row">
                <div className="col-12 col-lg-6">
                   <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                   <div className="header-text">
                    <h1 className='mt-2 text-primary'>Why choose us?</h1>
                    <h3 className='mt-2'>Our approach is pragmatic and supportive for  rigorous technical demands and integrity of accredited certification.</h3>
                    </div>
                   <div className="body-text" >
                   <p>
                      We are helpful and courteous to customers, and our team is dedicated to delivering excellent service based on understanding their needs.   
                    </p>
                    <p>We aim for a culture of continuous improvement, reviewing and improving our work to add value. </p>
                    <p>
                      We constructively review client and staff feedback to reach our full potential and consistently deliver excellent services. We value and encourage professional development by providing support and learning opportunities to enable everyone to develop to their full potential.
                    </p>
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