import React, { useEffect } from 'react'
import '../Q.css'
import './HeaderComponents.css'


function Home() {

  return (
    <div id='main'>
      <div className='name'>
        <h2>Welcome to Sri Lanka's Premier Computer Repairment Service</h2>
        <h1><span>MagaComputing</span> Colombo </h1>
        <p className='details'>Don't let computer problems hold you back. Contact us today to schedule your repair
         service and experience the difference with MagaComputing. 
        Fast, reliable, and professional computer repairment services, right here in Sri Lanka.</p>
        <dev className='header-btns'>
            <a href='' className='header-btn'>REPAIR NOW</a>
        </dev>
      </div>
    </div>
  )

  
}



  
export default Home;
