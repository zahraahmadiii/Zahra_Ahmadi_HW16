import React from 'react'
import "./style.css"
import Inputs from '../Inputs';
import {FiArrowRight} from "react-icons/fi"

function Form() {

  return (
    <div className='container'>
      <form className='form'>
        <div className='row-one'>
        <h1>Create account</h1>
        <p>Already have an account? <a href='#'>Sign In</a></p>
        </div>
        
        <Inputs/>
        <div className='row-two'>
        <Inputs/>
        <Inputs/>
        </div>
        
        <Inputs/>
        <FiArrowRight className='arrow'/>
        <button type="submit" id='btn'>Sign up </button>
      <div className='row-three'>
      <input type="checkbox"/>
      <span>I have read and agree to the <a href='#'>Terms of Service</a> </span>
      </div>
    
      </form>

    </div>
   
  )
}
export default Form;