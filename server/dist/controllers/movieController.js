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
exports.removeFromFavoritesById = exports.addToFavorites = exports.getAllFavorites = exports.searchMovies = void 0;
const errorMiddleware_1 = require("../middleware/errorMiddleware");
const movieService_1 = require("../services/movieService");
const movieService = new movieService_1.MovieService();
const searchMovies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req.query;
        if (!query || typeof query !== "string") {
            throw new errorMiddleware_1.CustomError(400, "Search query must be a non-empty string");
        }
        const movies = yield movieService.searchMovies(query);
        res.status(200).json(movies);
    }
    catch (err) {
        next(err);
    }
});
exports.searchMovies = searchMovies;
const getAllFavorites = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield movieService.getAllFavorites();
        res.status(200).json(movies);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllFavorites = getAllFavorites;
const addToFavorites = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, poster, year, imdbID, type } = req.body;
        console.log(title);
        yield movieService.addToFavorites(title, poster, year, imdbID, type);
        res.status(201).json({ message: "Movie added to favorites" });
    }
    catch (err) {
        next(err);
    }
});
exports.addToFavorites = addToFavorites;
const removeFromFavoritesById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imdbID } = req.params;
        if (!imdbID) {
            throw new errorMiddleware_1.CustomError(400, "Id required to remove");
        }
        yield movieService.removeFromFavorites(imdbID);
        const newFavorites = yield movieService.getAllFavorites();
        res.status(200).json({ newFavorites, message: "Movie removed from favorites" });
    }
    catch (err) {
        next(err);
    }
});
exports.removeFromFavoritesById = removeFromFavoritesById;
