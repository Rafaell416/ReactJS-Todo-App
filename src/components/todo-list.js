import React from 'react'
import TodoListHeader from './todo-list-header'
import _ from 'lodash'



class TodoList extends React.Component{

	renderItems(){
		return _.map()
	}

	render(){
		console.log(this.props.todos)
		return(
			<table>
				<TodoListHeader />
				<tr>
					{this.renderItems()}
				</tr>
			</table>
		)
	}
}

export default TodoList