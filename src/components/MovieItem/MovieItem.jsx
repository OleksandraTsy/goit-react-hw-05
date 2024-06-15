import { Link, useLocation } from "react-router-dom";

export default function MovieDetails({ movie: { id, poster_path } }) {
  const location = useLocation();
  const defaultImg =
    "https://st4.depositphotos.com/36269830/37767/i/450/depositphotos_377679544-stock-photo-kyiv-ukraine-january-2020-monument.jpg";

  return (
    <Link to={`/movies/${id}`} state={location}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        width={240}
        alt="poster"
      ></img>
    </Link>
  );
}