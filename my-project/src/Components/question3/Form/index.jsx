import React, { useState } from 'react'
import "./style.css"
import Inputs from '../Inputs';
import {FiArrowRight} from "react-icons/fi"

function Form() {

 
  const [userName,setUserName]=useState("")
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [submitForm,setSubmitForm]=useState(false)

 
  const userNameHandler=(event)=>{
      setUserName(event.target.value)
  }
   const firstNameHandler=(event)=>{
      setFirstName(event.target.value)
  }
   const lastNameHandler=(event)=>{
      setLastName(event.target.value)
  }
   const emailHandler=(event)=>{
      setEmail(event.target.value)
  }
  const clickSignUpBtn=()=>{
    console.log({userName:userName,firstName:firstName,lastName:lastName,email:email})
    setUserName("");
    setFirstName("")
    setLastName("")
    setEmail("")

  }

  const submitHandler=(event)=>{
    event.preventDefault()
    setSubmitForm(true)
}



  return (
    <div className='container'>
      <form className='form' onSubmit={submitHandler}>
        <div className='row-one'>
        <h1>Create account</h1>
        <p>Already have an account? <a href='#'>Sign In</a></p>
        </div>
        
        <Inputs title={'User name'} handleInput={userNameHandler} state={userName}/>
        <div className='row-two'>
        <Inputs title={'First name'} handleInput={firstNameHandler} state={firstName}/>
        <Inputs title={'Last name'} handleInput={lastNameHandler} state={lastName}/>
        </div>
        
        <Inputs title={'E-mail'} handleInput={emailHandler} state={email}/>
        <FiArrowRight className='arrow'/>
        <button type="submit" onClick={clickSignUpBtn} id='btn'>Sign up </button>
      <div className='row-three'>
      <input type="checkbox"/>
      <span>I have read and agree to the <a href='#'>Terms of Service</a> </span>
      </div>
    
      </form>

    </div>
   
  )
}
export default Form;