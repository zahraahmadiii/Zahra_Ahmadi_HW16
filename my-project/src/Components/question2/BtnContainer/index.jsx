import React from 'react'
import "./style.css"
import Button from '../Buttons'


function BtnContainer(props) {

    const handleIncreaseColor=()=>{

        props.setStateColor(prev=> prev+50)
    }

    const handleDecreaseColor=()=>{

        props.setStateColor(prev=> prev-50)
    }



  return (
      <div className='btns-container'>
        <p>{props.title}</p>
        <Button color={props.title} btnName={'increase'} handleBtn={handleIncreaseColor}></Button>
        <Button color={props.title} btnName={'decrease'} handleBtn={handleDecreaseColor}></Button>
     </div>
    
  )
}

export default BtnContainer;
