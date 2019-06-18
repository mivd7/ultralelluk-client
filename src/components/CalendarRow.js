import React, { Component } from 'react'
import {Button, Grid} from '@material-ui/core'
import CalendarSquare from './CalendarSquare'
import {getDaysByMonthNo} from '../lib/dateLogic'

class CalendarRow extends Component {
  state = {
    triggerMonthView: false,
    days: [],
    selectedMonth: null,
  }

  render() {
    const {months, year, calendar} = this.props
    const {triggerMonthView, days, selectedMonth} = this.state
    console.log(this.state)
    return (
      <React.Fragment>
      
      <br/>
     {triggerMonthView === false && months.map(month => <Grid container xs={4} cols={3} rows={4}>
          <Grid item xs={0}>
              <Button onClick={() => this.setState({ triggerMonthView: !triggerMonthView, selectedMonth: month.monthName, days: getDaysByMonthNo(month.monthNo, months)})}> --> </Button>
              <CalendarSquare month={month} year={year} calendar={calendar} triggerMonthView={triggerMonthView}/>
          </Grid>
      </Grid>)}
      {triggerMonthView === true && <><Grid container xs={4} cols={7} rows={4}><Button onClick={() => this.setState({triggerMonthView: false})}>BACK</Button>
             <CalendarSquare calendarInfo={calendar} selectedMonth={selectedMonth} days={days}/>
      </Grid></>}
      </React.Fragment>
    )
  }
}

export default CalendarRow

