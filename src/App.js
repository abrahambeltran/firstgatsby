import React from 'react'
import './App.css'
import Navbar from './components/nav'
import{BrowserRouter as Router} from 'react-router-dom'

const App = (props, state) => {
  return (
    <Router>
      <Navbar/>
    </Router>
  )
}

export default App;