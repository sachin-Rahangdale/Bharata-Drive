import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Foot.css'

const Foot = () => {
  return (
    
    <footer>
      <div className='container'>
        <div className='footer-container'>
        <h3>Contact Us</h3>
        <p>Email : rahangdalesachin02@gmail.com</p>
        <p>phone: 7558448762</p>
        <p>Address: Gondia, Maharashtra</p>
      </div>
      <div className='footer-container'>
        <h3>Quick Links</h3>
        <ul className='list'>
          <li> <a href=''>Home</a></li>
          <li> <a href=''>About</a></li>
          <li> <a href=''>Contact Us</a></li>
          <li> <a href=''>Promotions </a></li>
        </ul>
      </div>
      <div className='footer-container'>
        <h3>Follow Us</h3>
        <ul className='social'>
        <li> <a href=''><i className='fab fa-facebook'></i></a></li>
        <li> <a href=''><i className='fab fa-instagram'></i></a></li>
        <li> <a href=''><i className='fab fa-twitter'></i></a></li>
        <li> <a href=''><i className='fab fa-linkedin'></i></a></li>
        </ul>
        
      
      </div>
      </div>
      <div className='BottomBar'>
        <p>&copy; 2026 Torque_Only</p>
      </div>
    </footer>

  )
}

export default Foot