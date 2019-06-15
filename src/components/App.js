import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import PostList from './PostList'
import PostDetails from './PostDetails'
import Draft from './Draft'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
      <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/create" component={Draft} />
            <Route exact path="/content/:id" component={PostDetails}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App