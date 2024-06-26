import { Container, MovieList, Movie } from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Home() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=68960493102b91868290bc0053c0294d&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <Header />
      <h1>FaustoFlix</h1>
      <MovieList>
        {movies.map((movie) => (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img
                src={`${image_path}${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <span>{movie.title}</span>
          </Movie>
        ))}
      </MovieList>
      <Footer />
    </Container>
  );
}

export default Home;
