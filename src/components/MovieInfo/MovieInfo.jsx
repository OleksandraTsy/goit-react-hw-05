import css from "./MovieInfo.module.css";

export default function MovieInfo({ movie }) {
  const { poster_path, title, vote_average, overview, genres } = movie;
  const defaultImg =
    "https://ticez.wordpress.com/wp-content/uploads/2014/04/45dd7-d0b7d0bdd0b0d0ba-d0b2d0bed0bfd180d0bed181d0b0.jpg";

  return (
    <section className={css.infoBox}>
      <img
        className={css.img}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        width={340}
        alt="poster"
      ></img>
      <div className={css.info}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.score}>User score: {vote_average}</p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.text}>{overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <ul className={css.genresList}>
          {genres.map((genre) => (
            <li key={genre.id} className={css.genreItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}