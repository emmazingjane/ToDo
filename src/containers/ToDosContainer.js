import React, {Component} from 'react'
import TodoModel from '../models/Todo.js'
import Todos from '../components/Todos'

class TodosContainer extends Component {
	constructor(){
		super()
		this.state = {
			todos: []
		}

	}
	componentDidMount(){

		this.fetchData()
	}
	fetchData(){
		TodoModel.all().then( (res) => {
			this.setState ({
				todos: res.data.todos,
				todo: ''
			})
			console.log(222, this.state)
		})
	}
	render(){
		return (
			<div className="todosComponent">
				<Todos
				todos = {this.state.todos} />
			</div>

		)
	}

  // render(){
  // 	TodoModel.all().then( (res) => {
  //     console.log(res);
  //   })
  //   return (
  //     <div className='todosContainer'>
  //       <h2>This is the todos container</h2>
  //     </div>
  //   )
  // }
}

export default TodosContainer