import React, { useState } from 'react';
import Head from './Head';
import './header.css';
import { Link } from "react-router-dom";
function Header() {
  const [navbar, setnavbar] = useState(false)
  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className= {navbar ? "navbar" : "flex"} onClick = {() => setnavbar(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/nepal'>Nepal</Link></li>
              <li><Link to='/world'>World</Link></li>
              <li><Link to='/politics'>Politics</Link></li>
              <li><Link to='/sports'>Sports</Link></li>
              <li><Link to='/technology'>Technology</Link></li>
              <li><Link to='/entertainment'>Entertainment</Link></li>
            </ul>
            <button className='barIcon' onClick = {() => setnavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header