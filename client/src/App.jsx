import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<h1>hi</h1>} />
          <Route path="/movie/:id" element={<h1>heloo</h1> }/>
        </Routes>
     
    </>
  );
}

export default App;
