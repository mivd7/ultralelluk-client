import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
export default class CalendarPage extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    console.log(this.state)
    return (
      <div>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FAmsterdam&amp;src=NDlmaXAzcWgyMGQzMGp0N2VyNm4xbzMwdm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A79B8E" width="800" height="600" frameborder="0" scrolling="no"></iframe>      </div>
    );
  }
}