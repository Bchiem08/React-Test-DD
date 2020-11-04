import React, { Component } from 'react'

export default class Appointment extends Component {
    state = {
            appointments: [
            {
            Customer: { firstname: 'Ashley', lastName: 'Jones', phoneNumber: '(780) 123-1234' },
            stylist: 'Kobe Bryant',
            startsAt: '2019-02-20 09:30',
            service: 'cut',
            notes: ''
            },
        ]
    }
    render() {
        return (
            <div>
                <p>{this.state.appointments}</p>
            </div>
        )
    }
}
