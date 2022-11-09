import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../assets/css/module/Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return (
        <Link
            to={`/movie/${id}`}
            className={styles.group__container__movie}
        >
            <img
                src={coverImg}
                alt={title}
            />
            <div className={styles.group__container__movie__info}>
                <strong className={styles.group__container__movie__info__tit}>{title}</strong>
                <span className={styles.group__container__movie__info__year}>{year}</span>
                <p className={styles.group__container__movie__info__desc}>{summary.length > 200 ? `${summary.slice(0, 100)}...`: summary}</p>
                <ul className={styles.group__container__movie__info__genres}>
                {
                    genres.map(g => <li key={g}>{g}</li>)
                }
                </ul>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;