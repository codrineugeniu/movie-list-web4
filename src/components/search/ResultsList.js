import React from 'react'

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from '@material-ui/core'

import styles from './ResultsList.module.css'

// https://image.tmdb.org/t/p/w200/iZf0KyrE25z1sage4SYFLCCrMi9.jpg
const getPosterUrl = (imageUri) => `https://image.tmdb.org/t/p/w200${imageUri}`

const ResultsList = (props) => (
  <React.Fragment>
    {props.movies.map((item) => (
      <Grid container xs={12}>
        <Grid item xs={2}>
          <img src={getPosterUrl(item.poster_path)} className={styles.poster} />
        </Grid>
        <Grid item xs={3}>
          {item.original_title}
        </Grid>
        <Grid item xs={2}>
          {item.release_date}
        </Grid>
      </Grid>
    ))}
  </React.Fragment>
)

export default ResultsList
