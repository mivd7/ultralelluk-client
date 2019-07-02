import React, { Component } from 'react'
import Calendar from './react-google-calendar/Calendar';

const calendarConfig = {
  api_key: process.env.REACT_APP_CALENDAR_KEY,
  calendars: [
    {
      name: 'Ultralelluk', // whatever you want to name it
      url: '49fip3qh20d30jt7er6n1o30vo@group.calendar.google.com' // your calendar URL
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20
}

export default class GoogleCalendar extends Component {
  render() {
    return (
      <div>
        <Calendar config={calendarConfig}/>
      </div>
    )
  }
}
