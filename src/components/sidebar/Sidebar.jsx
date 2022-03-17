import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import './sidebar.css'

const sidebar = () => {
  return (
    <div className="sidebar">
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin/></a>
        <a href="#contact" className='scroll_down'>abraham.beltran.2001@gmail.com</a>
    </div>
  )
}

export default sidebar;