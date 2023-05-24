import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
        <div className='container flexSB top-nav'>
          
            <div>
            <span>Stay Connected</span>
            </div>

            <div className='email'>
           
            <span>enquries@qascertification.com</span>
            </div>

          <div className='social d-flex gap-4'>
          <a  className="btn btn-primary">Get Qoute <i className="fas fa-chevron-right"></i></a>
          <a  className="btn btn-primary">Verification <i className="fas fa-chevron-right"></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head