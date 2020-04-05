import React from 'react'

function Conditional(props){
    if(props.greetings === true){
        return(
            <h2>Loading...</h2>
        )
    }else{
        return(
            <h2>Greetings...</h2>
        )
    }
}

export default Conditional