import React from 'react'
import "./Project.scss"

export default function Project() {
  return (
    <div className='project' id='project'>
      <div className="slider">
        <div className='container'>
          <div className="item">
            <div className="left">
              <p className='depict'>Personal project</p><br/>
              <h2 className='project_into'>What to eat</h2>
              <p className='project_into'>Let the generator help you to decide your daily meals.</p>
            </div>
            <div className="right">
              <img src={require("../../img/Project_what_to_eat.png")} alt="project 1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
