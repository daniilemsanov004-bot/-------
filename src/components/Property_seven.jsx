import s from './Property.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

const Property = () => {

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        "/6aa39be9-14dc-46c0-ba72-8370dc15c6c6.png",
        "/W7WqI8nac3UlyjUE1MYj1R85ajLXwYpMoJJWiylIRkfNAZ45erK_QcIb1qXXG67aAVw0btHoHX4Yqbx1eHli-O23xkx2IUS209aTKHlzgkvWa-mtq2RF2Hsbh63-lj93gf-ZP9u5h-CIBvrBF0gauYqyWgfRZLEmkQVdQg2qP8BXzu1bw7ZNg1LwRs8aYQCx.jpg",
        "/AEyz3Z6t85LMo4JzAa45WoDCXmXcgeRy0YnmJFIQzCG20m2KMK4y0UV3tXXeOAL7xkKTJ3CgGqEg-RGOFDrSKD1BUqStql9vq1vMVSieLOrTZ-Od7EZ5sB0dKKgG0U3OW3NoDu2ZXLs0zfpOB2C2VHkrxMhmu_BPyh2TlBzOgAOxXXCBKhnfM2WFbYErrZ97.jpg",
        "/7Thmycx9BFvOkiqZGpqfW-jeaRAg0GSPPgKVpB5I4esA7N0DpJYlI8skTDy_hFukPh8klKxKi2AK5yu40tVBR4HW8ntKVN02gIFjofX6NkgOA40MHKlaGbN_q7FLD-d8ecfDXZZzj_kOl4uYsIPG6uaJLaetf3rkJFSHX1qdzcb_OhWcZvAJ7cHcgyh6Wsel.jpg",
        "/-BmrXXqKTig6pTXBIEnQ4PwDdRnGOTCspGaEalIEY3MxZN1Qj1cR4t-GeXXIdHs8MszUlCvPpyi2NGt_h983D2OQmkIWUaJ_iZmlHCeBdh5xKpA1qav_FnlS_38l9_VHGK_qZrjzyxf0bV0BHazsV-ZPD4hxS2pBowLjMopxkaRKucKXXSt0KUTv7hrVIQse.jpg",
    ];

    const cardAnim = (delay) => ({
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay },
        viewport: { amount: 0.2 },
        whileHover: { y: -10 }
    });

    return (
        <section className={s.property}>

            <div className={s.all}>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={20}
                    className={s.mySwiper}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >

                    <SwiperSlide className={s.slide}>
                        <img
                            src={images[0]}
                            alt=""
                            onClick={() => {
                                setIndex(0)
                                setOpen(true)
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src={images[1]}
                            alt=""
                            onClick={() => {
                                setIndex(1)
                                setOpen(true)
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src={images[2]}
                            alt=""
                            onClick={() => {
                                setIndex(2)
                                setOpen(true)
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src={images[3]}
                            alt=""
                            onClick={() => {
                                setIndex(3)
                                setOpen(true)
                            }}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src={images[4]}
                            alt=""
                            onClick={() => {
                                setIndex(4)
                                setOpen(true)
                            }}
                        />
                    </SwiperSlide>

                </Swiper>

                <motion.div
                    className={s.texts}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}
                >

                    <motion.h1>
                        {t("property4.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property4.bedroom4")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property4.bathrooms3")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property4.familyEstate")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property4.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property4.bedrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property4.bathrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property4.squareFeet")}</h4>
                                <h3>3,200</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property4.yearBuilt")}</h4>
                                <h3>2020</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property4.parking")}</h4>
                                <h3>{t("property4.twoCarGarage")}</h3>
                            </motion.div>

                        </div>

                    </div>

                </motion.div>

            </div>

            <motion.div
                className={s.text}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.2 }}
            >
                <h1>{t("property4.aboutTitle")}</h1>
                <p>{t("property4.aboutText")}</p>
            </motion.div>

            {open && (
                <GalleryModal
                    images={images}
                    activeIndex={index}
                    onClose={() => setOpen(false)}
                />
            )}

        </section>
    )
}

export default Property;