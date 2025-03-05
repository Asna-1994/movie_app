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
exports.FavoriteMovieRepository = void 0;
class FavoriteMovieRepository {
    constructor() {
        this.favorites = [];
    }
    searchMovie(query) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    addToFavorites(title, poster, year, imdbID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.favorites.some((fav) => fav.imdbID === imdbID)) {
                this.favorites.push({ title, year, imdbID, type, poster });
            }
        });
    }
    getFavorites() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.favorites);
            return this.favorites;
        });
    }
    removeFromFavorites(imdbID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.favorites = this.favorites.filter(movie => movie.imdbID !== imdbID);
        });
    }
}
exports.FavoriteMovieRepository = FavoriteMovieRepository;
