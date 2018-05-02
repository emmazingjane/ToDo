import axios from 'axios';

class TodoModel {
  static all(){
    let request = axios.get("http://10.1.6.96:8080/todos")
    return request
  }
}

export default TodoModel