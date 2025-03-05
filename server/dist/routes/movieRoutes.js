"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = require("../controllers/movieController");
const router = express_1.default.Router();
router.get('/search', movieController_1.searchMovies);
router.get('/favorites', movieController_1.getAllFavorites);
router.delete('/favorites/:imdbID', movieController_1.removeFromFavoritesById);
router.post('/favorites', movieController_1.addToFavorites);
exports.default = router;
