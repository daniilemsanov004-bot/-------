import s from "./GalleryModal.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const GalleryModal = ({ images, activeIndex, onClose }) => {

    return (
        <div className={s.overlay} onClick={onClose}>

            <div
                className={s.modal}
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
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    initialSlide={activeIndex}
                    className={s.swiper}
                >

                    {images.map((img, i) => (
                        <SwiperSlide key={i} className={s.slide}>
                            <img src={img} alt="" />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </div>
    )
}

export default GalleryModal