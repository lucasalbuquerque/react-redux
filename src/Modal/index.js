import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as ModalActions from '../store/actions/modal';

class Modal extends Component {

    render(){
        return(
            <>
            {this.props.open && (
                <section id="modal">
                    <div className="content">
                    <div className="close" onClick={() => this.props.closeModal(false)}>x</div>
                        <h2>{this.props.title}</h2>
                        <p>
                            {this.props.body}
                        </p>
                    </div>
                </section>
            )}
            </>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    closeModal: (status) => dispatch(ModalActions.close(status))
})

const mapStateToProps = state => ({
    open: state.modal.open,
    title: state.modal.title,
    body: state.modal.body
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)