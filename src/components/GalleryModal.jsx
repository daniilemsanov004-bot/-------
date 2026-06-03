import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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

    const [mounted, setMounted] = useState(false);

    useEffect(() => {

        setMounted(true);

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };

    }, []);

    if (!mounted) return null;

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

export default GalleryModal;