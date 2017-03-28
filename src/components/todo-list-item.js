import React from 'react'

class TodoListItem extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			isEditing: false
		}

		this.onCancelClick = this.onCancelClick.bind(this)
		this.onEditClick = this.onEditClick.bind(this)
		this.onSaveClick = this.onSaveClick.bind(this)
	}

	renderTaskSection(){
		const {task, isCompleted} = this.props
		 const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
		}

		if(this.state.isEditing){
			return(
				<td>
					<form onSubmit={this.onSaveClick}>
						<input type="text" defaultValue={task} ref="editInput"/>
					</form>
				</td>
			)
		}

		return (
			<td style={taskStyle}  onClick={this.props.toggleTask.bind(this, task)}>
				{task}
			</td>
		)
	}


	renderActionsSection(){
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onSaveClick}>Save</button>
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
				{this.renderTaskSection()}
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

	onSaveClick(event){
		event.preventDefault()

		const oldTask = this.props.task
		const newTask = this.refs.editInput.value
		this.props.saveTask(oldTask, newTask)
		this.setState({isEditing: false})
	}


}



export default TodoListItem