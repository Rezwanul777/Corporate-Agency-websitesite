import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const cardDetails = [

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
  
const CardDetails = () => {
  const { id } = useParams();  
  const { title, description, image } = cardDetails[id];
  return (

    <>
    <Container>
      <h1 className='mt-4'>{title}</h1>
      <Row>
        <Col md={10} sm={1}>
        <Card style={{width:"18rem"}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card> 
        </Col>
      </Row>

    </Container>
     
    
  </>
  )
}

export default CardDetails