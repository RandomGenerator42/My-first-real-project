import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from "./Block"
import Add from './Add'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {logedin:false}
  }

  submit(){

    fetch("/newaccount")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      console.log(document.getElementById('username').value)
      let arr = data.filter(event=>{

        return (event.username==document.getElementById('username').value&&event.password==document.getElementById('password').value)
      })
      console.log(arr.length)
      console.log(arr)
      if(arr.length==1){
        this.setState({logedin:true})
      }
      else{
        alert("wrong useranme or password")
      }
    })
  }

  componentDidMount(){
    fetch("/api")
    .then(response=>response.json())
    .then(data=> this.setState({data: data}))
    .catch(error=>console.log(error+' 1'))
  }
  
  render() {
    if(!this.state.logedin){
      return (
        <div>
        <input id="username"/>
        <input id='password' type="password"/>
        <button onClick={this.submit.bind(this)}>Submit</button>
        </div>
        )
    }
    if(!this.state.data){
    return <p>loading</p>
  }
    return (

      <div>
      <hr/>
      <Add/>
      {
        this.state.data.map((data,i)=>{
        return(
          <div key={i+"a"}>
          <Block name={data.username} img={data.img} date={data.date} text={data.text} likes={data.likes} comments={data.comments} key={i} id={data._id}></Block>
        <br key={i+"b"}/>
        </div>
        )
      })
    }
      </div>
    );
  }
}

export default App;
