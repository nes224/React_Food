import React from 'react'
import './RecipesCard.scss'
import {menus} from '../Data'
const RecipesCard = ({menu}) =>{
    const {title,detail,img,footer} = menu
    return(
        <div className = "RecipesCard">
            <img src = {img} />
            <div className = "body-card">
                <h3>{title}</h3>
                <p>{detail}</p>
                <footer>{footer}</footer>
            </div>
        </div>
    )
}

export default RecipesCard