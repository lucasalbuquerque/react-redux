import React, { Component } from 'react';

import { connect } from 'react-redux';

import Modal from '../Modal'

import * as TodoActions from '../store/actions/todo'
import * as ModalActions from '../store/actions/modal'

class Form extends Component {

    state = {
        input: ''
    }

    inputChange = event => {
        this.setState({
            input: event.target.value
        })

    }

    handleSubmit(e){

        e.preventDefault(); 

        if(!this.state.input){
            this.props.openModal(true)
            this.props.updateModalContent("Preencha um todo válido!", "O todo que você tentou inserir não é um todo de verdade")
            return
        }

       this.props.addTodo({ id: Math.random(), text: this.state.input, complete: false }); 

       this.setState({
           input: ''
       })

    }
    
    render(){

        return (
            <>
            <Modal />
            <form onSubmit={(e) => { this.handleSubmit(e) }}>
                <input onChange={this.inputChange} value={this.state.input} type="text" />
                <button type="submit">Novo</button>
            </form>
            </>
        )
    }

}

const mapDispatchToProps = dispatch => ({
   addTodo: (todo) => dispatch(TodoActions.addTodo(todo)),
   openModal: (status) => dispatch(ModalActions.open(status)),
   updateModalContent: (title, body) => dispatch(ModalActions.updateModalContent(title, body))
})

export default connect(null, mapDispatchToProps)(Form)