import React, { Component } from 'react'

class Post extends Component {
  render() {
    const {post, author} = this.props
    console.log(this.props)
    return (
      <div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <i>by: {author.name}</i>
        </div>
      </div>
    )
  }
}

export default Post