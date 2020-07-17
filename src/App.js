import React, { useState } from 'react';
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

let burgerSeed = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

function App() {
  // use state hook to track update of ingredient data
  const [ingredients, setIngredients] = useState(burgerSeed)
  const [burgerPaneIngredients, setBurgerPaneIngredients] = useState([])

  function addToStack(e) {
    // get burgerSeed ingredient from user click event on IngredientList li
    let result = e.target.innerText
    // add clicked burgerSeed ingredient to setBurgerPaneIngredients
    console.log([result, ...burgerPaneIngredients])
    setBurgerPaneIngredients([result, ...burgerPaneIngredients])
  }

  function clearStack(e) {
    // on click of clear button
    // set burgerPaneIngredients to empty array
    setBurgerPaneIngredients([])
  }

  return (
    <div>
      <IngredientList ingredients={ingredients} action={addToStack} />
      <hr />
      <hr />
      <h2>BURGER STACK</h2>
      <BurgerPane ingredients={burgerPaneIngredients} action={clearStack} />
    </div>
  );
}

export default App;
