import React, { Component } from "react";
import Form from './Form';
import Lista from './Lista';

import { connect } from 'react-redux';

class TodoList extends Component {

    constructor(){
        super()
        this.state = {
            items: [
            ]
        }
    }
  
    render() {

      const { items } = this.props;

      return (
        <section>
          <Form />
          <Lista list={ items } />
        </section>
      );
    }
  }

  export default connect(state => ({ 
    items: state.todo.items 
  }))(TodoList)