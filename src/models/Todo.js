import axios from 'axios';

class TodoModel {
  static all(){
    let request = axios.get("http://10.1.6.96:8080/todos")
    return request
  }

  static create(todo) {
  	let request = axios.post("http://10.1.6.96:8080/todos", todo)
  	return request
  }

  static delete(todo){
  	let request = axios.delete(`http://10.1.6.96:8080/todos/${todo._id}`)
  	return request
  }
}

export default TodoModel