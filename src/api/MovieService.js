import axios from 'axios'
import Settings from '../config/Settings'

export const getDetails = (id) => {
  const { API_URL, API_KEY } = Settings
  // https://api.themoviedb.org/3/movie/38700?api_key=<<apiKEY>>
  const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`
  return axios.get(url)
}
