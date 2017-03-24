import React from 'react'

class TodoList extends React.Component{
	render(){
		return(
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Action</th>
					</tr>
				</thead>
			</table>
		)
	}
}

export default TodoList