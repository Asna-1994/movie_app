"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const movieRoutes_1 = __importDefault(require("./routes/movieRoutes"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: process.env.FRONT_END_URL,
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/movies', movieRoutes_1.default);
app.use(errorMiddleware_1.errorMiddleware);
app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});
