import React from 'react'
import "./footer.css"

export const blog = [
    {
      id: 1,
      type: "admin",
      date: "JAN. 18, 2021",
      com: "3 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: require('../../assets/images/22000.jpg'),
    },
    {
      id: 2,
      type: "admin",
      date: "API. 25, 2022",
      com: "5 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: require('../../assets/images/45001.jpg'),
    },
    {
      id: 3,
      type: "user",
      date: "MAY. 15, 2022",
      com: "10 COMMENTS ",
      title: "Build your Dream Software & Engineering Career",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      cover: require('../../assets/images/9001.jpg'),
    },
    
  ]


const Footer = () => {
  return (
   <>
        <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row-1'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row-2'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h3>QAS Certification</h3>
            <span>Global Certification body</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Training</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='img not found' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 30)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +11111111111111
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@qascertification.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This website is made with <i className='fa fa-heart'></i> by @Rezwan
        </p>
      </div>
    </>
   
  )
}

export default Footer