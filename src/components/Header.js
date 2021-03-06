import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
import UserInfo from './UserInfo'
import Button from '@material-ui/core/Button'



class Header extends Component {
  
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    console.log(authToken)
    return (
        <div className="header-container">
           Ultralelluk HQ
           <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              <Button>logout</Button>
              <UserInfo token={authToken}/>

            </div>
          ) : (
              <Link to="/login" className="ml1 no-underline black">
                <Button>login</Button>
            </Link>
            )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)