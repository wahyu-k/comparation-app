import React, { Fragment } from 'react'
//import axios from 'axios'
//import logo from './logo.svg'
import './App.css'

import Input from './components/Input'
import Admin from './components/Admin'

function App() {
  return (
    <Fragment>
      <div className="container">
        <Input />
        <Admin />
      </div>
    </Fragment>
  )
}

export default App
