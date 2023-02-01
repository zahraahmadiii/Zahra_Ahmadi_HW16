import React from 'react'
import { useState } from 'react';
import "./style.css"
import RandomColor from "../RandomColor/index"

 function Color() {

    const [cardColor,setCardColor]=useState([])


	const generateColor = () =>{
		
		const redColor= Math.floor(Math.random()*255)
		const blueColor= Math.floor(Math.random()*255)
		const greenColor= Math.floor(Math.random()*255)
		const allColors='rgb('+ redColor+','+ greenColor +','+ blueColor +')'
		
		const newCard = {
			rgb:allColors
		}
		
		setCardColor([...cardColor,newCard])
		console.log(cardColor);

	};


  return (
	
    <div className='wrapper'>
 	      <button id='btn' onClick={generateColor}>Add color</button>

		   <div className='bg-color'>
		 
		   {cardColor.map((item) =>(
			
				<RandomColor color={item} />
			))
		   }

		   </div>
		  
       
 	</div>
	
  )
}
export default Color;

