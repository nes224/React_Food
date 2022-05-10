import React from 'react'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'
import Sidebar from './components/Sidebar'
import {links} from './Data'
import {Link} from 'react-router-dom'
const Navbar = () =>{
    const [showSidebar,setShowSidebar] = useState(false)
    const closeSidebar = () =>{
        setShowSidebar(false)
    }
    return(
        <>
            <div className = "navbar container">
                <Link to = "/" className = "logo">KoratF<span>oo</span>Hub</Link>\
                <div className = "nav-links">
                    {links.map((link) =>{
                        const {id,url,text} = link
                        return(
                            <Link to = {url} key ={id}>{text}</Link>
                        )
                    })}
                    {/* <a href = "#" className = "active">Home</a>
                    <a href = "#">Recipes</a>
                    <a href = "#">Setting</a> */}
                </div>
                <div className = "sidebar-btn">
                    <button onClick = {() => setShowSidebar(true)} className = "nav-toggle">
                        <FaBars />
                    </button>
                </div>
            </div>
            {showSidebar && <Sidebar close = {closeSidebar}links = {links} />}
        </>
    )
}

export default Navbar