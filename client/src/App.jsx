import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {




const [page , setPage] = useState(1)
const url = `http://localhost:5000/api/movie/trending?page=${page}`

const {data, isLoading, error } = useFetch(url)


  return (
    <>
       <h1>wassssuppppp</h1>
    </>
  );
}

export default App;
