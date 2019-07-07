import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import Button from '@material-ui/core/Button';
import GoogleCalendar from './GoogleCalendar';
    
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
            return (
            <div>
            <h1>UltraAgenda</h1>
            <h3>Voor alle Ultralelluke voorstellingen en repetities</h3>
            {this.state.sign && <><div className="btn-signout"><Button
                  onClick={(e) => this.handleItemClick(e, 'sign-out')}
                  variant="contained"
                  color="primary"
              >
                Uitloggen bij Google
              </Button>
              </div>
              <div className="google-calendar">
              <GoogleCalendar loginStatus={this.state.sign}/> </div></>
           }
            {!this.state.sign && <>
              <GoogleCalendar loginStatus={this.state.sign}/>
              <br/>
             </>}</div>
            );
        }
    }