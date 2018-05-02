import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
	render(){
		let todos =  this.props.todos.map( (todo) => {
			return (
				<Todo
					key = {todo._id}
					todo= {todo} />
			)
		})
					console.log(456, todos)

	return(
		<div className= "todos">
			{todos}
		</div>
	)
	}
}

export default Todos