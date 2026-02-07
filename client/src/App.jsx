import "./App.css";
import {Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">View Favorites</Link>
        </nav>
      </header>
      <main>
        <Outlet />

        {location.pathname === "/" && (
          <div className="homeCTA">
            <div>
              <p>Click below to view trending movies</p>
              <Link to="/trending">Trending Movies</Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
