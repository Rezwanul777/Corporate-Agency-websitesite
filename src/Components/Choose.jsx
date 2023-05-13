import React from 'react'
import { Container } from 'react-bootstrap'
import chooseImg from '../assets/images/choose.jpg'

const Choose = () => {
  return (
    <>
        <Container className='mt-5'>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="header-text">
                    <h2 className='mt-2 text-primary'>Why choose us?</h2>
                    <h3 className='mt-2'>Our approach is pragmatic and supportive whilst meeting the rigorous technical demands and integrity of accredited certification.</h3>
                    </div>
                   <div className="body-text">
                   <p>
                      We are helpful and courteous to customers, and our team is dedicated to delivering excellent service based on understanding their needs.   
                    </p>
                    <p>We aim for a culture of continuous improvement, reviewing and improving our work to add value. </p>
                    <p>
                      We constructively review client and staff feedback to reach our full potential and consistently deliver excellent services. We value and encourage professional development by providing support and learning opportunities to enable everyone to develop to their full potential.
                    </p>
                   </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="image-side">
                      <img src={chooseImg} alt="img not found" className='rounded mx-auto d-block'/>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Choose