import s from './Property.module.css'
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Property = () => {

    const { t } = useTranslation();

    return (
        <section className={s.property}>
            <div className={s.all}>

                <motion.div
                    className={s.swiperWrapper}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}
                >

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
                                src="/aaab60f0-97d6-46aa-97fa-807504b62433.png"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/wAIKhOn7sDTvhTxIDI98tF8DPl6nT28qQDi_9uzaz79Sz7F88C9hRM6hfkOnSMKY7OgR8p3mx69s0ui_N2HBT0Ftcmcyxiypesf5Qyg-PHYHsS44ffbkC4_XhZBeHO5c0M243rng3267lDB2w3T5d8urWDPnsZqrb90cVCdIsUk7rsZl_lZDt37_izTmfHhi.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/flF0q0kHw9h-exf5dCV57Qud2-CzyDTPoZ9OMOHEwKO_zaVBvhp1meNaq6HCA5sTGjMSXVM4sKLWfhM0e01OnNqRD9uHlwEZmbJwbYfDB2_kltZ9PHwS26Xv_0XEqHEZiAyDyt0ENIRKIjqXbsdyTxRfXRgZSCgu05E6sMl7u9IlVgVkqVQWd-yhWYF4XV1Q.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/V7YOyDn3Vo4JC54oLwNryLlFdZyDbOrCqS7s7sAc3VpfBIwZwTVFtWNZIEWIsorQxB7vX_vK6zycFcBxwe5qbN5Pwkkols82-F54ANlVKZ8IgF_UjcothDCAh5Nd7gc8ztnADy7LDbPfrApm7Pce9XUULe59DuqtKIEaWrdxdU6XyuPLqK-mneus1cjmJRmS.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/yrSzqpk9FAjE51sBXHl0Uh95gYw7NSYu-dJm8ndgCFiY98qP8rthVqO8LhvrwiYeppQUdokCBHGYHQg23UKwlmnVT81vaK_3SOLF5jdKPjypIX9KMzfYDoV8mTSjaT3qWLXwFJIaQW5ZWyRYB9T7f4gBxQXZ1cRaPp21vUs8cLV3WSC6_6FrhbNUifWnJMU9.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                    </Swiper>

                </motion.div>


                <motion.div
                    className={s.texts}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}

                >



                    <motion.h1>
                        {t("property8.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property8.bedroom4")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property8.bathrooms3")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property8.villa")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property8.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.bedrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.bathrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.squareFeet")}</h4>
                                <h3>2,800</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.yearBuilt")}</h4>
                                <h3>2019</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property8.parking")}</h4>
                                <h3>{t("property8.twoCarGarage")}</h3>
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
                <h1>{t("property8.aboutTitle")}</h1>
                <p>{t("property8.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;