import React from 'react'
import "./Intro.scss"

const intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className='i-intro-wrapper'>
        <p className='i-greeting'>Hi there, I'm</p>
        <br></br>
        <p className='i-name'>Xinyi Liu</p>
        <br></br>
        <p className='i-title-item'>A software engineering student from RIT</p>
      </div>
      <div className='imgContainer'>
        <img src={require("../../img/My_pic.png")} alt=''/>
      </div>
    </div>
  )
}

export default intro
