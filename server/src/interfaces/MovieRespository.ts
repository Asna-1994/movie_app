import { Movie } from "./Movie"


export interface MovieRepository {
    searchMovie(query : string) : Promise<Movie[]>
    addToFavorites(title: string,poster : string,year: string, imdbID : string, type : string) : Promise<void>
    getFavorites() : Promise<Movie[]>
    removeFromFavorites(imdbID : string) : Promise<void>
}