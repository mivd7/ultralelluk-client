import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'

const FEED_QUERY = gql`
  {
    feedPosts {
        id
        title
        content
        author {
          id
          name
        }
    }
  }
`

class PostList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const postsToRender = data.feedPosts
          console.log(postsToRender)
          return (
            <div>
              {!postsToRender && <div>loading...</div>}
              {postsToRender && postsToRender.map(post => <Post key={post.id} post={post} author={post.author} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PostList