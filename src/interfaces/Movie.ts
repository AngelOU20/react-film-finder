export interface Movie {
  title: string;
  year: string;
  id: string;
  type: string;
  poster: string;
}

export interface ResponseWithData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ResponseWithoutData {
  Response: string;
  Error: string;
}
