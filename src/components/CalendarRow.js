import React, { Component } from 'react'
import {Button, Grid} from '@material-ui/core'
import {TableRow} from '@material-ui/core'
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
     {triggerMonthView === false && months.map(month =><>
              <Button onClick={() => this.setState({ triggerMonthView: !triggerMonthView, selectedMonth: month.monthName, days: getDaysByMonthNo(month.monthNo, months)})}> --> </Button>
              <TableRow key={Number(month)} rows={4} cols={3}>
               <CalendarSquare month={month} year={year} calendar={calendar} triggerMonthView={triggerMonthView}/>
              </TableRow></>)}
      {triggerMonthView === true && <>           
          <Button onClick={() => this.setState({triggerMonthView: false})}>BACK</Button>
             <CalendarSquare calendarInfo={calendar} selectedMonth={selectedMonth} days={days}/>
        </>}
      </React.Fragment>
    )
  }
}

export default CalendarRow

