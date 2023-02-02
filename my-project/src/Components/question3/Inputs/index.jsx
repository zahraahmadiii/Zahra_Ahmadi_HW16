import React from 'react'
import "./style.css"
function Inputs(props) {

  const changeInputHandler=(event)=>{
     props.handleInput(event)
  }
  return (
     
 <input type="text" 
 className='all-inputs'
 placeholder={props.title}
 onChange={changeInputHandler}
 value={props.state}
 />

  )
}
export default Inputs;