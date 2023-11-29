import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const { API_KEY } = process.env

const BASE_URL = `https://omdbapi.com?apikey=${API_KEY}`
export default async function (req: VercelRequest, res: VercelResponse) {
  const { id } = req.query

  const { data: responseValue } = await axios.get(
    `${BASE_URL}&i=${id}&plot=full`
  )
  res.status(200).json(responseValue)
}
