import React from 'react'

class TodoListItem extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			isEditing: false
		}

		this.onCancelClick = this.onCancelClick.bind(this)
		this.onEditClick = this.onEditClick.bind(this)
	}


	renderActionsSection(){
		if (this.state.isEditing) {
			return (
				<td>
					<button>Save</button>
					<button onClick={this.onCancelClick}>Cancel</button>
				</td>
			)
		}
		return (
			<td>
				<button onClick={this.onEditClick}>Edit</button>
				<button>Delete</button>
		   </td>
		)
	}


	render(){
		return(
			<tr>
				<td>{this.props.task}</td>
				{this.renderActionsSection()}
			</tr>
		)
	}


	onEditClick(){
		this.setState({isEditing: true})
	}

	onCancelClick(){
		this.setState({isEditing: false})
	}


}



export default TodoListItem