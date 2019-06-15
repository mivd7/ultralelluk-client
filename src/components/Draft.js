import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core'

const CREATE_DRAFT = gql`mutation Post($title: String! $content: String!, $published: Boolean!, $userId: ID!) {
  createDraft(title: $title, content: $content, published: $published, userId: $userId) {
    id
    title
    content
    published
  }
}
`

const useStyles = makeStyles({
  root: {
    padding: '20px',
  },
  input1: {
    height: 50
  },
  content: {
    minWidth: '200px'
  }
});

const Draft = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  const styles = useStyles()
  const dummyUser = 'cjwxm86fw006u076211f1khl6'
    return (
      <div className={styles.root}>
          <input
            className="mb2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Titel"
          /><br/>
          <div className={styles.content}>
          <TextField
            id="outlined-multiline-flexible"
            label="Inhoud"
            multiline={true}
            value={content}
            rows={20}
            maxRows={50}
            onChange={e => setContent(e.target.value)}
            className={styles.content}
            margin="normal"
            variant="outlined"
            fullWidth={true}
          /></div>
          <label>Link naar media</label>
          <input
            className="mb2"
            value={mediaUrl}
            onChange={e => setMediaUrl(e.target.value)}
            type="text"
            placeholder="Voeg een link naar foto of video toe"
          /><br/>
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

export default Draft