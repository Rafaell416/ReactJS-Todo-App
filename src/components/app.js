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
			<div>
				<h1>React To Do App </h1>
				<TodoList />
			</div>
		)
	}
}

export default App