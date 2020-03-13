import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as TodoActions from '../store/actions/todo'

import Button from '../Button'

class Lista extends Component {

    render(){

      const { toggleTodo, deleteTodo } = this.props

        return(
            <ul>
              {this.props.list.length > 0 && (
                  this.props.list.map(i => (
                   
                    <li key={i.id}>
                       {i.complete ? <s> {i.text} </s> : i.text}
                        <div>
                          <Button text="Toggle" onClick={() => toggleTodo(i)} />
                          <Button text="Delete" onClick={() => deleteTodo(i)} />
                        </div>
                    </li>
                ))
              )}
          </ul>
        )
          
    }

}

const mapDispatchToProps = dispatch => ({
  toggleTodo: (i) => dispatch(TodoActions.toggleTodo(i)),
  deleteTodo: (i) => dispatch(TodoActions.deleteTodo(i))
})

export default connect(null, mapDispatchToProps)(Lista)