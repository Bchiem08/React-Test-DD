import React, { Component } from 'react'

export default class AppointmentItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.AppointmentInfo.customer.firstName}</p>
                <p>{this.props.AppointmentInfo.customer.lastName}</p>
                <p>{this.props.AppointmentInfo.customer.phoneNumber}</p>
                <p>{this.props.AppointmentInfo.stylist}</p>
                <p>{this.props.AppointmentInfo.startsAt}</p>
                <p>{this.props.AppointmentInfo.service}</p>
                <p>{this.props.AppointmentInfo.notes}</p>
            </div>
        )
    }
}
