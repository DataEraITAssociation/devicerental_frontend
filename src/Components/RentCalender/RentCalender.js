import React, { Component } from 'react';
import moment from 'moment';
import SchedulerCalendar from 'scheduler-calendar';
import 'scheduler-calendar/dist/index.css';
var now = moment("2021-08-05");
var end = moment("2021-10-03");
class RentCalender extends Component {
    render() {
        return (
            <SchedulerCalendar
                availabilities={[
                    {
                        day: "2021-08-26",
                        slots: [
                            { from: '09:00', to: '10:30' },
                            { from: '11:30', to: '19:00' },
                        ]
                    },
                ]}
                availabilityType={'range'}
                is24hour
                duration={10}
                onIntervalChange={() => { }}
                tableContainerStyle={{ width: '100%' }}
                isDisabledDateLocked
                availabilityStartDate={now}
                availabilityEndDate={end}
            />
        );
    }
}

export default RentCalender;