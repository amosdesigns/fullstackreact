import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { pageWithoutLayout, pageWithLayout } from '../../containers/page'
import { discover } from '../../data/api/movies'

import Discover from './Discover'
import MovieDetails from './MovieDetails'

export class Home extends Component {
  state = { movies: [], filteredMovies: [], page: 0 }

  componentDidMount() {
    this.loadMore()
  }

  loadMore = e => {
    const { page } = this.state;
    discover({
      query: { page: page + 1 }
    }).then(({movies, page}) => {
      const newMovies = this.state.movies.concat(movies)
      this.setState({
        movies: newMovies,
        filteredMovies: newMovies,
        page: page,
      })
    })
  }

  onSearch = val => {
    console.log('searching...', val);
    let { filteredMovies, movies } = this.state
    if (val === '' || val.length < 2) {
      filteredMovies = movies
    } else {
      // Search
      const regexp = new RegExp(val, 'i')
      filteredMovies = movies.filter(m => m.title.match(regexp))
    }
    this.setState({
      filteredMovies
    })
  }

  render() {
    const { filteredMovies } = this.state
    const { match } = this.props

    return (
      <Switch className='home'>
        <Route
          path='/movies/:id'
          render={(renderProps) => (
            <MovieDetails
              {...this.props}
              {...renderProps}
            />
          )}
        />
        <Route
          path={`${match.path}`}
          render={(renderProps) => (
            <Discover
              movies={filteredMovies}
              onSearch={this.onSearch}
              onLoadMore={this.loadMore}
              {...this.props}
              {...renderProps} />
          )}
        />
      </Switch>
    )
  }
}

export default pageWithLayout(pageWithoutLayout(Home))
