import React from 'react'
import "./style.css"
import BtnContainer from '../BtnContainer';
import { useState } from 'react';

function AdjustColor() {

  const [redColor,setRedColor]=useState(0)
  const [greenColor,setGreenColor]=useState(0)
  const [blueColor,setBlueColor]=useState(0)

   

  return (
    <div className='Adjust-page'>

     <BtnContainer title={'red'} setStateColor={setRedColor}/>
     <BtnContainer title={'green'} setStateColor={setGreenColor}/>
     <BtnContainer title={'blue'} setStateColor={setBlueColor}/>

        <div className='showColor' style={{backgroundColor:'rgb('+ redColor+','+ greenColor +','+ blueColor +')'}}></div>

    </div>
  )
}
export default AdjustColor;
