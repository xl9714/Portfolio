import React from 'react'
import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src={require('../../img/contact.jpg')} alt='contact'/>
      </div>
      <div className='right'>
        {/* <h2>Contact.</h2>
        <form>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
        </form> */}
        <a href='https://github.com/xl9714'><FontAwesomeIcon icon={faGithub} className='brand_icon'/>GitHub</a>
        <a href='https://www.linkedin.com/in/xinyi-liu-0083131a4/'><FontAwesomeIcon icon={faLinkedin} className='brand_icon'/>LinkedIn</a>
        <FontAwesomeIcon icon={faPhone} className='icon'/>
        <span>(917) 254-8161</span>
        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
        <span>xl9714@rit.edu</span>
      </div>
    </div>
  )
}
