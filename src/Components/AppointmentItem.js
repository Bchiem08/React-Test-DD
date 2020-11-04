import React, { Component } from 'react'

export default class AppointmentItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.AppointmentInfo.stylist}</p>
            </div>
        )
    }
}
