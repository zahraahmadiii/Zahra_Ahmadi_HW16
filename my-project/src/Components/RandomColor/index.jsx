import React from 'react'
import "./style.css"

 const RandomColor=(props)=> {
console.log(props);
  
  return (

    <div className='all-colors'>
    <div style={{backgroundColor:props.color.rgb}} className='color' ></div>
      <p id='rgb'>{props.color.rgb}</p>
    </div>
  )
          

}

export default RandomColor;





