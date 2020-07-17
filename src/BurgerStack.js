import React from 'react'
import Ingredient from './Ingredient'

function BurgerStack(props) {
    return (
        <div>
            <ul>
                {props.ingredients.map(ingredient => {
                    return (
                        <li>
                            <Ingredient ingredient={ingredient} />
                        </li>
                )})}
            </ul>
        </div>
    )
}

export default BurgerStack