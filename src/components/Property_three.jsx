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
                            src="/1f373383-03f8-4cdc-a40b-6b1d74266e1d.png"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/FGx36uT1H7tIp4JSXq8bBWbiUef0M6blD6phnSC9LkYmJEMmXH0ZctKd2lN_-1vbCS4n9U45bam-EOfTwHnqk-h6KRt7LAhAb4EAj03fHuPDS24OQ68vLHuZuQo4YbY3UfOGqKPFIM8itCswHlDc9CnnBPc8rFsj7aO4C5xpb4W7l__oSPOF2IXn65fe3voa.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/aQi4kZ7VeWsLZITkpt2jffPyUaPxdbFbN5xTzesd0PF7EO8qe2BNxgH82jAC0C0s_OO065_1MNusC4Fv3jnd7ZDJ6hpy_F9DLvR58c-P71FgM4e8lYhoTz3CSs9_KSR5PPTv2G4LL46_n2jvOsIsj28TH58EeXnSe_SME_ex4lNE0MTeLMkCyimHbOXbRPum.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/5F49a4UT9tZs34X088DV908xvotkCnzAFQRfmxdz9wjl_2yffY-2DJK6jIo5cJrNUSF_qPIkRxej-goWpjlX7SHLH-UYTy2TjX9ZBybvj72Po1nqyLMaMZKL033Fscg8tif9JOtZKtfDuWEVsnTSx-qzS0xl-ybUuPlPm4IAMkxncpQVgLvASC0L6TqSwbmh.jpg"
                            alt=""
                        />
                    </SwiperSlide>

                    <SwiperSlide className={s.slide}>
                        <img
                            src="/AVdtbOrhAYo5Lg2g8lVs3DGBBvtdv4F22a-mpaH7QrTolqg2Y1AAvNuU9wMhjp70sKJmYxLhxiGv4ut1ssTMvsFcd-Q0BdwWDYoCSnrV38oYO--bDhNC08X27UgXsbkTRreO-vKLOtJCCwCbEzQqvZqY4u7EZxydSixPPJWlRmTZIfxTqTrTJt-RXOMtgVOk.jpg"
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

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.2 }}
                    >
                        {t("property6.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property6.bedroom4")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property6.bathrooms3")}
                        </motion.h2>

                        <motion.h2 whileHover={{ y: -5 }}>
                            {t("property6.residence")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property6.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.bedrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.bathrooms")}</h4>
                                <h3>3</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.squareFeet")}</h4>
                                <h3>2,450</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.yearBuilt")}</h4>
                                <h3>2022</h3>
                            </motion.div>

                            <motion.div className={s.card} whileHover={{ y: -10 }}>
                                <h4>{t("property6.parking")}</h4>
                                <h3>{t("property6.undergroundParking")}</h3>
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
                <h1>{t("property6.aboutTitle")}</h1>
                <p>{t("property6.aboutText")}</p>
            </motion.div>

        </section>
    )
}

export default Property;