import React, { Component } from 'react'
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {calendarUrl} from '../constants'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarForm from './CalendarForm';

const localizer = momentLocalizer(moment)
const today = moment(new Date()).toISOString()

const formats = {
  agendaHeaderFormat: ({start, end}) => {
      return (moment.utc(start).format('MMM YYYY') + ' tot ' + moment.utc(end).format('MMM YYYY'));
  },
  agendaTimeFormat: date => moment(date).format('HH:mm'),
  agendaDateFormat: date => moment(date).format('ddd DD/MM/YYYY')
}

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

  setCalendarItem(item) {
    const obj = {
      id: item.id, 
      title: item.summary, 
      start: item.start.date || item.start.dateTime, 
      end: item.end.date || item.start.dateTime }
    return obj
  }

  setStartingPoint(dateTime) {
    let date = dateTime.split('T') 
    let splitDate = date.shift().split('-')
    splitDate.pop()
    splitDate.push('01')
    let startDate = splitDate.join('-')
    return startDate.concat('T' + date);
  }

  render() {
    const { events } = this.state
    console.log(this.setStartingPoint(today))
    if (!events) return (<div>loading events</div>)
    const filteredItems = events.items.map(item => this.setCalendarItem(item) )
    return (
      <div className="row calendar body">
        
        <Calendar
            localizer={localizer}
            events={filteredItems}
            step={60}
            formats={formats}
            defaultView={'agenda'}
            views={['month','week','day', 'agenda']}
            defaultDate={this.setStartingPoint(today)}
          /><br/>
         <CalendarForm loginStatus={this.props.loginStatus}/>
    </div>  )}
}