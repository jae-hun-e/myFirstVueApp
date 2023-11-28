import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const { API_KEY } = process.env

const BASE_URL = `https://omdbapi.com?apikey=${API_KEY}`
export default async function (req: VercelRequest, res: VercelResponse) {
  const { s, y, page } = req.query

  const query = [`s=${s}`]
  y && query.push(`y=${y}`)
  page && query.push(`page=${page}`)
  const queryParams = query.join('&')

  const { data: responseValue } = await axios.get(`${BASE_URL}&${queryParams}`)
  res.status(200).json(responseValue)
}
