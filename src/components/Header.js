import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
        <div className="header-container">
           Ultralelluk HQ
      </div>
    )
  }
}

export default withRouter(Header)