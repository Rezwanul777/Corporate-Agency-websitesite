import React from 'react'
import { Carousel, Container } from 'react-bootstrap';

var testimonialsData = [
    {
      id: 1,
      image:require('../assets/images/review1.jpg'),
      name: 'John Wills',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
      designation: 'Manager'
    },
    {
      id: 2,
      image:require('../assets/images/review2.jpg'),
      name: 'Jasmine Perry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
      designation: 'Accountant'
    },
    {
      id: 3,
      image:require('../assets/images/review3.jpg'),
      name: 'Rocky Johnson',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
      designation: 'CEO'
    }
  ]

const Testimonial = () => {
  return (
    <>
         <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                  <cite className='testimonial mb-2'>
                    <img src={testimonials.image} alt="testimonialimage" className='img-fluid'/>
                      <span className='name py-2'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                    <p className='mt-2'>{testimonials.description}</p>
                   
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
    </>
  )
}

export default Testimonial

{/* <div class="review">
<div class="person">
    <img src="img/team_1.jpg" alt="">
    <h5>Ralph Edwards</h5>
    <small>Market Development Manager</small>
</div> */}