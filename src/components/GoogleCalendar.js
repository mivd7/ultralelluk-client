import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Button from '@material-ui/core/Button'

export default class GoogleCalendar extends React.Component {
      constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
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
        return (
          <div>
            <div className="btn-logout">
             <Button
                  onClick={(e) => this.handleItemClick(e, 'sign-out')}
                  variant="contained"
                  color="primary"
                                >
                Log uit
              </Button>
              </div><br/>
            <div className="google-calendar">
              <iframe title="google calendar"src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FAmsterdam&amp;src=NDlmaXAzcWgyMGQzMGp0N2VyNm4xbzMwdm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A79B8E" width="800" height="600" frameborder="0" scrolling="no"></iframe> 
            </div>
          </div>
          );
      }
  }