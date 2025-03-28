export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails extends Movie {
  Plot: string;
  Director: string;
  Actors: string;
  Genre: string;
  Runtime: string;
  Rated: string;
  imdbRating: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
