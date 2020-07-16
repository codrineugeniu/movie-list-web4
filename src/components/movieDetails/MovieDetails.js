import React, { useEffect, useState } from 'react'

import { Link, useParams, useHistory } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Container,
} from '@material-ui/core'

import { getPosterUrl } from '../../utils/urlUtils';

import { getDetails } from '../../api/MovieService'

const MovieDetails = () => {
  const { id } = useParams()
  const [ movie, setMovie ] = useState({})
  let history = useHistory()

  useEffect(() => {
    getDetails(id).then((results) => setMovie(results.data))
  }, [id])

  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardContent>
            <CardMedia image="" description="movie poster">
              <img src={getPosterUrl(movie.poster_path)} alt="Movie poster" />
            </CardMedia>
            <Typography variant="h5">{movie.original_title}</Typography>
            Details for movie {movie.original_title}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            onClick={() => history.push(`/`)}>
            View details
          </Button>
        </CardActions>

        <Link to="/">Home</Link>
      </Card>
    </Container>
  )
}
export default MovieDetails
