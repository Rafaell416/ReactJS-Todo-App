import React from 'react'


class CreateTodo extends React.Component{

	constructor(){
		super()
		this.handleCreate = this.handleCreate.bind(this)
	}

	render() {
   	return (
      	<form onSubmit={this.handleCreate}>
         	<input type="text" placeholder="What do I need to do?" ref="createInput" />
         	<button>Create</button>
         </form>
      )
	}

	handleCreate(event){
		event.preventDefault()

		this.props.createTask(this.refs.createInput.value)
		this.refs.createInput.value = ''
	}
}

export default CreateTodo