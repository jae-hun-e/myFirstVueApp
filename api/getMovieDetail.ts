import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const { API_KEY } = process.env
const BASE_URL = `https://omdbapi.com?apikey=${API_KEY}`

export default async function getMovieDetail(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const { id } = req.query

    const { data: movieDetailResponse } = await axios.get(
      `${BASE_URL}&i=${id}&plot=full`
    )
    res.status(200).json(movieDetailResponse)
  } catch (e) {
    throw new Error(e)
  }
}
