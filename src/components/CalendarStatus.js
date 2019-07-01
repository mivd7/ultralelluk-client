import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Button from '@material-ui/core/Button';

import GoogleCalendar from './GoogleCalendar';
import CreateCalendarItem from './CreateCalendarItem';
    
export default class CalendarStatus extends React.Component {
        constructor(props) {
            super(props);
            this.handleItemClick = this.handleItemClick.bind(this);
            this.state = {
              sign: ApiCalendar.sign,
            };
            this.signUpdate = this.signUpdate.bind(this);
            ApiCalendar.onLoad(() => {
                ApiCalendar.listenSign(this.signUpdate);
            });
        }
        
        handleItemClick = (event, name) => {
          if (name === 'sign-in') {
            console.log(event)
            ApiCalendar.handleAuthClick();
          } else if (name === 'sign-out') {
            ApiCalendar.handleSignoutClick();
          }
        }
  

        signUpdate(sign) {
            this.setState({
                sign
            })
        }
        
        render() {
          console.log(this.state.sign)
            return (
            <div>{this.state.sign && <><h2>Welkom Ultrallellukerd </h2>
              <CreateCalendarItem/>
              <GoogleCalendar/></>
           }
            {!this.state.sign && <div className="btn-login"><Button
                  onClick={(e) => this.handleItemClick(e, 'sign-in')}
                  variant="contained"
                  color="primary"
              >
                Login bij Google
              </Button><br/>
             </div>}</div>
            );
        }
    }