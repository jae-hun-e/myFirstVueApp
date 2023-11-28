export interface IMovieSearchResponseQuery {
  title: string
  y?: string
  page?: number
}

export interface IMovies {
  Search: IMovie[]
  totalResults: string
  Response: string
}

export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
