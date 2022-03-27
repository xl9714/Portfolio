import React from 'react'
import "./Topbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Topbar() {
  return (
    <div className='topbar' id='topbar'>
        <div className='wrapper'>
            <div className='left'>
                <a href='#intro' className='logo'>x_x</a>
                <div className="itemContainer">
                  <a href='https://github.com/xl9714'><FontAwesomeIcon icon={faGithub} className='brand_icon'/></a>
                  <a href='https://www.linkedin.com/in/xinyi-liu-0083131a4/'><FontAwesomeIcon icon={faLinkedin} className='brand_icon'/></a>
                  <FontAwesomeIcon icon={faPhone} className='icon'/>
                  <span>(917) 254-8161</span>
                  <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                  <span>xl9714@rit.edu</span>
                </div>
            </div>
            <div className='right'>
              <div className='selection'>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
            </div>
        </div>
    </div>
  )
}
