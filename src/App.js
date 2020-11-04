import React, { Component } from 'react';
import Appointment from './Components/Appointment';

export default class App extends Component {
  state = {
    Appointments: [
    {
    customer: { firstName: 'Ashley', lastName: 'Jones', phoneNumber: '(123) 555-0123' },
    stylist: 'Jay Speares',
    startsAt: '2019-02-02 09:30',
    service: 'Cut',
    notes: ''
    }
   ]
  }
  render() {
    console.log(this.state.appointments)
    return (
      <div>
        <h1>Appointment List</h1>
        <Appointment Appointments={this.state.Appointments}/>
      </div>
    )
  }
}
