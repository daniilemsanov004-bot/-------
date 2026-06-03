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
        "/5e41a132-7ab1-49f0-b3fe-103cfa32cf24.png",
        "/3O_vUUGJH42817u8GavOTE5WdqZBQdfxhUkj80Aa9elluTnMjVDMmXlTWV58yjIHWNV0KfbKWgkYghhZQnOg4E2hpzr8NuoslIUPIpBOzxWdEDIef3n65R9kRyv3kvjqO-Z4IZzjX01cHlF3SURuoQJGW3ipxC25iYxGF0SgSXqVwDh8EYr3Nmd3FuqKr5Aq.jpg",
        "/u_3u7HNrxQ23MkKVlGHKi6gWf4Gq9F8TiUvDikYZurbi5nceh_ihFDyyxtK6C5YhYE5spBPkIBTSBxzlRQXNziucXQ-2PkHtxI-bNKmLMj0E24y8ynslDQtQWBofTd4xN_IOom6iUdRbsgy-z4zQd0iYfbQH63T2uYphBFfIwg5M6rpmSJ0e3-fU1fIF37aF.jpg",
        "/GQn-npml8F3Q6GSUVulKCnn1lLDw12bsL5o2T752tR23CqSVcx37FBgGaRsTB-Vs_4Yr-1a_sbGF5tGbXz57ogBk6JDWisiiiEdLnMPIzI1Kmb8ESUK0OEAcjo-2PU8_3ciI8DMGbDcKYDUwaauoE96a-n2SExcR8844YJiv3sNkFOfvHu6HUb-m9ifwA6Mu.jpg",
        "/3LgyuxN1iwbYzBlWVNuWfEJjCx6Kif6jApLH-EXth623SfUtNZPTjZrVpd3Met4N2bmdWtV2M4QirBQFkYyohteMOyaJdl2ekKCDG8OTXBYP42OjWuAd5BLfr9-cwHe6FSQcWcYCbApUFbs8uqClSwP5MnxCOMPSMHZG4bvbej0FCcHPHAXwaJWisYU66A2a.jpg",
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
                        {t("property3.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property3.bedroom2")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property3.bathrooms2")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property3.penthouse")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property3.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property3.bedrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property3.bathrooms")}</h4>
                                <h3>2</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property3.squareFeet")}</h4>
                                <h3>1,800</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property3.yearBuilt")}</h4>
                                <h3>2021</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property3.parking")}</h4>
                                <h3>{t("property3.assignedParking")}</h3>
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
                <h1>{t("property3.aboutTitle")}</h1>
                <p>{t("property3.aboutText")}</p>
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