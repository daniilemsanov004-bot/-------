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
                            src="/a967f2df-cd9c-4a38-963e-89d5591c1ead.png"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/kC3udGx9s-co0xO7d-bwra5BNy1wjgJ6M6tWcjhzrGw5HgQHGqeUKd8RNFVmeONHZbTCjpnOrwx882aFStiXb7sQ8BPElpsKaoB9SDY2lqUn7wu-IOKypyxQn9Ii6qFGO_GqoX6PGBPhr-lbTImcZFXZCsFfm3SJ3nLhFDWnNNa4W67dpEtAHyliqXF2u_vH.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/MHfg8fN8oFZ_tWOPtd8tF3itXxMT-u3D7jDk10nNsEaBP4wJ65A4GmTdC1iO40v1n3QbfRlFRhHvNjir1jNMBu-wTrw8DmtV503vopMiI6GRE4kyadkrlQ_DkOjx11Li2s33lJOGEmWPc-v4meKchsEpdcgvftN_CV3Zu8UKoabiKacTx32xOqZM56hI63qe.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/WmtqK9sUBGXv__4G_NPL6CvZjyTjBijEavWzusUDD8B8utlaxCXqIHpIno_-GL5oDj2bVuheX7PCS8gdx1sa2H_1NzHYX3bX_LV6cQ-7IRaCfpPzPCTUuLQdzlJ9pyucgVJYj0X6Pd2z9FCua_6c85w4VDpWdnCL2KE57WTEgoC1L2qDrqAn6jKJB8hkLKmS.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/TO4o75b8rbKuHrTPGQi-iBN7z8qZBuadC5efPytmnH3P4BVxCwT74hNb9JMshemIDjF1nI69aP7nWimKRIGFA4fTR9TUeowGWMpO2c0MZuZ1vCiH2RRaWUC8XI71M7w8Fdf_qs69DnZEi9F7urXUEEJX__oR5BVjXcYQCi87poiYvH_bIuK-WnI2qm1Nrb04.jpg"
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

                    <motion.h1>
                        {t("property5.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property5.bedroom4")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property5.bathrooms3")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property5.luxuryPenthouse")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property5.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property5.bedrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property5.bathrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property5.squareFeet")}</h4>
                                <h3>3,900</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property5.yearBuilt")}</h4>
                                <h3>2023</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property5.parking")}</h4>
                                <h3>{t("property5.undergroundParking")}</h3>
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
                <h1>{t("property5.aboutTitle")}</h1>
                <p>{t("property5.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;