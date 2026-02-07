import express from 'express'
import dotenv from 'dotenv';
import { getTrendingMovies } from './controllers/trendingMovies.js';


dotenv.config();
const port = process.env.PORT || 5000
const app = express();


app.use("/api/movie/trending", getTrendingMovies)

app.listen(port, () => console.log(`Server started on ${port}`))

