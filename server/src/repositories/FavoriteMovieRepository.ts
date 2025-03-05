import { Movie } from "../interfaces/Movie";
import { MovieRepository } from "../interfaces/MovieRespository";

export class FavoriteMovieRepository implements MovieRepository{

    private favorites : Movie[] = [];

    async searchMovie(query : string)  : Promise<Movie[]>{
        throw new Error("Method not implemented."); 
        }
        
        async addToFavorites(title: string,poster : string, year : string,imdbID :string, type  : string) : Promise<void>{
        if(!this.favorites.some((fav) => fav.imdbID===imdbID)){
            this.favorites.push({ title, year ,  imdbID, type ,poster})
        }
        }
        async  getFavorites() : Promise<Movie[]>{
            console.log(this.favorites)
           return this.favorites

        }
        async removeFromFavorites(imdbID: string): Promise<void> {
            this.favorites = this.favorites.filter(movie => movie.imdbID !== imdbID);
          }
          
}