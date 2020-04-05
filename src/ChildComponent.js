//functional child component
import React from 'react'

function Child (props){

    return(
        <div>
            <h2>Front-End Software Engineer</h2>
            <h3>{props.child.specialized}</h3>
        </div>
    )
}

export default Child