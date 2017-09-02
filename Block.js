import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

class Block extends Component {
	constructor(props){
    super(props)
    this.state = {
    date : new Date(this.props.date),
    likes : this.props.likes,
    style : "glyphicon glyphicon-heart heart" 
}
  }

  heart(e){
  	fetch('/heart', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: e,
  })

})
.then(res=>console.log(res))
this.setState({likes:this.state.likes + 1,style:"glyphicon glyphicon-heart blheart" })
}

  render() {
  	console.log(this.props.id)
    return (
      <div className="border">

      <img src={this.props.img}></img>
      <br/>
      <p>{this.props.text}</p>
      
      <h>uploaded by <strong>{this.props.name}</strong> at {this.state.date.getFullYear()}/{this.state.date.getMonth()}/{this.state.date.getDate()}</h>
   		<br/>
       <h>{this.state.likes}<span className={this.state.style} onClick={this.heart.bind(this,this.props.id)}></span> <a >comments</a></h>
      </div>
    );
  }
}

export default Block;
