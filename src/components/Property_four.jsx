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
        "/65a9302e-2c8c-4753-89e8-0f6749819023.png",
        "/KcJU5CPfMh1X_HXpG5AX-5g0mjtHi_hbiG6_QOhVhz7gx22U_Xsr31m5oB_j66gK4I2OIaQY-HeP0dANo3R_RIH8pNmgllGBh3YKvitxOfyXEufpik_CdNHkTUNtQJhNLwlh5wmJCuMKWzWGNGsmT8gMhsygv7nlr1ded1RnM8fKqxXC8kjgoOSVjIYZRy09.jpg",
        "/9PMqLYWP1LzmORu0wejB-YJFqtj_B5_rlFpgRHj66zh3_wwZfgf2eE-ub_gXBZmeGv37VxDCXx-Nb8XUT_UKXzebYCRbgEnNJIReY0sz-EGNOKvyInG7__Ip9dwCZ5r_qEDNHUNxccjUFzYCy7vtl97D41Cflsgd7sluCdweLwk77oFbr0HlOTZW-PxZLvtU.jpg",
        "/CAqDYsuGHpgRag81fNW_ZrxPnEn_Q3QVjq6sDi30GlEbp5uYf0nFPdm1jKpecJphmK6xgl5njTWaitmprrgIo-7I5mmn_fsi0VVAs9RMM_NWKg3r5VVtkSvD4GXkLKC-iuq2BnMiaXumlvMBKOTr-d1MrUp9YSZuXUXDrBq0fXZbwTx9njSZXHj4lPiqykmc.jpg",
        "/6OQH832YefaRA0o-tOBFaDFADzyyG_H1RAGZW-wsWMG917AARPs3TK82QjjhiH1Klzs_9hNkSLeLhhA40rlNWohlCLL30xKcXb_wz9e-xvUltT2wWVYF2hcc0L6OwM3rpS-gGTwY5RMknL2sfAX72RroVn4TlamRlJFrnbGfBGblzRa9NA8mPiEkD_UuA5IA.jpg",
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
                        {t("property2.featuresTitle")}
                    </motion.h1>

                    <div className={s.rooms}>

                        <motion.h2 {...cardAnim(0.2)}>
                            {t("property2.bedroom5")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.4)}>
                            {t("property2.bathrooms4")}
                        </motion.h2>

                        <motion.h2 {...cardAnim(0.6)}>
                            {t("property2.luxuryVilla")}
                        </motion.h2>

                    </div>

                    <div className={s.specifi}>

                        <motion.h1>
                            {t("property2.specificationsTitle")}
                        </motion.h1>

                        <div className={s.cards}>

                            <motion.div className={s.card} {...cardAnim(0.1)}>
                                <h4>{t("property2.bedrooms")}</h4>
                                <h3>5</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.2)}>
                                <h4>{t("property2.bathrooms")}</h4>
                                <h3>4</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.3)}>
                                <h4>{t("property2.squareFeet")}</h4>
                                <h3>4,500</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.4)}>
                                <h4>{t("property2.yearBuilt")}</h4>
                                <h3>2022</h3>
                            </motion.div>

                            <motion.div className={s.card} {...cardAnim(0.5)}>
                                <h4>{t("property2.parking")}</h4>
                                <h3>{t("property2.threeCarGarage")}</h3>
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