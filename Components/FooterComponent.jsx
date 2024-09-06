import React from 'react'
import './footer.css';

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>
              <strong>Telephone:</strong> +94 123456789<br />
              <strong>Email:</strong> info@magacomputing.lk<br />
              <strong>Location:</strong> 123 Main Street, Colombo, Sri Lanka
            </p>
          </div>
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              MagaComputing is Sri Lanka's premier computer repair service.
              </p>
          </div>
          
        </div>
      </div>
    </footer>

    </div>
  )
}

export default FooterComponent
