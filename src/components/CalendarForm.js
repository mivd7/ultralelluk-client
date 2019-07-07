import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
    
export default class CalendarForm extends React.Component {
    state = {
      start: { dateTime: moment(new Date()).format("YYYY-MM-DDTHH:mm") },
      //string => string + 'Z',
      end: { dateTime: moment(new Date()).format("YYYY-MM-DDTHH:mm") },
      summary: '',
    }

    createRequest(req) {
      ApiCalendar.createEvent(req, process.env.REACT_APP_CALENDAR_ID)
                 .then(res => console.log(res))
                 .catch(err => window.alert('log in bij google!'))
    }

    handleItemClick = (event, name) => {
      if (name === 'sign-in') {
        console.log(event)
        ApiCalendar.handleAuthClick();
      } else if (name === 'sign-out') {
        ApiCalendar.handleSignoutClick();
      }
    }

    render() {
      const {summary, start, end} = this.state
      return(
        <div>
          {this.props.loginStatus !== true &&  <Fab color="primary" aria-label="Add">
                  <AddIcon onClick={e => this.handleItemClick(e, 'sign-in')}/>
                </Fab>}
          {this.props.loginStatus && <div className="calendar-form">
          <h2>Voeg een agenda item toe:</h2>
            <TextField
                label="Wat?"
                value={summary}
                onChange={e => this.setState({summary: e.target.value})}
                type="text"
                placeholder="Titel"
              />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker label="Wanneer?"
                            value={moment(start.dateTime).format("YYYY-MM-DDTHH:mm")}
                            onChange={e => this.setState({start: {dateTime: moment(e).toISOString()}})} />
            <DateTimePicker label="Tot?"
                            value={moment(end.dateTime).format("YYYY-MM-DDTHH:mm")}
                            onChange={e => this.setState({end: {dateTime: moment(e).toISOString()}})} />                           
          </MuiPickersUtilsProvider>
          <br/>
          <br/>
          <Button variant="contained"
                  color="primary"
                  onClick={() => this.createRequest(this.state)}>Toevoegen</Button></div>}
        </div>
      )
    }
  }