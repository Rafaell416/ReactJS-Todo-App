import React from 'react'
import TodoList from './todo-list'




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
	render(){
		return(
			<h1>Todo List</h1>
			<TodoList />
		)
	}
}

export default App