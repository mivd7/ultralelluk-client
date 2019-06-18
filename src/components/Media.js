import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// const FEED_QUERY = gql`query Post ($id: ID!){
//   post(id: $id) {
//       id
//       title
//       content
//       author {
//         id
//         name
//       }
//   }
// }`

export default class Media extends Component {
  render() {
    // const postId = this.props.match.params.id
    return (
      <div>
       Here be Media
      </div>
    )
  }
}
