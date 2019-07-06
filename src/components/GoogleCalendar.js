import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import {calendarUrl} from '../constants'
import moment from 'moment'

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
    if (!events) return (<div>loading events</div>)
    const filteredItems = events.items.map(item => {const obj = {id: item.id, title: item.summary, start: item.start.date, end: item.end.date }
                                                 return obj})
    console.log(filteredItems)
    console.log(events)
    return (
      <div>     
        <Calendar localizer={localizer}
                  events={filteredItems}
                  defaultView={Views.AGENDA} />
        <a href={`https://calendar.google.com/calendar?cid=NDlmaXAzcWgyMGQzMGp0N2VyNm4xbzMwdm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ`}>Voeg een event toe</a>
    </div>
  )}
}
