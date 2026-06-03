import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { createPortal } from "react-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import s from "./GalleryModal.module.css";

const GalleryModal = ({
    images,
    activeIndex,
    onClose
}) => {

    return createPortal(

        <div
            className={s.overlay}
            onClick={onClose}
        >

            <div
                className={s.content}
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className={s.close}
                    onClick={onClose}
                >
                    ✕
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    initialSlide={activeIndex}
                    className={s.swiper}
                    loop={true}
                    speed={800}
                >

                    {images.map((img, index) => (

                        <SwiperSlide key={index}>

                            <img
                                src={img}
                                alt=""
                            />

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </div>,

        document.body
    )
}

export default GalleryModal