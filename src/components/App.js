import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import PostList from './PostList'
import PostDetails from './PostDetails'
import Draft from './Draft'
import SideBar from './SideBar'
import CalendarStatus from './CalendarStatus'
import LandingPage from './LandingPage'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <>
      <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="center"
          >
       
        <Grid item xs={6}>
        <Header />
        </Grid>

        <Grid item xs={6}>
        <SideBar />
        </Grid>
        <Grid item xs={9}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/art" component={PostList} />
            <Route exact path="/create" component={Draft} />
            <Route exact path="/calendar" component={CalendarStatus} />
            <Route exact path="/content/:id" component={PostDetails}/>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Grid>
      </Grid>
    </>
    )
  }
}

export default App