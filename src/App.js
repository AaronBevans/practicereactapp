//Functional parent component page.

import React from 'react'
import Child from './ChildComponent'
import dataArray from './dataArray'
import Mapped from './MapComponent'
import ClassChild from './ClassChildComponent'
import Conditional from './ConditionalComp'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      data:dataArray,//combines state and props rendering.
      greetings:true
    }
    //bind!
    this.changedState = this.changedState.bind(this)
  }

//method that changes state once checkbox is checked.
   changedState(id){
     this.setState(prevState=>{
       const updatedData = prevState.data.map(dataItems=>{
         if(dataItems.id === id){
           return{
             ...dataItems,
             completed:!dataItems.completed
           }
         }
         return dataItems
       })
       return{
         data:updatedData
       }
     })
   }
         
  //lifecycle method that changes state for 
  componentDidMount(){
    setTimeout(() => {
        this.setState({
          greetings:false
        })
    }, 1500);
  }

    render(){

    const dataComponents = this.state.data.map(items=> 
    <Mapped key={items.id} 
    mapIt={items}//mapping array items

    changedState={this.changedState}
    />)

  
    return(
      <div>
          <Conditional greetings={this.state.greetings}/>

          <br/>

          <Child
            child = {{
              specialized:'User Interfaces'
            }}
          />

          {dataComponents}

          <ClassChild ReactJS = 'JavaScript Libraries & frameworks'/>

      </div>
    )
  }
}

export default App