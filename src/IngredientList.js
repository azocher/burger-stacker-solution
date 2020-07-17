import React from 'react'
import Ingredient from './Ingredient'

function IngredientList(props) {
    return (
        <div>
            <ul>
                {props.ingredients.map((ingredient) => {
                    return (
                    <li onClick={(e) => props.action(e)}>
                        <Ingredient ingredient={ingredient.name} />
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default IngredientList