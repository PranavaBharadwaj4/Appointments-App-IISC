import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBrands} from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'

function DoctorsAuthView() {
  return (
    <>
    
  <div className='doc-auth-container'>
    <h1>Hi Doc!</h1>
    <h2>Mind Logging In?</h2>
    
    <a href="http://127.0.0.1:8000/accounts/google/login/?process=login"><div className="main-btn" > Google 
    </div>
    </a>
  </div>
  <Footer/>

    </>

  )
}

export default DoctorsAuthView