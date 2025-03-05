"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const FavoriteMovieRepository_1 = require("../repositories/FavoriteMovieRepository");
const OMDBMovieRepository_1 = require("../repositories/OMDBMovieRepository");
class MovieService {
    constructor() {
        this.movieRepo = new OMDBMovieRepository_1.OMDBMovieRepository();
        this.favoriteRepo = new FavoriteMovieRepository_1.FavoriteMovieRepository();
    }
    searchMovies(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.movieRepo.searchMovie(query);
        });
    }
    addToFavorites(title, poster, year, imdbID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.favoriteRepo.addToFavorites(title, poster, year, imdbID, type);
        });
    }
    removeFromFavorites(imdbID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.favoriteRepo.removeFromFavorites(imdbID);
        });
    }
    getAllFavorites() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.favoriteRepo.getFavorites();
        });
    }
}
exports.MovieService = MovieService;
