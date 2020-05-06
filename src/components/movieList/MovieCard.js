import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core'

const MovieCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <CardMedia image="" description="movie poster"></CardMedia>
          <Typography variant="h5">
            Movie Title
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Movie description...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Delete</Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard;
