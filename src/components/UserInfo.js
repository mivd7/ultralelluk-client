import React, { Component } from 'react'
import { Query } from 'react-apollo'

import gql from 'graphql-tag'

const ME = gql`
  { me 
    {
      id
      name
    }
  }
`

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <Query query={ME}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return (<div>error {error.message}</div>)
          console.log(error)
    
          const me = data.me
          console.log(me)
          return (
            <div>
            {!me && <div>error loading post</div>}
            {me &&
            <>
            Hello {me.name}
            </>}
            </div>
          )
        }}
      </Query>
      </div>
    )
  }
}
