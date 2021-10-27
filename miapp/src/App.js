// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      newTask:"Aca va a ir el estado cuando lo cambiemos",
      numero:0
    }
    this.cont = 1
    this.handleTaskChange=this.handleTaskChange.bind(this)
  }
  handleTaskChange(evt){
    this.cont++
    this.setState({newTask: evt.target.value,numero:this.cont})
  }
  render(){
    return(
      <div className="container bg-dark">
        <div className="row ">
          <h1 className="text-center text-white">Hola Mundo!</h1>
          <span className="text-white">{this.state.numero}</span>
          <div className="d-flex justify-content-center">
            <input onChange={this.handleTaskChange} type="text" className = "w-25"></input>
          </div>
          
          <h2 className="text-white text-center">{this.state.newTask}</h2>
        </div>
      </div>
    );
  }
}

export default App;
