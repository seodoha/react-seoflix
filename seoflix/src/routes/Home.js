import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import Loading from "../components/Loading";
import MovieSlide from "../components/MovieSlide";

import styles from '../assets/css/module/Home.module.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [recomMovies, setRecomMovies] = useState([]);

    const getMovies = async() => {
        const _recommend = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.8&limit=1&sort_by=year")
        ).json();

        setRecomMovies(_recommend.data.movies);
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
                                    src={recomMovies[0].large_cover_image}
                                    alt={recomMovies[0].title}
                                />
                                <div className={styles.recomm__movie__txt}>
                                    <strong className={styles.recomm__movie__title}>{recomMovies[0].title_long}</strong>
                                    <p className={styles.recomm__movie__descript}>{recomMovies[0].description_full}</p>
                                    <div className={styles.recomm__movie__btnBox}>
                                        <Link
                                            to={`/movie/${recomMovies[0].id}`}
                                            className={styles.recomm__movie__btn}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg>
                                            상세정보
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.type__list__movies}>
                                {
                                    Group_key_arr.map((group)=>{
                                        return (
                                            <div
                                                key={group}
                                                className={styles.type__module__movies}
                                            >
                                                <h2 className={styles.type__module__movies__tit}>{group}</h2>
                                                <MovieSlide apiSrc={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`} />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Home;