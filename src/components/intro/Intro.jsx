import React from 'react'
import "./Intro.scss"

const intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className='i-intro-wrapper'>
        <p className='i-greeting'>Hi, my name is</p>
        <br></br>
        <p className='i-name'>Xinyi Liu</p>
        <br></br>
        <p className='i-title-item'>A Software Engineering student from RIT</p>
      </div>
    </div>
  )
}

export default intro
