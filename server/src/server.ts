import express from "express";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import movieRoutes from './routes/movieRoutes'
import { errorMiddleware } from "./middleware/errorMiddleware";
import dotenv from 'dotenv'


dotenv.config();
  const app = express()
  const PORT  = process.env.PORT || 3000

  app.use(
    cors({
      origin: process.env.FRONT_END_URL,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  app.use('/api/movies', movieRoutes);


  app.use(
    errorMiddleware as (
      err: Error,
      req: Request,
      res: Response,
      next: NextFunction
    ) => void
  );
  app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`)
  })
