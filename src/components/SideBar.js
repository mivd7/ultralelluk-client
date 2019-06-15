import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: '40%',
    textDecoration: 'none',
    borderBottomStyle: 'dotted',
    borderRightStyle: 'dotted',
    borderRadius: '0px 0px 10px 0px',
    padding: '10px',
  }});

const SideBar = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <ul>
        <li><Link to={`/`}>Home</Link></li><br/>
        <li><Link to={`/create`}>Voeg iets toe...</Link></li><br/>
        <li><Link to={`/calendar`}>Kalender</Link></li><br/>
                  </ul>

        </div>
    )
}

export default SideBar
