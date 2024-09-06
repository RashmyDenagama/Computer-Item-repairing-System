import React from 'react'
import '../Q.css'

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='Enter Name' name='required'/>
            <input type="email" placeholder='Enter Email ' Type your E-mail='required'/>
            <textarea placeholder='Write here...........' name='massage'></textarea>
            <input type='submit' value='Sent'/>
        </form>
      
    </div>
  )
}

export default Contact
