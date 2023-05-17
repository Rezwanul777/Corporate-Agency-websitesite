import React from 'react'
import { Carousel } from 'react-bootstrap';

const heroData = [
    {
      id: 1,
      image: require('../assets/images/slide01.jpg'),
      title: 'ASCB Accredited Certification ',
      description: 'ISO 9001, ISO 14001, ISO 22000, ISO 45001',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/slide02.jpg'),
      title: 'We are hiring auditors worldwide',
      description: 'Global Partnership Opportunity Available.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/slide03.jpg'),
      title: 'Sustainability through',
      description: 'Continual Improvement',
      link: 'https://www.twitter.com'
    }
  ]

const Banner = () => {
    
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h1 className='caption-text'>{hero.title}</h1>
                    <h2>{hero.description}</h2>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  )
}

export default Banner