import { NextFunction, Request, Response } from "express";
import { CustomError } from "../middleware/errorMiddleware";
import { MovieService } from "../services/movieService";

const movieService = new MovieService();

export const searchMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== "string") {
        throw new CustomError(400, "Search query must be a non-empty string");
      }
    const movies = await movieService.searchMovies(query as string);
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};

export const getAllFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movies = await movieService.getAllFavorites();
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};

export const addToFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, poster, year, imdbID, type } = req.body;
    console.log(title);
    await movieService.addToFavorites(title, poster, year, imdbID, type);
    res.status(201).json({ message: "Movie added to favorites" });
  } catch (err) {
    next(err);
  }
};

export const removeFromFavoritesById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { imdbID } = req.params;
    if (!imdbID) {
      throw new CustomError(400, "Id required to remove");
    }
    await movieService.removeFromFavorites(imdbID);
    const newFavorites = await movieService.getAllFavorites();
    res.status(200).json({ newFavorites, message: "Movie removed from favorites" });
  } catch (err) {
    next(err);
  }
};
