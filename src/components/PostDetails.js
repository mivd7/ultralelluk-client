import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`query Post ($id: ID!){
  post(id: $id) {
      id
      title
      content
  }
}`

export default class PostDetails extends Component {
  render() {
    console.log(this.props.match.params.id)
    const postId = this.props.match.params.id
    return (
      <>
      {!postId && <div>loading post</div>}
       {postId && <Query query={FEED_QUERY} variables={{id: this.props.match.params.id}}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return (<div>error {error.message}</div>)
          console.log(error)
    
          const post = data.post
          return (
            <div>
            {!post && <div>error loading post</div>}
            {post &&
            <>
             <h1>{post.title}</h1>
              <p>{post.content}</p></>}
            </div>
          )
          // <i>by: {post.author.name}</i>
        }}
      </Query>}
      </>
    )
  }
}
