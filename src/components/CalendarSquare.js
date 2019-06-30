import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TableRow, TableCell} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '200px',
  },
  paper: {
    padding: '50px',
    border: '3px dotted'
  },
}));

export default function CalendarSquare(props) {
    const classes = useStyles()
    const {month, year, days, selectedMonth} = props
    console.log(props)
    return (<>{!days && <TableCell component="th" scope="row">{month.monthName} {year}</TableCell>}
              {days && days.map(day => (
            <TableRow key={Number(day)}>
              <TableCell component="th" scope="row">
                {day} {selectedMonth}
              </TableCell>
            </TableRow>
          ))}
      </>
    );
}