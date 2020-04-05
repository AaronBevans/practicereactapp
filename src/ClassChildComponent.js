//class based component that renders props
import React from 'react'

class ClassChild extends React.Component{
    render(){
        return(
            <div>
            <h3>{this.props.ReactJS}</h3>
            </div>
        )
    }
}


export default ClassChild