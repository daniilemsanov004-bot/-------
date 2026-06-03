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

                <motion.img
                    alt=""
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.2 }}
                />
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
                            src="/495c8c25-fc6c-43c7-9096-aa7ff174a0b7.png"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/YPohWtlamxLknR_UYB6juVVhT6XRWvKwKSC5nzEnL-rHeqJGD175Fp9ujPlkkVnpWySf6kdJEUI2anHWpB_ei0LFh6vk710Av2ndpmtamQyGys2mtyBZppNYtmnDwNWQFEfSh0RjKlBlV3RjS-thRcEx8zNQ5iIobsb1E6QyYRHvLJFKrL-pXO3vCLYp0Xgm.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/4UV44NVzBwvNCTFIOjCVPMsB8WgbgXEHstNlGspPIxycBKSrTQLiftc14qIjSagOKATCuQvcdFA1khvn9OifTvQI_MMAgEvPSo8uaQIo9SGtbH2GyHQlJp8J8VKYs77Cym3B6__bvlS7ehqOGP_fk3uHtN6H6_3BMmcsLssrkyT3qhVDyMSmq7xJruul3HbJ.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/efoQHcM27OvNX0NQWPWGq2i3BxVpoE2hn47eD6JHXi9Ag0PywSTPtvzrDbSOlgbqhhB6d9UdJNbdnaqzeBFIWi964bkUoEa3XeW_H3CCxI6hY12cei_Ur6YYPkmEK1uF3fsePWl-zc5w-1pzP983dQdaHq8XcDMgGTgEUwuU7MPwXer9V2wVoXwDf_sytvEL.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/jRLvWS4tJUcC2Q3Y3MAU3si0qBXIxFUbUInQD71rB9tXujY8BCET4ZCQNoZnqTUPbAFtnBsrm6yDnZpqJzDlVFYHfJSx8HuqSlqfedtkC0_dtJNGXukRcDYNTW6gWYWDtq7X01ShJzVAvsH8XP8M0mACGPmskg-X0gohnwdb8uZdNi6xd33rGoOl3ZC5kL6z.jpg"
                            alt=""
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

                    <motion.h1>{t("property.featuresTitle")}</motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property.bedroom3")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property.bathrooms2")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property.modernResidence")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property.bedrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property.bathrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property.squareFeet")}</h4>
                                <h3>2,350</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property.yearBuilt")}</h4>
                                <h3>2021</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property.parking")}</h4>
                                <h3>{t("property.privateGarage")}</h3>
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
                <h1>{t("property.aboutTitle")}</h1>
                <p>{t("property.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;