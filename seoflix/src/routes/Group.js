import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { listPageReLoading, focusNav} from "../atom/Atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from '../assets/css/module/Group.module.css';

const pageNums = [...Array(10)].map((_,i) => i + 1);

function Group() {
    const { group, page } = useParams();

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [reloading, setReloading] = useRecoilState(listPageReLoading);
    const focusPage = useSetRecoilState(focusNav);

    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`)
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        setReloading(false);
        setLoading(true);
        focusPage(group);

        getMovies();
    }, [ reloading ]);

    return (
        <div>
            {loading ? <Loading /> :
                (
                    <div className={styles.group__container}>
                        <div className={styles.group__container__movies}>
                            {
                                movies.map((movie) => (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        coverImg={movie.medium_cover_image}
                                        title={movie.title}
                                        summary={movie.summary}
                                        genres={movie.genres}
                                    />
                                ))
                            }

                        </div>
                        <ul className={styles.page__list}>
                            {
                                pageNums.map((pageNum) => {
                                    return (
                                        <li key={pageNum}>
                                            <Link to={`/${group}/${pageNum}`}
                                                onClick={() => setReloading(true)}
                                                className={
                                                    pageNum == page ? styles.page__list__active : null
                                                }>
                                                {pageNum}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default Group;