import express from "express";
import dotenv from "dotenv";
import { getTrendingMovies } from "./controllers/trendingMovies.js";
import { getMovieDetails } from "./controllers/movieDetails.js";
import cors from 'cors'

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/movie/trending", getTrendingMovies);
app.get("/api/movie/details", getMovieDetails);

app.listen(port, () => console.log(`Server started on ${port}`));
