import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = ({links,close}) =>{
    console.log(links)
    return(
        <>
            <div className = "sidebar show-sidebar" onClick ={close}>
                {links.map((link) =>{
                    const {id,url,text,icons} = link
                    return(
                        <Link className = "sidebar-link " to = {url} key={id}>{icons}<span>{text}</span></Link>

                    )
                })}
            </div>
        </>
    )
}

export default Sidebar