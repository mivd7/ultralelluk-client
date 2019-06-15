import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_DRAFT = gql`mutation Post($title: String! $content: String!, $published: Boolean!, $userId: ID!) {
  createDraft(title: $title, content: $content, published: $published, userId: $userId) {
    id
    title
    content
    published
  }
}
`

class Draft extends Component {
  state = {
    title: '',
    content: '',
    mediaUrl: '',
  }

  render() {
    const { title, content, mediaUrl } = this.state
    //hard-coded for now
    const dummyUser = 'cjwxm86fw006u076211f1khl6'
    return (
      <div className="form-container">
        <div className="flex flex-column mt3">
          <label>Voeg een titel toe:</label>
          <input
            className="mb2"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Titel"
          />
          <label>Voeg inhoud toe:</label>
          <textarea
            className="mb2__content"
            value={content}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
            placeholder="Inhoud"
          />
          <label>Link naar media</label>
          <input
            className="mb2"
            value={mediaUrl}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
            placeholder="Voeg een link naar foto of video toe"
          />
        </div>
        <Mutation mutation={CREATE_DRAFT}
                  variables={{ title, content, published: false, userId: dummyUser }} >
            {draft => <div><button onClick={draft}>Maak concept aan</button></div>}
        </Mutation>
        <br/>
        <Mutation mutation={CREATE_DRAFT}
                  variables={{ title, content, published: true, userId: dummyUser }} >
            {draft => <div><button onClick={draft}>Publiceer</button></div>}
        </Mutation>
      </div>
    )
  }
}

export default Draft