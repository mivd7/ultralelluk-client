import React, { Component } from 'react'
import {Calendar} from 'react-big-calendar'
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'
import googleAPI from  "./utils/googleAPI"

const localizer = Calendar.momentLocalizer(moment)

export default class UltralellukCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    if (this.props.config) {
      this.getGoogleCalendarEvents()
    } else {
      console.log("React Google Calendar requires you pass a configuration object")
    }
  }

  getGoogleCalendarEvents = () => {
    googleAPI.getAllCalendars(this.props.config)
      .then(events => {
        this.setState({ events })
      })
      .catch(err => console.log(err))
  }

  render = () =>
    <div>
      <Calendar
        localizer={localizer}
        events={this.state.events}
        style={{ height: "100vh" }} />
    </div>
}