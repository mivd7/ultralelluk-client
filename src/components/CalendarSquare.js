import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    const {month, year, monthDays, calendar, monthView} = props
    console.log(props)
    return (
      
      <div className={classes.root}>
        <Grid item xs={0}>
              {!monthDays && <Paper className={classes.paper}>{month.monthName} {year}</Paper>}
              {monthDays && monthDays.map(day => <Paper className={classes.paper}>{day}</Paper>)}
        </Grid>
      </div>
    );
}