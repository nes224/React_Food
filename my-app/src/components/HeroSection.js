import React from 'react'
import CustomImage from './Customer'
import {imgs} from '../Data'
const HeroSection = () =>{
    
    return(
        <div className = "section hero">
            <div className = "col typography">
                <h1 className = "title">What are We About</h1>
                <p className = "info">FoodiesHub is a place where you can please your sould and tummy with delicius food recepies of all cuisine And our service is absolutely free. So start exploring now.</p>
                <p className = "info-lorem">The lorem ipsum is a placeholder text used in publishing and graphic design. 
                This filler text is a short paragraph that contains all the letters of the alphabet. 
                The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content
                </p>
                <button className = "btn">explore now</button>
            </div>
            <div className = "col gallery">
                {imgs.map((src,index)=>{
                    const  {img} = src
                    return(
                        <CustomImage key = {index} imgSrc ={img}pt ={"85%"}/>
                    )
                })}
            </div>
        </div>
    )
}

export default HeroSection