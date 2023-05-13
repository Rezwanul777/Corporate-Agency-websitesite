import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const servicesData = [
  {
    id: 1,
    image: require('../assets/images/9001.jpg'),
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 2,
    image:  require('../assets/images/9001.jpg'),
    title: 'Creative Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 3,
    image:  require('../assets/images/9001.jpg'),
    title: 'SEO Optimized',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 4,
    image:  require('../assets/images/9001.jpg'),
    title: 'Retina Ready',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 5,
    image:  require('../assets/images/9001.jpg'),
    title: 'Brower Compatibility',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  },
  {
    id: 6,
    image:  require('../assets/images/9001.jpg'),
    title: 'Customer Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
  }
]

const Services = () => {
  return (
   <>
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row className='g-4'>
          {
            servicesData.map(services => {
              return (
                <Col md={4} sm={1} className='holder' key={services.id}>
                  <div className='card shadow'>
                  <div className="overflow">
                   <img src={services.image} alt="service img" className='img-fluid card-img-top'/>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
   </>
  )
}

export default Services