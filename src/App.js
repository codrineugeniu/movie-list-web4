import React from 'react'
import Header from './shared/header/Header'
import { Grid, Container } from '@material-ui/core'

import MovieList from './components/movieList/MovieList'
import Search from './components/search/Search'

class App extends React.Component {
  state = {
    savedMovies: [],
  }

  componentDidMount() {
    const saved = localStorage.getItem('userData')
    if (saved) {
      const parsed = JSON.parse(saved)
      this.setState({
        savedMovies: parsed.savedMovies,
      })
    }
  }

  onMovieAdd = (movie) => {
    const movies = this.state.savedMovies
    movies.push(movie)

    localStorage.setItem(
      'userData',
      JSON.stringify({
        savedMovies: movies,
      }),
    )

    this.setState({
      savedMovies: movies,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container maxWidth="md">
          <Search onMovieAdd={this.onMovieAdd} />
        </Container>
        <Container maxWidth="md">
          <MovieList savedMovies={this.state.savedMovies} />
        </Container>
      </div>
    )
  }
}

export default App
