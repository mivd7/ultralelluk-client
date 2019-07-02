import React, {Component} from 'react';
import {setCalendar, monthsArr} from '../lib/dateLogic'
import CalendarRow from './CalendarRow'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class CalendarContainer extends Component {
  state = {
    calendar: [],
    now: new Date(),
    year: 2019,
  }

  componentDidMount() {
    const months = monthsArr
    this.setState({
      calendar: setCalendar(this.state.year, 3, months),
    })
  }

  render() {
    const {year, calendar} = this.state
    const yearsArr = calendar.map(x => x.year)
    const nextYear = year + 1
    const lastYear = year - 1
    const months = monthsArr
    console.log(yearsArr)
    if (!calendar) return (<div>loading</div>)
    return (
      <div>
        {!calendar && <div>loading...</div>}
        {calendar && <>
        <div>
          <Button onClick={() => this.setState({year: lastYear})}>{lastYear}</Button>
          <Button onClick={() => this.setState({year: nextYear})}>{year + 1}</Button>
          <Button onClick={() => this.setState({triggerMonthView: false})}>BACK</Button>

          <h1>{year}</h1>
        </div>
          {calendar.map(data => <CalendarRow year={year} calendar={data} months={months}/>)[0]}
       </>}
      </div>
    )
  }
}

export default CalendarContainer;