import axios from "axios";
import { Movie } from "../interfaces/Movie";
import { MovieRepository } from "../interfaces/MovieRespository";
import { CustomError } from "../middleware/errorMiddleware";

  export class OMDBMovieRepository implements MovieRepository{

    private api_key = "b74d853b"
    private baseUrl = "http://www.omdbapi.com/";

async searchMovie(query : string)  : Promise<Movie[]>{
    console.log(this.api_key)
    console.log(query)
try {
const response = await axios.get(`${this.baseUrl}?s=${query}&apiKey=${this.api_key}`);
if(response.data.Response === 'True'){
return response.data.Search.map((movie : any) => ({
    imdbID: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type : movie.Type
}))
}
return []
}
catch(err) {
   throw new CustomError(500, "Error while searching movies")
}
}

async addToFavorites(title: string,poster : string,year: string, imdbID : string, type : string) : Promise<void>{
    throw new Error("Method not implemented."); 
}
async  getFavorites() : Promise<Movie[]>{
    throw new Error("Method not implemented."); 
}
async removeFromFavorites(imdbID : string) : Promise<void>{
    throw new Error("Method not implemented."); 
}
  }