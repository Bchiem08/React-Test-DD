import React, { Component } from 'react';
import Appointment from './Components/Appointment';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Appointment List</h1>
        <Appointment />
      </div>
    )
  }
}
