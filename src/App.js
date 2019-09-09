import React, {Component} from "react"
import "./App.css"
import TodoData from "./TodoData"
import TodoList from "./TodoList"

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			todos: TodoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
  
		const todoItems = this.state.todos.map(data => <TodoList handleChange={this.handleChange} key={data.id} item={data} />)

		return <div className='todo-list'>{todoItems}</div>    
	}
}

export default App
