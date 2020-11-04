import React, { Component } from 'react';
import AppointmentItem from './AppointmentItem'
export default class Appointment extends Component {
    render() {
        return this.props.Appointments.map((AppointmentInfo) => (
            <AppointmentItem AppointmentInfo={AppointmentInfo}/>
        ))
    }
}
