import React, {Component} from 'react';


class Todo extends Component {
	render(){
		console.log(123,this.props)
		return(
			<p data-todos-index={this.props.todo._id}>
				<span>{this.props.todo.body}</span>
			</p>
		)
	}
}

export default Todo