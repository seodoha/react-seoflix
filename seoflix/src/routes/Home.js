import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import Loading from "../components/Loading";

import styles from './Home.module.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <div className={styles.container}>
                {loading ? <Loading /> :
                    (
                        <div>
                            <div className={styles.recomm__movie}>
                                <img
                                    className={styles.recomm_movie__bg}
                                    src={movies[0].large_cover_image}
                                    alt={movies[0].title}
                                />
                                <div className={styles.recomm__movie__txt}>
                                    <strong className={styles.recomm__movie__title}>{movies[0].title_long}</strong>
                                    <p className={styles.recomm__movie__descript}>{movies[0].description_full}</p>
                                    <div className={styles.recomm__movie__btnBox}>
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/movie/${movies[0].id}`}
                                            className={styles.recomm__movie__btn}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
                                            상세정보
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.type__list__movies}>
                                <div className={styles.type__module__movies}>
                                    <h2 className={styles.type__module__movies__tit}>High Rating</h2>

                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Home;