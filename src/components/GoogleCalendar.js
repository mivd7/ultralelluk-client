import React, { Component } from 'react'
import axios from 'axios'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import {calendarUrl} from '../constants'
import moment from 'moment'
import {sampleEvents} from '../lib/sampleEvents'

const localizer = momentLocalizer(moment)

export default class GoogleCalendar extends Component {
  state = {
    events: null
  }

  componentDidMount() {
    axios.get(calendarUrl)  
      .then(res => {
        this.setState({ events: res.data });
      })
      .catch(e => console.log(e))
  }

  render() {
    const { events } = this.state
    if (!events) return (<div>fuck you</div>)
    const filteredItems = events.items.map(item => {const obj = {id: item.id, title: item.summary, start: item.start.date, end: item.end.date }
                                                 return obj})
    console.log(filteredItems)
    // console.log(events)
    return (
      <div>
      {!events && <div>loading google calendar</div>}
     
      {events && <Calendar
                    localizer={localizer}
                    events={filteredItems}
                    defaultView={Views.AGENDA} />}
  </div>
  )}
}
