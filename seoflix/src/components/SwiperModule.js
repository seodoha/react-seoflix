import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
import styles from './SwiperModule.module.css';

function SwiperModule(slidesPerView, ) {
    return (
        <div>
            <Swiper
                slidesPerView={1}
            >
                <SwiperSlide>
                    {({ isActive }) => (
                        <div><span className={styles.test}>slide {isActive ? 'active' : 'not active'}</span></div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div><span className={styles.test}>slide {isActive ? 'active' : 'not active'}</span></div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div><span className={styles.test}>slide {isActive ? 'active' : 'not active'}</span></div>
                    )}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperModule;