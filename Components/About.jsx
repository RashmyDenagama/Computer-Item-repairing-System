import React from 'react'
import aboutimage from '../images/about.jpg'
import '../Q.css'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>
            We are the best on-site computer repair service provider in colombo area.
            </h1>
            <p>
            Our certified technicians provide you with the most comprehensive on-site PC Repair Services. We believe that being fair and honest is the right way to do business and promote long-term business relationship with our customers. We are dedicated to offer the most friendly, reliable and honest service and support availbable anywhere to our customer.We providing repair service and support in most of colombo city area.
            </p>
            <button>READ MORE</button>
        </div>
      
    </div>
  )
}

export default About
