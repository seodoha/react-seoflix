import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/css/customSwiper.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function MovieSlide({ apiSrc }) {
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(apiSrc)
        ).json();
        setMovies(json.data.movies);
    };
    useEffect(() => {
        getMovies();
    }, []);


    return (
        <div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="custom__swiper"
            >
                {
                    movies.map(({ id, title, summary, medium_cover_image, rating }) => {
                        return (
                            <SwiperSlide key={id}>
                                <Link to={`/movie/${id}`} className="custom__swiper__link">
                                    <img
                                        src={medium_cover_image}
                                        alt={title}
                                    />
                                    <div className='custom__swiper__link__txtBox'>
                                        <strong className='custom__swiper__link__txtBox__tit'>{title}</strong>
                                        <span className='custom__swiper__link__txtBox__rating'>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                style={{
                                                    width: "1.5rem",
                                                    height: "1.5rem",
                                                    color: "#FFD700",
                                                }}
                                            />
                                            {rating}
                                        </span>
                                        <p className='custom__swiper__link__txtBox__summary'>{summary}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default MovieSlide;