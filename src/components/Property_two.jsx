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
                                src="/8ff38ba4-f71b-4819-a503-216b299b7029.png"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/BjJyBSXCBnwbX8DQCU1TiiAfzUmF4fNnB-ggERyGIQS2FAOitSATRT5e-0eVZkIj7bIAwjdIdewx-kygINXpGHJ8OpJYA42iA2p_TnVGUEIr2LfS73HFmfmNQ37-ulZYjGsHM2fnNIZwORlr4_7-he2Rbfzq_ioP9_6GF29jTio.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/lhPSNhTm_Gpbn8lMDbuoYGEpx4qJG-L7c7-q9UGVEQeGg11RZUTvBUN2bHzmhn99QtPukVLLZCMGqFUgmOb_FPL_9B64E9jPpXEg43MM19ZH9JWAIKSHWvpvdYSdynxbiyfYBqFFD0jC3GeT16qTYVAn-H8jtV3NUshVh0IpAOUeVowyAbkjhxReG7hPDbDu.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/P_tNDyWx0Oa3FWOprJzFj2AqfLW5TUPeU4Nr4UlJtXr3eAbDy_BlDzZy7wv6tQ-2ChAKyI23SPlZlhlsNbzmbiro2C8bE8oeww3nsazo5WrO4wqLVT8lxWwV-H7OpVpFiNB3yLAwGmm7gxscjGd247VtoS4WyMVdN6Pdg-d7zGE.jpg"
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className={s.slide}>
                            <img
                                src="/hwgzmMxsSWmlr9rHRh4RD-o8H4_IHYrlvCU8FY9CQ4mydmgMewmal8kZBXUaCOP_pxHceWkz_-veFzpJ1jA4II9VSJoNHpXBopwPa9vo0PLV6ZUPc8Qah-MWSRB1uu-KSVR1en2NzHlZ6Pdd88g7lxSw8I_-_lma4I45G_iI0Io.jpg"
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

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.2 }}
                    >
                        {t("property7.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property7.bedroom3")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property7.bathrooms2")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property7.cottage")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property7.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.bedrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.bathrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.squareFeet")}</h4>
                                <h3>2,150</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.yearBuilt")}</h4>
                                <h3>2016</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property7.parking")}</h4>
                                <h3>{t("property7.privateDriveway")}</h3>
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

                <h1>{t("property7.aboutTitle")}</h1>

                <p>{t("property7.aboutText")}</p>

            </motion.div>

        </section>
    )
}

export default Property;