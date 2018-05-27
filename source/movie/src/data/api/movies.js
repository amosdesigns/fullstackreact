import { makeAuthFetch } from './utils'

export const discover = (opts={}) => makeAuthFetch('/movies', opts)
export const movieConfig = (opts={}) => makeAuthFetch('/config', opts)
export const getMovie = (id, opts={}) => makeAuthFetch(`/movies/${id}`, opts)
export const getMovieImages = (id, opts={}) => makeAuthFetch(`/movies/${id}/images`, opts)
