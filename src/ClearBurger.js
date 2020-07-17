import React from 'react'

function ClearBurger(props) {
    return (
        <div>
            <button onClick={(e) => props.action(e)}>
                🍔 EAT ME
            </button>
        </div>
    )
}

export default ClearBurger