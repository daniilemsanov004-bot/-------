import { Link } from 'react-router-dom'
import s from './Featured.module.css'
import { motion } from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { useTranslation } from "react-i18next"
import { useContext, useEffect } from 'react'
import { MyContext } from '../Context'

const Feautured = () => {

    const {
        properties,
        getCards,
        isAdmin,
        deleteCard
    } = useContext(MyContext);

    useEffect(() => {
        getCards();
    }, []);

    const { t, i18n } = useTranslation()

    return (
        <section
            className={s.feautured}
            id='feautured'
        >

            <div className={s.text}>

                <img
                    src="/Abstract Design.svg"
                    alt=""
                    className={s.logo}
                />

                <h1>
                    {t("featuredTitle")}
                </h1>

                <div className={s.titles}>

                    <p>
                        {t("featuredText")}
                    </p>

                    <Link
                        className={s.link}
                        to={"/Properties"}
                    >
                        {t("viewAll")}
                    </Link>

                </div>

            </div>

            <Swiper
                modules={[Navigation, Autoplay, Mousewheel]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                navigation={true}

                mousewheel={{
                    forceToAxis: true,
                }}

                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1200: {
                        slidesPerView: 3,
                    }
                }}

                className={s.cards}
            >

                {properties.map((item) => (

                    <SwiperSlide key={item.id}>

                        <motion.div
                            className={s.card}

                            initial={{
                                opacity: 0,
                                y: 80
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                duration: 0.8
                            }}

                            viewport={{
                                amount: 0.2
                            }}

                            whileHover={{
                                y: -10
                            }}
                        >

                            <img
                                src={item.image}
                                alt={item.title?.[i18n.language]}
                                className={s.image}
                            />

                            <h2>
                                {item.title?.[i18n.language]}
                            </h2>

                            <p>
                                {item.description?.[i18n.language]}
                            </p>

                            <div className={s.info}>

                                <span>

                                    <img
                                        src={item.bedroomIcon}
                                        alt=""
                                    />

                                    {item.bedrooms?.[i18n.language]}

                                </span>

                                <span>

                                    <img
                                        src={item.bathroomIcon}
                                        alt=""
                                    />

                                    {item.bathrooms?.[i18n.language]}

                                </span>

                                <span>

                                    <img
                                        src={item.typeIcon}
                                        alt=""
                                    />

                                    {item.type?.[i18n.language]}

                                </span>

                            </div>

                            <div className={s.bottom}>

                                <div className={s.prc}>

                                    <p>
                                        {t("price")}
                                    </p>

                                    <h3>
                                        {item.price}
                                    </h3>

                                </div>

                                <Link
                                    to={item.link}
                                    className={s.linkk}
                                >
                                    {t("viewDetails")}
                                </Link>

                            </div>

                            {isAdmin && (

                                <button
                                    className={s.btn}
                                    onClick={() => deleteCard(item.id)}
                                >
                                    Delete
                                </button>

                            )}

                        </motion.div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    )
}

export default Feautured