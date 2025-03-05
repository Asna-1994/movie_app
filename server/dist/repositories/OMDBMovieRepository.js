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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OMDBMovieRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const errorMiddleware_1 = require("../middleware/errorMiddleware");
class OMDBMovieRepository {
    constructor() {
        this.api_key = "b74d853b";
        this.baseUrl = "http://www.omdbapi.com/";
    }
    searchMovie(query) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.api_key);
            console.log(query);
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}?s=${query}&apiKey=${this.api_key}`);
                if (response.data.Response === 'True') {
                    return response.data.Search.map((movie) => ({
                        imdbID: movie.imdbID,
                        title: movie.Title,
                        year: movie.Year,
                        poster: movie.Poster,
                        type: movie.Type
                    }));
                }
                return [];
            }
            catch (err) {
                throw new errorMiddleware_1.CustomError(500, "Error while searching movies");
            }
        });
    }
    addToFavorites(title, poster, year, imdbID, type) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    getFavorites() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    removeFromFavorites(imdbID) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.OMDBMovieRepository = OMDBMovieRepository;
