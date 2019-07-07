import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`query Post ($id: ID!){
  post(id: $id) {
      id
      title
      content
      author {
        id
        name
      }
  }
}`

export default class PostDetails extends Component {
  render() {
    // const postId = this.props.match.params.id
    return (
      <>
       <Query query={FEED_QUERY} variables={{id: this.props.match.params.id}}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return (<div>error {error.message}</div>)
    
          const post = data.post
          return (
            <div>
            {!post && <div>error loading post</div>}
            {post &&
            <>
             <h1>{post.title}</h1>
              <p>{post.content}</p>
              <i>by: {post.author.name}</i>
            </>}
            </div>
          )
        }}
      </Query>
      </>
    )
  }
}
