import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./GalleryModal.module.css";

const GalleryModal = ({
    images,
    activeIndex,
    onClose
}) => {

    return (
        <div className={s.modal}>

            <button
                className={s.close}
                onClick={onClose}
            >
                ✕
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                initialSlide={activeIndex}
                className={s.swiper}
                loop={true}
                speed={800}
            >

                {images.map((img, index) => (

                    <SwiperSlide key={index}>
                        <img src={img} alt="" />
                    </SwiperSlide>

                ))}

            </Swiper>

        </div>
    )
}

export default GalleryModal