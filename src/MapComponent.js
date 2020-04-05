import React from 'react'

function Mapped(props){
    return(
        <div>
            <input type='checkbox'
            checked={props.mapIt.completed}

            onChange={()=> props.changedState(props.mapIt.id)}
            />

            <h3>{props.mapIt.language}</h3>
            <h3>{props.mapIt.framework}</h3>
            <h3>{props.mapIt.system}</h3>
            <h3>{props.mapIt.browser}</h3>
            <h3>{props.mapIt.designation}</h3>
        </div>
    )
}


export default Mapped