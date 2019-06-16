import React from 'react';
import CalendarSquare from './CalendarSquare';
import Grid from '@material-ui/core/Grid';

export default function CalendarRow(props) {
    console.log(props)
    return (
        <React.Fragment>
          <Grid item xs={4}>
            <CalendarSquare/>
          </Grid>
          <Grid item xs={4}>
           <CalendarSquare/>
          </Grid>
          <Grid item xs={4}>
           <CalendarSquare/>
          </Grid>
        </React.Fragment>
      );
}