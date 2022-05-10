import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const Footer = () =>{
    const fontStyleFacebook = {color:'#1e90ff'}
    const fontStylesTwitter = {color:'#00bfff'}
    const fontStylesIg = {color:'#FF1493'}
    return(
        <div className = "footer">
            <div className = "aboutMe">
                <h3 className = "aboutMe-Header">Nes.Com</h3>
                <p>FullStack Developer</p>
                <p>React Node.Js</p>
                <p>@2022 | All Rights Reserved</p>
            </div>
            <div className = "contact-me">
                <h3 className = "aboutMe-Header">Contact Me</h3>
                <p>nesTest@hotmail.com</p>
                <p>+342-5324-9454</p>
                <p>2393 Street NYC</p>
            </div>
            <div className = "Social-container">
                <h3 className = "aboutMe-Header">Socials</h3>
                <p class="social-text">Facebook <span><FaFacebook style = {fontStyleFacebook}/></span></p>
                <p class="social-text">Twitter <span><FaTwitter style = {fontStylesTwitter}/></span></p>
                <p class="social-text">Instagram<span><FaInstagram style= {fontStylesIg}/></span></p>
            </div>
        </div>
    )
}

export default Footer