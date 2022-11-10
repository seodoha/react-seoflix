import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from '../assets/css/module/Search.module.css';

const pageNums = [...Array(10)].map((_,i) => i + 1);

function Search() {
    const { search } = useParams();

    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&sort_by=rating`)
        ).json();

        console.clear();
        console.log(`page: ${page}`);
        console.log(`api 영화 갯수 : ${json.data.movie_count}`);
        console.log(`누적된 영화 : ${movies.length}`);

        if (json.data.movie_count === 0 || json.data.movies === undefined) {
            setLoading(false);
            setEmpty(true);
            return;
        };

        console.log(json.data.movies);
        if (json.data.movies != undefined) {
            const mergeData = movies.concat(...json.data.movies);
            setMovies(mergeData);
            setLoading(false);
        }
    };

    // Scroll Event
    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {
            // fetchMoreInstaFeeds();
            setPage((current) => current+1);
            getMovies();
        }
    };

    useEffect(() => {
        setLoading(true);
        setEmpty(false);
        setMovies([]);
        getMovies();
    }, [ search ]);

    useEffect(() => {
        // scroll event listener 등록
        window.addEventListener("scroll", handleScroll);
        return () => {
            // scroll event listener 해제
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ page ]);

    return (
        <div>
            {loading ? <Loading /> :
                (
                    <div className={styles.group__container}>
                        {
                            empty ? (
                                <div className={styles.empty_search}>
                                    {`입력하신 검색어 '${search}' (와)과 일치하는 결과가 없습니다.`}
                                </div>
                            )
                            :
                            (
                                <div className={styles.group__container__movies}>
                                    {
                                        movies.map((movie, i) => (
                                            <Movie
                                                key={i}
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
                            )
                        }

                        {/* <ul className={styles.page__list}>
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
                        </ul> */}
                    </div>
                )
            }
        </div>
    );
}

export default Search;