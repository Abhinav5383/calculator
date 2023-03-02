import React from 'react';
import logo from './logo.svg';
import './style.css'

function Footer() {
  return (
    <div className="wrapper">
      <h3 className="text"> Made With React </h3>
      <img src={logo} className="icon" alt="logo" />
    </div>
  )
}

export default Footer
