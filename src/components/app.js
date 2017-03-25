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
	}
	render(){
		return(
			<div>
				<h1>React To Do App </h1>
				<CreateTodo />
				<TodoList todos={this.state.todos}/>
			</div>
		)
	}
}

export default App