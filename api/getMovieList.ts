import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const { API_KEY } = process.env
const BASE_URL = `https://omdbapi.com?apikey=${API_KEY}`

export default async function getMovieList(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { title, y: year, page } = req.query

    const query = [`s=${title}`]
    year && query.push(`y=${year}`)
    page && query.push(`page=${page}`)

    const { data: movieListResponse } = await axios.get(
      `${BASE_URL}&${query.join('&')}`
    )
    res.status(200).json(movieListResponse)
  } catch (e) {
    throw new Error(e)
  }
}
