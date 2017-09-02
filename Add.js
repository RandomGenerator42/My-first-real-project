import React, { Component } from 'react';

class Add extends Component {
	
	send(){
		console.log("SENDING POST")
		const username= document.getElementById("username").value
    const text= document.getElementById("text").value
    const img = document.getElementById("img").value
		fetch('/api', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username:username,
    text:text,
    img:img
  })
})
	}

update(){
	console.log(document.getElementById("username").value)
}
 	
	render(){
		
		return(
			<div>
			<p onClick={this.update.bind(this)}>What is Username</p>
			<input  id="username" />
			<br/>
			<p>Text</p>
			<input  id="text"/>
			<p>Img</p>
			<input  id="img" />
			<button onClick={this.send.bind(this)}>Submit</button>
			</div>
			)
	}

}

export default Add;