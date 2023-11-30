import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

const { API_KEY } = process.env
const BASE_URL = `https://omdbapi.com?apikey=${API_KEY}`
export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const { title, y, page } = req.query

    const query = [`s=${title}`]
    y && query.push(`y=${y}`)
    page && query.push(`page=${page}`)

    const { data: responseValue } = await axios.get(
      `${BASE_URL}&${query.join('&')}`
    )
    res.status(200).json(responseValue)
  } catch (e) {
    throw new Error(e)
  }
}
