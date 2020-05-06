import React, { useState } from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import ResultsList from './ResultsList'

import styles from './Search.module.css'

const Search = () => {
  const [showResults, setShowResults] = useState(false)

  return (
    <React.Fragment>
      <Container className={styles.container}>
        <TextField
          placeholder="Type the name of a movie..."
          label="Search"
          variant="outlined"
          className={styles.search}
        />
        <Button
          variant="outlined"
          color="normal"
          startIcon={<SearchIcon />}
          onClick={() => setShowResults(!showResults)}>
          Search
        </Button>
      </Container>
      {showResults && (
        <Container className={styles.results}>
          <ResultsList />
        </Container>
      )}
    </React.Fragment>
  )
}

export default Search
