import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
    
export default class CalendarForm extends React.Component {
    state = {
      start: { dateTime: '' },
      //string => string + 'Z',
      end: { dateTime: '' },
      description: '',
    }

    createRequest(req) {
      console.log(req)
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
      const {description, start, end} = this.state
      console.log(description)
      console.log(start)
      console.log(end)
      
      return(
        <div>
          {this.props.loginStatus !== true && <Button
                  onClick={(e) => this.handleItemClick(e, 'sign-in')}
                  variant="contained"
                  color="primary"
              >
                Item Toevoegen
              </Button>}
        {this.props.loginStatus && <><MuiThemeProvider >
          <h2>Voeg een agenda item toe:</h2>
          <TextField
              label="Wat?"
              value={description}
              onChange={e => this.setState({description: e.target.value})}
              type="text"
              placeholder="Titel"
            /><br/>
          <TextField
            id="datetime-local"
            label="Wanneer?"
            type="datetime-local"
            // defaultValue="2019-07-08T10:30"
            value={moment(start.dateTime).format("YYYY-MM-DDTHH:mm")}
            onChange={e => this.setState({start: {dateTime: moment(e.target.value).toISOString()}})}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="Tot?"
            type="datetime-local"
            value={moment(end.dateTime).format("YYYY-MM-DDTHH:mm")}
            onChange={e => this.setState({end: {dateTime: moment(e.target.value).toISOString()}})}
            InputLabelProps={{
              shrink: true,
            }}
          />
      </MuiThemeProvider>
          <Button onClick={() => this.createRequest(this.state)}>Toevoegen</Button></>}
        </div>
      )
    }
  }