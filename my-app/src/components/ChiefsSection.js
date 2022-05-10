import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import {chiefsSections} from '../Data'

const Chiefs = () =>{
    const fontStyleFacebook = {color:'#1e90ff'}
    const fontStylesTwitter = {color:'#00bfff'}
    const fontStylesIg = {color:'#FF1493'}
    return(
        <>  
            <div className = "section-cheif">
                {chiefsSections.map((chiefsSection,index) =>{
                    const {name,recipes,img,cuisine} = chiefsSection
                    return(
                        <article  className='menu-item' key = {index}>
                            <img src = {img} alt ="" />
                            <div className= "set-item">
                                <h3 className = "chief-card-name">{name}</h3>
                                <p className = "chief-recipe-count">Recipes: <b>{recipes}</b></p>
                                <p className = "chief-cuisine">Cuisine: <b>{cuisine}</b></p>
                                <p className = "chief-icons"><span><FaFacebook style = {fontStyleFacebook}/><FaTwitter style = {fontStylesTwitter}/><FaInstagram style= {fontStylesIg}/></span></p>
                            </div>
                        </article>

                    )
                })}
            </div>
        </>
    )
}

export default Chiefs