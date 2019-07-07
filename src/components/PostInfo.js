import React, { Component } from 'react'

class Post extends Component {
  render() {
    const {post, author} = this.props
    return (
        <div className="posts-container">
          <h1 >{post.title}</h1>
          <p>{post.content}</p>
          <i>by: {author.name}</i>
        </div>
    )
  }
}

export default Post