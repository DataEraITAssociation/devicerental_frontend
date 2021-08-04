import React, { Component } from 'react';

import SchedulerCalendar from 'scheduler-calendar';
import 'scheduler-calendar/dist/index.css';

class RentCalender extends Component {
    render() {
        return (
            <SchedulerCalendar
                availabilities={[
                    {
                        day: "mon",
                        slots: [
                            { from: '09:00', to: '10:30' },
                            { from: '11:30', to: '13:00' },
                            { from: '14:30', to: '17:00' },
                        ]
                    },
                    {
                        day: "tue",
                        slots: [
                            { from: '09:00', to: '10:30' },
                            { from: '11:30', to: '13:00' },
                            { from: '14:30', to: '17:00' },
                        ]
                    },
                ]}
                availabilityType={'infinity'}
                is24hour
                duration={10}
                onIntervalChange={() => { }}
            />
        );
    }
}

export default RentCalender;