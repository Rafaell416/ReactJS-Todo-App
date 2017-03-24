import React from 'react'
import _ from 'lodash'
import TodoListHeader from './todo-list-header'
import TodoListItem from './todo-list-item'



class TodoList extends React.Component{

	renderItems(){
		return _.map(this.props.todos, (todo, index) => <TodoListItem key={index 

		}{...todo} />)
	}

	render(){
		console.log(this.props.todos)
		return(
			<table>
				<TodoListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}

export default TodoList