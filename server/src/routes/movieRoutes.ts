
import express from 'express'
import { getAllFavorites, searchMovies, removeFromFavoritesById, addToFavorites } from '../controllers/movieController';

const router = express.Router();

router.get('/search', searchMovies)
router.get('/favorites' , getAllFavorites)
router.delete('/favorites/:imdbID', removeFromFavoritesById)
router.post('/favorites',  addToFavorites)

export default router