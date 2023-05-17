import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const servicesData = [
  {
    id: 1,
    image: require('../assets/images/9001.jpg'),
    title: 'ISO 9001:2015',
    description: 'ISO 9001 is a standard from the International Organisation for Standardisation (ISO) for a quality management system (QMS). It outlines requirements for a QMS to ensure a company produces high-quality products that meet consumer needs.'
  },
  {
    id: 2,
    image:  require('../assets/images/9001.jpg'),
    title: 'ISO 14001:2015',
    description: 'The success of an organization, the penetration of its products and services in the market, efficient internal procedures, and a healthy economic status depends essentially on how EMS requirements are consistently ensured, maintained and improved. Effective audits assist.'
  },
  {
    id: 3,
    image:  require('../assets/images/22000.jpg'),
    title: 'ISO 22000:2018',
    description: 'The consequences of unsafe food can be serious. ISO’s food safety management standards help organizations identify and control food safety hazards, at the same time as working together with other ISO management standards, such as ISO 9001. ISO 22000 provides a layer of reassurance within the global food supply chain, helping products cross borders and bringing people food that they can trust.'
  },
  {
    id: 4,
    image:  require('../assets/images/45001.jpg'),
    title: 'ISO 45001:2018',
    description: 'Occupational Health & Safety Management System (OHSMS) was introduced to enhance the OHSAS 18001 – Occupational Health & Safety Assessment Series. The ISO 45001:2018 OHSMS allows for a structured process of implementing and managing Occupational Health & Safety at your workplace.'
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
                  <div className='card shadow h-100'>
                  <div className="overflow">
                   <img src={services.image} alt="service img" className='img-fluid card-img-top'/>
                  </div>
                 <div className='service-text ps-2 '>
                 <h3>{services.title}</h3>
                  <p >{services.description}</p>
                 </div>
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