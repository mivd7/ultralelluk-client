import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  calendarHeader: {
    title: 'Ultralelluk'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function CalendarSquare(props) {
    const classes = useStyles()

    // console.log(props)

    // function FormRow() {
    //   return (
    //     <React.Fragment>
    //       <Grid item xs={4}>
    //         <Paper className={classes.paper}>{item}</Paper>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Paper className={classes.paper}>item</Paper>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Paper className={classes.paper}>item</Paper>
    //       </Grid>
    //     </React.Fragment>
    //   );
    // }
    return (
      
      <div className={classes.root}>
        <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
         </Grid>
      </div>
    );
}