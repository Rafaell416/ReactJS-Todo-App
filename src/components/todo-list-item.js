import React from 'react'

class TodoListItem extends React.Component{
	render(){
		return(
				<thead>
					<tr>
						<td>{this.props.task}</td>

						<td>
							<button>Edit</button>
							<button>Delete</button>
						</td>
					</tr>
				</thead>
		)
	}
}

export default TodoListItem