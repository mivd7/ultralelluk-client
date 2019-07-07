import React, { Component } from 'react'
import axios from 'axios'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import {calendarUrl} from '../constants'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarForm from './CalendarForm';
import CustomCalendar from './CustomCalendar'

const localizer = momentLocalizer(moment)
const today = moment(new Date()).toISOString()

const formats = {
  agendaHeaderFormat: ({start, end}) => {
      return (moment.utc(start).format('MMM YYYY') + ' tot ' + moment.utc(end).format('MMM YYYY'));
  },
  monthHeaderFormat: ({start, end}) => {
    return (moment.utc(start).format('MMM YYYY') + ' tot ' + moment.utc(end).format('MMM YYYY'));
  },
  agendaTimeFormat: date => moment(date).format('HH:mm'),
  agendaDateFormat: date => moment(date).format('ddd DD/MM/YYYY'),
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

  render() {
    const { events } = this.state
    if (!events) return (<div>loading events</div>)
    const filteredItems = events.items.map(item => this.setCalendarItem(item) )
    return (
      <div className="row calendar body">
        
        <CustomCalendar
            localizer={localizer}
            events={filteredItems}
            formats={formats}
            views={['month']}
          /><br/>
         <CalendarForm loginStatus={this.props.loginStatus}/>
    </div>  )}
}