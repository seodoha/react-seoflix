import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import styles from '../assets/css/module/Detail.module.css';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setMovie(json.data.movie);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {loading ? <Loading /> :
                (
                    <div className={styles.detail__container}>
                        <img
                            src={movie.background_image_original}
                            alt={movie.title}
                            className={styles.detail__container__bg}
                        />
                        <div className={styles.detail__container__info}>
                            <img
                                src={movie.large_cover_image}
                                alt={movie.title}
                                className={styles.detail__container__info__thumb}
                            />
                            <div className={styles.detail__container__info__txtBox}>
                                <h2 className={styles.detail__container__info__txtBox__tit}>{movie.title}</h2>
                                <span className={styles.detail__container__info__txtBox__year}>{movie.year}</span>
                                <p className={styles.detail__container__info__txtBox__summary}>{movie.description_full}</p>
                                <ul className={styles.detail__container__info__txtBox__genres}>
                                    {
                                        movie.genres.map(genre => <li key={genre}>{genre}</li>)
                                    }
                                </ul>
                                <div className={styles.detail__container__info__txtBox__torrents}>
                                    {
                                        movie.torrents.map(({url}, i) => (
                                            <a
                                                key={i}
                                                href={url}
                                            >
                                                {`Torrent ${i+1}`}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Detail;