import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import styles from './SwiperModule.module.css';

function SwiperModule(movie) {

    return (
        <div>
            <Swiper
                slidesPerView={1}
            >
                <SwiperSlide>
                        <div><span className={styles.test}>slide</span></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div><span className={styles.test}>slide</span></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div><span className={styles.test}>slide</span></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperModule;