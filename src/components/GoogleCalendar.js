import React, { Component } from 'react'
import {Calendar} from 'react-big-calendar'
import axios from 'axios'
import {calendarUrl} from '../constants'

export default class GoogleCalendar extends Component {
  state = {
    events: null
  }

  componentDidMount() {
    axios.get(calendarUrl)  
      .then(res => {
        console.log(res)
        this.setState({ events: res.data });
      })
      .catch(e => console.log(e))
  }

  render() {
    console.log(this.state.events)
    const { events } = this.state
    return (
      <div>
      {!events && <div>loading google calendar</div>}
     
      {events && events.items.map(item => <>
        <h1>{events.summary}</h1>
        <h3>{events.description}</h3>
        <ul key={item.id}><li>{item.summary}<br/>
        <i>{item.start.date}</i></li></ul>
      </>)}
    </div>
  )}
}
