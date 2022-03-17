import React from 'react'
import CV from '../../assets/resumeexample.pdf'

const CVB = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>download </a>
        <a href="#contact" className='btn btn-primary'>Contact </a>
    </div>
  )
}

export default CVB