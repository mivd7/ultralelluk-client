import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '200px',
  },
  paper: {
    padding: '50px',
  },
}));

export default function CalendarSquare(props) {
    const classes = useStyles()
    const {month, year, days, selectedMonth} = props
    console.log(props)
    return (
      <div className={classes.root}>
        <Grid item xs={1}>
              {!days && <Paper className={classes.paper}>{month.monthName} {year}</Paper>}
              {days && days.map(day => <Paper className={classes.paper}>{day} {selectedMonth}</Paper>)}
        </Grid>
      </div>
    );
}