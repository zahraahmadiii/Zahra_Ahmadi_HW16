import React from 'react'
import "./style.css"


function Button(props) {

  const showColor=()=>{
    props.handleBtn()
  }

  return (
    <button className='btn'onClick={showColor}>{props.btnName+' '+props.color}</button>
  )
}

export default Button
