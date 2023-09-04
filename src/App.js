import { useEffect, useState } from 'react';
// importing useEffect and useState hooks from react

import MovieCard from './MovieCard';
// importing the custom component MovieCard

import './App.css';
import SearchIcon from './search.svg';
// importing the stylesheet and the search icon

// 75a4834d
// OMBb api key

const API_URL = "http://www.omdbapi.com?apikey=75a4834d";
// api url

const App = () => {
// app function

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // movies list

  useEffect(() => {
  // useEffect function

    searchMovies("");
    // search requested
  }, []);

  const searchMovies = async (title) => {
  // search movies with requested title

    const response = await fetch(`${API_URL}&s=${title}`);
    // calling the api, getting the response (fetching)

    const data = await response.json();
    // collecting data from api, after the response

    setMovies(data.Search);
    // movies shown == data from the search requested
  };

  return (
  // order of app

    <div className="app">
      <h1>MoviesNet</h1>
      {/* main title */}

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* search bar */}

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App;
// export app
