import React from 'react'
import Previous from '../components/Previous'
import {FaSearch} from 'react-icons/fa'
import RecipesCard from '../components/RecipesCard'
import './Menu.scss'
import {menus} from '../Data'
const Recipes = () =>{


    return(
        <>
            <Previous />
            <div className = "recipes-container">
                {menus.map((menu,index) =>{
                    return(
                        <RecipesCard key ={index} menu = {menu}/>
                    )
                })}
            </div>
        </>
    )
}

export default Recipes