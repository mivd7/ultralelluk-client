import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {Link} from 'react-router-dom'
import gql from 'graphql-tag'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Post from './PostInfo'

const FEED_QUERY = gql`
  {
    feed {
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
    
          const postsToRender = data.feed
          console.log(postsToRender)
          return (
            <div className="posts-container">
               <Link to={"/create"}>
                <Fab color="primary" aria-label="Add">
                  <AddIcon />
                </Fab>
              </Link>
              {postsToRender.map(post => <div className="posts-container">
                <Link to={`/content/${post.id}`}><Post key={post.id} post={post} author={post.author} /></Link></div>)}
              
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PostList