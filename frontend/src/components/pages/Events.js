import React, { Component } from 'react';
import Modal from '../modal/Modal';
import Backdrop from '../Backdrop/Backdrop';
import "./Events.css"

export default class Events extends Component {

  state = {
    creating: false
  };
  createEventHandler = () => {
    this.setState({creating: true});
  }
  modalConfirmHandler = () => {

  }
  modalCancelHandler = () => {
    this.setState({creating: false});
  }

  render() {
    return (
      <React.Fragment>
        {this.state.creating && <Backdrop />}
        {this.state.creating && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
          <p>Modal content</p>
        </Modal>}
      <div className="events-control">
      <h3>Share your own events</h3>
        <button className="btn" onClick={this.createEventHandler}>Create Event</button>
      </div>
      </React.Fragment>
    )
  }
}
