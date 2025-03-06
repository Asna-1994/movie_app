import axios from "axios";
import { Movie } from "../pages/Home";
import toast from "react-hot-toast";

const base_url = import.meta.env.VITE_BASE_URL
// const base_url = "http://localhost:3000/api/movies";
export const fetchMovies = async (search: string) => {
  try {
    const response = await axios.get(`${base_url}/search?query=${search}`);
    return response;
  } catch (err: any) {
    console.log(err);
    toast.error("Error while fetching movies");
  }
};

export const getFavorites = async () => {
  try {
    const response = await axios.get(`${base_url}/favorites`);
    console.log(response.data);
    return response;
  } catch (err: any) {
    console.log(err);
    toast.error("Error while getting favorites");
  }
};

export const removeFromFavorites = async (imdbID: string) => {
  try {
    const response = await axios.delete(`${base_url}/favorites/${imdbID}`);
    return response;
  } catch (err: any) {
    console.log(err);
    toast.error("Error while removing favorites");
  }
};

export const addToFavorites = async (movie: Movie) => {
  const { title, poster, year, type, imdbID } = movie;
  try {
    const response = await axios.post(`${base_url}/favorites`, {
      title,
      poster,
      year,
      type,
      imdbID,
    });
    return response;
  } catch (err: any) {
    console.log(err);
    toast.error("Error while adding to favorites");
  }
};
