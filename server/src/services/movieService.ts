import { Movie } from "../interfaces/Movie";
import { FavoriteMovieRepository } from "../repositories/FavoriteMovieRepository";
import { OMDBMovieRepository } from "../repositories/OMDBMovieRepository";

export class MovieService{
    private movieRepo = new OMDBMovieRepository();
    private favoriteRepo = new FavoriteMovieRepository()

    async searchMovies(query : string) : Promise<Movie[]>{
return await this.movieRepo.searchMovie(query)
    }

    async addToFavorites(title : string, poster : string, year : string, imdbID : string,type : string ) : Promise<void>{
        return await this.favoriteRepo.addToFavorites(title, poster, year, imdbID,type )
    }
    async removeFromFavorites(imdbID : string) : Promise<void>{
        return await this.favoriteRepo.removeFromFavorites(imdbID)
    }
    async getAllFavorites() : Promise<Movie[]>{
        return await this.favoriteRepo.getFavorites()
    }
}