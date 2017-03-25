import React from 'react'
import TodoList from './todo-list'
import CreateTodo from './create-todo'





const todos = [
	{
		task: 'Make app',
		isCompleted: false
	},
	{
		task: 'Eat Breakfast',
		isCompleted: true
	}
]



class App extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			todos
		}

		this.createTask = this.createTask.bind(this)
	}
	render(){
		return(
			<div>
				<h1>React To Do App </h1>
				<CreateTodo createTask={this.createTask}/>
				<TodoList todos={this.state.todos}/>
			</div>
		)
	}

	createTask(task){
		this.state.todos.push({
			task,
			isCompleted: false
		})
		this.setState({
			todos: this.state.todos
		})
	}
}

export default App