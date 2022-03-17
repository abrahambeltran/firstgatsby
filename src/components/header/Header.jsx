import React from 'react'
import './header.css'
import CVB from './CVB'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Abraham Beltran</h1>
        <h5 className="text-light">Develop</h5>
        <CVB/>
      </div>

    </header>
  )
}

export default header