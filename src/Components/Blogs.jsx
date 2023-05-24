import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'


const blogData = [
    {
      id: 1,
      image: require('../assets/images/9001.jpg'),
      time: '22 January 2023',
      title: 'Coffee Lovers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/22000.jpg'),
      time: '10 Nov 2022',
      title: 'Tips for UI Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/45001.jpg'),
      time: '07 Nov 2016',
      title: 'Beautiful Day',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.twitter.com'
    }
  ]

const Blogs = () => {
  return (
    <>
         <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col md={4} sm={1} key={blog.id}>
                  <div className='holder'>
                    <Card >
                     <div className='overflow card'>
                     <Card.Img variant="top" src={blog.image} className='d-block w-100'/>
                     </div>
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Blogs
