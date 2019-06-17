import React, { Component } from 'react'
import {Button, Grid} from '@material-ui/core'
import CalendarSquare from './CalendarSquare'

class CalendarRow extends Component {
  state = {
    monthView: false
  }
  render() {
    const {months, year, calendar} = this.props
    const {monthView} = this.state
    const days = months.map(month => month.days)
    console.log(days)
    console.log(monthView)
    return (
      <React.Fragment>
     {monthView === false && months.map(month => <Grid container xs={4} cols={3} rows={4}>
            <Button onClick={() => this.setState({ monthView: !monthView })}> --> </Button>
              <CalendarSquare month={month} year={year} calendar={calendar} monthView={monthView}/>
      </Grid>)}
      {monthView === false && <Grid container xs={7} cols={7} rows={4}>
            <Button onClick={() => this.setState({ monthView: !monthView })}> --> </Button>
              <CalendarSquare month={months} year={year} calendar={calendar} monthView={monthView} monthDays={days}/>
            </Grid>}
      </React.Fragment>
    )
  }
}

export default CalendarRow

