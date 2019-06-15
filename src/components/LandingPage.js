import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import {images} from '../styles/imagesIndex';

const useStyles = makeStyles({
  root: {
    padding: '20px',
  },
  image: {
    maxWidth: '150px',
    padding: '10px'
  },
  columns: 1
});

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <GridList cellHeight={216} cellWidth={216} cols={2} className={classes.root}>
                    {images.map(image => (
                    <GridListTile key={image.id}>
                      <Link to={image.link}>
                        <img src={ image.file } className={classes.image} alt={image.title}/>
                        <GridListTileBar
                            title={image.title}
                        />
                      </Link>
                    </GridListTile>
                    ))}
                </GridList>
    </div>
  );
}