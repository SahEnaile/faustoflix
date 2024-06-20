import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";
import { APIKey } from "../config/key";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date,
        };

        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <Header />
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release">Release date: {movie.releaseDate}</span>
          <Link to="/">
            <button>Return</button>
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Details;
