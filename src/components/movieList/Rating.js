import React, { Component } from 'react'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import { Icon } from '@material-ui/core'

import styles from './Rating.module.css'

class Rating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: props.userRating || 0,
    }
  }

  render() {
    const ratings = [...Array(5)].map((item, index) => index + 1)
    const { changeRating, userRating, movieId } = this.props

    return (
      <div>
        {ratings.map((item) => {
          return (
            <Icon onClick={() => changeRating(item, movieId)} className={styles.star}>
              {item <= userRating ? <Star /> : <StarBorder />}
            </Icon>
          )
        })}
      </div>
    )
  }
}

export default Rating
